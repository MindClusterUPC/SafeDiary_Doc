import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require(process.env.SAFEDIARY_SHARP_PATH);
const outputDir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(?=[A-Za-z]:)/, ''));
const name = 'flow-4-directory-scheduling-payments';
const W = 2520;
const H = 1380;
const cropTop = 125;
const cropBottom = 1280;

const c = {
  ink: '#303035',
  grid: '#e9e9e9',
  actor: '#606573',
  command: '#89b6f5',
  commandStroke: '#6c9fe9',
  event: '#ffb578',
  eventStroke: '#efa066',
  context: '#d8d1fa',
  contextStroke: '#6631b7',
  external: '#e8e9ed',
  externalStroke: '#90949c',
  policy: '#eee8fa',
  policyStroke: '#a385d8',
};

function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[ch]));
}

function text(x, y, label, size=24, weight=400, anchor='middle', color=c.ink) {
  return `<text x="${x}" y="${y}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" fill="${color}">${escapeXml(label)}</text>`;
}

function wrapped(label, maxChars) {
  const lines=[];
  let line='';
  for(const word of label.split(/\s+/)) {
    if(line && `${line} ${word}`.length > maxChars) { lines.push(line); line=word; }
    else line=`${line} ${word}`.trim();
  }
  if(line) lines.push(line);
  return lines;
}

function box(x,y,w,h,label,kind,size=23) {
  const fill=c[kind], stroke=c[`${kind}Stroke`];
  const lines=wrapped(label, Math.floor((w-30)/(size*0.53)));
  const start=y+h/2-(lines.length-1)*31/2+8;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="2" filter="url(#shadow)"/>`+
    lines.map((line,i)=>text(x+w/2,start+i*31,line,size,500)).join('');
}

function cloud(x,y,w,h,label) {
  const d=`M ${x+w*.13} ${y+h*.77}
    C ${x-w*.05} ${y+h*.76}, ${x-w*.02} ${y+h*.44}, ${x+w*.13} ${y+h*.39}
    C ${x+w*.12} ${y+h*.20}, ${x+w*.31} ${y+h*.12}, ${x+w*.40} ${y+h*.22}
    C ${x+w*.49} ${y-h*.02}, ${x+w*.67} ${y+h*.04}, ${x+w*.72} ${y+h*.22}
    C ${x+w*.91} ${y+h*.16}, ${x+w*1.02} ${y+h*.38}, ${x+w*.91} ${y+h*.53}
    C ${x+w*1.07} ${y+h*.68}, ${x+w*.92} ${y+h*.91}, ${x+w*.77} ${y+h*.84}
    C ${x+w*.66} ${y+h*1.04}, ${x+w*.49} ${y+h*.94}, ${x+w*.43} ${y+h*.85}
    C ${x+w*.29} ${y+h*1.01}, ${x+w*.17} ${y+h*.92}, ${x+w*.13} ${y+h*.77} Z`;
  const lines=label.split('\n');
  const baseline=y+h/2-(lines.length-1)*17+12;
  return `<path d="${d}" fill="${c.context}" stroke="${c.contextStroke}" stroke-width="6"/>`+
    lines.map((line,i)=>text(x+w/2,baseline+i*34,line,29,400)).join('');
}

function actor(x,y,label) {
  return `<circle cx="${x}" cy="${y}" r="23" fill="${c.actor}"/><path d="M${x-40} ${y+44} Q${x-40} ${y+24} ${x-23} ${y+24} H${x+23} Q${x+40} ${y+24} ${x+40} ${y+44} Q${x+36} ${y+72} ${x} ${y+72} Q${x-36} ${y+72} ${x-40} ${y+44}Z" fill="${c.actor}"/>`+
    text(x,y+106,label,20,500);
}

function arrow(pathData, dashed=false) {
  return `<path d="${pathData}" fill="none" stroke="${c.ink}" stroke-width="3"${dashed?' stroke-dasharray="10 7"':''} marker-end="url(#arrow)"/>`;
}

const svg=[];
svg.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${cropBottom-cropTop}" viewBox="0 ${cropTop} ${W} ${cropBottom-cropTop}">`);
svg.push(`<defs>
  <pattern id="grid" width="39" height="39" patternUnits="userSpaceOnUse"><path d="M39 0H0V39" fill="none" stroke="${c.grid}" stroke-width="1"/></pattern>
  <filter id="shadow" x="-15%" y="-15%" width="140%" height="150%"><feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#000" flood-opacity=".12"/></filter>
  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="${c.ink}"/></marker>
</defs>`);
svg.push(`<rect width="${W}" height="${H}" fill="#f8f8f8"/><rect width="${W}" height="${H}" fill="url(#grid)"/>`);
svg.push(text(65,175,'1 · Descubrimiento y acuerdo',27,700,'start'));

svg.push(actor(105,245,'Paciente'));
svg.push(box(205,205,210,110,'Buscar y filtrar psicólogo','command'));
svg.push(cloud(460,185,240,150,'Clinician\nDirectory'));
svg.push(box(745,205,220,110,'Ficha verificada y tarifa','event'));
svg.push(box(1010,205,220,110,'Enviar solicitud de contacto','command'));
svg.push(cloud(1275,185,240,150,'Care\nScheduling'));
svg.push(box(1560,205,230,110,'Proponer y aceptar horario','command'));
svg.push(box(1840,205,230,110,'Reserva temporal creada · 1 h','event'));
svg.push(cloud(2120,185,260,150,'Payments &\nPayouts'));
svg.push(text(1675,377,'Psicólogo propone · paciente acepta',19,500));
svg.push(text(2250,382,'Cobro solicitado con reservaId',19,500));
for(const [a,b] of [[145,205],[415,460],[700,745],[965,1010],[1230,1275],[1515,1560],[1790,1840],[2070,2120]]) svg.push(arrow(`M${a} 260H${b-10}`));

svg.push(text(65,540,'2 · Cobro confirmado y cita',27,700,'start'));
svg.push(box(1890,590,220,110,'Crear intento idempotente','command'));
svg.push(text(2000,565,'Paciente paga la reserva',20,600));
svg.push(box(1560,590,230,110,'Pasarela de pago · webhook firmado','external'));
svg.push(box(1240,590,240,110,'PaymentApproved Integration','event'));
svg.push(cloud(950,570,240,150,'Care\nScheduling'));
svg.push(box(650,590,240,110,'AppointmentConfirmed Integration','event'));
svg.push(box(360,590,240,110,'Habilitar acceso en fecha de cita','command'));
svg.push(box(70,590,240,110,'API de videollamada privada','external'));
svg.push(arrow('M2250 335V645H2120'));
for(const [a,b] of [[1890,1790],[1560,1480],[1240,1190],[950,890],[650,600],[360,310]]) svg.push(arrow(`M${a} 645H${b+10}`));
svg.push(text(1540,555,'Pago aprobado por la pasarela',20,600,'start',c.eventStroke));

svg.push(text(65,875,'3 · Excepciones y límites',27,700,'start'));
svg.push(box(1550,925,290,110,'PaymentFailed / HoldExpired','event'));
svg.push(box(1120,925,290,110,'Horario liberado; cita no confirmada','event'));
svg.push(arrow('M1675 700V900'));
svg.push(arrow('M1550 980H1420'));
svg.push(text(1880,916,'Si el pago llega después del vencimiento:',20,600,'start'));
svg.push(box(1880,940,490,95,'Conciliar o devolver; nunca crear cita sobre horario libre','policy',21));

svg.push(box(70,1130,550,122,'La reunión solo admite participantes autorizados en la ventana programada.','policy',20));
svg.push(box(670,1130,800,122,'Resumen emocional: IAM valida consentimiento vigente; Diary / AssistantAI entregan solo datos autorizados.','policy',20));
svg.push(box(1520,1130,850,122,'La suscripción Premium es un cobro separado y no confirma citas ni suma al saldo retirable del psicólogo.','policy',20));
svg.push('</svg>');

const svgData=svg.join('');
const svgPath=path.join(outputDir,`${name}.svg`);
const pngPath=path.join(outputDir,`${name}.png`);
await fs.writeFile(svgPath,svgData,'utf8');
await sharp(Buffer.from(svgData)).png().toFile(pngPath);
console.log(pngPath);

import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require(process.env.SAFEDIARY_SHARP_PATH);
const outDir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(?=[A-Za-z]:)/, ''));

const specs = [
  {
    slug: 'cliniciandirectory-bcc',
    name: 'Clinician Directory',
    description: 'Verifica las credenciales de los psicólogos y publica fichas profesionales confiables. Permite buscar especialistas y publicar reseñas de sesiones completadas. No agenda citas ni procesa pagos.',
    strategic: ['Core', 'Engagement / revenue', 'Custom built'],
    roles: ['Execution context', 'Analysis context'],
    inbound: [
      ['Frontend · psicólogo', 'Solicitar verificación', 'command'],
      ['Frontend · administración', 'Revisar credenciales', 'command'],
      ['Frontend · psicólogo', 'Publicar ficha, banner y tarifas', 'command'],
      ['Frontend · paciente', 'Buscar, filtrar y consultar ficha', 'query'],
      ['IAM', 'Cuenta y rol de psicólogo', 'event'],
      ['Care Scheduling', 'Sesión completada para reseña', 'event'],
    ],
    outbound: [
      ['Verificación aprobada o rechazada', 'Frontend · psicólogo', 'event'],
      ['Ficha publicada y valoración vigente', 'Frontend · paciente', 'query'],
      ['Psicólogo verificado y tarifa vigente', 'Care Scheduling', 'event'],
      ['Reseña publicada', 'Frontend · paciente', 'event'],
      ['Valoración agregada actualizada', 'Frontend · paciente', 'event'],
    ],
    terms: [
      ['Psicólogo verificado', 'Profesional con credenciales revisadas y aprobadas.'],
      ['Ficha profesional', 'Perfil público con especialidad, bio, banner y tarifa.'],
      ['Reseña', 'Valoración asociada a una única cita completada.'],
      ['Valoración agregada', 'Resultado calculado con reseñas elegibles.'],
    ],
    decisions: [
      'Solo una ficha verificada puede publicarse.',
      'Una cita completada admite una reseña por paciente.',
      'Las tarifas nuevas no alteran reservas ya aceptadas.',
      'Las credenciales y datos clínicos nunca son públicos.',
    ],
  },
  {
    slug: 'carescheduling-bcc',
    name: 'Care Scheduling',
    description: 'Coordina el contacto, chat, propuesta y aceptación de horario, reserva temporal, cita y videollamada. Es dueño de la agenda reservable; no cobra ni otorga acceso automático al diario.',
    strategic: ['Core', 'Revenue / engagement', 'Custom built'],
    roles: ['Execution context', 'Coordination context'],
    inbound: [
      ['Frontend · paciente', 'Solicitar contacto y aceptar horario', 'command'],
      ['Frontend · psicólogo', 'Proponer horario y cerrar atención', 'command'],
      ['Clinician Directory', 'Ficha verificada y tarifa vigente', 'event'],
      ['Payments & Payouts', 'Pago aprobado o fallido', 'event'],
      ['IAM', 'Identidad y consentimiento vigente', 'query'],
      ['API de videollamada', 'Estado de sesión', 'event'],
    ],
    outbound: [
      ['Solicitud y propuesta de horario', 'Frontend · paciente / psicólogo', 'event'],
      ['Reserva temporal e importe acordado', 'Payments & Payouts', 'event'],
      ['Cita confirmada o cancelada', 'Frontend / notificaciones', 'event'],
      ['Crear acceso de reunión privada', 'API de videollamada', 'command'],
      ['Sesión completada', 'Clinician Directory', 'event'],
    ],
    terms: [
      ['Solicitud de contacto', 'Inicio de coordinación sin crear una cita.'],
      ['Propuesta de horario', 'Fecha, hora y zona horaria ofrecidas.'],
      ['Reserva temporal', 'Retención exclusiva del horario durante una hora.'],
      ['Cita confirmada', 'Reserva con pago aprobado y participantes definidos.'],
    ],
    decisions: [
      'Un horario no se retiene para dos solicitudes.',
      'La retención expira después de una hora sin pago.',
      'Solo el pago aprobado confirma la cita.',
      'La reunión admite participantes autorizados y fecha válida.',
      'El diario exige consentimiento explícito y vigente.',
    ],
  },
  {
    slug: 'paymentspayouts-bcc',
    name: 'Payments & Payouts',
    description: 'Gestiona por separado los cobros de sesiones y del plan Premium, emite comprobantes, registra ingresos y comisiones de sesiones y procesa retiros del psicólogo. No almacena contenido clínico.',
    strategic: ['Supporting', 'Revenue / compliance', 'Custom + gateway'],
    roles: ['Execution context', 'Gateway context'],
    inbound: [
      ['Care Scheduling', 'Reserva temporal e importe', 'event'],
      ['Frontend · paciente', 'Pagar cita o elegir Premium', 'command'],
      ['Pasarela de pago', 'Resultado firmado del cobro', 'event'],
      ['Frontend · psicólogo', 'Registrar método y solicitar retiro', 'command'],
      ['Pasarela de retiro', 'Resultado firmado del retiro', 'event'],
    ],
    outbound: [
      ['Pago de cita aprobado o fallido', 'Care Scheduling', 'event'],
      ['Plan Premium activado o vencido', 'Profiles / AssistantAI', 'event'],
      ['Comprobante y estado de pago', 'Frontend · paciente', 'event'],
      ['Ingreso, comisión, saldo y retiro', 'Frontend · psicólogo', 'query'],
      ['Orden de retiro', 'Pasarela de retiro', 'command'],
    ],
    terms: [
      ['Intento idempotente', 'Un cargo único por reserva o suscripción.'],
      ['Pago de cita', 'Cobro vinculado a una reserva vigente.'],
      ['Suscripción Premium', 'Derecho temporal tras pago confirmado.'],
      ['Saldo disponible', 'Ingresos de sesiones menos comisiones y retiros.'],
      ['Retiro', 'Transferencia confirmada por la pasarela.'],
    ],
    decisions: [
      'La pasarela firma y confirma todo resultado de pago.',
      'La misma reserva solo genera un cargo efectivo.',
      'Premium no confirma citas ni aumenta el saldo del psicólogo.',
      'El retiro no excede el saldo disponible.',
      'Pagos tardíos se concilian o devuelven; no crean cita.',
    ],
  },
];

const W = 1600;
const H = 1100;
const colors = {
  ink: '#202020', muted: '#7c7c7c', grid: '#f1f1f1',
  command: '#cae6fb', commandBorder: '#79baf0',
  event: '#ffca9a', eventBorder: '#f3a564',
  query: '#d7f6b7', queryBorder: '#a6d66a',
  policy: '#e3d5f2', policyBorder: '#a887ce',
  context: '#eee6ff', contextBorder: '#7650c8',
  external: '#f0f0f0', externalBorder: '#999999',
  frontend: '#fff4f4', frontendBorder: '#ee5353',
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]));
}

function wrap(value, maxChars) {
  const words = String(value).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    if ((line + ' ' + word).trim().length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function rect(x,y,w,h,fill,stroke='none',sw=1,rx=0,dash='') {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function text(x,y,value,size=22,weight=400,fill=colors.ink,anchor='start') {
  return `<text x="${x}" y="${y}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(value)}</text>`;
}

function multi(x,y,value,maxChars,size=20,lineH=27,weight=400,fill=colors.ink) {
  const lines = Array.isArray(value) ? value : wrap(value,maxChars);
  return lines.map((line,i)=>text(x,y+i*lineH,line,size,weight,fill)).join('');
}

function messageBox(x,y,w,h,label,type) {
  const fill=colors[type], stroke=colors[`${type}Border`];
  const lines=wrap(label, Math.floor((w-22)/9.6));
  const lineH=20, start=y+h/2-(lines.length-1)*lineH/2+6;
  return rect(x,y,w,h,fill,stroke,3,1)+lines.map((line,i)=>text(x+w/2,start+i*lineH,line,17,600,colors.ink,'middle')).join('');
}

function collaborator(x,y,w,h,label) {
  const kind = label.includes('Frontend') ? 'frontend' : label.includes('API') || label.includes('Pasarela') ? 'external' : 'context';
  return rect(x,y,w,h,colors[kind],colors[`${kind}Border`],3,3) +
    multi(x+10,y+27,label,Math.floor((w-20)/10.5),17,20,600);
}

function arrow(x1,y,x2) {
  return `<path d="M${x1} ${y} H${x2-13}" stroke="#d1d1d1" stroke-width="7" fill="none"/><path d="M${x2-13} ${y-11} L${x2} ${y} L${x2-13} ${y+11} Z" fill="#d1d1d1"/>`;
}

function commRows(items,left) {
  const chunks=[];
  const y0=348, dy=87;
  items.forEach(([peer,message,type],i)=>{
    const y=y0+i*dy;
    if(left) {
      chunks.push(collaborator(27,y,210,68,peer),arrow(242,y+34,282),messageBox(286,y,275,68,message,type));
    } else {
      chunks.push(messageBox(1035,y,270,68,peer,type),arrow(1309,y+34,1350),collaborator(1354,y,217,68,message));
    }
  });
  return chunks.join('');
}

function svgFor(spec) {
  const p=[];
  p.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  p.push(`<defs><pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="${colors.grid}" stroke-width="1"/></pattern></defs>`);
  p.push(rect(0,0,W,H,'#fff'),rect(0,0,W,H,'url(#grid)'));
  p.push(rect(6,6,W-12,H-12,'none',colors.ink,7));
  p.push(`<path d="M6 72H1594 M6 260H1594 M700 72V260 M1290 72V260" stroke="${colors.ink}" stroke-width="6"/>`);
  p.push(text(24,52,`Name: ${spec.name}`,35,700));
  p.push(text(1210,43,'V4  ·  github.com/ddd-crew/bounded-context-canvas',13,500,colors.muted));
  p.push(text(24,104,'Description',32,700));
  p.push(multi(28,138,spec.description,57,21,28));
  p.push(text(720,104,'Strategic Classification',31,700));
  [['Domain',spec.strategic[0],730],['Business Model',spec.strategic[1],920],['Evolution',spec.strategic[2],1130]].forEach(([label,value,x])=>{
    p.push(text(x,145,label,18,700,colors.muted),multi(x,177,value,x===1130 ? 13 : 17,19,23,400,colors.muted));
  });
  p.push(text(1310,104,'Domain Roles',31,700),text(1340,145,'Role Types',18,700,colors.muted));
  spec.roles.forEach((role,i)=>p.push(text(1340,177+i*27,`– ${role}`,19,400,colors.muted)));
  p.push(text(25,302,'Inbound Communication',31,700),text(1009,302,'Outbound Communication',31,700));
  p.push(text(45,332,'Collaborator',20,600,colors.muted),text(338,332,'Messages',20,600,colors.muted));
  p.push(text(1075,332,'Messages',20,600,colors.muted),text(1390,332,'Collaborator',20,600,colors.muted));
  p.push(commRows(spec.inbound,true),commRows(spec.outbound,false));
  p.push(rect(585,288,421,H-330,'#fff','#8f8f8f',7));
  p.push(text(606,328,'Ubiquitous Language',31,700),text(615,353,'Context-specific domain terminology',17,600,colors.muted));
  let yy=365;
  for(const [term,def] of spec.terms){
    const defLines=wrap(def,43);
    const height=30+defLines.length*20;
    p.push(rect(612,yy,368,height,'#fff','#969696',2,0,'7 6'));
    p.push(text(624,yy+21,term,17,700));
    p.push(multi(624,yy+42,defLines,0,16,19));
    yy+=height+8;
  }
  const bizY=Math.max(700,yy+50);
  p.push(text(607,bizY,'Business Decisions',31,700),text(615,bizY+24,'Key rules, policies and decisions',17,600,colors.muted));
  const policyY=bizY+39;
  p.push(rect(613,policyY,364,H-65-policyY,colors.policy,colors.policyBorder,5));
  let lineY=policyY+22;
  for(const decision of spec.decisions){
    const lines=wrap(decision,41);
    p.push(text(625,lineY,'• '+lines[0],16,600));
    for(let i=1;i<lines.length;i++) p.push(text(642,lineY+i*19,lines[i],16,400));
    lineY+=(lines.length*19)+6;
  }
  p.push(text(28,H-23,'Azul: command  ·  Naranja: event  ·  Verde: query  ·  Morado: policy',15,400,colors.muted));
  p.push('</svg>');
  return p.join('');
}

for (const spec of specs) {
  const svg = svgFor(spec);
  const svgPath=path.join(outDir,`${spec.slug}.svg`);
  const pngPath=path.join(outDir,`${spec.slug}.png`);
  await fs.writeFile(svgPath,svg,'utf8');
  await sharp(Buffer.from(svg)).png().toFile(pngPath);
  console.log(pngPath);
}

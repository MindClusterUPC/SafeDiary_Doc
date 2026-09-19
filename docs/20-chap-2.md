# Capítulo II: Requirements Development and Software Solution Design



## 2.1. Competidores

BetterHelp, Headspace y terapIA compiten en diferentes aspectos del bienestar emocional: la atención psicológica online, el autocuidado y el acompañamiento con inteligencia artificial. SafeDiary se plantea como un puente entre la expresión privada, el apoyo comunitario y la atención profesional. Su propuesta reúne estos espacios en una experiencia móvil dirigida a **pacientes jóvenes** y **psicólogos profesionales**, donde cada persona decide cómo expresarse, cuándo buscar ayuda y qué información compartir.


### 2.1.1. Análisis competitivo

**Competitive Analysis Landscape**

**¿Por qué llevar a cabo este análisis?**

El análisis permite comprender cómo las soluciones existentes acompañan a las personas antes, durante y entre sus sesiones psicológicas. Su propósito es identificar qué necesidades ya están cubiertas y qué aspectos puede mejorar SafeDiary: registrar experiencias cuando ocurren, organizar emociones y compartir contexto útil con el psicólogo mediante una decisión explícita del paciente.

#### Logos

| SafeDiary | BetterHelp | Headspace | terapIA |
| :---: | :---: | :---: | :---: |
| <img src="../assets/images/chap2/SafeDiary_logo.jpeg" alt="Logo de SafeDiary" width="150"> | <img src="../assets/images/chap2/betterhelp_logo.png" alt="Logo de BetterHelp" width="150"> | <img src="../assets/images/chap2/headspace_logo.svg" alt="Logo de Headspace" width="150"> | <img src="../assets/images/chap2/terapIA_logo.webp" alt="Logo de terapIA" width="150"> |

#### Perfil

| Criterio | SafeDiary | BetterHelp | Headspace | terapIA |
| --- | --- | --- | --- | --- |
| Overview | Aplicación móvil de bienestar emocional que integra un diario inteligente, una comunidad anónima de apoyo y la conexión con psicólogos verificados. Su propuesta permite expresar pensamientos mediante texto o voz, comprender cambios emocionales y conservar un historial privado. El usuario puede avanzar a su propio ritmo desde la reflexión personal hasta una consulta profesional, compartiendo únicamente la información que autorice. | Plataforma de terapia online con sesiones y mensajería con el terapeuta. | Plataforma de bienestar con meditación, recursos para dormir y Ebb, su acompañante de IA; también ofrece terapia sujeta a elegibilidad. | Aplicación de apoyo emocional en español centrada en Pía, una IA con la que se puede conversar por texto o voz. Integra herramientas de autoconocimiento y bienestar personal. |
| Ventaja competitiva ¿Que valor ofrece a los clientes? | Conecta el registro cotidiano con el acompañamiento humano. Para el paciente, ofrece un espacio donde desahogarse, reconocer patrones y encontrar apoyo sin perder el control de su información. Para el psicólogo, propone resúmenes y registros autorizados que aportan contexto entre consultas. La combinación de diario, comunidad y atención profesional busca dar continuidad al cuidado emocional dentro de una misma aplicación. | Combina atención profesional con herramientas de seguimiento, incluido un diario que puede compartirse con el terapeuta. | Facilita prácticas de autocuidado y reflexión con recomendaciones de meditaciones y actividades mediante Ebb. | Acompañamiento automatizado sin cita y continuidad entre conversaciones, junto con herramientas para reflexionar y organizar metas personales. |


#### Perfil de marketing

| Criterio | SafeDiary | BetterHelp | Headspace | terapIA |
| --- | --- | --- | --- | --- |
| Mercado objetivo | Pacientes jóvenes que desean expresar y comprender sus emociones entre consultas, especialmente cuando el estrés académico o laboral dificulta ordenar lo que sienten. También se dirige a psicólogos profesionales que necesitan información contextual clara para preparar y personalizar la atención. El diseño contempla a usuarios preocupados por el juicio social, la privacidad y la dificultad de pedir apoyo. | Personas que buscan terapia online y comunicación con un terapeuta. | Usuarios interesados en bienestar cotidiano; su servicio de terapia está dirigido a adultos residentes en Estados Unidos y se ofrece en inglés. | Personas de habla hispana que buscan expresarse, conocerse mejor y construir hábitos de bienestar, con o sin experiencia previa de atención psicológica. |
| Estrategias y recursos de marketing | Demostraciones del recorrido completo: registrar una emoción, revisar un resumen y decidir si compartirlo. Contenido educativo en español sobre expresión emocional, privacidad y uso responsable de la IA; difusión de la comunidad como espacio de escucha y apoyo. Pilotos y colaboración con psicólogos para acercar la aplicación a pacientes jóvenes y comunicar su valor con experiencias de uso concretas. | Contenido informativo sobre terapia, explicación de costos y acceso al registro desde sus páginas. | Prueba de suscripción, presentación de Ebb y testimonios de usuarios como recursos de captación. | Presentación de Pía, testimonios, blog y contenidos sobre acompañamiento emocional; promoción de la descarga y del acceso al chat. |

#### Perfil de producto

| Criterio | SafeDiary | BetterHelp | Headspace | terapIA |
| --- | --- | --- | --- | --- |
| Productos y servicios | Diario por texto o voz con transcripción, reflexión asistida, etiquetas emocionales y extracción de palabras clave; historial confidencial, gráficos de evolución y resúmenes por período. Salas de audio anónimas para escuchar o participar. Directorio de psicólogos verificados con especialidad, disponibilidad y tarifa; reserva de citas, videollamadas y pago de sesiones. Sistema de confianza con reseñas y criterios transparentes sobre la actividad profesional. | Sesión semanal, mensajería, grupos de apoyo, herramientas de hábitos y diario. | Meditaciones, recursos de sueño, ejercicios y Ebb; sesiones con profesionales mediante su oferta de terapia. | Chat con Pía, diario con texto, imágenes y notas de voz, cuestionarios de autoexploración, objetivos, hábitos, cartas al futuro y logros. |
| Registro y continuidad entre sesiones | Conserva experiencias cuando ocurren, incluyendo detalles que pueden olvidarse al llegar a consulta. Propone organizar entradas por período y mostrar emociones predominantes, posibles detonantes y variaciones a lo largo del tiempo. El paciente revisa el resumen, elige qué compartir y puede revocar el acceso. El psicólogo recibe contexto complementario para la conversación clínica, mientras la identidad de la comunidad permanece separada de la atención profesional. | Permite escribir y compartir entradas del diario con el terapeuta, además de actualizar objetivos y hábitos. | Conversación y reflexión mediante Ebb. Disponibilidad de un diario por voz con resumen compartible: por confirmar. | Historial de conversaciones y diario para revisar experiencias y avances. Integración de resúmenes autorizados con un psicólogo: por confirmar. |
| Precios y costos | Modelo freemium con una versión gratuita y planes de pago que amplían las funcionalidades disponibles. Se cobrará a los psicólogos una pequeña comisión por las citas gestionadas a través de la plataforma. Como vía adicional de comercialización, se contempla ofrecer convenios y planes institucionales a universidades, colegios, clínicas, empresas y otras organizaciones para facilitar el acceso de sus comunidades a SafeDiary. | En Estados Unidos: **US$70–100 por semana** sin seguro, variable según ubicación y condiciones. No constituye una tarifa para Perú. | Suscripción de autocuidado con Ebb: **US$69.99 al año** después de la prueba. La terapia tiene costos separados según cobertura y ubicación. | Compras dentro de la aplicación. Pía Plus ofrece suscripción mensual o anual; importe vigente por confirmar. |
| Canales de distribución | Distribución prevista mediante App Store para iOS, Google Play Store para Android y acceso web desde el navegador. | Servicio online mediante web y aplicación. | Aplicación Headspace y sitio web de suscripción y acceso a terapia. | Aplicaciones para Android e iOS y acceso web al chat con Pía. |



#### Análisis SWOT (FODA)

| Criterio | SafeDiary | BetterHelp | Headspace | terapIA |
| --- | --- | --- | --- | --- |
| Fortalezas | Propuesta integrada que combina expresión privada, apoyo comunitario y atención profesional. Registro flexible por voz o texto, visualización de patrones y resúmenes orientados a la consulta. El consentimiento explícito y revocable, el cifrado de información sensible y la separación de identidades forman parte del diseño. Su enfoque en pacientes jóvenes y psicólogos permite atender necesidades de ambos lados de la relación terapéutica. | Atención profesional y herramientas de diario y seguimiento dentro de un mismo servicio. | Combina recursos de autocuidado, acompañamiento con IA y una oferta de terapia. | Experiencia en español que reúne IA conversacional y herramientas de reflexión personal, con acceso sin citas. |
| Debilidades | Necesita validar la precisión y utilidad de sus resúmenes, la constancia del registro y la adopción por parte de los psicólogos. Integrar audio, IA, comunidad y consultas exige recursos técnicos y operativos, especialmente para moderación y protección de datos. El valor del directorio depende de contar con profesionales verificados y disponibilidad suficiente. | El costo recurrente puede dificultar la adopción por jóvenes con presupuesto limitado; su costo final para usuarios en Perú está por confirmar. | Su oferta de terapia tiene restricciones de país e idioma que limitan su ajuste al público peruano. | El acompañamiento automatizado no brinda evaluación ni tratamiento clínico; su utilidad depende de la adecuación de las respuestas al contexto personal. |
| Oportunidades | Atender la pérdida de contexto entre consultas y la dispersión de notas y audios personales. Facilitar que pacientes jóvenes del entorno peruano encuentren un espacio de escucha y una ruta clara hacia el profesional. Trabajar con psicólogos para ajustar los resúmenes a sus necesidades y fortalecer la continuidad del registro, el apoyo social y la preparación de las sesiones. | Mejorar la organización del diario para facilitar la revisión de experiencias entre sesiones. | Profundizar la conexión entre reflexión cotidiana y atención profesional en más idiomas y mercados. | Desarrollar formas de conectar la reflexión personal con el apoyo profesional y mejorar la continuidad de los hábitos. |
| Amenazas | Competidores que incorporen funciones similares, abandono del hábito de registro y preferencia por herramientas que el usuario ya conoce. Errores de interpretación de la IA, incidentes de privacidad o interacciones dañinas en la comunidad podrían afectar la confianza. La disponibilidad limitada de psicólogos y los costos de operación pueden dificultar el crecimiento del servicio. | Alternativas locales ajustadas al presupuesto y usuarios que prefieran mantener atención presencial con su psicólogo. | Competencia de recursos gratuitos de autocuidado y herramientas especializadas en continuidad terapéutica. | Otras aplicaciones de bienestar e IA conversacional, pérdida de confianza por respuestas inadecuadas y preferencia por acompañamiento humano. |

**Conclusión del análisis**

SafeDiary orienta su diferenciación a la continuidad del cuidado emocional: expresar lo que ocurre, comprenderlo con ayuda del diario, encontrar escucha en una comunidad y acceder a un psicólogo verificado cuando la persona lo decida. BetterHelp combina terapia con herramientas de seguimiento; Headspace reúne autocuidado, IA y atención profesional; terapIA se centra en el acompañamiento automatizado y la reflexión personal. Frente a estas propuestas, SafeDiary busca ofrecer una experiencia adaptada a pacientes jóvenes y psicólogos del contexto peruano, con registro por voz o texto, apoyo anónimo y contexto compartido bajo control del paciente. Su valor deberá reflejarse en registros fáciles de mantener, resúmenes útiles para la consulta y una transición clara hacia el apoyo humano.

### 2.1.2. Estrategias y tácticas frente a competidores

**Continuidad entre consultas como eje de diferenciación**

Priorizar el recorrido de registro, revisión y envío autorizado. Como táctica, permitir seleccionar un período y revisar un resumen de emociones, situaciones relevantes y entradas elegidas antes de compartirlo. Validar con psicólogos si esa información resulta clara y útil para preparar la consulta.

**Registro breve y flexible para pacientes jóvenes**

Ofrecer texto y voz, indicaciones sencillas y recordatorios opcionales. Evaluar en pruebas de uso el esfuerzo necesario para completar una entrada y observar qué dificultades impiden mantener el hábito. Esta estrategia responde a la dispersión de notas y a la pérdida de detalles mencionadas en la entrevista al paciente.

**Confianza mediante decisiones de privacidad comprensibles**

Mostrar qué información se comparte, quién la recibe y cómo revocar su acceso. Incorporar opciones de eliminación y explicar el uso de los datos emocionales con lenguaje claro. En los pilotos, comprobar que el paciente comprende estas decisiones y puede realizarlas sin ayuda.

**Comunidad anónima como espacio de escucha**

Integrar salas de audio donde el usuario pueda comenzar escuchando y participar cuando se sienta preparado. Utilizar alias, separar la identidad comunitaria de la clínica e incorporar moderación, reporte y bloqueo. Este espacio busca ampliar las posibilidades de apoyo entre consultas y ofrecer contacto humano a quienes necesitan compartir experiencias. El diario y las grabaciones personales permanecen privados y no se publican en la comunidad.

**Acceso a profesionales y confianza para elegir**

Presentar perfiles verificados con especialidad, disponibilidad, tarifa y reseñas; facilitar la reserva, la videollamada y el pago de la sesión en la aplicación. Diseñar un sistema de confianza con criterios transparentes que considere la actividad profesional, la continuidad de atención y las opiniones de los usuarios, evitando equiparar el volumen de consultas con la calidad clínica. El objetivo es que el paciente cuente con información comprensible para elegir y pueda aportar su contexto con consentimiento.

**Adaptación al contexto peruano y colaboración con psicólogos**

Proponer pilotos con pacientes jóvenes y psicólogos profesionales, empleando lenguaje cotidiano en español y situaciones académicas o laborales cercanas a los participantes. Recoger su valoración sobre los resúmenes y ajustar el producto antes de ampliar su difusión. Estos pilotos son acciones propuestas, no alianzas ya establecidas.

**Uso responsable de la IA y validación del valor**

Presentar las reflexiones automáticas como apoyo para organizar lo expresado, permitir que el usuario corrija interpretaciones y mantener la evaluación clínica a cargo del psicólogo. Medir recurrencia del registro, comprensión del consentimiento y utilidad percibida de los resúmenes. La definición de precios se realizará después de contrastar ese valor con los costos de operación y la disposición de pago de ambos segmentos.


## 2.2. Entrevistas
### 2.2.1. Diseño de entrevistas

Para el diseño de entrevistas se plantearon preguntas semiestructuradas orientadas a comprender cómo los potenciales usuarios relacionados al proceso de tratamiento psicológico de los usuarios, qué problemas enfrentan a la hora de registrar sus inseguridades y qué expectativas tendrían frente a una solución como SafeDiary.

#### Segmento objetivo 1: Pacientes jóvenes

#####

1. ¿Cuánto tiempo llevas tomando sesiones psicológicas y porque las tomas?
2. ¿De qué manera sueles registrar tus emociones? Tanto refiriéndome a emociones del día a día como aquellas después de terminar tus sesiones psicológicas
3. ¿Qué tan común son las ocasiones en las que has querido recurrir a tu psicólogo, pero, por algún motivo externo, no has podido? Háblanos de estas ocasiones
4. ¿Qué recursos alternativos a la terapia utilizas para calmar y/o lidiar con tus emociones?
5. ¿Cuál es el efecto que tiene en ti no poder desahogar tus emociones con alguien en el momento que las sientes?
6. Para usted ¿Cuál es elemento más importante de las sesiones psicológicas que toma?
7. ¿Qué dificultades cree que hay en la actualidad en la relación entre paciente y psicólogo?
8. ¿Tiene preocupaciones respecto al manejo de datos personales por parte de los sistemas de inteligencia artificial generativa actuales? Si es así, hableme de ellos
9. ¿Qué opina de un asistente de inteligencia artificial como método alternativo para recibir consejos de salud emocional?
10. Si una aplicación con herramientas de este tipo pudiera detectar y/o registrar tus problemas, ¿qué tipo de respuesta o ayuda específica esperarías recibir de ella?

#### Segmento objetivo 2: Psicólogos profesionales

1. Pensando en sus pacientes de entre 14 y 30 años, ¿qué papel juega la escritura expresiva o el registro de emociones en su tratamiento y qué impacto real suele observar cuando lo practican?
2. Cuando usted asigna tareas de auto-observación o les pide llevar un diario emocional entre sesiones, ¿cuáles son los principales obstáculos o motivos por los que los jóvenes no logran mantener este hábito a diario?
3. ¿De qué manera suelen manejar sus pacientes de esta edad los momentos de angustia, ansiedad o crisis cuando están solos en casa y no tienen una sesión programada con usted?
4. Hoy en día, los jóvenes consumen mucha información y buscan orientación sobre salud mental en internet y redes sociales. ¿Cómo afecta a su proceso terapéutico el que reciban consejos emocionales de fuentes digitales o automatizadas?
5. Cuando un adolescente o adulto joven necesita contención emocional, ¿qué tipo de lenguaje, tono o acercamiento (por ejemplo: directivo, empático, clínico) considera que es el más efectivo para que se abra y no se sienta juzgado?
6. Desde su experiencia clínica, ¿dónde está la línea divisoria entre una herramienta o recurso de autoayuda que es beneficioso para el paciente, y uno que podría interferir negativamente con su terapia formal?
7. Si usted tuviera acceso a los escritos personales de un paciente, ¿cuáles serían las palabras, patrones o señales de alerta específicas que le indicarían que esa persona requiere intervención clínica de emergencia?
8. Si un paciente lograra registrar perfectamente sus cambios de humor y pensamientos todos los días, ¿de qué manera le resultaría a usted más útil revisar esa información en consulta sin que le consuma demasiado tiempo de la sesión?
9. ¿Qué características o garantías debe tener un entorno (ya sea físico o digital) para que un paciente joven se sienta lo suficientemente seguro para ser 100% vulnerable y honesto sobre sus problemas emocionales?
10. Observando cómo interactúan las nuevas generaciones con la tecnología, ¿qué tipo de recurso de apoyo o herramienta complementaria siente usted que hace mucha falta hoy en día para ayudar a los jóvenes a regular sus emociones en su vida diaria?

### 2.2.2. Registro de entrevistas

#### Segmento objetivo 1: Pacientes jóvenes

##### Entrevista 1

**Enlace de la entrevista:** [Ver entrevista al paciente](https://youtu.be/9WebzTJ97Tg)

[![Miniatura del video de la entrevista al paciente](https://i.ytimg.com/vi/9WebzTJ97Tg/hqdefault.jpg)](https://youtu.be/9WebzTJ97Tg)

| Campo | Registro |
| --- | --- |
| Entrevistado | Mauricio Pajés, paciente de atención psicológica. |
| Entrevistador | Alexther Kamil Diaz Martinez. |
| Inicia | [0:00](https://www.youtube.com/watch?v=9WebzTJ97Tg&t=0s), inicio de la grabación. |
| Duración del video | 6:06 |
| Nombre completo | Mauricio Pajés Léon |
| Edad | 20 |
| Distrito | La molina |
| Resumen | Mauricio refiere llevar aproximadamente seis meses en terapia por la ansiedad asociada a sus estudios y trabajo. Registra lo que siente en notas del celular o mediante audios a un amigo y utiliza música para desconectarse. Señala que su terapeuta no está disponible cuando necesita apoyo de madrugada y que la frustración afecta su concentración. Valora sentirse escuchado sin juicios y recibir herramientas prácticas. Identifica una pérdida de contexto entre sesiones, pues el relato posterior no conserva todos los detalles ni el tono de voz del momento. Le preocupa que sus audios se filtren o se utilicen para entrenar modelos públicos. Considera útil la IA como complemento del acompañamiento profesional. Esperaría un espacio de audio anónimo y un reporte cifrado que pudiera compartir con su psicólogo únicamente por decisión propia. |

##### Entrevista 2

**Enlace de la entrevista:** [Ver entrevista del paciente](https://youtu.be/cNd4CfIMUJM)

[![Miniatura del video de la entrevista al paciente](https://i.ytimg.com/vi/cNd4CfIMUJM/hqdefault.jpg)](https://youtu.be/cNd4CfIMUJM)

| Campo | Registro |
| --- | --- |
| Entrevistado | Piero Taype, paciente de atención psicológica |
| Entrevistador | Marcelo Fabio Cuadros Villanueva |
| Inicia | [0:00](https://www.youtube.com/watch?v=cNd4CfIMUJM&t=0s), inicio de la grabación. |
| Duración del video | 9:42 |
| Nombre completo | Piero Mario Taype Orihuela |
| Edad | 21 |
| Distrito | San Miguel |
| Resumen | Piero refiere llevar entre un año y año y medio en terapia psicológica debido al estrés y al cambio abrupto de ritmo tras mudarse de Ayacucho a Lima para iniciar la universidad. Registra sus emociones mediante notas en el celular, audios de WhatsApp o notas adhesivas, y recurre a la música, los videojuegos y el modelado 3D cuando la carga de exámenes le impide asistir a consulta. Señala que reprimir lo que siente le genera irritabilidad, problemas de concentración y dolor físico por tensión en hombros y cuello. Valora el desahogo guiado con un profesional para gestionar sus miedos y pensamientos negativos, aunque percibe que las sesiones resultan cortas y apresuradas. Asimismo, le preocupa la vulnerabilidad y filtración de sus datos personales y de salud en plataformas tecnológicas. Considera que la inteligencia artificial puede ser un complemento útil y disponible a toda hora sin llegar a sustituir la atención humana, esperando de esta herramientas prácticas que ayuden a identificar problemas concretos para agilizar la labor de su terapeuta. |

#### Segmento objetivo 2: Psicólogos profesionales

##### Entrevista 1

**Enlace de la entrevista:** [Ver entrevista al psicólogo](https://youtu.be/dEfn2xG_mbk)

[![Miniatura del video de la entrevista al psicólogo](https://i.ytimg.com/vi/dEfn2xG_mbk/hqdefault.jpg)](https://youtu.be/dEfn2xG_mbk)

| Campo | Registro |
| --- | --- |
| Entrevistado | Rodrigo Velázquez, presentado como psicólogo especialista. |
| Entrevistador | Alexther Kamil Diaz Martinez. |
| Inicia | [0:00](https://www.youtube.com/watch?v=dEfn2xG_mbk&t=0s), inicio de la grabación. |
| Duración del video | 14:44 |
| Nombre completo | Rodrigo Velázquez |
| Edad | 25 |
| Distrito | San Miguel |
| Resumen | Rodrigo sostiene que escribir ayuda a los jóvenes a ordenar sus pensamientos y procesar emociones. Identifica como barreras el tiempo y esfuerzo percibidos, la preocupación por la privacidad y el perfeccionismo. Describe conductas de evasión ante el malestar y destaca la importancia de contar con estrategias y personas de confianza. Advierte sobre la desinformación, los autodiagnósticos y las promesas de resultados rápidos en redes sociales. Propone un trato empático que dé al paciente libertad para expresarse. Para aprovechar la consulta, prefiere gráficos y resúmenes con emociones predominantes, detonantes y episodios de ansiedad. Considera esenciales el cifrado, el anonimato y la posibilidad de borrar información. Sugiere una herramienta móvil de registro que ofrezca ejercicios de apoyo ante expresiones de malestar y genere contexto útil para personalizar las sesiones. |

##### Entrevista 2
** Enlace de la entrevista: ** https://upcedupe-my.sharepoint.com/:v:/g/personal/u202318609_upc_edu_pe/IQCgMq1wK-e7Sa2HCA_52zEDAcGhACzYzChzn0sMqHF4-aA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=ZGQ1G5

![Captura de entrevista](../assets/images/chap2/entrevista-psicologo-josue.png)

| Campo | Registro |
| --- | --- |
| Entrevistado | Josue Castro |
| Entrevistador | Juan Sung Jau Wang Chen |
| Inicia | 1:13 Primera pregunta |
| Duración del video | 12:17 |
| Nombre completo | Josue Castro Barreta |
| Edad | 23 |
| Distrito | La Perla |
| Resumen | Josué es psicólogo con 2 años de experiencia clínica, también con formación en psiquiatría. Afirma que la escritura expresiva es una herramienta clínica fundamental para pacientes de 14 a 30 años, ya que activa la corteza prefrontal y ayuda a regular la amígdala (centro del miedo y la ansiedad). Observa que los pacientes que escriben llegan a las sesiones con mayor claridad, reducen la rumiación nocturna y disminuyen las somatizaciones (dolores de cabeza o estómago por estrés). Identifica tres barreras principales para mantener un diario emocional: la falta de privacidad (temor a que padres o hermanos revisen sus notas), la trampa del perfeccionismo (creer que deben escribir "bien") y la evitación experiencial (escribir sobre el dolor lo hace sentir más real). Señala que, en momentos de crisis sin sesión programada, los jóvenes recurren a la evasión mediante pantallas (TikTok, Instagram), al aislamiento con música triste, y en casos más graves, a la autolesión o consumo de sustancias. Recomienda un enfoque empático en lugar de clínico o directivo, ya que el tono directo provoca que los adolescentes se pongan a la defensiva y se cierren. Respecto a señales de alerta en los escritos de un paciente, menciona la desesperanza absoluta (ausencia total de visión a futuro), el léxico vacío y las fugas de la realidad como indicadores de intervención de emergencia. Para revisar registros emocionales en consulta sin consumir tiempo excesivo, prefiere gráficos de estado emocional, horas de sueño, etiquetas o palabras clave semanales y que el paciente destaque dos episodios de angustia para analizar en profundidad. Considera que un entorno digital seguro debe ofrecer control total, privacidad absoluta, cero juicios morales y permanencia-disponibilidad. Finalmente, señala que hace falta una herramienta que funcione como un "botiquín emocional" que aprenda del usuario y sirva para aliviar la ansiedad en momentos de crisis, más allá de las apps genéricas de meditación o humor. |

##### Entrevista 3

**Enlace de la entrevista:** [Ver entrevista a la psicologa](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202416706_upc_edu_pe/IQBuKwDz9ReQTJJuVSApcxhgAbn9PDB5lN0eTdrZ1b-hiYM?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=B1gmY3)

![Miniatura del video de la entrevista a la psicologa](../assets/images/chap2/entrevista-psicologa-consuelo.png)

| Campo | Registro |
| --- | --- |
| Entrevistado | Consuelo Alarcón, psicóloga clínica. |
| Entrevistador | Santiago Enrique Vargas Alarcón. |
| Inicia | 0:00, inicio de la grabación. |
| Duración del video | 8:33 |
| Nombre completo | Consuelo Alarcón |
| Edad | 49 |
| Distrito | San Miguel |
| Resumen | Consuelo, con aproximadamente cinco años de experiencia, señala que el registro de emociones sirve como ancla para pacientes de 18 a 35 años, ayudando a disminuir su impulsividad, aunque el principal obstáculo para realizarlo es la pereza y el temor a perder su privacidad. Indica que los jóvenes suelen evadir sus crisis mediante distracciones (redes sociales, videojuegos, salir de fiesta). Destaca que la información de internet desestigmatiza la salud mental, pero genera problemas de autodiagnóstico. Recomienda un trato empático y horizontal, sin poses, para que los pacientes no se sientan juzgados. Considera útiles las herramientas de autoayuda siempre que fomenten independencia y no aíslen al paciente. Identifica como señales de alerta la desesperanza profunda, alteraciones de sueño, autolesiones y desconexión de la realidad. Para optimizar el tiempo en consulta, prefiere revisar resúmenes visuales (gráficos de ánimo, sueño, palabras clave) en lugar de textos largos. Subraya la importancia de garantizar la privacidad y control total de los datos por parte del paciente. Finalmente, concluye que hace falta una herramienta digital interactiva tipo "botiquín de primeros auxilios emocionales" para brindar contención inmediata en momentos de crisis. |

##### Entrevista 4

**Enlace de la entrevista:** [Ver entrevista al psicólogo](https://www.youtube.com/watch?v=I6xrkypbqEw)

[![Miniatura del video de la entrevista al psicólogo](https://i.ytimg.com/vi/I6xrkypbqEw/hqdefault.jpg)](https://youtu.be/I6xrkypbqEw)

| Campo | Registro |
| --- | --- |
| Entrevistado | Aldo Mauriño |
| Entrevistador | Andrés Rodrigo Torres Lavandera |
| Inicia | [0:00](https://www.youtube.com/watch?v=I6xrkypbqEw&t=0), inicio de la grabación |
| Duración del video | 12:49 |
| Nombre completo | Aldo Sebastian Mauriño Lavandera |
| Edad | 21 |
| Distrito | San Miguel |
| Resumen | Aldo Mauriño es psicólogo clínico con más de 5 años de experiencia trabajando con pacientes particulares. Afirma que la escritura expresiva o el registro de emociones en aplicaciones de notas es una herramienta fundamental para pacientes adolescentes y jóvenes, ya que les permite tomar consciencia sobre la verdadera frecuencia con la que experimentan emociones como la tristeza, la molestia o el estrés en su día a día. Identifica como barreras principales para mantener un diario emocional la dificultad de incorporar nuevos hábitos, la falta de costumbre de usar papel y lápiz, la indisciplina y el simple olvido, sugiriendo el uso de alarmas diarias como solución. Señala que, en momentos de crisis estando solos, los pacientes intentan escribir o llamar a personas cercanas, pero muchas veces se cohíben por vergüenza o miedo a ser una molestia, motivo por el cual les recomienda recurrir a números de emergencia especializados como la Línea 100. Recomienda utilizar un lenguaje asertivo frente a la vulnerabilidad, mostrándose honesto, directo y respetuoso, ya que un tono excesivamente empático puede interpretarse como burla y uno demasiado directo sin tacto como falta de interés. Respecto a las señales de alerta que indican una intervención clínica de emergencia, destaca la pérdida de funcionalidad del paciente, específicamente cuando los problemas se extienden a varias áreas de su vida (personal, social, laboral, familiar) impidiéndole seguir con su día a día, o cuando representa un peligro para sí mismo o para terceros. Para revisar registros emocionales en consulta ahorrando tiempo, valora que la información detalle de forma rigurosa qué días, a qué horas y en qué situaciones exactas (por ejemplo, en el trabajo o con amigos) ocurren los malestares, lo que le permite segmentar rápidamente las técnicas a utilizar. Considera que un entorno seguro para vulnerabilizarse debe garantizar una privacidad total, donde el paciente tenga la absoluta confianza de que su información no será compartida públicamente. Finalmente, señala que hace mucha falta una herramienta digital accesible para cualquier edad que centralice fuentes de información científica fiable, líneas de emergencia y contactos directos de psicólogos especializados en contención de crisis. |

### 2.2.3. Análisis de entrevistas


#### Análisis del segmento objetivo 1: Pacientes jóvenes

El segmento objetivo está compuesto por adultos jóvenes, principalmente estudiantes de educación superior y profesionistas en etapas tempranas o intermedias de formación, que se encuentran bajo regímenes de alta exigencia cognitiva, académica y laboral. Estos individuos asisten de forma activa y voluntaria a psicoterapia para mitigar cuadros de estrés y ansiedad provocados por transiciones vitales complejas o sobrecargas de rendimiento. A pesar de mantener un compromiso regular con sus especialistas clínicos, presentan un patrón común de desregulación emocional inter-sesión, derivado de la discrepancia entre el momento en que se detona la crisis y la disponibilidad real de la atención profesional, lo cual evidencia la necesidad de puentes funcionales entre la vivencia cotidiana y el encuadre psicoterapéutico.

En cuanto a los mecanismos de registro emocional, los pacientes muestran un abandono sistemático de los métodos tradicionales de diario manual debido a su falta de dinamismo e inmediatez. En su lugar, recurren a prácticas asincrónicas y fragmentadas, tales como notas rápidas en dispositivos móviles o mensajes de audio dirigidos a círculos cercanos de confianza en momentos de colapso. Esta conducta fue detallada por el entrevistado Mauricio Pajés, quien explicó que sus mayores picos de ansiedad se concentran durante la madrugada frente a entregas de alta complejidad técnica, recurriendo a notas y audios dispersos que, al final de la semana, no logran transmitir a su terapeuta la fidelidad, el tono de voz ni el contexto exacto del evento crítico, lo que produce una pérdida sensible de información clínica relevante.

La imposibilidad de exteriorizar las afectaciones emocionales en tiempo real genera consecuencias tanto cognitivas como somáticas adversas, traduciéndose en bloqueos del pensamiento, rumiación mental, irritabilidad y tensiones musculares pronunciadas. Esta problemática se agrava debido a los límites estructurales de la consulta convencional, donde la duración habitual de cuarenta a sesenta minutos resulta insuficiente para reconstruir retrospectivamente todos los episodios acumulados. El entrevistado Piero Mario Taipe Orihuela ilustró esta dificultad al señalar que los periodos de alta demanda evaluativa le impiden coordinar citas oportunas, provocando tensiones físicas focalizadas en hombros y cuello, y remarcó que la rigidez temporal de las sesiones genera una sensación de apresuramiento que obliga al paciente a reintegrarse a su entorno sin un procesamiento cabal del conflicto ni una delimitación previa que oriente al terapeuta hacia el núcleo del problema.

Finalmente, el segmento presenta una postura reflexiva y homogénea respecto a la introducción de tecnología e inteligencia artificial en la salud emocional. Por un lado, existe un recelo técnico justificado ante la vulnerabilidad y la retención permanente de información íntima en bases de datos externas, lo que exige modelos con estrictas garantías de anonimato, cifrado y soberanía absoluta del usuario sobre los datos que decide remitir a su especialista. Por otro lado, los usuarios no buscan sustituir la empatía o el criterio diagnóstico del psicólogo humano, sino contar con una herramienta complementaria de contención preliminar y triaje nocturno. Esta disposición sintetiza un segmento que demanda un entorno confidencial donde descargar y estructurar sus afecciones en el instante en que ocurren, facilitando un diagnóstico focalizado y optimizando el tiempo de la intervención clínica presencial.


#### Análisis del segmento objetivo 2: Psicólogos profesionales

El segmento objetivo está constituido por psicólogos clínicos y especialistas en salud mental dedicados a la atención psicoterapéutica de adolescentes y adultos jóvenes en entornos privados o centros de atención clínica multidisciplinaria. Estos profesionales fundamentan su práctica en el rigor ético y la personalización terapéutica, pero enfrentan la constante limitación de contar con ventanas de consulta reducidas frente a la alta complejidad contextual que experimentan sus consultantes fuera del consultorio. A partir del trabajo de campo, se evidencia que los especialistas reconocen el valor diagnóstico y regulatorio del registro inter-sesión para visibilizar afectos desbordantes, aunque tropiezan con una importante brecha de adherencia originada por la fatiga del paciente, los bloqueos por perfeccionismo y, de forma transversal, el profundo temor de los usuarios a la exposición involuntaria de su intimidad. 

Respecto a la optimización del tiempo clínico y el procesamiento de la información, el perfil profesional presenta una marcada resistencia a la sobrecarga de datos desestructurados, demandando instrumentos que sistematicen la experiencia emocional sin absorber los minutos de la intervención formal. En este sentido, el entrevistado Rodrigo Velázquez subrayó que en consultas estrictas de 45 a 50 minutos resulta inviable leer textos extensos redactados por los pacientes, por lo que resulta indispensable disponer de resúmenes visuales, gráficos de picos afectivos y etiquetas temáticas que delimiten los detonantes nucleares antes de iniciar el diálogo clínico. De manera complementaria, el entrevistado Aldo Mauriño señaló que la sistematización rigurosa de variables como horas, días y circunstancias situacionales permite enfocar de inmediato las intervenciones específicas en lugar de dispersar la sesión intentando reconstruir la semana a ciegas, postulado que valida la motivación del segmento por acceder a síntesis estructuradas que agilicen el análisis clínico sin aumentar su carga administrativa.

En lo relativo a la contención emocional fuera de sesión y las dinámicas vinculares, los especialistas coinciden en que la relación terapéutica debe desmarcarse de la rigidez médica tradicional para sostener una postura de acompañamiento empático y respetuoso. Sobre este aspecto, el especialista Josué Castarreta remarcó que las aproximaciones directivas provocan reactividad y cierre en los jóvenes, haciendo indispensable validar la experiencia afectiva y proporcionar herramientas que operen como anclajes de autorregulación mientras se preserva el control del consultante sobre sus propios registros. Asimismo, la psicóloga Consuelo Alarcón enfatizó la necesidad de interactuar desde la empatía horizontal para evitar que el paciente se sienta juzgado o evaluado, argumentando que en los momentos críticos inter-sesión se requiere un soporte de primeros auxilios emocionales en el móvil —un botiquín que ofrezca ejercicios prácticos e inmediatos de anclaje y respiración— que evite la rumiación o el aislamiento, y que a la vez sintetice patrones conductuales observables para acudir directamente a la raíz del conflicto en la cita presencial.

Finalmente, el segmento define con claridad las condiciones éticas, funcionales y de seguridad requeridas para que la tecnología complemente eficazmente la psicoterapia sin reemplazar el criterio humano. Los especialistas advierten sobre el riesgo de la desinformación digital y los autodiagnósticos precipitados, exigiendo que cualquier sistema auxiliar garantice protocolos de confidencialidad inquebrantables, cifrado riguroso y la capacidad de detectar patrones de alarma severos —tales como desesperanza absoluta o pérdida de funcionalidad transversal— para canalizar emergencias clínicas. Esta perspectiva fundamenta un perfil profesional receptivo a la innovación digital, condicionado a que las soluciones actúen como un soporte periférico confiable que respete el consentimiento informado, organice los antecedentes emocionales de forma ejecutiva y preserve la autonomía del juicio clínico del terapeuta.   


## 2.3. Needfinding



### 2.3.1. User Personas


#### User Persona 1: María

**Primer Segmento Objetivo (Pacientes Jovenes)**
*Figura 1: User Persona 1 (María)*
![User Persona 1: María](../assets/images/chap2/María_UserPersona.png)

**Segundo Segmento Objetivo (Psicólogos Profesionales)**
*Figura 2: User Persona 2 (Dra. Laura Gómez)*
![User Persona 2: Dra. Laura Gómez](../assets/images/chap2/Dra.%20Laura%20Gómez_UserPersona.png)


### 2.3.2. User Task Matrix

La matriz reúne las seis tareas más importantes de cada segmento y las prioriza según su frecuencia estimada e importancia dentro del recorrido principal.

#### User Task Matrix 1: María

**Primer Segmento Objetivo (Pacientes Jóvenes)**

| Tarea prioritaria | Frecuencia | Importancia |
| --- | :---: | :---: |
| Registrar emociones por texto o voz | Alta | Crítica |
| Consultar insights y evolución emocional | Media | Alta |
| Controlar el acceso a su información | Baja | Crítica |
| Participar de forma segura en la comunidad | Media | Alta |
| Acceder a ejercicios y ayuda urgente | Media | Crítica |
| Encontrar y recibir atención profesional | Baja | Crítica |

#### User Task Matrix 2: Dra. Laura Gómez

**Segundo Segmento Objetivo (Psicólogos Profesionales)**

| Tarea prioritaria | Frecuencia | Importancia |
| --- | :---: | :---: |
| Solicitar la verificación profesional | Baja | Crítica |
| Gestionar su perfil y reputación | Media | Alta |
| Administrar disponibilidad y solicitudes de cita | Alta | Crítica |
| Revisar información emocional autorizada | Alta | Crítica |
| Realizar y registrar una atención | Alta | Crítica |
| Consultar pagos e ingresos | Media | Alta |



### 2.3.3. User Journey Mapping

#### User Journey Map 1: Maria

![journey_map_maria.png](../assets/images/chap2/needfinding/journey_map_maria.png)

#### User Journey Map 2: Dra. Laura

![journey_map_maria.png](../assets/images/chap2/needfinding/journey_map_dra_laura.png)

### 2.3.4. Empathy Mapping


#### Empathy Map 1: Maria

![alt text](../assets/images/chap2/needfinding/empathy_map_maria.png)

#### Empathy Map 2: Dra. Laura Gómez

![alt text](../assets/images/chap2/needfinding/empathy_map_dra_laura.png)

### 2.3.5. Big Picture EventStorming

![Event storming](../assets/images/chap2/event-storming/big-event-storming.png)

<em>Organización del Big Picture Event Storming tras discutir en grupo los factores más importantes involucrados en la experiencia de usuario</em>

### 2.3.6. Ubiquitous Language

**Identidad, Privacidad y Consentimiento (Identity, Privacy & Consent)**

* **User (Usuario):** Persona que utiliza SafeDiary para registrar su estado emocional, participar en la comunidad o acceder a atención profesional. Es propietaria de sus entradas y decide qué información comparte.
* **Account (Cuenta):** Identidad interna utilizada para autenticación, preferencias, seguridad y gestión del ciclo de vida de los datos del usuario.
* **Clinical Identity (Identidad Clínica):** Información real necesaria para la relación con un especialista, las citas y los pagos. No se muestra dentro de la comunidad anónima.
* **Community Alias (Alias Comunitario):** Identidad seudónima utilizada en las salas de voz para participar sin revelar la identidad clínica o los datos personales del usuario.
* **Consent (Consentimiento):** Autorización explícita, informada, específica y revocable mediante la cual el usuario permite una finalidad concreta sobre sus datos emocionales.
* **Sharing Permission (Permiso de Compartición):** Alcance concedido por el usuario que define qué entradas puede consultar un especialista, durante qué periodo y dentro de qué relación de atención.
* **Revocation (Revocación):** Acción mediante la cual el usuario retira un permiso vigente. Desde ese momento se bloquean nuevos accesos, sin eliminar los eventos históricos de auditoría.
* **Private Vault (Bóveda Privada):** Espacio protegido mediante un PIN secundario o biometría para entradas especialmente sensibles, excluidas por defecto de vistas y exportaciones generales.
* **Audit Event (Evento de Auditoría):** Registro trazable de una acción sensible, como un acceso, consentimiento, revocación, reserva, pago o moderación, sin copiar innecesariamente el contenido emocional involucrado.

**Diario Emocional e Inteligencia Artificial (Emotional Diary & AI)**

* **Emotional Diary (Diario Emocional):** Espacio privado donde el usuario conserva reflexiones, notas de voz, estados emocionales y contexto personal en orden cronológico.
* **Diary Entry (Entrada de Diario):** Registro individual de texto o audio cuyo propietario es el usuario. Puede incluir etiquetas, factores externos y permisos de compartición propios.
* **Voice Note (Nota de Voz):** Audio privado creado como contenido de una entrada de diario y utilizado, con autorización, como fuente para la transcripción y el análisis.
* **Transcription (Transcripción):** Representación textual generada a partir de una nota de voz. Puede ser revisada por el usuario y no reemplaza el audio original mientras este se conserve.
* **Emotional Check-in (Registro Emocional Rápido):** Selección breve de una emoción actual, asociada con fecha y hora, que no requiere crear una entrada completa.
* **Emotion Tag (Etiqueta Emocional):** Palabra o categoría que ayuda a organizar una entrada. Puede ser elegida por el usuario o sugerida por la IA antes de ser confirmada.
* **AI Analysis (Análisis de IA):** Resultado estructurado asociado a una entrada que contiene señales emocionales, palabras clave, confianza, versión del modelo y banderas de seguridad. No constituye un diagnóstico clínico.
* **AI Reflection (Reflexión de IA):** Respuesta de apoyo que ayuda al usuario a ordenar lo expresado y fomenta la reflexión sin prescribir tratamientos ni afirmar conclusiones clínicas.
* **Insight (Insight Emocional):** Tendencia o resumen derivado del historial autorizado del usuario, presentado con su periodo y contexto para evitar interpretaciones engañosas.
* **Processing State (Estado de Procesamiento):** Etapa técnica de una entrada: draft, uploading, transcribing, analyzing, ready, retryable, failed o deleted.
* **Safety Flag (Bandera de Seguridad):** Indicador interno de que una interacción puede requerir mostrar recursos de ayuda. No equivale a una evaluación clínica ni confirma una situación de emergencia.

**Comunidad Anónima y Moderación (Anonymous Community & Moderation)**

* **Community Room (Sala Comunitaria):** Espacio de audio en tiempo real donde los usuarios interactúan mediante alias y bajo una política de participación y moderación definida.
* **Host (Anfitrión):** Participante responsable de conducir una sala y aplicar acciones básicas de moderación durante su sesión.
* **Listener (Oyente):** Participante conectado con el micrófono silenciado que puede escuchar sin intervenir verbalmente.
* **Speaker (Participante de Voz):** Usuario autorizado a activar su micrófono y hablar dentro de una sala comunitaria.
* **Report (Reporte):** Comunicación confidencial enviada a moderación sobre una conducta que podría incumplir las reglas de la comunidad.
* **Block (Bloqueo):** Restricción personal que impide nuevas interacciones entre dos alias sin revelar a la comunidad la identidad de quien la aplicó.
* **Moderation Action (Acción de Moderación):** Medida trazable como silenciar, expulsar o restringir a un participante para proteger la seguridad de una sala.

**Atención Profesional y Agendamiento (Professional Care & Scheduling)**

* **Verified Specialist (Especialista Verificado):** Psicólogo cuya identidad y credenciales fueron revisadas antes de aparecer como profesional disponible en SafeDiary.
* **Clinician Profile (Perfil Profesional):** Ficha pública autorizada que reúne especialidades, biografía, tarifa, disponibilidad, verificación, reseñas y elementos del puntaje de confianza.
* **Availability Slot (Horario Disponible):** Bloque de fecha, hora y zona horaria publicado por un especialista que puede reservarse una sola vez.
* **Appointment (Cita):** Acuerdo entre un usuario y un especialista para una atención en un horario determinado, con estados requested, held, confirmed, completed, cancelled, expired, no_show o refunded.
* **Video Session (Videollamada):** Canal privado asociado a una cita confirmada al que solo pueden ingresar sus participantes autorizados dentro de la ventana permitida.
* **Care Relationship (Relación de Atención):** Vínculo entre un usuario y un especialista originado por una cita. No concede acceso automático al diario; todo acceso requiere un permiso de compartición explícito.

**Pagos, Reseñas y Confianza (Payments, Reviews & Trust)**

* **Payment (Pago):** Transacción asociada a una cita que se procesa de forma idempotente para evitar cobros duplicados y mantener un estado verificable.
* **Receipt (Comprobante):** Constancia digital emitida después de un pago aprobado y disponible para consulta del usuario.
* **Review (Reseña):** Valoración vinculada a una cita completada que puede incluir una puntuación y un comentario opcional, sin revelar información emocional del paciente.
* **Trust Score (Puntaje de Confianza):** Indicador explicable construido con criterios como horas de atención, continuidad de pacientes y reseñas válidas, evitando premiar únicamente el volumen de consultas.
* **Refund (Reembolso):** Devolución total o parcial de un pago que actualiza de forma trazable el estado financiero de la cita.

## 2.4. Requirements specification

### 2.4.1. User Stories

**Epics**

| Epic ID | Título | Descripción |
| --- | --- | --- |
| EP-01 | Cuenta, seguridad, privacidad y consentimiento | **Como** usuario de SafeDiary,<br>**Quiero** administrar mi identidad, accesos y permisos sobre mis datos,<br>**Para** utilizar la aplicación con seguridad y mantener el control de mi información sensible. |
| EP-02 | Diario emocional, IA, hábitos e insights | **Como** usuario de SafeDiary,<br>**Quiero** registrar mis emociones, recibir apoyo reflexivo y consultar mi evolución,<br>**Para** desarrollar hábitos de autocuidado y comprender mejor mis patrones emocionales. |
| EP-03 | Comunidad segura, autorregulación y ayuda inmediata | **Como** miembro de SafeDiary,<br>**Quiero** participar en espacios comunitarios moderados y acceder a recursos de regulación y crisis,<br>**Para** recibir apoyo manteniendo protegida mi identidad y seguridad. |
| EP-04 | Atención profesional, citas, pagos y confianza | **Como** usuario de SafeDiary,<br>**Quiero** encontrar especialistas verificados y gestionar citas, pagos y sesiones,<br>**Para** acceder a atención profesional confiable desde la aplicación. |
| EP-05 | Landing page, comunicación y adquisición | **Como** visitante,<br>**Quiero** conocer la propuesta, funcionalidades, precios y equipo de SafeDiary,<br>**Para** evaluar el producto antes de registrarme o descargarlo. |

**User Stories**

| Story ID | Título | Descripción | Criterios de aceptación | Relacionado con Epic ID |
| --- | --- | --- | --- | --- |
| US-001 | Registro de cuenta | **Como** nuevo usuario de SafeDiary,<br>**Quiero** registrar una cuenta con mi correo electrónico y una contraseña segura,<br>**Para** acceder a mi espacio personal y comenzar a registrar mi estado emocional. | **Scenario 1: Registro exitoso**<br>**Given** que el usuario se encuentra en la opción de crear una cuenta<br>**When** ingresa un correo no registrado, una contraseña válida y confirma el registro<br>**Then** el sistema crea la cuenta e inicia la sesión<br>**And** muestra la pantalla principal de bienvenida<br><br>**Scenario 2: Datos de registro inválidos**<br>**Given** que el usuario está completando el formulario de registro<br>**When** ingresa un correo con formato incorrecto, un correo ya registrado o una contraseña que no cumple las reglas<br>**Then** el sistema no crea la cuenta<br>**And** muestra el mensaje de validación correspondiente sin borrar los datos válidos | EP-01 |
| US-002 | Exploración del directorio de especialistas | **Como** usuario de SafeDiary,<br>**Quiero** buscar especialistas verificados y filtrarlos por especialidad y disponibilidad,<br>**Para** seleccionar al profesional que mejor se ajuste a mis necesidades. | **Scenario 1: Filtrado con resultados**<br>**Given** que el usuario se encuentra en el directorio de soporte profesional<br>**When** aplica un filtro de especialidad o disponibilidad<br>**Then** el sistema muestra únicamente los especialistas coincidentes<br>**And** cada resultado presenta credenciales, tarifa, calificación y próxima disponibilidad<br><br>**Scenario 2: Búsqueda sin coincidencias**<br>**Given** que el usuario ha aplicado criterios de búsqueda<br>**When** ningún especialista cumple con los filtros seleccionados<br>**Then** el sistema muestra un estado sin resultados<br>**And** ofrece una opción para limpiar los filtros | EP-04 |
| US-003 | Acceso con Google o Apple | **Como** usuario nuevo o recurrente de SafeDiary,<br>**Quiero** registrarme o iniciar sesión con mi cuenta de Google o Apple,<br>**Para** acceder de forma rápida sin administrar una contraseña adicional. | **Scenario 1: Autenticación federada exitosa**<br>**Given** que el usuario se encuentra en la pantalla de autenticación<br>**When** selecciona Google o Apple y autoriza el acceso con el proveedor<br>**Then** el sistema valida la identidad y crea o recupera la cuenta correspondiente<br>**And** redirige al usuario a la pantalla principal con la sesión iniciada<br><br>**Scenario 2: Autenticación cancelada o fallida**<br>**Given** que el usuario inició el flujo de acceso con Google o Apple<br>**When** cancela la autorización o el proveedor devuelve un error<br>**Then** el sistema mantiene al usuario en la pantalla de autenticación<br>**And** muestra un mensaje de error cuando la causa es técnica | EP-01 |
| US-004 | Creación de sala de voz | **Como** usuario de SafeDiary,<br>**Quiero** crear una sala de voz temática con título, etiquetas y modo de participación,<br>**Para** abrir un espacio anónimo y seguro de conversación en tiempo real. | **Scenario 1: Sala creada correctamente**<br>**Given** que el usuario se encuentra en la sección Comunidad<br>**When** completa un título válido, selecciona etiquetas y confirma la creación<br>**Then** el sistema abre la sala y asigna al creador como anfitrión<br>**And** publica la sala en el listado comunitario<br><br>**Scenario 2: Título inválido**<br>**Given** que el usuario tiene abierto el formulario de creación<br>**When** intenta confirmar con un título vacío o menor a la longitud permitida<br>**Then** el sistema no crea la sala<br>**And** indica cómo corregir el campo de título | EP-03 |
| US-005 | Participación en sala de voz | **Como** usuario de SafeDiary,<br>**Quiero** unirme a una sala de voz como oyente o participante,<br>**Para** recibir apoyo o conversar manteniendo protegida mi identidad. | **Scenario 1: Ingreso exitoso como oyente**<br>**Given** que existe una sala activa con capacidad disponible<br>**When** el usuario selecciona la opción de unirse<br>**Then** el sistema conecta el audio con el micrófono silenciado por defecto<br>**And** incrementa el contador de participantes<br><br>**Scenario 2: Sala cerrada o no disponible**<br>**Given** que la sala seleccionada acaba de finalizar o alcanzó su capacidad<br>**When** el usuario intenta ingresar<br>**Then** el sistema rechaza la conexión de forma controlada<br>**And** informa la causa y actualiza el listado de salas | EP-03 |
| US-006 | Edición del perfil personal | **Como** usuario de SafeDiary,<br>**Quiero** actualizar mi nombre y fotografía de perfil,<br>**Para** mantener mis datos personales al día y personalizar mi experiencia. | **Scenario 1: Perfil actualizado**<br>**Given** que el usuario se encuentra en la edición de perfil<br>**When** ingresa un nombre válido, selecciona una imagen admitida y guarda los cambios<br>**Then** el sistema actualiza la información<br>**And** muestra los nuevos datos en la aplicación<br><br>**Scenario 2: Imagen no admitida**<br>**Given** que el usuario intenta cambiar su fotografía<br>**When** selecciona un archivo con formato no permitido o que supera el tamaño máximo<br>**Then** el sistema conserva la imagen anterior<br>**And** muestra el requisito que no se cumplió | EP-01 |
| US-007 | Gestión de rutinas de autocuidado | **Como** usuario de SafeDiary,<br>**Quiero** crear actividades para mis rutinas diarias,<br>**Para** organizar hábitos de calma y autocuidado durante el día. | **Scenario 1: Rutina creada**<br>**Given** que el usuario se encuentra en la sección de rutinas<br>**When** ingresa un nombre, define la duración o el tipo y confirma<br>**Then** el sistema agrega la actividad con estado pendiente<br>**And** la muestra en la lista del día<br><br>**Scenario 2: Rutina sin título**<br>**Given** que el usuario está creando una actividad<br>**When** intenta guardarla sin ingresar un título<br>**Then** el sistema no registra la rutina<br>**And** señala que el nombre es obligatorio | EP-02 |
| US-008 | Registro de entrada de diario | **Como** usuario de SafeDiary,<br>**Quiero** registrar una vivencia mediante texto o una nota de voz,<br>**Para** expresar mis pensamientos con el medio que me resulte más cómodo. | **Scenario 1: Entrada guardada**<br>**Given** que el usuario se encuentra en el diario emocional<br>**When** escribe una reflexión o graba una nota de voz y selecciona guardar<br>**Then** el sistema almacena la entrada cifrada<br>**And** la muestra en el historial en orden cronológico<br><br>**Scenario 2: Entrada vacía**<br>**Given** que el usuario abrió una nueva entrada<br>**When** intenta guardarla sin texto ni audio<br>**Then** el sistema bloquea el guardado<br>**And** solicita añadir contenido antes de continuar | EP-02 |
| US-009 | Consentimiento para compartir historial | **Como** usuario de SafeDiary con una cita profesional,<br>**Quiero** autorizar explícitamente el acceso de un especialista a partes de mi historial emocional,<br>**Para** ofrecer contexto relevante para mi atención sin perder el control de mis datos. | **Scenario 1: Consentimiento otorgado**<br>**Given** que el usuario tiene una cita con un especialista verificado<br>**When** selecciona los datos que desea compartir, activa el consentimiento y confirma<br>**Then** el sistema concede acceso únicamente al especialista y al alcance autorizados<br>**And** registra la fecha y el detalle del consentimiento<br><br>**Scenario 2: Atención sin compartir historial**<br>**Given** que el usuario se encuentra en la pantalla de consentimiento<br>**When** decide continuar sin autorizar el acceso<br>**Then** el sistema mantiene privado el historial<br>**And** permite conservar la cita sin compartir información emocional | EP-01 |
| US-010 | Registro rápido del estado emocional | **Como** usuario de SafeDiary,<br>**Quiero** seleccionar rápidamente mi estado emocional actual desde la pantalla principal,<br>**Para** mantener un registro continuo de mi ánimo sin crear una entrada completa. | **Scenario 1: Estado emocional registrado**<br>**Given** que el usuario se encuentra en la pantalla principal<br>**When** selecciona una emoción disponible<br>**Then** el sistema registra la emoción con fecha y hora<br>**And** actualiza el indicador del estado actual<br><br>**Scenario 2: Registro duplicado inmediato**<br>**Given** que una emoción ya se encuentra activa<br>**When** el usuario selecciona nuevamente la misma emoción sin realizar otro cambio<br>**Then** el sistema mantiene la selección actual<br>**And** evita crear un registro duplicado | EP-02 |
| US-011 | Reflexión guiada por voz con IA | **Como** usuario de SafeDiary,<br>**Quiero** hablar con el asistente de IA y obtener una transcripción, reflexión y etiqueta emocional sugerida,<br>**Para** procesar mis pensamientos de manera guiada y guardarlos en mi diario. | **Scenario 1: Procesamiento de voz exitoso**<br>**Given** que el usuario inicia una grabación en AI Diary<br>**When** habla, detiene la grabación y el procesamiento finaliza correctamente<br>**Then** el sistema muestra la transcripción y una reflexión no diagnóstica<br>**And** permite revisar la etiqueta sugerida antes de guardar<br><br>**Scenario 2: Límite o fallo de transcripción**<br>**Given** que el usuario está grabando una reflexión<br>**When** alcanza el tiempo máximo o la transcripción no puede completarse<br>**Then** el sistema detiene la grabación de forma segura<br>**And** conserva el audio disponible y ofrece reintentar o usar texto | EP-02 |
| US-012 | Consulta de estadísticas emocionales | **Como** usuario de SafeDiary,<br>**Quiero** visualizar estadísticas de mis estados emocionales a lo largo del tiempo,<br>**Para** comprender mis patrones y observar mi progreso personal. | **Scenario 1: Estadísticas disponibles**<br>**Given** que el usuario tiene registros emocionales en el periodo seleccionado<br>**When** abre Insights y elige un rango de tiempo<br>**Then** el sistema calcula y muestra indicadores y gráficos del periodo<br>**And** permite consultar el detalle de cada punto del gráfico<br><br>**Scenario 2: Periodo sin registros**<br>**Given** que no existen datos emocionales en el periodo seleccionado<br>**When** el usuario abre el panel de estadísticas<br>**Then** el sistema muestra un estado vacío sin valores engañosos<br>**And** invita a realizar un primer registro | EP-02 |
| US-013 | Acceso inmediato a ayuda de crisis | **Como** usuario de SafeDiary que necesita ayuda urgente,<br>**Quiero** contactar rápidamente una línea de crisis desde la sección de soporte,<br>**Para** obtener asistencia humana inmediata cuando la necesite. | **Scenario 1: Contacto telefónico disponible**<br>**Given** que el usuario se encuentra en la sección Soporte y el dispositivo permite llamadas<br>**When** selecciona la opción de ayuda inmediata<br>**Then** el sistema abre el marcador con el número de crisis configurado para su ubicación<br>**And** solicita al usuario confirmar el inicio de la llamada<br><br>**Scenario 2: Dispositivo sin llamadas**<br>**Given** que el dispositivo no admite llamadas telefónicas<br>**When** el usuario selecciona la ayuda inmediata<br>**Then** el sistema muestra alternativas disponibles como mensaje, chat o números locales<br>**And** no presenta una acción que el dispositivo no puede ejecutar | EP-03 |
| US-014 | Reserva de videollamada profesional | **Como** usuario de SafeDiary,<br>**Quiero** reservar un horario disponible con un especialista verificado,<br>**Para** programar una consulta profesional según mi disponibilidad. | **Scenario 1: Cita reservada**<br>**Given** que el usuario visualiza un horario disponible de un especialista<br>**When** selecciona el horario y confirma los datos de la cita<br>**Then** el sistema registra la reserva y bloquea el horario<br>**And** muestra la confirmación y programa un recordatorio<br><br>**Scenario 2: Horario ocupado durante la reserva**<br>**Given** que otro usuario reservó el mismo horario antes de la confirmación<br>**When** el usuario intenta finalizar la reserva<br>**Then** el sistema evita la doble asignación<br>**And** informa la indisponibilidad y muestra horarios alternativos | EP-04 |
| US-015 | Desbloqueo biométrico | **Como** usuario recurrente de SafeDiary,<br>**Quiero** habilitar el acceso mediante rostro o huella digital,<br>**Para** entrar de forma rápida y segura sin escribir mi contraseña cada vez. | **Scenario 1: Biometría habilitada**<br>**Given** que el usuario inició sesión previamente y el dispositivo admite biometría<br>**When** activa el desbloqueo biométrico y valida su identidad<br>**Then** el sistema habilita el método para futuros accesos<br>**And** permite ingresar mediante la validación del dispositivo<br><br>**Scenario 2: Validación biométrica fallida**<br>**Given** que el desbloqueo biométrico está habilitado<br>**When** el dispositivo rechaza la identidad después del límite de intentos<br>**Then** el sistema no concede acceso<br>**And** ofrece iniciar sesión con las credenciales de la cuenta | EP-01 |
| US-016 | Recuperación de contraseña | **Como** usuario de SafeDiary que olvidó su contraseña,<br>**Quiero** solicitar un enlace seguro de restablecimiento,<br>**Para** recuperar el acceso sin perder mi historial. | **Scenario 1: Restablecimiento exitoso**<br>**Given** que el usuario solicita recuperar su contraseña<br>**When** ingresa su correo, abre un enlace vigente y define una contraseña válida<br>**Then** el sistema actualiza la credencial<br>**And** permite iniciar sesión conservando los datos de la cuenta<br><br>**Scenario 2: Correo no reconocido o enlace vencido**<br>**Given** que el usuario inicia la recuperación<br>**When** el correo no está registrado o el enlace dejó de ser válido<br>**Then** el sistema no revela la existencia de la cuenta<br>**And** muestra un mensaje seguro y permite solicitar un nuevo enlace | EP-01 |
| US-017 | Presentación de la propuesta de valor | **Como** visitante de la landing page,<br>**Quiero** comprender desde la sección principal qué ofrece SafeDiary,<br>**Para** decidir si la aplicación responde a mis necesidades. | **Scenario 1: Propuesta visible**<br>**Given** que el visitante accede a la landing page<br>**When** la sección principal termina de cargar<br>**Then** el sistema muestra el mensaje de valor, una descripción breve y las acciones de descarga<br>**And** mantiene el contenido principal visible sin desplazamiento en una pantalla compatible<br><br>**Scenario 2: Acceso a descarga**<br>**Given** que el visitante identifica una tienda compatible con su dispositivo<br>**When** selecciona el botón de descarga<br>**Then** el sistema lo dirige a la tienda correspondiente<br>**And** conserva una alternativa informativa si la aplicación aún no está disponible | EP-05 |
| US-018 | Presentación de funcionalidades principales | **Como** visitante de la landing page,<br>**Quiero** consultar las funciones principales de SafeDiary,<br>**Para** conocer el alcance del diario, la IA, la comunidad y el soporte profesional. | **Scenario 1: Funciones visibles**<br>**Given** que el visitante navega a la sección de funcionalidades<br>**When** la sección aparece en pantalla<br>**Then** el sistema presenta bloques con título, descripción e identificación visual<br>**And** incluye las capacidades principales del producto<br><br>**Scenario 2: Navegación desde el menú**<br>**Given** que el visitante se encuentra en otra sección de la landing page<br>**When** selecciona el enlace de funcionalidades<br>**Then** la página lo desplaza a la sección correspondiente<br>**And** mantiene visible el encabezado de la sección | EP-05 |
| US-019 | Consulta de testimonios | **Como** visitante de la landing page,<br>**Quiero** leer experiencias de usuarios de SafeDiary,<br>**Para** evaluar la confianza y utilidad del producto antes de registrarme. | **Scenario 1: Testimonios disponibles**<br>**Given** que el visitante llega a la sección de testimonios<br>**When** el contenido se muestra<br>**Then** el sistema presenta reseñas con alias o nombre autorizado y calificación<br>**And** evita exponer información clínica o emocional identificable<br><br>**Scenario 2: Testimonios no disponibles**<br>**Given** que no existen testimonios aprobados para publicación<br>**When** el visitante abre la sección<br>**Then** el sistema oculta reseñas incompletas o no autorizadas<br>**And** muestra contenido informativo alternativo sin inventar opiniones | EP-05 |
| US-020 | Consulta de planes y precios | **Como** visitante de la landing page,<br>**Quiero** comparar los planes disponibles de SafeDiary,<br>**Para** evaluar qué opción se ajusta a mis necesidades y presupuesto. | **Scenario 1: Comparación de planes**<br>**Given** que el visitante se encuentra en la sección de precios<br>**When** consulta las opciones disponibles<br>**Then** el sistema muestra el precio y las funciones incluidas en cada plan<br>**And** diferencia claramente el plan gratuito del plan premium<br><br>**Scenario 2: Selección de un plan**<br>**Given** que el visitante eligió una opción disponible<br>**When** selecciona su botón de acción<br>**Then** el sistema lo dirige al flujo correspondiente de registro o adquisición<br>**And** mantiene visible el plan seleccionado | EP-05 |
| US-021 | Preguntas frecuentes y contacto | **Como** visitante de la landing page,<br>**Quiero** consultar respuestas frecuentes y enviar una solicitud de contacto,<br>**Para** resolver dudas sobre privacidad, seguridad o funcionamiento. | **Scenario 1: Consulta de preguntas frecuentes**<br>**Given** que el visitante se encuentra en la sección de preguntas frecuentes<br>**When** selecciona una pregunta<br>**Then** la página muestra su respuesta sin recargarse<br>**And** permite cerrar la respuesta nuevamente<br><br>**Scenario 2: Envío del formulario de contacto**<br>**Given** que el visitante completa nombre, correo y mensaje válidos<br>**When** selecciona enviar<br>**Then** el sistema registra la solicitud y confirma su recepción<br>**And** si falta un campo obligatorio, muestra la validación y no envía el formulario | EP-05 |
| US-022 | Presentación de MindCluster | **Como** visitante de la landing page,<br>**Quiero** conocer la misión y el equipo responsable de SafeDiary,<br>**Para** identificar quién respalda el producto y sus valores. | **Scenario 1: Información institucional visible**<br>**Given** que el visitante navega a la sección Sobre nosotros<br>**When** la sección se muestra<br>**Then** el sistema presenta la misión de MindCluster y los valores del equipo<br>**And** muestra únicamente datos personales autorizados de sus integrantes<br><br>**Scenario 2: Acceso mediante navegación**<br>**Given** que el visitante se encuentra al inicio de la landing page<br>**When** selecciona el enlace Sobre nosotros<br>**Then** la página lo dirige a la información institucional<br>**And** mantiene una ruta clara para regresar al contenido principal | EP-05 |
| US-023 | Revocación del acceso al historial | **Como** usuario de SafeDiary,<br>**Quiero** revocar el acceso previamente concedido a un especialista,<br>**Para** mantener el control sobre quién puede consultar mi información emocional. | **Scenario 1: Acceso revocado**<br>**Given** que un especialista tiene autorización vigente sobre parte del historial<br>**When** el usuario desactiva el permiso y confirma la revocación<br>**Then** el sistema retira el acceso del especialista<br>**And** registra la fecha del cambio y muestra una confirmación<br><br>**Scenario 2: Consulta de permisos vigentes**<br>**Given** que el usuario abre la gestión de privacidad<br>**When** revisa los accesos concedidos<br>**Then** el sistema muestra cada especialista, el alcance y la fecha de autorización<br>**And** permite revocar cada permiso por separado | EP-01 |
| US-024 | Recordatorios de registro emocional | **Como** usuario de SafeDiary,<br>**Quiero** configurar recordatorios diarios para registrar mi estado emocional,<br>**Para** mantener el hábito de reflexión. | **Scenario 1: Recordatorio programado**<br>**Given** que el usuario permitió notificaciones para SafeDiary<br>**When** elige una hora y activa el recordatorio diario<br>**Then** el sistema programa la notificación<br>**And** al seleccionarla abre la pantalla de registro emocional<br><br>**Scenario 2: Recordatorio desactivado**<br>**Given** que existe un recordatorio activo<br>**When** el usuario desactiva la opción<br>**Then** el sistema cancela las notificaciones futuras asociadas<br>**And** conserva disponible la configuración para una reactivación posterior | EP-02 |
| US-025 | Protección de entradas en bóveda privada | **Como** usuario de SafeDiary,<br>**Quiero** proteger entradas específicas con un PIN secundario o biometría,<br>**Para** mantener ocultas mis reflexiones más sensibles. | **Scenario 1: Entrada trasladada a la bóveda**<br>**Given** que el usuario visualiza una entrada de su diario<br>**When** selecciona mover a la bóveda y supera la verificación de seguridad<br>**Then** el sistema oculta la entrada del historial general<br>**And** la muestra únicamente dentro de la bóveda privada<br><br>**Scenario 2: Intentos de acceso fallidos**<br>**Given** que el usuario intenta abrir la bóveda<br>**When** supera el límite de intentos de verificación incorrectos<br>**Then** el sistema bloquea temporalmente el acceso<br>**And** informa cuándo podrá intentarlo nuevamente | EP-01 |
| US-026 | Personalización del tono de la IA | **Como** usuario de SafeDiary,<br>**Quiero** elegir el estilo de comunicación del asistente de IA,<br>**Para** recibir reflexiones que se adapten mejor a mis preferencias. | **Scenario 1: Tono actualizado**<br>**Given** que el usuario se encuentra en las preferencias de la IA<br>**When** selecciona un estilo disponible y guarda el cambio<br>**Then** el sistema aplica el tono a las respuestas futuras<br>**And** mantiene el aviso de que la IA brinda apoyo y no diagnóstico<br><br>**Scenario 2: Historial sin alteraciones**<br>**Given** que el usuario cambió el tono del asistente<br>**When** consulta conversaciones anteriores<br>**Then** el sistema conserva los mensajes con su contenido original<br>**And** no regenera respuestas pasadas con el nuevo estilo | EP-02 |
| US-027 | Seguimiento emocional proactivo | **Como** usuario recurrente de SafeDiary,<br>**Quiero** recibir una pregunta de seguimiento sobre una emoción o situación registrada anteriormente,<br>**Para** reflexionar sobre cómo evolucionan mis preocupaciones. | **Scenario 1: Seguimiento relevante**<br>**Given** que el usuario autorizó interacciones proactivas y registró una emoción significativa<br>**When** abre la aplicación dentro del periodo de seguimiento<br>**Then** la IA presenta una pregunta relacionada con el registro previo<br>**And** permite responder, omitir o desactivar futuros seguimientos<br><br>**Scenario 2: Seguimiento desactivado**<br>**Given** que el usuario desactiva las interacciones proactivas<br>**When** vuelve a abrir la aplicación<br>**Then** la IA no inicia conversaciones por cuenta propia<br>**And** responde únicamente cuando el usuario comienza una interacción | EP-02 |
| US-028 | Exportación del progreso en PDF | **Como** usuario de SafeDiary,<br>**Quiero** exportar mis estadísticas y entradas seleccionadas en un archivo PDF,<br>**Para** compartir mi progreso con un profesional externo si así lo decido. | **Scenario 1: PDF generado**<br>**Given** que el usuario tiene información en el periodo seleccionado<br>**When** elige los datos que desea incluir y solicita la exportación<br>**Then** el sistema genera un PDF protegido con las estadísticas y entradas autorizadas<br>**And** permite descargarlo o compartirlo mediante las opciones del dispositivo<br><br>**Scenario 2: Exclusión de datos privados**<br>**Given** que existen entradas dentro de la bóveda privada<br>**When** el sistema prepara la exportación<br>**Then** omite esas entradas de forma predeterminada<br>**And** no las incluye sin una autorización explícita adicional | EP-02 |
| US-029 | Insignias por constancia emocional | **Como** usuario de SafeDiary,<br>**Quiero** recibir insignias por mantener una racha de registros emocionales,<br>**Para** sentirme motivado a sostener el hábito de autocuidado. | **Scenario 1: Insignia desbloqueada**<br>**Given** que el usuario está a un registro de completar una meta de constancia<br>**When** realiza el registro requerido<br>**Then** el sistema concede la insignia correspondiente<br>**And** la muestra en el perfil sin revelar información sensible<br><br>**Scenario 2: Racha interrumpida**<br>**Given** que el usuario deja pasar el periodo definido sin registrar actividad<br>**When** regresa a la aplicación<br>**Then** el sistema reinicia el contador de la racha<br>**And** conserva las insignias obtenidas anteriormente | EP-02 |
| US-030 | Ejercicios rápidos de regulación | **Como** usuario que experimenta ansiedad,<br>**Quiero** acceder a ejercicios breves de respiración y regulación,<br>**Para** reducir la intensidad de mis síntomas antes de continuar con el diario. | **Scenario 1: Sugerencia después de un registro intenso**<br>**Given** que el usuario registra un nivel alto de ansiedad<br>**When** confirma su estado emocional<br>**Then** el sistema ofrece iniciar un ejercicio guiado<br>**And** permite aceptar, omitir o consultar ayuda profesional<br><br>**Scenario 2: Acceso manual**<br>**Given** que el usuario se encuentra en la navegación principal<br>**When** selecciona la opción de ejercicios de regulación<br>**Then** el sistema muestra la biblioteca de ejercicios disponibles<br>**And** permite iniciar uno sin crear previamente una entrada | EP-03 |
| US-031 | Registro de factores externos | **Como** usuario de SafeDiary,<br>**Quiero** asociar factores como sueño, energía o cafeína a mis registros emocionales,<br>**Para** identificar posibles relaciones entre mis hábitos y mi estado de ánimo. | **Scenario 1: Factores vinculados**<br>**Given** que el usuario está completando un registro emocional<br>**When** selecciona uno o más factores de contexto y guarda<br>**Then** el sistema vincula los factores con el registro<br>**And** permite consultarlos posteriormente<br><br>**Scenario 2: Análisis con información suficiente**<br>**Given** que existen registros de varios periodos con factores asociados<br>**When** el usuario abre Insights<br>**Then** el sistema muestra posibles correlaciones como tendencias y no como diagnósticos<br>**And** indica cuando la información disponible es insuficiente | EP-02 |
| US-032 | Recuerdos de evolución emocional | **Como** usuario recurrente de SafeDiary,<br>**Quiero** recibir recordatorios opcionales de cómo me sentía en periodos anteriores,<br>**Para** reconocer cambios y obtener perspectiva sobre mi evolución emocional. | **Scenario 1: Recuerdo mostrado**<br>**Given** que el usuario autorizó los recuerdos y existe una entrada apta del periodo anterior<br>**When** abre la vista general del diario<br>**Then** el sistema presenta una tarjeta retrospectiva<br>**And** permite ocultarla o desactivar futuros recuerdos<br><br>**Scenario 2: Contenido potencialmente sensible**<br>**Given** que una entrada antigua contiene señales de trauma o fue marcada como sensible<br>**When** el sistema selecciona contenido para un recuerdo<br>**Then** omite esa entrada de la recomendación automática<br>**And** elige contenido neutral o no muestra un recuerdo | EP-02 |
| US-033 | Eliminación de cuenta y datos personales | **Como** usuario de SafeDiary,<br>**Quiero** solicitar la eliminación de mi cuenta y de mis datos emocionales,<br>**Para** retirar mi información cuando deje de utilizar el servicio. | **Scenario 1: Solicitud confirmada**<br>**Given** que el usuario se encuentra en la gestión de su cuenta<br>**When** solicita la eliminación, revisa sus consecuencias y valida nuevamente su identidad<br>**Then** el sistema registra la solicitud y cierra las sesiones activas<br>**And** informa el plazo de eliminación y revoca los accesos concedidos<br><br>**Scenario 2: Cancelación antes de confirmar**<br>**Given** que el usuario abrió el flujo de eliminación<br>**When** decide cancelar antes de la confirmación final<br>**Then** el sistema no elimina ni programa la eliminación de datos<br>**And** mantiene la cuenta y sus permisos sin cambios | EP-01 |
| US-034 | Reporte y bloqueo en la comunidad | **Como** participante de una sala de voz,<br>**Quiero** reportar y bloquear a una persona con comportamiento inapropiado,<br>**Para** protegerme sin revelar mi identidad comunitaria. | **Scenario 1: Reporte enviado y usuario bloqueado**<br>**Given** que el usuario participa en una sala de voz<br>**When** selecciona a un participante, elige un motivo y confirma el reporte y bloqueo<br>**Then** el sistema impide nuevas interacciones entre ambas identidades<br>**And** envía el caso a moderación sin revelar la identidad del denunciante<br><br>**Scenario 2: Cancelación del reporte**<br>**Given** que el usuario abrió el formulario de reporte<br>**When** cierra el formulario antes de confirmar<br>**Then** el sistema no registra el reporte<br>**And** mantiene disponible la opción de bloquear por separado | EP-03 |
| US-035 | Moderación de salas de voz | **Como** anfitrión de una sala de voz,<br>**Quiero** silenciar o expulsar a participantes que incumplan las reglas,<br>**Para** mantener una conversación segura para la comunidad. | **Scenario 1: Participante expulsado**<br>**Given** que el anfitrión detecta una conducta que incumple las reglas<br>**When** selecciona expulsar y confirma la acción<br>**Then** el sistema retira al participante de la sala<br>**And** impide que vuelva a ingresar durante esa sesión y registra la acción<br><br>**Scenario 2: Participante silenciado**<br>**Given** que un participante genera ruido o interrumpe la conversación<br>**When** el anfitrión selecciona silenciar<br>**Then** el sistema desactiva el micrófono del participante<br>**And** le informa de forma privada el cambio de estado | EP-03 |
| US-036 | Gestión del perfil profesional y disponibilidad | **Como** especialista verificado en SafeDiary,<br>**Quiero** actualizar mi perfil, especialidades, tarifa y horarios disponibles,<br>**Para** ofrecer información correcta y recibir reservas compatibles con mi agenda. | **Scenario 1: Perfil y disponibilidad actualizados**<br>**Given** que el especialista tiene una verificación vigente<br>**When** modifica datos válidos y publica nuevos horarios<br>**Then** el sistema actualiza su ficha en el directorio<br>**And** habilita los horarios libres para reserva<br><br>**Scenario 2: Conflicto de horario o perfil no verificado**<br>**Given** que existe una cita en el horario seleccionado o la verificación no está vigente<br>**When** el especialista intenta publicar la disponibilidad<br>**Then** el sistema bloquea el cambio incompatible<br>**And** explica la condición que debe resolver | EP-04 |
| US-037 | Pago seguro de una sesión | **Como** usuario con una cita seleccionada,<br>**Quiero** pagar la sesión dentro de SafeDiary y recibir un comprobante,<br>**Para** confirmar mi reserva mediante una transacción trazable. | **Scenario 1: Pago aprobado**<br>**Given** que el usuario seleccionó una cita y un medio de pago válido<br>**When** confirma el cobro y la pasarela aprueba la operación<br>**Then** el sistema registra el pago una sola vez y confirma la cita<br>**And** genera un comprobante consultable por el usuario<br><br>**Scenario 2: Pago rechazado o interrumpido**<br>**Given** que el usuario intenta pagar una sesión<br>**When** la pasarela rechaza la operación o se pierde la conexión<br>**Then** el sistema no marca la cita como pagada ni duplica cargos<br>**And** informa el estado y permite reintentar de forma segura | EP-04 |
| US-038 | Acceso a la videollamada programada | **Como** usuario con una cita confirmada,<br>**Quiero** ingresar a una videollamada segura desde SafeDiary,<br>**Para** recibir atención profesional en el horario reservado. | **Scenario 1: Ingreso a la consulta**<br>**Given** que la cita está confirmada y se encuentra dentro de la ventana de acceso<br>**When** el usuario selecciona unirse a la videollamada<br>**Then** el sistema valida a los participantes y conecta la sesión<br>**And** mantiene privado el historial no autorizado<br><br>**Scenario 2: Fallo de conexión o acceso fuera de horario**<br>**Given** que el usuario intenta entrar sin conexión estable o fuera de la ventana permitida<br>**When** selecciona el enlace de la consulta<br>**Then** el sistema evita un acceso inválido<br>**And** muestra opciones para reintentar o contactar al especialista | EP-04 |
| US-039 | Calificación del especialista | **Como** usuario que completó una sesión,<br>**Quiero** calificar al especialista y escribir una reseña opcional,<br>**Para** compartir mi experiencia y contribuir a una puntuación de confianza transparente. | **Scenario 1: Reseña registrada**<br>**Given** que la cita figura como completada y aún no fue calificada<br>**When** el usuario selecciona una puntuación y confirma su reseña<br>**Then** el sistema vincula la calificación con la cita<br>**And** actualiza el indicador agregado sin revelar datos del paciente<br><br>**Scenario 2: Calificación no permitida**<br>**Given** que la cita no se completó o ya tiene una calificación<br>**When** el usuario intenta enviar otra reseña<br>**Then** el sistema rechaza la duplicación<br>**And** permite editar la reseña existente cuando corresponda | EP-04 |
| US-040 | Escalamiento seguro ante señales de crisis | **Como** usuario cuya interacción contiene posibles señales de peligro inmediato,<br>**Quiero** recibir recursos locales de emergencia y opciones de ayuda humana,<br>**Para** buscar apoyo oportuno sin interpretar la respuesta de la IA como un diagnóstico. | **Scenario 1: Señal de alto riesgo detectada**<br>**Given** que el usuario envía texto o audio con señales configuradas de peligro inmediato<br>**When** el sistema procesa la interacción<br>**Then** muestra un mensaje de apoyo con recursos de emergencia según la ubicación configurada<br>**And** ofrece contactar a una línea de crisis o profesional sin ejecutar la acción automáticamente<br><br>**Scenario 2: Usuario descarta el aviso**<br>**Given** que el sistema presentó opciones de ayuda urgente<br>**When** el usuario decide cerrar el aviso<br>**Then** el sistema permite continuar sin afirmar que monitorea su seguridad<br>**And** mantiene visible una ruta discreta para volver a los recursos de ayuda | EP-03 |
| US-041 | Solicitud de verificación profesional | **Como** psicólogo interesado en ofrecer atención mediante SafeDiary,<br>**Quiero** enviar mis credenciales y consultar el estado de su verificación,<br>**Para** demostrar mi habilitación antes de aparecer en el directorio. | **Scenario 1: Solicitud enviada**<br>**Given** que el psicólogo completó sus datos y adjuntó credenciales válidas<br>**When** confirma la solicitud de verificación<br>**Then** el sistema registra la solicitud con estado pendiente<br>**And** mantiene el perfil fuera del directorio hasta que sea aprobado<br><br>**Scenario 2: Información incompleta o rechazada**<br>**Given** que faltan documentos obligatorios o una credencial no puede validarse<br>**When** se revisa la solicitud<br>**Then** el sistema no habilita el perfil profesional<br>**And** informa qué requisito debe corregirse sin exponer los documentos públicamente | EP-04 |
| US-042 | Transparencia del puntaje de confianza | **Como** especialista verificado,<br>**Quiero** consultar las reseñas y los factores que componen mi puntaje de confianza,<br>**Para** comprender mi posicionamiento y mejorar la calidad de mi atención. | **Scenario 1: Desglose disponible**<br>**Given** que el especialista cuenta con actividad y reseñas válidas<br>**When** abre la sección de confianza de su perfil<br>**Then** el sistema muestra el puntaje y sus componentes de forma comprensible<br>**And** evita revelar la identidad o información emocional de los pacientes<br><br>**Scenario 2: Información insuficiente**<br>**Given** que el especialista todavía no reúne datos suficientes<br>**When** consulta su puntaje de confianza<br>**Then** el sistema muestra un estado informativo sin asignar una valoración engañosa<br>**And** explica qué criterios podrán contribuir cuando exista actividad válida | EP-04 |
| US-043 | Gestión de solicitudes y agenda profesional | **Como** especialista verificado,<br>**Quiero** aceptar, rechazar o proponer un nuevo horario para una solicitud de cita,<br>**Para** mantener mi agenda actualizada y evitar conflictos. | **Scenario 1: Solicitud aceptada**<br>**Given** que existe una solicitud sobre un horario todavía disponible<br>**When** el especialista la acepta<br>**Then** el sistema confirma la cita y bloquea el horario en su agenda<br>**And** notifica al usuario sobre la confirmación<br><br>**Scenario 2: Horario en conflicto**<br>**Given** que el horario solicitado dejó de estar disponible<br>**When** el especialista intenta aceptar o propone una alternativa<br>**Then** el sistema evita una doble asignación<br>**And** permite enviar al usuario un nuevo horario disponible | EP-04 |
| US-044 | Gestión de la atención profesional | **Como** especialista con una cita confirmada,<br>**Quiero** ingresar a la videollamada y registrar el resultado operativo de la cita,<br>**Para** mantener actualizado el historial de atención. | **Scenario 1: Atención completada**<br>**Given** que la cita está confirmada y se encuentra dentro de la ventana de acceso<br>**When** el especialista ingresa, realiza la sesión y la marca como completada<br>**Then** el sistema registra el estado y la hora de finalización<br>**And** habilita la calificación del usuario sin publicar información de la consulta<br><br>**Scenario 2: Cita no realizada**<br>**Given** que la consulta no pudo realizarse por cancelación o inasistencia<br>**When** el especialista selecciona el estado correspondiente<br>**Then** el sistema actualiza la cita de forma auditable<br>**And** aplica únicamente las reglas de pago o reprogramación que correspondan | EP-04 |
| US-045 | Consulta del resumen emocional autorizado | **Como** especialista con una relación de atención vigente,<br>**Quiero** revisar el resumen emocional que el paciente autorizó compartir,<br>**Para** preparar la consulta sin acceder a información excluida de su consentimiento. | **Scenario 1: Resumen autorizado disponible**<br>**Given** que el usuario concedió acceso a un periodo y conjunto de datos específicos<br>**When** el especialista abre la preparación de la cita<br>**Then** el sistema muestra únicamente el resumen y las entradas autorizadas<br>**And** registra el acceso con su fecha, actor y alcance<br><br>**Scenario 2: Sin autorización vigente**<br>**Given** que el usuario no compartió información o revocó el permiso<br>**When** el especialista intenta consultar el resumen<br>**Then** el sistema deniega el acceso<br>**And** permite continuar con la cita sin mostrar datos emocionales privados | EP-01 |
| US-046 | Consulta del alcance del consentimiento | **Como** especialista,<br>**Quiero** visualizar qué información puedo consultar y hasta cuándo permanece vigente el permiso,<br>**Para** respetar el alcance del consentimiento del paciente. | **Scenario 1: Permiso vigente visible**<br>**Given** que el usuario otorgó un consentimiento activo al especialista<br>**When** el especialista consulta los permisos de la relación de atención<br>**Then** el sistema muestra el periodo, las entradas autorizadas y la vigencia<br>**And** diferencia claramente la información que permanece privada<br><br>**Scenario 2: Permiso revocado o vencido**<br>**Given** que el usuario revocó el consentimiento o terminó su vigencia<br>**When** el especialista actualiza o vuelve a abrir la vista<br>**Then** el sistema retira inmediatamente el acceso<br>**And** conserva el evento de revocación o vencimiento en la auditoría | EP-01 |
| US-047 | Consulta de pagos e ingresos profesionales | **Como** especialista verificado,<br>**Quiero** consultar los pagos de mis sesiones, las comisiones aplicadas y los montos pendientes,<br>**Para** llevar un control transparente de mis ingresos. | **Scenario 1: Pago liquidado visible**<br>**Given** que una sesión completada tiene un pago aprobado<br>**When** el especialista abre el detalle financiero<br>**Then** el sistema muestra el importe bruto, la comisión, el importe neto y el estado de liquidación<br>**And** vincula el movimiento con la cita correspondiente sin mostrar datos de pago sensibles<br><br>**Scenario 2: Pago pendiente o reembolsado**<br>**Given** que una transacción todavía está pendiente o fue reembolsada<br>**When** el especialista consulta sus ingresos<br>**Then** el sistema muestra el estado actualizado y el monto afectado<br>**And** evita contabilizarlo como ingreso disponible hasta que corresponda | EP-04 |

**Technical Stories**

| Story ID | Título | Descripción | Criterios de aceptación | Relacionado con Epic ID |
| --- | --- | --- | --- | --- |
| TS-001 | Arquitectura modular y contratos de API | **Como** equipo de desarrollo,<br>**Quiero** organizar el backend por módulos de dominio y documentar sus contratos mediante OpenAPI,<br>**Para** evolucionar las capacidades de SafeDiary sin acoplar datos sensibles ni romper las integraciones móviles. | **Scenario 1: Límites modulares validados**<br>**Given** que existen módulos para identidad y consentimiento, diario, análisis de IA, comunidad, especialistas, citas, pagos, confianza y auditoría<br>**When** se ejecutan las validaciones de arquitectura y los contratos de API<br>**Then** cada módulo accede a otros contextos únicamente mediante interfaces declaradas<br>**And** la documentación expone rutas, esquemas, códigos de respuesta y versiones compatibles<br><br>**Scenario 2: Cambio incompatible**<br>**Given** que una modificación altera un contrato publicado<br>**When** la integración continua compara la nueva especificación con la versión vigente<br>**Then** el proceso de validación falla<br>**And** exige versionar el contrato o mantener compatibilidad | EP-01 |
| TS-002 | Cifrado y gestión segura de secretos | **Como** equipo de seguridad,<br>**Quiero** cifrar la información emocional en tránsito y en reposo y mantener las credenciales fuera del código,<br>**Para** reducir el riesgo de exposición de datos sensibles. | **Scenario 1: Protección de datos sensibles**<br>**Given** que una entrada de diario, audio, transcripción o permiso se almacena o transmite<br>**When** la plataforma procesa la información<br>**Then** utiliza canales cifrados y almacenamiento con claves administradas de forma segura<br>**And** evita registrar contenido emocional, tokens o secretos en logs<br><br>**Scenario 2: Secreto ausente o inválido**<br>**Given** que un servicio no puede recuperar una credencial requerida<br>**When** intenta iniciar o consumir una integración protegida<br>**Then** el servicio rechaza la operación de forma segura<br>**And** genera una alerta técnica sin revelar el valor del secreto | EP-01 |
| TS-003 | Pipeline privado de voz y análisis de IA | **Como** equipo de desarrollo,<br>**Quiero** implementar un pipeline trazable para cargar, transcribir y analizar entradas de voz,<br>**Para** producir reflexiones no diagnósticas sin perder el control sobre el audio y sus resultados. | **Scenario 1: Procesamiento trazable**<br>**Given** que el usuario envía una nota de voz válida<br>**When** el pipeline completa la carga, transcripción y análisis<br>**Then** registra el estado de procesamiento, la versión del modelo, las señales obtenidas y su nivel de confianza<br>**And** vincula el resultado únicamente con la entrada y el propietario autorizados<br><br>**Scenario 2: Procesamiento fallido**<br>**Given** que la transcripción o el análisis no puede completarse<br>**When** el servicio alcanza un error recuperable o definitivo<br>**Then** conserva un estado retryable o failed sin inventar resultados<br>**And** permite reintentar o continuar mediante texto | EP-02 |
| TS-004 | Infraestructura de audio anónimo en tiempo real | **Como** equipo de desarrollo,<br>**Quiero** habilitar comunicación de audio en tiempo real con identidades comunitarias separadas,<br>**Para** soportar salas anónimas sin exponer la identidad clínica ni conservar audio por defecto. | **Scenario 1: Conexión anónima segura**<br>**Given** que un usuario autorizado se une a una sala con capacidad disponible<br>**When** se establece la sesión de audio<br>**Then** la infraestructura utiliza su alias comunitario y activa el micrófono silenciado por defecto<br>**And** no entrega al resto de participantes identificadores clínicos o personales<br><br>**Scenario 2: Finalización de la sala**<br>**Given** que una sala termina o un participante se retira<br>**When** se cierra su conexión en tiempo real<br>**Then** el sistema libera los recursos de sesión<br>**And** no almacena el audio crudo salvo que exista una política y un consentimiento independiente | EP-03 |
| TS-005 | Servicios de moderación y escalamiento seguro | **Como** equipo de confianza y seguridad,<br>**Quiero** centralizar reportes, bloqueos, acciones de moderación y recursos locales de crisis,<br>**Para** responder a incidentes de forma trazable sin prometer monitoreo permanente. | **Scenario 1: Incidente comunitario registrado**<br>**Given** que un usuario reporta o bloquea a otro participante<br>**When** el servicio valida la solicitud<br>**Then** aplica la restricción correspondiente y crea un evento auditable para moderación<br>**And** protege la identidad del denunciante frente a la comunidad<br><br>**Scenario 2: Señal de posible peligro inmediato**<br>**Given** que el análisis detecta una señal configurada de alto riesgo<br>**When** solicita los recursos asociados a la ubicación del usuario<br>**Then** devuelve opciones vigentes de ayuda humana y emergencia<br>**And** no realiza contactos automáticos ni afirma que SafeDiary garantiza la seguridad | EP-03 |
| TS-006 | Orquestación idempotente de citas y pagos | **Como** equipo de desarrollo,<br>**Quiero** coordinar la reserva de horarios, los pagos y la creación de videollamadas mediante operaciones idempotentes,<br>**Para** evitar citas duplicadas, cobros repetidos y accesos inconsistentes. | **Scenario 1: Reserva y pago confirmados**<br>**Given** que existe un horario libre y la pasarela aprueba una transacción válida<br>**When** el sistema procesa la confirmación<br>**Then** registra una sola cita y un solo pago asociados<br>**And** genera el acceso a la videollamada únicamente para sus participantes autorizados<br><br>**Scenario 2: Reintento o fallo parcial**<br>**Given** que se repite un callback o falla una etapa del proceso<br>**When** la orquestación recibe nuevamente la misma clave de idempotencia<br>**Then** no duplica el cargo ni la reserva<br>**And** mantiene un estado recuperable y auditable para completar o compensar la operación | EP-04 |
| TS-007 | Auditoría de accesos y consentimientos | **Como** responsable de privacidad,<br>**Quiero** registrar los accesos a información sensible y los cambios de consentimiento,<br>**Para** demostrar quién consultó qué datos, con qué autorización y durante qué periodo. | **Scenario 1: Acceso autorizado registrado**<br>**Given** que un usuario comparte entradas específicas con un especialista verificado<br>**When** el especialista consulta la información autorizada<br>**Then** el sistema registra actor, alcance, fecha, propósito y referencia del consentimiento<br>**And** evita incluir el contenido emocional completo en el evento de auditoría<br><br>**Scenario 2: Consentimiento revocado**<br>**Given** que el usuario revoca un permiso vigente<br>**When** el especialista intenta acceder nuevamente<br>**Then** el sistema deniega la consulta de inmediato<br>**And** conserva la revocación y el intento denegado en el historial auditable | EP-01 |
| TS-008 | Despliegue, observabilidad y recuperación segura | **Como** equipo de operaciones,<br>**Quiero** automatizar pruebas y despliegues, supervisar la salud de los servicios y verificar respaldos restaurables,<br>**Para** mantener SafeDiary disponible sin comprometer la confidencialidad de sus usuarios. | **Scenario 1: Entrega continua validada**<br>**Given** que se propone un cambio en el repositorio<br>**When** la integración continua ejecuta pruebas, análisis de seguridad y validaciones de contratos<br>**Then** solo permite desplegar una versión que supera los controles definidos<br>**And** conserva una estrategia de reversión hacia la última versión estable<br><br>**Scenario 2: Recuperación ante una falla**<br>**Given** que un servicio crítico deja de responder o se requiere restaurar información<br>**When** se activa el procedimiento de recuperación<br>**Then** las alertas utilizan métricas y metadatos sin contenido emocional sensible<br>**And** el respaldo cifrado puede restaurarse dentro de los objetivos operativos definidos | EP-01 |

### 2.4.2. Impact Mapping

#### Impact Map 1: María

**Primer Segmento Objetivo (Pacientes Jóvenes)**

*Figura: Impact Map de María*

<img src="../assets/images/chap2/impact_mapping/impact_map_maria.png" alt="Impact Map de María" style="width: 100%;">

#### Impact Map 2: Dra. Laura Gómez

**Segundo Segmento Objetivo (Psicólogos Profesionales)**

*Figura: Impact Map de la Dra. Laura Gómez*

<img src="../assets/images/chap2/impact_mapping/impact_map_dra_laura_gomez.png" alt="Impact Map de la Dra. Laura Gómez" style="width: 100%;">


### 2.4.3. Product Backlog

El Product Backlog reúne y prioriza las historias de usuario (US) y las historias técnicas (TS) definidas en la sección 2.4.1, ordenándolas según el valor que aportan al negocio y la complejidad técnica que implica su desarrollo. La priorización combina dos criterios:

* **Valor de negocio por Épica:** siguiendo el Business Problem Statement y el Lean UX Canvas del Capítulo I, EP-01 (cuenta, seguridad, privacidad y consentimiento) y EP-02 (diario emocional, IA e insights) constituyen la base de la propuesta de valor y se priorizan primero, ya que sin identidad segura ni registro emocional no existe producto que ofrecer. EP-04 (atención profesional, citas, pagos y confianza) sigue en prioridad porque sostiene el modelo de ingresos descrito en la sección 2.1 (freemium, comisión por cita y convenios institucionales). EP-03 (comunidad segura y ayuda inmediata) se ubica como complemento de seguridad y contención. EP-05 (landing page) se distribuye en distintos momentos por tratarse de contenido de adquisición de menor complejidad técnica.
* **Estimación de esfuerzo:** cada historia fue estimada mediante Planning Poker utilizando la escala de Fibonacci (1, 2, 3, 5, 8 puntos), reflejando la complejidad técnica, el riesgo y las dependencias identificadas en las historias técnicas (TS) asociadas.

El orden resultante del backlog agrupa primero los elementos de mayor puntaje —correspondientes a la infraestructura crítica de seguridad, IA, pagos y tiempo real— y distribuye el resto según su aporte al MVP. Esta priorización alimenta directamente la planificación de los tres sprints que se detallarán en el Capítulo IV.

Enlace de trello: https://trello.com/invite/b/6aad90c13f858f04fc63f833/ATTI8fd9a76bec0c79fa8a7f8195257de3fcD372B969/product-backlog 

**Tabla 2. Product Backlog de SafeDiary**

| #Orden | Story ID | Título | Story Points (1/2/3/5/8) | Sprint |
| --- | --- | --- | --- | --- |
| 1 | TS-001 | Arquitectura modular y contratos de API | 8 | 1 |
| 2 | TS-002 | Cifrado y gestión segura de secretos | 8 | 1 |
| 3 | TS-003 | Pipeline privado de voz y análisis de IA | 8 | 1 |
| 4 | US-011 | Reflexión guiada por voz con IA | 8 | 1 |
| 5 | TS-004 | Infraestructura de audio anónimo en tiempo real | 8 | 2 |
| 6 | TS-006 | Orquestación idempotente de citas y pagos | 8 | 2 |
| 7 | US-037 | Pago seguro de una sesión | 8 | 2 |
| 8 | US-040 | Escalamiento seguro ante señales de crisis | 8 | 2 |
| 9 | US-002 | Exploración del directorio de especialistas | 5 | 2 |
| 10 | US-009 | Consentimiento para compartir historial | 5 | 2 |
| 11 | US-013 | Acceso inmediato a ayuda de crisis | 5 | 2 |
| 12 | US-014 | Reserva de videollamada profesional | 5 | 2 |
| 13 | US-036 | Gestión del perfil profesional y disponibilidad | 5 | 2 |
| 14 | US-038 | Acceso a la videollamada programada | 5 | 2 |
| 15 | US-039 | Calificación del especialista | 5 | 2 |
| 16 | TS-005 | Servicios de moderación y escalamiento seguro | 5 | 3 |
| 17 | TS-007 | Auditoría de accesos y consentimientos | 5 | 3 |
| 18 | TS-008 | Despliegue, observabilidad y recuperación segura | 5 | 3 |
| 19 | US-012 | Consulta de estadísticas emocionales | 5 | 3 |
| 20 | US-023 | Revocación del acceso al historial | 5 | 3 |
| 21 | US-025 | Protección de entradas en bóveda privada | 5 | 3 |
| 22 | US-033 | Eliminación de cuenta y datos personales | 5 | 3 |
| 23 | US-001 | Registro de cuenta | 3 | 1 |
| 24 | US-003 | Acceso con Google o Apple | 3 | 1 |
| 25 | US-008 | Registro de entrada de diario | 3 | 1 |
| 26 | US-010 | Registro rápido del estado emocional | 3 | 1 |
| 27 | US-015 | Desbloqueo biométrico | 3 | 1 |
| 28 | US-016 | Recuperación de contraseña | 3 | 1 |
| 29 | US-004 | Creación de sala de voz | 3 | 2 |
| 30 | US-005 | Participación en sala de voz | 3 | 2 |
| 31 | US-034 | Reporte y bloqueo en la comunidad | 3 | 2 |
| 32 | US-035 | Moderación de salas de voz | 3 | 2 |
| 33 | US-024 | Recordatorios de registro emocional | 3 | 3 |
| 34 | US-027 | Seguimiento emocional proactivo | 3 | 3 |
| 35 | US-028 | Exportación del progreso en PDF | 3 | 3 |
| 36 | US-031 | Registro de factores externos | 3 | 3 |
| 37 | US-006 | Edición del perfil personal | 2 | 1 |
| 38 | US-021 | Preguntas frecuentes y contacto | 2 | 2 |
| 39 | US-022 | Presentación de MindCluster | 2 | 2 |
| 40 | US-007 | Gestión de rutinas de autocuidado | 2 | 3 |
| 41 | US-026 | Personalización del tono de la IA | 2 | 3 |
| 42 | US-029 | Insignias por constancia emocional | 2 | 3 |
| 43 | US-030 | Ejercicios rápidos de regulación | 2 | 3 |
| 44 | US-032 | Recuerdos de evolución emocional | 2 | 3 |
| 45 | US-017 | Presentación de la propuesta de valor | 1 | 1 |
| 46 | US-018 | Presentación de funcionalidades principales | 1 | 1 |
| 47 | US-019 | Consulta de testimonios | 1 | 1 |
| 48 | US-020 | Consulta de planes y precios | 1 | 1 |


Trelo con el backlog: [Trello SafeDiary](https://trello.com/b/Q2UsNz3t/product-backlog)


## 2.5. Strategic-Level Domain-Driven Design


### 2.5.1. EventStorming


#### 2.5.1.1. Candidate Context Discovery

La Candidate Context Discovery es el proceso colaborativo mediante el cual identificamos y delimitamos las fronteras de los bounded contexts del dominio de SafeDiary. A partir del análisis de la línea de tiempo del Big Picture EventStorming y la identificación de eventos pivote de negocio, se descubrieron los siguientes 7 bounded contexts:

##### IAM (Identity & Access Management)

![Candidate Context - IAM](../assets/images/chap2/candidate-contexts/candidate-iam.png)

Define el límite de seguridad, identidad y gobernanza del consentimiento. El flujo muestra al Paciente y al Especialista autenticándose mediante credenciales o biometría segura, culminando en la generación de tokens de acceso. Asimismo, delimita la frontera crítica donde el paciente otorga o revoca el consentimiento de acceso a su historial clínico para especialistas autorizados mediante el evento pivotal **Consentimiento Otorgado a Especialista**.

##### Profiles

![Candidate Context - Profiles](../assets/images/chap2/candidate-contexts/candidate-profiles.png)

Delimita la gestión de identidades y presentación de los usuarios dentro de la plataforma. Muestra al Paciente configurando su información de perfil personal y recibiendo automáticamente un alias comunitario anónimo con máscara de voz. Por otro lado, ilustra al Psicólogo solicitando su validación profesional ante registros oficiales y publicando su disponibilidad horaria, marcando como evento clave **Ficha Profesional Publicada en Directorio**.

##### Diary

![Candidate Context - Diary](../assets/images/chap2/candidate-contexts/candidate-diary.png)

Representa el núcleo transaccional confidencial de SafeDiary. Modela al Paciente redactando entradas íntimas de texto o registrando notas de voz en su dispositivo móvil, asociando factores de contexto (sueño, energía, estrés) y registrando su estado anímico diario en un solo toque, desencadenando el evento pivotal de negocio **Entrada de Diario Guardada** y la actualización automática de su racha de constancia.

##### AssistantAI

![Candidate Context - AssistantAI](../assets/images/chap2/candidate-contexts/candidate-assistantai.png)

Aísla el motor de soporte reflexivo y procesamiento cognitivo 100% en texto asistido por IA. El flujo detalla la interacción dialógica del Paciente con el asistente, la detección de distorsiones de pensamiento y la evaluación preventiva de riesgo. El evento pivotal en este contexto es **Riesgo Crítico Autolítico Detectado**, el cual actúa como detonante automático para activar protocolos de emergencia y derivación inmediata a líneas de crisis.

##### Communities

![Candidate Context - Communities](../assets/images/chap2/candidate-contexts/candidate-communities.png)

Gobierna la experiencia social y comunitaria de apoyo mutuo bajo estricto anonimato. El flujo expone al Participante ingresando a salas de escucha con su alias seudónimo, enviando reacciones empáticas y solicitando turno de palabra. Delimita las reglas de moderación donde el anfitrión aprueba oradores y gestiona incidentes de seguridad, culminando en eventos pivote como **Participante Promovido a Orador** y **Caso de Moderación Abierto**.

##### Rooms

![Candidate Context - Rooms](../assets/images/chap2/candidate-contexts/candidate-rooms.png)

Agrupa la infraestructura y transporte de audio de baja latencia en tiempo real. Modela la negociación y señalización WebRTC para salas efímeras, aplicando el preset de enmascaramiento de voz configurado en el alias del usuario para proteger su privacidad acústica, estableciendo el evento pivotal **Canal de Audio WebRTC Establecido**.

##### Rutines

![Candidate Context - Rutines](../assets/images/chap2/candidate-contexts/candidate-rutines.png)

Enmarca el módulo de bienestar proactivo y hábitos saludables. Muestra al Paciente explorando el catálogo de ejercicios de respiración guiada, programando recordatorios de autocuidado y completando micro-desafíos emocionales, lo que produce el evento de dominio **Micro-Hábito de Bienestar Completado** para el seguimiento de progreso.

#### 2.5.1.2. Domain Message Flows Modeling

El Domain Message Flows Modeling mapea cómo los mensajes (eventos de integración y comandos) fluyen entre los diferentes bounded contexts identificados para resolver los casos de uso esenciales del negocio. Este modelado es crucial para entender las dependencias dinámicas, los límites de consistencia eventual y los patrones de comunicación asíncrona del sistema.

##### Flujo 1: Registro en Diario y Generación de Reflexión Asistida por IA (Diary ⇄ AssistantAI)

![Flujo 1 - Registro y Reflexión](../assets/images/chap2/message-flows/flow-1-diary-assistantai.png)

Este diagrama ilustra el flujo de análisis emocional y reflexión asistida. Comienza cuando el **Paciente** ejecuta el comando síncrono **Guardar Entrada de Diario** dentro del contexto **Diary**. La persistencia de la vivencia detona el evento asíncrono **DiaryEntryCreated Integration**, el cual viaja a través del Message Broker hacia el contexto **AssistantAI**. Este último procesa el contenido textual mediante el comando **Generar Reflexión Terapéutica** utilizando modelos de lenguaje natural, culminando con la emisión del evento **ReflectionGenerated Integration** que retorna hacia **Diary** para vincular la retroalimentación empática al historial del usuario sin mutar su redacción original.

##### Flujo 2: Detección Preventiva de Crisis y Activación de Protocolo de Emergencia (AssistantAI ⇄ IAM / Línea de Emergencia)

![Flujo 2 - Detección de Crisis](../assets/images/chap2/message-flows/flow-2-crisis-detection.png)

Muestra el protocolo de contención y seguridad ante emergencias psicológicas. Se inicia cuando el **Paciente** interactúa mediante el comando **Enviar Mensaje de Texto** dentro de **AssistantAI**. El motor cognitivo ejecuta internamente el comando **Evaluar Nivel de Riesgo** identificando indicadores autolíticos severos, lo que dispara el evento pivotal **RiskLevelCriticalDetected Integration**. Este evento es consumido de forma concurrente por **IAM** para asentar una traza inmutable en auditoría y por la pasarela de **Línea de Crisis Externa**, activando el evento **CrisisDerivationTriggered** para desplegar en el frontend móvil la derivación telefónica inmediata hacia la Línea 113 Minsa / 988.

##### Flujo 3: Compartición Terapéutica bajo Consentimiento Explícito (IAM ⇄ Profiles ⇄ Diary)

![Flujo 3 - Consentimiento Clínico](../assets/images/chap2/message-flows/flow-3-clinical-consent.png)

Modela el mecanismo de interoperabilidad y gobierno de la privacidad de SafeDiary. El **Paciente** emite el comando **Otorgar Consentimiento a Psicólogo** en **IAM**, definiendo un alcance temporal explícito y generando el evento **ConsentGranted Integration**. Posteriormente, cuando el **Psicólogo Verificado** ejecuta **Consultar Historial Autorizado** en **Diary**, este último valida síncronamente los permisos con **IAM**. Al confirmar la vigencia del contrato, se despacha el evento **AuthorizedEntriesShared Integration**, proporcionando exclusivamente las vivencias aprobadas y garantizando que las notas alojadas en la Bóveda Privada permanezcan estrictamente inaccesibles.

#### 2.5.1.3. Bounded Context Canvases

##### Bounded Context Canvas: AssistantAI

![assisntant_bcc](../assets/images/chap2/boundedcontexts/assistantai-bcc.png)

![diary-bcc](../assets/images/bounded-context/diary/diary-bcc.png)

![communities-bcc](../assets/images/chap2/boundedcontexts/communities-bcc.png)

![rooms-bcc](../assets/images/chap2/boundedcontexts/rooms-bcc.png)

![rutines-bcc](../assets/images/chap2/boundedcontexts/rutines-bcc.png)

En esta imagen represantamos el Bounded Context de Diary, dentro del dominio de SafeDiary. Este Bounded Context es responsable de gestionar las entradas de diario de los usuarios, lo que incluye la creacion, edicion, eliminacion y consulta de las entradas de diario, así como la gestion de los estados emocionales de los usuarios. Ademas permite gestionar el acceso a esta información por parte de otros Bounded Contexts, como el AssistantAI.

![rooms-bcc](../assets/images/bounded-context/rooms/rooms-bcc.png)

![rutines-bcc](../assets/images/bounded-context/rutines/rutines-bcc.png)

### 2.5.2. Context Mapping

##### Resumen del Proceso

El Context Mapping evidencia el proceso mediante el cual el equipo revisó la información recolectada en las secciones previas —Ubiquitous Language (2.3.6), User Stories (2.4.1), EventStorming (2.5.1) y el diseño táctico ya construido (2.6)— para producir un conjunto de diseños candidatos de relación entre Bounded Contexts, discutirlos con las preguntas guía recomendadas ("¿qué pasaría si...?") y converger en la mejor aproximación. El análisis parte de los siete contextos ya desarrollados en el diseño táctico: **IAM**, **Profiles**, **AssistantAI**, **Diary**, **Communities**, **Rooms** y **Rutines**; e incorpora dos contextos que ya son referenciados como sistemas externos por el diseño de Profiles y AssistantAI, pero que todavía no se han modelado tácticamente — **Professional Care & Scheduling** (reservas, videollamadas y pagos, EP-04) y **Reviews & Trust** (reseñas y puntaje de confianza) — y que se documentan aquí únicamente como contextos futuros para no dejar relaciones "colgando". El objetivo del análisis fue maximizar la autonomía de cada contexto, proteger su lenguaje ubicuo y, sobre todo, preservar el principio de privacidad que sostiene el Business Problem Statement de SafeDiary: **ningún contexto valida su propio acceso a datos sensibles sin consultar primero a IAM**.

Como resultado del proceso se elaboraron **dos context maps**: un mapa candidato inicial, más acoplado, que sirvió para hacer explícitos los riesgos de un diseño ingenuo (Shared Kernel + Conformist); y el mapa final aprobado, que aplica los patrones de relación de Domain-Driven Design (Anticorruption Layer, Customer/Supplier, Open Host Service, Published Language, Partnership, Separate Ways) para resolver esos riesgos. Ambos se presentan en la sección "Mapa de Contextos" más abajo.

##### Análisis de Alternativas (Exploración de Diseño)

Siguiendo la guía recomendada, cada pregunta se respondió sobre una capability real ya identificada en el diseño táctico de SafeDiary, no de forma abstracta:

###### 1. ¿Qué pasaría si movemos este capability a otro bounded context? — mover el `CommunityAlias` de Profiles a Communities

* **Análisis:** El alias comunitario (`aliasHandle`, `voiceMaskPreset`) es consumido principalmente por Communities y Rooms, lo que sugiere moverlo a Communities para reducir un salto de contexto. Sin embargo, esto obligaría a Communities a asumir también la generación y rotación de identidades, duplicando una responsabilidad de identidad que ya está centralizada en Profiles junto con el perfil personal y la ficha profesional.
* **Decisión:** No mover. `CommunityAlias` permanece en Profiles porque agrupa, bajo una sola responsabilidad cohesiva, las distintas "caras" de un mismo `Account` (perfil personal, alias, ficha profesional). Communities y Rooms lo consumen como Published Language (relación D).

###### 2. ¿Qué pasaría si descomponemos este capability y movemos uno de los sub-capabilities a otro bounded context? — separar "disponibilidad publicada" de "reserva transaccional" dentro de `ClinicianProfile`

* **Análisis:** `ClinicianProfile` (Profiles) incluye hoy tanto la publicación declarativa de horarios (`AvailabilityWindow`, bajo cambio, mayormente de lectura) como, potencialmente, la reserva transaccional de una cita concreta (alta contención, requiere idempotencia ante reservas simultáneas — TS-006). Mezclar ambas responsabilidades en un mismo contexto forzaría a un modelo de consistencia único para dos necesidades muy distintas.
* **Decisión:** Descomponer. La publicación de disponibilidad se queda en Profiles (sub-capability de bajo cambio); la reserva, el pago y la videollamada se mueven al futuro contexto **Professional Care & Scheduling**, que solo lee la disponibilidad publicada por Profiles (relación G) sin duplicarla.

###### 3. ¿Qué pasaría si partimos el bounded context en múltiples bounded contexts?

* **Caso A — Diary (rechazado):** se evaluó partir Diary en "Diary" (registro) y "Diary Insights" (rachas, insignias, recuerdos retrospectivos). **Análisis:** hoy `DiaryStreak` se recalcula de forma síncrona e idempotente en cada entrada (US-029); partirlo introduciría latencia de sincronización sin un beneficio de escalabilidad independiente demostrado. **Decisión:** no partir; Diary permanece como un único Bounded Context cohesivo.
* **Caso B — Communities/Rooms (aceptado):** se evaluó la partición inversa, es decir, si convenía **no** partir y mantener un único contexto "Comunidad". **Análisis:** Rooms exige infraestructura de audio en tiempo real de baja latencia (TS-004: WebRTC/SFU, enmascaramiento de voz, escalado por sala activa), mientras que Communities es, en esencia, un catálogo CRUD de salas, categorías y políticas de moderación (US-004, US-034, US-035); fusionarlos forzaría a escalar y desplegar el catálogo administrativo cada vez que crece la demanda de audio en vivo. **Decisión:** mantenerlos partidos en dos Bounded Contexts (relación E).

###### 4. ¿Qué pasaría si tomamos este capability de estos 3 contexts y lo usamos para formar un nuevo context? — extraer "detección y respuesta a crisis" de AssistantAI, Diary y Rooms

* **Análisis:** la capability de seguridad ante riesgo aparece triplicada con distinto vocabulario: `RiskAssessment`/`CrisisProtocolActivated` en AssistantAI, `isSensitive`/acceso a ayuda inmediata en Diary (US-013), y `Report`/`Block`/`ModerationAction` en Communities-Rooms. Consolidarlas en un nuevo contexto **Crisis & Safety** evitaría triplicar la lógica de "qué constituye una señal de riesgo" y centralizaría el catálogo de recursos de emergencia (988/113 Minsa), hoy solo disponible dentro del `CrisisHotlineAdapter` de AssistantAI.
* **Decisión:** Es una alternativa válida para una iteración futura del producto, pero se descarta para el alcance actual: cada contexto conserva su propia detección local, ya que separarla introduciría una dependencia síncrona crítica (evaluar riesgo) para tres contextos distintos, aumentando el radio de impacto de una sola falla. En su lugar, se centraliza únicamente el catálogo de recursos de emergencia como **shared service** (ver pregunta 6), sin fusionar la lógica de negocio de riesgo.

###### 5. ¿Qué pasaría si duplicamos una funcionalidad para romper la dependencia?

* **Caso A — Consentimiento en Diary (rechazado):** se evaluó que Diary mantuviera una copia local cacheada del `Consent` vigente, en lugar de consultar a IAM en cada lectura, para reducir el acoplamiento síncrono. **Análisis:** una revocación (`ConsentRevoked`) no se reflejaría de inmediato, permitiendo que un especialista siga leyendo entradas después de que el paciente revocó el acceso — inaceptable frente al requisito de privacidad no negociable (US-023). **Decisión:** rechazado; se prioriza la consistencia fuerte sobre la disponibilidad para este caso (relación B).
* **Caso B — Calificación de especialistas en Profiles (aceptado):** Profiles duplica (cachea) el `ratingAverage`/`reviewCount` calculado por el futuro contexto Reviews & Trust en vez de consultarlo en cada búsqueda del directorio. **Análisis:** un retraso de segundos en reflejar una nueva reseña no compromete la privacidad ni la seguridad del paciente, y sí evita una llamada síncrona costosa cada vez que se lista el directorio de especialistas (US-002). **Decisión:** aceptado como read model (relación H).

###### 6. ¿Qué pasaría si creamos un shared service para reducir la duplicación entre múltiples bounded contexts? — un servicio de Notificaciones

* **Análisis:** Diary (recordatorios, US-024), AssistantAI (alertas de crisis), Rooms (avisos de moderación) y Rutines (recordatorios de rutina) necesitan enviar notificaciones push. Sin un servicio compartido, cada contexto implementaría su propio cliente de Firebase Cloud Messaging/Apple APNs, duplicando código de integración y credenciales.
* **Decisión:** Crear un **shared service** de Notificaciones (subdominio genérico, no un Bounded Context de negocio). Cada contexto sigue siendo dueño de su propia decisión de "cuándo notificar" y publica su propio evento de dominio (`DiaryReminderDue`, `CrisisProtocolActivated`, etc.); el servicio compartido solo traduce esos eventos a push notifications, evitando duplicar la integración con FCM/APNs.

###### 7. ¿Qué pasaría si aislamos los core capabilities y movemos los otros a un context aparte?

* **Análisis:** Diary y AssistantAI concentran la propuesta de valor diferencial de SafeDiary —el puente entre el registro privado y la atención profesional, descrito en el Business Problem Statement del Capítulo I—; IAM, Profiles, Communities, Rooms y Rutines son necesarios pero replicables con soluciones de mercado (auth-as-a-service, CRUD de perfiles, salas de audio genéricas).
* **Decisión:** Adoptado como principio rector de todo el mapa: **Diary** y **AssistantAI** se clasifican como *Core Domain*; **Communities**, **Rooms** y **Rutines** como *Supporting Subdomain*; **IAM** como *Generic Subdomain* (Open Host Service reutilizable) y **Profiles** como subdominio de soporte que depende de IAM. Esto permite invertir el mayor esfuerzo de ingeniería propio en Diary y AssistantAI.

###### 8. ¿Qué pasaría si creáramos un Shared Kernel entre IAM y Profiles para el concepto de "identidad de usuario"?

* **Análisis:** Ambos contextos giran en torno al mismo `accountId`, pero con propósitos distintos: IAM protege credenciales, biometría y consentimiento (superficie de alta sensibilidad y cumplimiento normativo); Profiles expone datos de presentación pública (nombre, alias, ficha profesional). Compartir un mismo modelo obligaría a desplegar y versionar ambos contextos de forma acoplada, y ampliaría innecesariamente la superficie de ataque sobre los datos de seguridad.
* **Decisión:** Rechazado. IAM se mantiene como **Open Host Service**, exponiendo únicamente el `accountId` autenticado y los contratos de validación (`ConsentAuthorizationService`). Profiles —y el resto de contextos— solo referencian ese identificador, sin acceso directo al modelo interno de cuentas.

##### Patrones de Relación y Mapa de Contextos

SafeDiary adopta una arquitectura orientada a eventos (EDA) para las relaciones asíncronas y contratos HTTP explícitos para las validaciones síncronas de identidad. A continuación se detallan los patrones DDD aplicados entre contextos:

###### A. IAM (Upstream) -> Profiles, AssistantAI, Communities, Rooms, Rutines (Downstream)

* **Patrón:** **Open Host Service (OHS) / Published Language (PL)**.
* **Motivo:** Todos los contextos necesitan un `accountId` autenticado, pero ninguno debe conocer cómo IAM valida credenciales, biometría o proveedores federados. IAM expone un contrato estable (identidad + estado de sesión) que el resto simplemente consume, sin acoplarse a su modelo interno.

###### B. IAM (Upstream) -> Diary (Downstream)

* **Patrón:** **Open Host Service + Anticorruption Layer (ACL) del lado del consumidor**.
* **Motivo:** Diary necesita algo más específico que la identidad: necesita saber si un especialista concreto puede leer una entrada concreta. Consume el contrato `ConsentAuthorizationService` de IAM a través de `IamConsentClientAdapter`, una capa que traduce la respuesta de IAM al lenguaje propio de Diary sin filtrar su modelo de `Consent` o `SharingPermission` hacia el dominio del diario.

###### C. Diary (Upstream) <-> AssistantAI (Downstream / Upstream)

* **Patrón:** **Partnership vía Published Language**.
* **Motivo:** La relación es bidireccional y de igual jerarquía: Diary publica `DiaryEntryCreated` para que AssistantAI transcriba y analice; AssistantAI publica `ReflectionGenerated` para que Diary la asocie a la entrada original. Ninguno de los dos puede evolucionar su contrato de eventos sin coordinar con el otro, por lo que se trata como una sociedad (Partnership) y no como un simple Customer-Supplier unidireccional.

###### D. Profiles (Upstream) -> Rooms (Downstream)

* **Patrón:** **Customer-Supplier / Published Language**.
* **Motivo:** Rooms necesita el `aliasHandle` y el `voiceMaskPreset` del `CommunityAlias` (Profiles) para identificar a los participantes de una sala sin exponer su identidad clínica. Profiles publica estos datos como lenguaje compartido; Rooms los consume en tiempo real al iniciar una sesión de audio.

###### E. Communities (Upstream) -> Rooms (Downstream)

* **Patrón:** **Partnership / Open Host Service**.
* **Motivo:** Communities define el catálogo de categorías, el listado público de salas y las políticas de moderación (host, oyente, reporte, bloqueo). Rooms hereda esas reglas al abrir una sesión de audio, pero ambos equipos deben coordinar cambios en la política de moderación, ya que Rooms es quien las ejecuta en tiempo real (TS-005).

###### F. AssistantAI (Upstream) -> Professional Care & Scheduling *(futuro)* (Downstream)

* **Patrón:** **Customer-Supplier / Anticorruption Layer**.
* **Motivo:** El resumen clínico generado por AssistantAI (`ClinicalSummaryGenerated`) es consumido por el contexto de agendamiento profesional para preparar la consulta (US-045). Al no existir aún tácticamente, se documenta como relación planeada; cuando se construya, deberá incorporar una ACL para no acoplar su modelo de citas al modelo conversacional de AssistantAI.

###### G. Profiles (Upstream) -> Professional Care & Scheduling *(futuro)* (Downstream)

* **Patrón:** **Customer-Supplier**.
* **Motivo:** El agendamiento necesita las `AvailabilityWindow` publicadas y el `verificationStatus` de `ClinicianProfile` para permitir reservar una cita, pero no gestiona ni duplica esa información: siempre la consulta a Profiles (ver el límite explícito documentado en 2.6.2, "Profiles no gestiona la reserva transaccional de una cita").

###### H. Reviews & Trust *(futuro)* (Upstream) -> Profiles (Downstream)

* **Patrón:** **Published Language**.
* **Motivo:** Profiles no calcula reseñas ni confianza; solo cachea un read model (`ratingAverage`, `reviewCount`) que actualiza al consumir el evento `ClinicianRatingSummaryUpdated` mediante `ReviewsIntegrationEventListener` (ver 2.6.2.4). Esta relación ya está resuelta en el diseño táctico de Profiles.

###### I. Diary (Bounded Context) — Rutines (Bounded Context)

* **Patrón:** **Separate Ways**.
* **Motivo:** Aunque ambos tocan el autocuidado emocional, Diary ya resuelve su propia gamificación (`DiaryStreak`, sección 2.6.6.1) y Rutines administra actividades independientes de bienestar (US-007). No existe hoy una necesidad de negocio validada que justifique acoplarlos; de surgir en el futuro (p. ej. que completar una rutina cuente como factor externo de una entrada), se abordaría mediante un evento de integración explícito y no mediante acceso directo a datos.

##### Mapa de Contextos (diagrama)

**Candidato inicial (descartado).** Este primer diseño surge de responder ingenuamente a la presión de "simplificar" la integración: fusiona IAM y Profiles mediante un Shared Kernel y hace que el resto de contextos actúen como Conformist del modelo de IAM. Se descarta por las razones expuestas en las preguntas 7 y 8: acopla el despliegue de todos los contextos a los cambios de seguridad de IAM y elimina la autonomía de cada equipo.

```mermaid
graph LR
    IAMProfiles["IAM + Profiles<br/>(Shared Kernel)"]
    Diary0["Diary"]
    AssistantAI0["AssistantAI"]
    Communities0["Communities"]
    Rooms0["Rooms"]
    Rutines0["Rutines"]

    IAMProfiles -->|"Conformist"| Diary0
    IAMProfiles -->|"Conformist"| AssistantAI0
    IAMProfiles -->|"Conformist"| Communities0
    IAMProfiles -->|"Conformist"| Rooms0
    IAMProfiles -->|"Conformist"| Rutines0
```

**Mapa final aprobado.** Resultado de aplicar las decisiones de las preguntas 1 a 8: IAM queda como Open Host Service independiente de Profiles, se introduce Anticorruption Layer donde hay validación de consentimiento, Published Language donde la integración es asíncrona, y Separate Ways donde no hay necesidad de negocio validada.

```mermaid
graph LR
    IAM["IAM<br/>(Generic Subdomain)"]
    Profiles["Profiles<br/>(Supporting Subdomain)"]
    Diary["Diary<br/>(Core Domain)"]
    AssistantAI["AssistantAI<br/>(Core Domain)"]
    Communities["Communities<br/>(Supporting Subdomain)"]
    Rooms["Rooms<br/>(Supporting Subdomain)"]
    Rutines["Rutines<br/>(Supporting Subdomain)"]
    ProfessionalCare["Professional Care & Scheduling<br/>(futuro / fuera de alcance)"]
    Reviews["Reviews & Trust<br/>(futuro / fuera de alcance)"]

    IAM -->|"A: OHS/PL AccountId"| Profiles
    IAM -->|"B: OHS + ACL ConsentAuthorizationService"| Diary
    IAM -.->|"A: OHS AccountId"| AssistantAI
    IAM -.->|"A: OHS AccountId"| Communities
    IAM -.->|"A: OHS AccountId"| Rooms
    IAM -.->|"A: OHS AccountId"| Rutines

    Diary <-->|"C: Partnership/PL DiaryEntryCreated ⇄ ReflectionGenerated"| AssistantAI
    Profiles -->|"D: CS/PL CommunityAlias, voiceMaskPreset"| Rooms
    Communities -->|"E: Partnership/OHS catálogo y políticas"| Rooms
    AssistantAI -.->|"F: CS/ACL ClinicalSummaryGenerated"| ProfessionalCare
    Profiles -.->|"G: CS disponibilidad publicada"| ProfessionalCare
    Reviews -.->|"H: PL ClinicianRatingSummaryUpdated"| Profiles
    Diary -.-|"I: Separate Ways"| Rutines
```

*Nota:* las flechas punteadas representan relaciones con un contexto todavía no desarrollado tácticamente (Professional Care & Scheduling, Reviews & Trust) o de acoplamiento deliberadamente bajo (IAM hacia los contextos que solo consumen `accountId`); las flechas continuas representan relaciones con un contrato ya implementado en el diseño táctico (sección 2.6).

##### Discusión de Alternativas y Conclusión

De las ocho preguntas exploradas, cinco decisiones ya están reflejadas en el diseño táctico existente (2, 3-B, 5-A, 5-B, 8) y tres quedan documentadas como trabajo futuro explícito (2 como frontera hacia Professional Care & Scheduling, 4 y 6 como candidatos a revisar en la siguiente iteración del producto). El hilo conductor de todas las decisiones fue rechazar los patrones que maximizan la velocidad de integración a corto plazo a costa del acoplamiento —**Shared Kernel** entre IAM y Profiles (pregunta 8) y **Conformist** generalizado de todos los contextos hacia el modelo de IAM (mapa candidato inicial)— porque habrían obligado a todos los contextos a evolucionar en sincronía con los cambios de seguridad e identidad de IAM, contradiciendo el principio de autonomía por contexto que exige el negocio (equipos y despliegues independientes por Bounded Context, según TS-001). La combinación elegida —**Open Host Service** para la identidad transversal (relación A), **Anticorruption Layer** en los consumidores de contratos sensibles (relaciones B y F), **Customer/Supplier** donde un contexto consume capacidades de otro sin alterarlas (relaciones D, G), **Published Language** para la integración asíncrona (relaciones C, H) y **Separate Ways** donde no hay una necesidad de negocio validada (relación I)— permite que cada contexto evolucione de forma independiente sin comprometer la privacidad ni la disponibilidad del registro emocional, que es el valor central de SafeDiary.

### 2.5.3. Software Architecture

La arquitectura de software de **SafeDiary** se estructura siguiendo las directrices del **C4 Model** (Context, Containers, Components, Code), propuesto por Simon Brown. Este modelo arquitectónico proporciona una abstracción jerárquica y coherente del sistema, permitiendo visualizar desde las fronteras organizacionales y las interacciones con actores y sistemas externos (Nivel 1: Contexto), hasta la descomposición en unidades de ejecución y tecnologías de persistencia (Nivel 2: Contenedores), la estructura modular interna de cada servicio (Nivel 3: Componentes) y los modelos de clases y esquemas relacionales (Nivel 4: Código).

La solución ha sido concebida bajo un paradigma de **arquitectura orientada a servicios desacoplados (Service-Oriented / Microservices Architecture)** alineada estrictamente con los principios del diseño táctico de Domain-Driven Design (DDD). Cada Bounded Context opera como una unidad de despliegue y persistencia independiente, comunicándose de manera síncrona mediante APIs REST a través de un API Gateway centralizado y de manera asíncrona mediante un Message Broker para la propagación reactiva de eventos de dominio.

#### 2.5.3.1. Software Architecture Context Level Diagrams

![SafeDiary - System Context Diagram](../assets/images/chap2/architecture/context-diagram.png)

Código en **Structurizr DSL (C4 Model)**:

```text
workspace "SafeDiary - System Context" "C4 System Context Diagram de la solución SafeDiary" {

    model {
        patient    = person "Paciente" "Usuario principal que registra su diario emocional, interactúa con el asistente de IA por texto, participa en comunidades anónimas y gestiona su consentimiento."
        specialist = person "Especialista en Salud Mental" "Psicólogo o psiquiatra verificado que consulta el historial autorizado de sus consultantes y publica su perfil profesional."
        visitor    = person "Usuario de la App / Visitante" "Persona que busca especialistas verificados en el directorio y explora recursos públicos de bienestar emocional."

        safeDiary = softwareSystem "SafeDiary" "Plataforma móvil integral para el registro de vivencias, soporte reflexivo con IA basada en texto, comunidades seguras de apoyo y vinculación terapéutica controlada por consentimiento."

        oauthProvider = softwareSystem "Google / Apple Identity Providers" "Servicios de autenticación federada OpenID Connect / OAuth2 para inicio de sesión seguro." "External System"
        vertexAi      = softwareSystem "Google Cloud Vertex AI (Gemini API)" "Modelo fundacional de lenguaje natural para inferencia de distorsiones cognitivas, resúmenes clínicos y moderación de contenido." "External System"
        pushService   = softwareSystem "Firebase Cloud Messaging (FCM) / APNs" "Infraestructura de mensajería push para despachar recordatorios de diario, hábitos y alertas en tiempo real." "External System"
        crisisHotline = softwareSystem "Línea Nacional de Emergencia (Línea 113 / 988)" "Servicio telefónico y telemático de intervención en crisis e ideación suicida." "External System"
        objectStorage = softwareSystem "Cloud Object Storage (AWS S3 / GCS)" "Almacenamiento en la nube cifrado en reposo para notas de voz del diario y archivos adjuntos." "External System"

        patient    -> safeDiary     "Registra diario, conversa con AssistantAI por texto, hace check-in, participa en comunidades y gestiona consentimiento" "HTTPS / WSS"
        specialist -> safeDiary     "Publica ficha profesional y consulta historial clínico autorizado de pacientes" "HTTPS"
        visitor    -> safeDiary     "Explora directorio público de especialistas y recursos de bienestar" "HTTPS"

        safeDiary  -> oauthProvider "Autentica identidad federada e intercambia tokens OAuth2/OIDC" "HTTPS/JSON"
        safeDiary  -> vertexAi      "Envía prompts de texto sanitizados para inferencia reflexiva y detección de riesgos" "HTTPS/gRPC"
        safeDiary  -> pushService   "Solicita el envío de notificaciones push programadas y eventos urgentes" "HTTPS/JSON"
        safeDiary  -> crisisHotline "Deriva llamadas y suministra enlaces de contacto inmediato ante riesgo crítico" "Teléfono / HTTPS"
        safeDiary  -> objectStorage "Almacena y recupera notas de voz cifradas en reposo" "HTTPS / Presigned URLs"
    }

    views {
        systemContext safeDiary "SystemContext" {
            include *
            autoLayout
        }

        styles {
            element "Person" {
                shape Person
                background #08427b
                color #ffffff
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "External System" {
                background #6c757d
                color #ffffff
            }
        }
    }
}
```

#### 2.5.3.2. Software Architecture Container Level Diagrams

![SafeDiary - Container Level Diagram](../assets/images/chap2/architecture/container-diagram.png)

Código en **Structurizr DSL (C4 Model)**:

```text
workspace "SafeDiary - Containers" "C4 Container Diagram de la plataforma SafeDiary" {

    model {
        patient    = person "Paciente" "Interactúa con la app móvil para escribir en su diario, chatear con la IA por texto y participar en comunidades."
        specialist = person "Especialista Verificado" "Accede a su perfil y consulta historial autorizado de sus consultantes."
        visitor    = person "Visitante" "Consulta el directorio de especialistas y recursos informativos."

        safeDiary = softwareSystem "SafeDiary" {

            mobileApp = container "SafeDiary Mobile App" "Interfaz cliente nativa multiplataforma para registro emocional, interacción reflexiva por texto y participación social." "Flutter / Dart (iOS & Android)"
            apiGateway = container "API Gateway" "Punto único de entrada inverso, terminación TLS, validación inicial de JWT, rate limiting y enrutamiento hacia microservicios." "Reverse Proxy / Envoy / Ocelot"

            iamApi = container "IAM Service" "Gestiona cuentas de usuario, biometría, contratos de consentimiento y auditoría de accesos." "ASP.NET Core / Node.js Web API"
            profilesApi = container "Profiles Service" "Gestiona perfiles personales, alias comunitarios anónimos y fichas profesionales de especialistas." "ASP.NET Core / Node.js Web API"
            assistantAiApi = container "AssistantAI Service" "Motor de soporte conversacional 100% texto, detección de distorsiones cognitivas, evaluación de riesgo de crisis y resúmenes clínicos." "ASP.NET Core / Python Web API"
            diaryApi = container "Diary Service" "Core domain: gestiona entradas íntimas de texto/voz, mood check-ins de 1 toque, recordatorios, rachas y exportación PDF." "ASP.NET Core / Node.js Web API"
            communitiesApi = container "Communities Service" "Gestiona foros de apoyo anónimos, moderación de posts, hilos de desahogo y reacciones empáticas." "ASP.NET Core / Node.js Web API"
            roomsApi = container "Rooms Service" "Gestiona salas efímeras de apoyo mutuo en tiempo real, señalización WebRTC y moderación en vivo." "Node.js / WebSockets / WebRTC Signaling"
            rutinesApi = container "Rutines Service" "Gestiona catálogo de hábitos de bienestar, micro-desafíos emocionales y seguimiento de cumplimiento." "ASP.NET Core / Node.js Web API"

            iamDb         = container "IAM Database" "Persiste cuentas, credenciales cifradas, tokens biométricos y directivas de consentimiento." "PostgreSQL 15" "Database"
            profilesDb    = container "Profiles Database" "Persiste datos de perfil, alias anónimos y directorio de terapeutas con geolocalización." "PostgreSQL 15" "Database"
            assistantAiDb = container "AssistantAI Database" "Persiste sesiones de conversación en texto, mensajes, distorsiones detectadas y evaluaciones de riesgo." "PostgreSQL 15" "Database"
            diaryDb       = container "Diary Database" "Persiste entradas de diario, factores externos, series temporales de humor y rachas." "PostgreSQL 15" "Database"
            communitiesDb = container "Communities Database" "Persiste hilos comunitarios, comentarios, votos empáticos y reportes de moderación." "PostgreSQL 15" "Database"
            roomsDb       = container "Rooms Database & Cache" "Mantiene estado en memoria de salas activas, participantes conectados y señalización." "Redis 7 / PostgreSQL" "Database"
            rutinesDb     = container "Rutines Database" "Persiste catálogo de ejercicios de respiración, hábitos programados e historial de cumplimiento." "PostgreSQL 15" "Database"

            eventBus      = container "Event Bus" "Broker de eventos asíncrono para publicar y suscribir eventos de dominio de forma desacoplada." "RabbitMQ / Apache Kafka" "Queue"
            objectStorage = container "Cloud Object Storage" "Almacenamiento de blobs cifrado en reposo para archivos crudos de notas de voz." "AWS S3 / Google Cloud Storage" "Storage"
        }

        oauthProvider = softwareSystem "Google / Apple Identity Providers" "Autenticación federada OpenID Connect." "External System"
        vertexAi      = softwareSystem "Google Cloud Vertex AI (Gemini API)" "Inferencia de modelos fundacionales de LLM." "External System"
        pushService   = softwareSystem "Firebase Cloud Messaging (FCM)" "Servicio push para dispositivos móviles." "External System"
        crisisHotline = softwareSystem "Línea de Crisis 113 / 988" "Atención telefónica de emergencia." "External System"

        # Relaciones de Actores con Contenedores
        patient    -> mobileApp "Interactúa con la interfaz nativa táctil" "UI / Gestos"
        specialist -> mobileApp "Gestiona perfil y consulta historial compartido" "UI / Gestos"
        visitor    -> mobileApp "Explora directorio y recomendaciones" "UI / Gestos"

        # Relaciones del Cliente Móvil con Gateway
        mobileApp  -> apiGateway "Realiza peticiones seguras de API y abre canales en vivo" "HTTPS / WSS"

        # Enrutamiento de Gateway a Microservicios
        apiGateway -> iamApi         "Enruta /api/v1/iam/*" "HTTPS/JSON"
        apiGateway -> profilesApi    "Enruta /api/v1/profiles/*" "HTTPS/JSON"
        apiGateway -> assistantAiApi "Enruta /api/v1/assistant/*" "HTTPS/JSON"
        apiGateway -> diaryApi       "Enruta /api/v1/diary/*" "HTTPS/JSON"
        apiGateway -> communitiesApi "Enruta /api/v1/communities/*" "HTTPS/JSON"
        apiGateway -> roomsApi       "Enruta /api/v1/rooms/* y /ws/rooms" "WSS / HTTPS"
        apiGateway -> rutinesApi     "Enruta /api/v1/rutines/*" "HTTPS/JSON"

        # Persistencia en Bases de Datos
        iamApi         -> iamDb         "Lee y escribe cuentas y consentimientos" "SQL/TCP"
        profilesApi    -> profilesDb    "Lee y escribe perfiles y especialistas" "SQL/TCP"
        assistantAiApi -> assistantAiDb "Lee y escribe sesiones de texto y distorsiones" "SQL/TCP"
        diaryApi       -> diaryDb       "Lee y escribe entradas de texto y check-ins" "SQL/TCP"
        communitiesApi -> communitiesDb "Lee y escribe publicaciones y reportes" "SQL/TCP"
        roomsApi       -> roomsDb       "Lee y actualiza sesiones de salas efímeras" "Redis RESP / SQL"
        rutinesApi     -> rutinesDb     "Lee y escribe hábitos y cumplimiento" "SQL/TCP"

        # Integración Asíncrona con Event Bus (Publish / Subscribe)
        diaryApi       -> eventBus "Publica DiaryEntryCreated, MoodCheckInLogged" "AMQP"
        assistantAiApi -> eventBus "Publica RiskLevelCriticalDetected, ClinicalSummaryGenerated" "AMQP"
        iamApi         -> eventBus "Publica ConsentGranted, ConsentRevoked, AccountDeactivated" "AMQP"
        communitiesApi -> eventBus "Publica CommunityPostReported" "AMQP"

        eventBus -> assistantAiApi "Consume DiaryEntryCreated para inferencia de reflexiones" "AMQP"
        eventBus -> rutinesApi     "Consume MoodCheckInLogged para sugerir hábitos adaptativos" "AMQP"

        # Integraciones con Sistemas Externos y Storage
        iamApi         -> oauthProvider "Valida tokens federados OAuth2" "HTTPS/JSON"
        assistantAiApi -> vertexAi      "Invoca inferencia de texto (Gemini)" "HTTPS/gRPC"
        assistantAiApi -> crisisHotline "Ofrece canal de contacto directo si hay crisis" "Teléfono / Deep link"
        diaryApi       -> objectStorage "Almacena y recupera audios crudos" "HTTPS / Presigned URLs"
        diaryApi       -> pushService   "Programa recordatorios push" "HTTPS/JSON"
        rutinesApi     -> pushService   "Programa alertas de hábitos diarios" "HTTPS/JSON"
    }

    views {
        container safeDiary "Containers" {
            include *
            autoLayout
        }

        styles {
            element "Person" {
                shape Person
                background #08427b
                color #ffffff
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Database" {
                shape Cylinder
                background #2a6f97
                color #ffffff
            }
            element "Queue" {
                shape Pipe
                background #014f86
                color #ffffff
            }
            element "Storage" {
                shape Folder
                background #2a6f97
                color #ffffff
            }
            element "External System" {
                background #6c757d
                color #ffffff
            }
        }
    }
}
```

---

#### 2.5.3.3. Software Architecture Deployment Diagrams



## 2.6. Tactical-Level Domain-Driven Design



### 2.6.1. Bounded Context: IAM

**IAM (Identity & Access Management)** es el contexto que sostiene la seguridad y el consentimiento de SafeDiary: administra la cuenta, la autenticación (correo, biometría, Google/Apple), la recuperación y eliminación de cuenta, la bóveda privada y, sobre todo, el consentimiento explícito y revocable que un paciente otorga a un especialista para acceder a su historial (US-001, US-003, US-009, US-015, US-016, US-023, US-025, US-033, US-045, US-046, TS-001, TS-002, TS-007). Ningún otro bounded context almacena credenciales, permisos de compartición o el registro de auditoría: todos consultan a IAM a través de su API para validar identidad o alcance de consentimiento (patrón Open Host Service / Published Language descrito en la futura sección 2.5.2 de Context Mapping).

#### 2.6.1.1. Domain Layer

**Entities y Aggregates**
- **Account (Aggregate Root):** id, email, passwordHash (nulo si el acceso es federado), status (active, suspended, pending_deletion), biometricEnabled, createdAt. La pantalla de acceso (mockup) confirma que `biometricEnabled` habilita dos flujos: el ingreso rápido a la sesión ("FaceID Quick Unlock") y, cuando el usuario abre una entrada protegida, la validación de `PrivateVault.verifyAccess()` ("Instant biometric entry to your vault") — es la misma credencial biométrica del dispositivo, pero IAM la evalúa en dos puntos de control distintos.
- **AuthProvider:** proveedor federado vinculado a una cuenta (Google, Apple) con su identificador externo.
- **Consent (Aggregate Root):** autorización otorgada por un paciente (ownerId) a un especialista (granteeId), con estado (active, revoked, expired) y su vigencia.
- **SharingPermission:** alcance concreto de un Consent (periodo y entradas autorizadas del diario).
- **PrivateVault (Aggregate Root):** espacio protegido por PIN o biometría que referencia entradas sensibles del diario sin almacenar su contenido.
- **AuditEvent (Aggregate Root, append-only):** registro trazable de un acceso, consentimiento, revocación o intento denegado.

**Value Objects**
- **AccountId, ConsentId, AuditEventId:** identificadores únicos del dominio.
- **AccountStatus:** ACTIVE, SUSPENDED, PENDING_DELETION.
- **ConsentStatus:** ACTIVE, REVOKED, EXPIRED.
- **AuditAction:** ACCESS_GRANTED, ACCESS_DENIED, CONSENT_GRANTED, CONSENT_REVOKED, VAULT_UNLOCKED.
- **AuthProviderType:** EMAIL, GOOGLE, APPLE.

**Domain Events**
- AccountRegistered, AccountAuthenticated, BiometricUnlockEnabled, PasswordResetRequested, AccountDeletionRequested, AccountDeleted, ConsentGranted, ConsentRevoked, VaultEntryProtected, AccessAudited.

**Commands**
- RegisterAccountCommand, AuthenticateWithProviderCommand, RequestPasswordResetCommand, ResetPasswordCommand, EnableBiometricUnlockCommand, RequestAccountDeletionCommand, GrantConsentCommand, RevokeConsentCommand, ProtectEntryInVaultCommand.

**Queries**
- GetAccountByIdQuery, GetActiveConsentsByOwnerQuery, GetConsentScopeForSpecialistQuery, GetAuditTrailByOwnerQuery.

**Domain Services (Contratos)**
- AccountAuthenticationService, ConsentAuthorizationService (verifica si una consulta de un especialista cae dentro del alcance vigente; es el contrato que consumen otros bounded contexts), VaultAccessService, AuditLogger.

#### 2.6.1.2. Interface Layer

**Controllers**
- **AccountsController:** registro, autenticación federada, biometría, recuperación de contraseña y eliminación de cuenta (US-001, US-003, US-015, US-016, US-033).
- **ConsentsController:** otorga, lista y revoca permisos de compartición (US-009, US-023).
- **VaultController:** protege y valida el acceso a entradas de la bóveda privada (US-025).
- **AuditController:** expone al especialista el alcance vigente de su consentimiento (US-045, US-046) y permite al paciente auditar sus accesos concedidos.

**Resources (Request/Response DTOs)**
- **Account:** RegisterAccountResource, AuthenticateResource, ResetPasswordResource, DeleteAccountResource.
- **Consent:** GrantConsentResource, RevokeConsentResource, ConsentScopeResource.
- **Vault:** ProtectEntryResource, VerifyVaultAccessResource.
- **Audit:** AuditEventResource, ConsentAuditTrailResource.

#### 2.6.1.3. Application Layer

**Command Handlers**
- **AccountCommandServiceImpl:** RegisterAccountCommand, AuthenticateWithProviderCommand, ResetPasswordCommand, RequestAccountDeletionCommand.
- **ConsentCommandServiceImpl:** GrantConsentCommand, RevokeConsentCommand.
- **VaultCommandServiceImpl:** ProtectEntryInVaultCommand.

**Query Handlers**
- **AccountQueryServiceImpl:** GetAccountByIdQuery.
- **ConsentQueryServiceImpl:** GetActiveConsentsByOwnerQuery, GetConsentScopeForSpecialistQuery (usada por otros contextos para validar acceso).
- **AuditQueryServiceImpl:** GetAuditTrailByOwnerQuery.

#### 2.6.1.4. Infrastructure Layer

**Repositories**
- **AccountRepository:** búsqueda por email y por proveedor federado + id externo; valida unicidad de correo.
- **ConsentRepository:** consultas de consentimientos activos por owner o por grantee; filtra por vigencia.
- **PrivateVaultRepository:** persistencia de la bóveda y sus referencias protegidas.
- **AuditEventRepository:** repositorio append-only, indexado por actor, objetivo y fecha.

**Adaptadores externos**
- **SecretsManagerAdapter:** gestiona claves de cifrado y credenciales fuera del código fuente (TS-002).
- **FederatedAuthAdapter:** integra Google Sign-In y Apple Sign-In.
- **EmailNotificationAdapter:** envía el enlace seguro de recuperación de contraseña (US-016).

#### 2.6.1.5. Bounded Context Software Architecture Component Level Diagrams

![structurizr-IAM-BC](../assets/images/chap2/boundedcontexts/IAM_Components-dark.png)

#### 2.6.1.6. Bounded Context Software Architecture Code Level Diagrams

##### 2.6.1.6.1. Bounded Context Domain Layer Class Diagrams

Código en **Mermaid** (puede pegarse en [mermaid.live](https://mermaid.live) para visualizarlo):

```mermaid
classDiagram
    class Account {
        +String id
        +String email
        +String passwordHash
        +AccountStatus status
        +Boolean biometricEnabled
        +DateTime createdAt
        +register()
        +authenticate()
        +enableBiometricUnlock()
        +requestDeletion()
    }
    class AuthProvider {
        +String id
        +AuthProviderType type
        +String externalId
    }
    class Consent {
        +String id
        +String ownerAccountId
        +String granteeAccountId
        +ConsentStatus status
        +DateTime grantedAt
        +DateTime revokedAt
        +grant()
        +revoke()
    }
    class SharingPermission {
        +String id
        +Date periodStart
        +Date periodEnd
        +List~String~ entryIds
    }
    class PrivateVault {
        +String id
        +String accountId
        +String pinHash
        +protectEntry()
        +verifyAccess()
    }
    class AuditEvent {
        +String id
        +String actorAccountId
        +String targetAccountId
        +AuditAction action
        +DateTime occurredAt
    }
    class ConsentAuthorizationService {
        +isWithinScope(specialistId, entryId) Boolean
    }

    Account "1" --> "0..*" AuthProvider : tiene
    Account "1" --> "0..*" Consent : otorga como owner
    Consent "1" --> "1..*" SharingPermission : define alcance
    Account "1" --> "0..1" PrivateVault : posee
    Consent "1" --> "0..*" AuditEvent : genera
    ConsentAuthorizationService ..> Consent : valida
```

##### 2.6.1.6.2. Bounded Context Database Design Diagram

Código en **Mermaid ER Diagram** (también puede importarse en [dbdiagram.io](https://dbdiagram.io) adaptando la sintaxis):

```mermaid
erDiagram
    ACCOUNTS {
        uuid id PK
        string email
        string password_hash
        string status
        boolean biometric_enabled
        datetime created_at
    }
    AUTH_PROVIDERS {
        uuid id PK
        uuid account_id FK
        string provider_type
        string external_id
    }
    CONSENTS {
        uuid id PK
        uuid owner_account_id FK
        uuid grantee_account_id FK
        string status
        datetime granted_at
        datetime revoked_at
    }
    SHARING_PERMISSIONS {
        uuid id PK
        uuid consent_id FK
        date period_start
        date period_end
    }
    PRIVATE_VAULTS {
        uuid id PK
        uuid account_id FK
        string pin_hash
    }
    VAULT_ENTRIES {
        uuid id PK
        uuid vault_id FK
        uuid diary_entry_id
    }
    AUDIT_EVENTS {
        uuid id PK
        uuid actor_account_id FK
        uuid target_account_id FK
        uuid consent_id FK
        string action
        datetime occurred_at
    }

    ACCOUNTS ||--o{ AUTH_PROVIDERS : "has providers"
    ACCOUNTS ||--o{ CONSENTS : "grants as owner"
    ACCOUNTS ||--o{ CONSENTS : "receives as grantee"
    CONSENTS ||--o{ SHARING_PERMISSIONS : "has scope"
    ACCOUNTS ||--o| PRIVATE_VAULTS : "owns"
    PRIVATE_VAULTS ||--o{ VAULT_ENTRIES : "protects"
    ACCOUNTS ||--o{ AUDIT_EVENTS : "acts as actor"
    CONSENTS ||--o{ AUDIT_EVENTS : "audited by"
```



### 2.6.2. Bounded Context: Profiles

**Profiles** administra las distintas "caras" con las que un mismo Account (definido en IAM) se presenta dentro de SafeDiary: el perfil personal del paciente, su alias comunitario anónimo y la ficha profesional del especialista, incluyendo su solicitud de verificación (US-002, US-006, US-036, US-041, US-042). Profiles **no** almacena credenciales ni consentimiento —eso es responsabilidad exclusiva de IAM—; solo referencia el `accountId` y confía en IAM para validar la identidad. De igual forma, Profiles publica los datos de la ficha profesional (especialidades, tarifa, disponibilidad declarada) pero no gestiona la reserva transaccional de una cita, que corresponde a un futuro contexto de agendamiento.

Los mockups de la aplicación confirman y afinan tres detalles del modelo: (1) la pantalla *Home* muestra el `displayName` en el saludo ("Good morning, Elena") y el `avatarUrl` en la cabecera, tal como se modeló en `PersonalProfile`; (2) la pantalla *Support* expone en cada tarjeta de especialista credencial académica, título profesional, años de experiencia, la etiqueta "Accepts Insurance", un resumen de calificación (p. ej. "4.9 (140+)") y un ícono de marcador/favorito, información que **no** estaba en la primera versión del `ClinicianProfile` y que se incorpora a continuación; y (3) la pantalla *Community* indica "Voice Masking Active: Pitch Shift: Soft Whisper", confirmando que el `CommunityAlias` necesita una preferencia de enmascaramiento de voz que Rooms aplicará en tiempo real.

#### 2.6.2.1. Domain Layer

**Entities y Aggregates**
- **PersonalProfile (Aggregate Root):** id, accountId, displayName, avatarUrl, aiTonePreference, proactiveFollowUpEnabled, savedClinicianProfileIds[] (especialistas guardados/marcados desde el directorio — ícono de marcador en *Support*).
- **CommunityAlias (Aggregate Root):** id, accountId, aliasHandle, active, rotatedAt, voiceMaskPreset — identidad seudónima usada en Communities/Rooms, separada de la identidad clínica (ver Ubiquitous Language, sección 2.3.6). El `voiceMaskPreset` (p. ej. "Soft Whisper") es la preferencia que Rooms consulta para aplicar el efecto de voz sin exponer el tono real del usuario.
- **ClinicianProfile (Aggregate Root):** id, accountId, credential, title, specialties[], yearsOfExperience, bio, hourlyRate, currency, sessionDurationMinutes, insuranceAccepted, verificationStatus, publishedInDirectory, ratingAverage, reviewCount. Los dos últimos campos son un **read model** cacheado: Profiles no calcula reseñas ni confianza (eso pertenece a un futuro contexto de Pagos/Reseñas, ver Ubiquitous Language "Payments, Reviews & Trust"), solo los refleja en la ficha para no depender de una llamada síncrona cada vez que se lista el directorio.
- **AvailabilityWindow:** bloque recurrente (día, hora de inicio/fin, zona horaria) que el especialista publica como disponible. La "próxima disponibilidad" que muestra la tarjeta del directorio ("Next available: Today, 4:30 PM") es un valor compuesto a partir de estas ventanas y de los horarios ya reservados en el futuro contexto de agendamiento, no un campo propio de Profiles.
- **ClinicianVerification:** solicitud de verificación con sus documentos de credencial y su estado (PENDING, APPROVED, REJECTED).

**Value Objects**
- **DisplayName, AvatarUrl, AliasHandle:** identificadores de presentación.
- **Specialty, HourlyRate (Money), Timezone:** datos de la ficha profesional.
- **Credential, ProfessionalTitle:** p. ej. "Psy.D.", "LMFT", "MD" y "Licensed Clinical Psychologist" respectivamente.
- **RatingSummary:** ratingAverage + reviewCount, recibido por evento de integración.
- **VoiceMaskPreset:** NONE, SOFT_WHISPER, DEEP_TONE, ROBOTIC.
- **VerificationStatus:** PENDING, APPROVED, REJECTED.

**Domain Events**
- PersonalProfileUpdated, SpecialistSaved, SpecialistUnsaved, CommunityAliasRotated, VoiceMaskPresetUpdated, ClinicianVerificationRequested, ClinicianVerificationApproved, ClinicianVerificationRejected, ClinicianProfilePublished, ClinicianAvailabilityPublished.

**Commands**
- UpdatePersonalProfileCommand, SaveSpecialistCommand, RemoveSavedSpecialistCommand, RotateCommunityAliasCommand, UpdateVoiceMaskPresetCommand, SubmitClinicianVerificationCommand, ReviewClinicianVerificationCommand, UpdateClinicianProfileCommand, PublishAvailabilityWindowsCommand, ApplyClinicianRatingSummaryCommand (interna, disparada al recibir el evento de integración del contexto de Reseñas).

**Queries**
- GetPersonalProfileByAccountIdQuery, GetSavedSpecialistsByAccountIdQuery, GetCommunityAliasByAccountIdQuery, SearchClinicianProfilesQuery (por especialidad, tarifa, seguro y disponibilidad — soporta US-002), GetClinicianProfileByIdQuery, GetClinicianVerificationStatusQuery.

**Domain Services (Contratos)**
- **ClinicianDirectoryPublicationService:** decide si `publishedInDirectory = true` (requiere verificación aprobada y al menos una disponibilidad publicada).
- **AliasGenerationService:** genera y rota alias sin exponer la identidad clínica.

#### 2.6.2.2. Interface Layer

**Controllers**
- **PersonalProfilesController:** edición de nombre, foto y preferencias (US-006, US-026).
- **SpecialistBookmarksController:** guarda y elimina especialistas marcados desde el directorio (ícono de marcador en *Support*).
- **CommunityAliasesController:** genera, rota el alias comunitario y actualiza su preferencia de enmascaramiento de voz (pantalla *Community*).
- **ClinicianProfilesController:** publica y busca fichas profesionales (US-002, US-036, US-042).
- **ClinicianVerificationsController:** recibe y consulta solicitudes de verificación (US-041).

**Resources (Request/Response DTOs)**
- **PersonalProfile:** UpdatePersonalProfileResource, AiTonePreferenceResource.
- **SpecialistBookmark:** SaveSpecialistResource, SavedSpecialistListResource.
- **CommunityAlias:** CommunityAliasResource, VoiceMaskPresetResource.
- **ClinicianProfile:** UpdateClinicianProfileResource, ClinicianSearchResource, ClinicianProfileResource (incluye credential, title, yearsOfExperience, insuranceAccepted, ratingAverage, reviewCount), AvailabilityWindowResource.
- **ClinicianVerification:** SubmitVerificationResource, VerificationStatusResource.

#### 2.6.2.3. Application Layer

**Command Handlers**
- **PersonalProfileCommandServiceImpl:** UpdatePersonalProfileCommand.
- **SpecialistBookmarkCommandServiceImpl:** SaveSpecialistCommand, RemoveSavedSpecialistCommand.
- **CommunityAliasCommandServiceImpl:** RotateCommunityAliasCommand, UpdateVoiceMaskPresetCommand.
- **ClinicianProfileCommandServiceImpl:** UpdateClinicianProfileCommand, PublishAvailabilityWindowsCommand.
- **ClinicianVerificationServiceImpl:** SubmitClinicianVerificationCommand, ReviewClinicianVerificationCommand.
- **ClinicianRatingSyncServiceImpl:** ApplyClinicianRatingSummaryCommand, ejecutado al consumir el evento de integración `ClinicianRatingSummaryUpdated` publicado por el futuro contexto de Reseñas.

**Query Handlers**
- **PersonalProfileQueryServiceImpl:** GetPersonalProfileByAccountIdQuery, GetSavedSpecialistsByAccountIdQuery.
- **ClinicianDirectoryQueryServiceImpl:** SearchClinicianProfilesQuery, GetClinicianProfileByIdQuery, GetClinicianVerificationStatusQuery.

#### 2.6.2.4. Infrastructure Layer

**Repositories**
- **PersonalProfileRepository:** consultas por accountId.
- **SavedSpecialistRepository:** consultas de especialistas guardados por accountId; valida duplicados.
- **CommunityAliasRepository:** consultas por accountId; valida unicidad del alias activo.
- **ClinicianProfileRepository:** búsqueda por especialidad, tarifa, seguro y disponibilidad; filtra solo fichas publicadas para el directorio; ordena por calificación cacheada.
- **ClinicianVerificationRepository:** consultas por estado y por clinicianProfileId.

**Adaptadores externos**
- **DocumentStorageAdapter:** almacena las credenciales de verificación cifradas (bucket privado, acceso restringido a revisión administrativa).
- **ImageStorageAdapter:** almacena fotos de perfil y avatares.
- **ReviewsIntegrationEventListener:** consume `ClinicianRatingSummaryUpdated` desde el Event Bus y actualiza el read model de calificación de `ClinicianProfile` (Profiles solo lee este dato, nunca lo calcula).

#### 2.6.2.5. Bounded Context Software Architecture Component Level Diagrams

![structurizr-Profiles-BC](../assets/images/chap2/boundedcontexts/Profiles_Components-dark.png)

#### 2.6.2.6. Bounded Context Software Architecture Code Level Diagrams

##### 2.6.2.6.1. Bounded Context Domain Layer Class Diagrams

```mermaid
classDiagram
    class PersonalProfile {
        +String id
        +String accountId
        +String displayName
        +String avatarUrl
        +String aiTonePreference
        +Boolean proactiveFollowUpEnabled
        +List~String~ savedClinicianProfileIds
        +update()
        +saveSpecialist(clinicianProfileId)
        +removeSavedSpecialist(clinicianProfileId)
    }
    class CommunityAlias {
        +String id
        +String accountId
        +String aliasHandle
        +Boolean active
        +VoiceMaskPreset voiceMaskPreset
        +rotate()
        +updateVoiceMaskPreset(preset)
    }
    class ClinicianProfile {
        +String id
        +String accountId
        +String credential
        +String title
        +List~String~ specialties
        +Int yearsOfExperience
        +String bio
        +Money hourlyRate
        +Int sessionDurationMinutes
        +Boolean insuranceAccepted
        +VerificationStatus verificationStatus
        +Boolean publishedInDirectory
        +Decimal ratingAverage
        +Int reviewCount
        +updateProfile()
        +publishAvailability()
        +applyRatingSummary(ratingAverage, reviewCount)
    }
    class AvailabilityWindow {
        +String id
        +String dayOfWeek
        +Time startTime
        +Time endTime
        +String timezone
    }
    class ClinicianVerification {
        +String id
        +String clinicianProfileId
        +List~String~ documentRefs
        +VerificationStatus status
        +submit()
        +review()
    }
    class ClinicianDirectoryPublicationService {
        +evaluate(ClinicianProfile) Boolean
    }

    ClinicianProfile "1" --> "0..*" AvailabilityWindow : publica
    ClinicianProfile "1" --> "1" ClinicianVerification : requiere
    PersonalProfile "0..*" ..> ClinicianProfile : guarda como favorito
    ClinicianDirectoryPublicationService ..> ClinicianProfile : evalúa
```

##### 2.6.2.6.2. Bounded Context Database Design Diagram

```mermaid
erDiagram
    PERSONAL_PROFILES {
        uuid id PK
        uuid account_id FK
        string display_name
        string avatar_url
        string ai_tone_preference
        boolean proactive_follow_up_enabled
    }
    SAVED_SPECIALISTS {
        uuid id PK
        uuid personal_profile_id FK
        uuid clinician_profile_id FK
        datetime saved_at
    }
    COMMUNITY_ALIASES {
        uuid id PK
        uuid account_id FK
        string alias_handle
        boolean active
        string voice_mask_preset
        datetime rotated_at
    }
    CLINICIAN_PROFILES {
        uuid id PK
        uuid account_id FK
        string credential
        string title
        int years_of_experience
        string bio
        float hourly_rate
        string currency
        int session_duration_minutes
        boolean insurance_accepted
        string verification_status
        boolean published_in_directory
        float rating_average
        int review_count
    }
    CLINICIAN_SPECIALTIES {
        uuid id PK
        uuid clinician_profile_id FK
        string specialty_name
    }
    CLINICIAN_AVAILABILITY_WINDOWS {
        uuid id PK
        uuid clinician_profile_id FK
        string day_of_week
        time start_time
        time end_time
        string timezone
    }
    CLINICIAN_VERIFICATIONS {
        uuid id PK
        uuid clinician_profile_id FK
        string status
        datetime submitted_at
        datetime reviewed_at
    }

    PERSONAL_PROFILES ||--o{ SAVED_SPECIALISTS : "bookmarks"
    CLINICIAN_PROFILES ||--o{ SAVED_SPECIALISTS : "is bookmarked in"
    CLINICIAN_PROFILES ||--o{ CLINICIAN_SPECIALTIES : "has specialties"
    CLINICIAN_PROFILES ||--o{ CLINICIAN_AVAILABILITY_WINDOWS : "publishes"
    CLINICIAN_PROFILES ||--|| CLINICIAN_VERIFICATIONS : "requires"
```



### 2.6.3. Bounded Context: AssistantAI

**AssistantAI** es el contexto nuclear que provee las capacidades de inteligencia artificial emocional de SafeDiary: orquesta sesiones conversacionales reflexivas mediante mensajes de texto, clasifica emociones predominantes alineadas a la rueda de Plutchik, detecta patrones de distorsión cognitiva, evalúa de forma preventiva el riesgo autolesivo para activar protocolos de crisis e integra resúmenes estructurados para enriquecer la atención clínica de los psicólogos (US-011, US-026, US-027, US-040, TS-003).

La interacción con el asistente se realiza **exclusivamente por vía textual**, reconociendo que para personas con ansiedad, depresión o sobrecarga emocional, hablar en voz alta representa una barrera psicológica intimidante; la escritura ofrece un ritmo propio de introspección y desahogo sin presión inmediata. 

AssistantAI actúa estrictamente bajo un principio ético de **no intervención diagnóstica**: la IA no emite juicios patológicos ni formula planes terapéuticos, sino que ofrece una escucha activa estructurada, validación emocional y destilación contextual. Para evitar el acoplamiento directo con proveedores comerciales de LLM, el contexto implementa un **Anti-Corruption Layer (ACL)** que traduce los contratos de OpenAI/Gemini al modelo de dominio de SafeDiary.

#### 2.6.3.1. Domain Layer

**Entities y Aggregates**
- **ConversationSession (Aggregate Root):** id, accountId, startedAt, endedAt, status (ACTIVE, CLOSED, CRISIS_TRIGGERED), currentTone, messages[]. Representa una interacción continua de diálogo reflexivo entre el usuario y el asistente de IA.
- **ConversationMessage:** id, sessionId, sender (USER, AI), content (texto de la reflexión o respuesta), sentAt, emotionTag (etiqueta normalizada según la rueda de Plutchik).
- **CognitiveDistortion:** distorsión de pensamiento detectada en el mensaje del paciente (ej. catastrofismo, pensamiento todo-o-nada, sobregeneralización), con su nivel de certeza y fragmento de evidencia.
- **RiskAssessment (Aggregate Root / Entity de seguridad):** id, sessionId, assessedAt, riskScore, riskLevel (LOW, MODERATE, CRITICAL), triggerKeywords[], crisisProtocolActivated. Registro inmutable de la evaluación de riesgo de la sesión.
- **ClinicalSummary (Aggregate Root):** id, accountId, periodStart, periodEnd, dominantEmotions[], keyTriggers[], synthesisNarrative, highlights[], generatedAt. Síntesis periódica generada para que el psicólogo prepare la sesión sin sobrecarga de lectura.

**Value Objects**
- **SessionId, MessageId, AssessmentId, SummaryId:** identificadores fuertemente tipados.
- **PersonalityTone:** EMPATHIC, REFLECTIVE, ANALYTICAL, CALM (calibra el estilo lingüístico del LLM).
- **RiskLevel:** LOW, MODERATE, CRITICAL.
- **PlutchikEmotionTag:** APPREHENSION, ACCEPTANCE, ANNOYANCE, VIGILANCE, PENSIVENESS, SERENITY, JOY, SADNESS, FEAR.
- **DistortionType:** CATASTROPHIZING, OVERGENERALIZATION, ALL_OR_NOTHING, EMOTIONAL_REASONING, MENTAL_FILTER.
- **SessionStatus:** ACTIVE, CLOSED, CRISIS_TRIGGERED.

**Domain Events**
- ConversationSessionStarted, UserMessageReceived, EmotionClassified, CognitiveDistortionDetected, RiskEvaluated, CrisisProtocolActivated, ReflectionGenerated, ClinicalSummaryGenerated, PersonalityToneUpdated.

**Commands**
- StartConversationCommand, SendTextMessageCommand, EvaluateRiskCommand, ActivateCrisisProtocolCommand, GenerateReflectionCommand, GenerateWeeklyClinicalSummaryCommand, ChangePersonalityToneCommand.

**Queries**
- GetActiveConversationSessionQuery, GetSessionHistoryByAccountQuery, GetWeeklyClinicalSummaryQuery, GetCurrentRiskAssessmentQuery.

**Domain Services (Contratos)**
- **RiskPolicyService:** determina si los indicadores y puntajes de riesgo exigen interrumpir la conversación estándar y disparar la alerta de emergencia (línea 988).
- **EmotionClassifierService:** normaliza los resultados de inferencia afectiva hacia los vectores estandarizados de Plutchik.
- **ClinicalSummarySynthesizerService:** procesa el historial semanal de reflexiones para compilar detonantes y patrones clave sin exponer transcripciones literales no autorizadas.

#### 2.6.3.2. Interface Layer

**Controllers**
- **AiConversationsController:** inicia sesiones de diálogo, recibe mensajes de texto reflexivos, expone las respuestas generadas y el historial de interacción (US-011, US-027).
- **AiPreferencesController:** consulta y actualiza el tono de personalidad y las preferencias del asistente para la cuenta (US-026).
- **CrisisAlertController:** expone el estado de seguridad de la sesión, desencadenando recursos de emergencia y enlaces con líneas de ayuda locales (US-040).
- **ClinicalSummariesController:** expone al psicólogo el resumen emocional autorizado y permite la generación bajo demanda de reportes de periodo (US-045).

**Resources (Request/Response DTOs)**
- **Conversation:** StartSessionResource, SendTextMessageResource, ConversationSessionResource, MessageResource, ReflectionResponseResource.
- **Preferences:** PersonalityToneResource, UpdateAiToneResource.
- **Crisis:** CrisisEvaluationResource, EmergencyHotlineResource.
- **ClinicalSummary:** ClinicalSummaryResource, WeeklyEmotionalOverviewResource.

#### 2.6.3.3. Application Layer

**Command Handlers**
- **ConversationCommandServiceImpl:** StartConversationCommand, SendTextMessageCommand, GenerateReflectionCommand.
- **CrisisCommandServiceImpl:** EvaluateRiskCommand, ActivateCrisisProtocolCommand.
- **ClinicalSummaryCommandServiceImpl:** GenerateWeeklyClinicalSummaryCommand.
- **AiPreferencesCommandServiceImpl:** ChangePersonalityToneCommand.

**Query Handlers**
- **ConversationQueryServiceImpl:** GetActiveConversationSessionQuery, GetSessionHistoryByAccountQuery.
- **ClinicalSummaryQueryServiceImpl:** GetWeeklyClinicalSummaryQuery.
- **CrisisQueryServiceImpl:** GetCurrentRiskAssessmentQuery.

**Event Handlers**
- **CriticalRiskDetectedEventHandler:** reacciona al evento `RiskEvaluated` para activar la política de contención y notificar al bus de eventos.
- **WeeklySummaryTriggerEventHandler:** procesa la tarea programada de cierre semanal para sintetizar las reflexiones del paciente.

#### 2.6.3.4. Infrastructure Layer

**Repositories**
- **ConversationSessionRepository:** persistencia relacional de sesiones y mensajes cronológicos.
- **RiskAssessmentRepository:** persistencia append-only de evaluaciones de riesgo clínico.
- **ClinicalSummaryRepository:** persistencia y consulta indexada por cuenta y rango de fechas de resúmenes clínicos.

**Adaptadores externos**
- **GeminiLlmAdapter (ACL):** Anti-Corruption Layer que encapsula los llamados HTTP/gRPC a Google Gemini API para extracción de entidades, clasificación de emociones y síntesis textual empática.
- **CrisisHotlineAdapter:** directorio de integración con servicios y marcadores de líneas de emergencia (Línea 988 / 113 Minsa en Perú).

#### 2.6.3.5. Bounded Context Software Architecture Component Level Diagrams

![structurizr-AssistantAI-BC](../assets/images/bounded-context/ai/container-assistantai.png)

Código en **Structurizr DSL (C4 Model)** para el componente de AssistantAI:
```text
workspace "SafeDiary - AssistantAI (Component Diagram)" "C4 Component Diagram del bounded context AssistantAI" {
    model {
        patient = person "Paciente" "Interactúa mediante texto reflexivo con la IA, consulta reflexiones y ajusta el tono."

        safeDiary = softwareSystem "SafeDiary" {
            assistantAiApi = container "AssistantAI API" "Procesa conversaciones por texto, clasifica emociones, evalúa riesgos y genera resúmenes." "ASP.NET Core / Python FastAPI" {
                conversationsController     = component "AiConversationsController" "Endpoints para iniciar chats, enviar mensajes de texto y recibir reflexiones." "REST Controller"
                aiPreferencesController     = component "AiPreferencesController" "Endpoints para consultar y actualizar el tono de personalidad de la IA." "REST Controller"
                clinicalSummariesController = component "ClinicalSummariesController" "Endpoints para generar y consultar resúmenes estructurados para especialistas." "REST Controller"
                crisisAlertController       = component "CrisisAlertController" "Endpoints de consulta de estado de emergencia y líneas de ayuda." "REST Controller"

                conversationCmdService  = component "ConversationCommandServiceImpl" "Orquesta el procesamiento de mensajes de texto y reflexiones." "Application Service"
                conversationQryService  = component "ConversationQueryServiceImpl" "Consultas de historial de interacciones con la IA." "Application Service"
                summaryCmdService       = component "ClinicalSummaryCommandServiceImpl" "Compila y sintetiza resúmenes clínicos periódicos." "Application Service"
                crisisEvaluationService = component "CrisisEvaluationServiceImpl" "Aplica políticas de detección de riesgo y activación de protocolos." "Application Service"

                conversationAggregate    = component "ConversationSession Aggregate" "Invariantes de la sesión de diálogo, mensajes y turnos." "Domain Model (DDD)"
                riskAssessmentEntity     = component "RiskAssessment Entity" "Invariantes de evaluación de riesgo e indicadores críticos." "Domain Model (DDD)"
                clinicalSummaryAggregate = component "ClinicalSummary Aggregate" "Invariantes de la síntesis semanal de emociones y detonantes." "Domain Model (DDD)"
                riskPolicyService        = component "RiskPolicyService" "Valida si el puntaje de riesgo exige activación de protocolo de emergencia." "Domain Service"
                emotionClassifierService = component "EmotionClassifierService" "Normaliza etiquetas emocionales hacia la rueda de Plutchik." "Domain Service"

                conversationRepo    = component "ConversationSessionRepository" "Persistencia de sesiones de conversación y mensajes." "Repository"
                clinicalSummaryRepo = component "ClinicalSummaryRepository" "Persistencia de resúmenes clínicos semanales." "Repository"
                riskAssessmentRepo  = component "RiskAssessmentRepository" "Persistencia de auditoría de evaluaciones de riesgo." "Repository"

                geminiLlmAdapter     = component "GeminiLlmAdapter" "Cliente Anti-Corruption Layer hacia Google Gemini API." "Infrastructure Adapter"
                crisisHotlineAdapter = component "CrisisHotlineAdapter" "Conecta con catálogos y protocolos de líneas de emergencia (988)." "Infrastructure Adapter"
            }

            postgres = container "AssistantAI Database" "Persistencia de conversaciones, evaluaciones de riesgo y resúmenes." "PostgreSQL 15"
            eventBus = container "Event Bus" "Publica CrisisProtocolActivated, ClinicalSummaryGenerated, ReflectionGenerated." "RabbitMQ / Kafka"
        }

        diaryContext    = softwareSystem "Diary (Bounded Context externo)" "Provee entradas de diario y recibe reflexiones generadas."
        clinicalContext = softwareSystem "Professional Care (Bounded Context externo)" "Recibe resúmenes clínicos para la preparación de consultas."
        geminiApi       = softwareSystem "Google Gemini API (External System)" "Modelo fundacional LLM para análisis de lenguaje natural y generación."
        crisisService   = softwareSystem "Línea de Crisis 988 (External System)" "Servicio telefónico y digital de emergencia y contención humana."

        # Interacciones del paciente con controladores
        patient -> conversationsController "Envía mensajes de texto reflexivos" "HTTPS/JSON"
        patient -> aiPreferencesController "Configura tono de personalidad" "HTTPS/JSON"
        patient -> crisisAlertController   "Consulta recursos y líneas de emergencia" "HTTPS/JSON"

        # Controladores a servicios de aplicación
        conversationsController     -> conversationCmdService  "Envía comandos de conversación"
        conversationsController     -> conversationQryService  "Envía queries de historial"
        aiPreferencesController     -> conversationCmdService  "Envía comandos de personalización"
        clinicalSummariesController -> summaryCmdService       "Dispara generación de resumen"
        crisisAlertController       -> crisisEvaluationService "Consulta estado de riesgo"

        # Servicios de aplicación a dominio
        conversationCmdService  -> conversationAggregate    "Orquesta mensajes"
        conversationCmdService  -> riskPolicyService        "Evalúa riesgo de contenido"
        conversationCmdService  -> emotionClassifierService "Clasifica emociones"
        crisisEvaluationService -> riskAssessmentEntity     "Registra evaluación"
        summaryCmdService       -> clinicalSummaryAggregate "Genera resumen"

        # Servicios de aplicación a adaptadores externos
        conversationCmdService  -> geminiLlmAdapter     "Genera reflexión y analiza distorsiones"
        crisisEvaluationService -> crisisHotlineAdapter "Obtiene recursos locales"
        summaryCmdService       -> geminiLlmAdapter     "Sintetiza tendencias semanales"

        # Adaptadores a sistemas externos
        geminiLlmAdapter     -> geminiApi       "Solicita inferencia LLM" "HTTPS/gRPC"
        crisisHotlineAdapter -> crisisService   "Enlaza con protocolo 988" "Tel/HTTPS"

        # Servicios de aplicación a repositorios
        conversationCmdService  -> conversationRepo    "Persiste"
        conversationQryService  -> conversationRepo    "Consulta"
        crisisEvaluationService -> riskAssessmentRepo  "Persiste"
        summaryCmdService       -> clinicalSummaryRepo "Persiste"

        # Repositorios a base de datos
        conversationRepo    -> postgres "CRUD" "SQL/TCP"
        clinicalSummaryRepo -> postgres "CRUD" "SQL/TCP"
        riskAssessmentRepo  -> postgres "CRUD" "SQL/TCP"

        # Eventos al Event Bus
        conversationAggregate    -> eventBus "Publica ReflectionGenerated"
        riskAssessmentEntity     -> eventBus "Publica CrisisProtocolActivated"
        clinicalSummaryAggregate -> eventBus "Publica ClinicalSummaryGenerated"

        # Integraciones entre bounded contexts
        eventBus     -> clinicalContext         "Entrega ClinicalSummaryGenerated"
        eventBus     -> diaryContext            "Entrega ReflectionGenerated"
        diaryContext -> conversationsController "Sincroniza entradas para contexto" "HTTPS/JSON"
    }

    views {
        component assistantAiApi "AssistantAI_Components" {
            include *
            autoLayout
        }

        styles {
            element "Person" {
                shape Person
                background #08427b
                color #ffffff
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Component" {
                background #85bbf0
                color #000000
            }
        }
    }
}
```

#### 2.6.3.6. Bounded Context Software Architecture Code Level Diagrams

##### 2.6.3.6.1. Bounded Context Domain Layer Class Diagrams

![structurizr-AssistantAI-BC](../assets/images/bounded-context/ai/class-diagram-ai.png)

Código en **Mermaid Class Diagram**:

```mermaid
classDiagram
    class ConversationSession {
        +UUID id
        +UUID accountId
        +DateTime startedAt
        +DateTime endedAt
        +SessionStatus status
        +PersonalityTone currentTone
        +addMessage(content, sender)
        +close()
        +flagForCrisis()
    }
    class ConversationMessage {
        +UUID id
        +UUID sessionId
        +MessageSender sender
        +String content
        +String emotionTag
        +DateTime sentAt
    }
    class CognitiveDistortion {
        +UUID id
        +UUID messageId
        +DistortionType type
        +String evidence
        +Float confidence
    }
    class RiskAssessment {
        +UUID id
        +UUID sessionId
        +Float riskScore
        +RiskLevel riskLevel
        +Boolean crisisTriggered
        +DateTime assessedAt
        +evaluateRisk()
    }
    class ClinicalSummary {
        +UUID id
        +UUID accountId
        +Date periodStart
        +Date periodEnd
        +List~String~ dominantEmotions
        +List~String~ keyTriggers
        +String synthesisNarrative
        +DateTime generatedAt
    }
    class RiskPolicyService {
        +isCriticalRisk(riskScore) Boolean
    }
    class EmotionClassifierService {
        +normalizeToPlutchik(rawTag) String
    }

    ConversationSession "1" --> "0..*" ConversationMessage : contiene
    ConversationMessage "1" --> "0..*" CognitiveDistortion : identifica
    ConversationSession "1" --> "0..1" RiskAssessment : evalua
    ConversationSession "0..*" ..> ClinicalSummary : sintetizado en
    RiskPolicyService ..> RiskAssessment : valida
    EmotionClassifierService ..> ConversationMessage : clasifica
```

##### 2.6.3.6.2. Bounded Context Database Design Diagram

![structurizr-AssistantAI-BC](../assets/images/bounded-context/ai/ai-database-diagram.png)

Código en **Mermaid ER Diagram** para la base de datos relacional de AssistantAI:

```mermaid
erDiagram
    CONVERSATION_SESSIONS {
        uuid id PK
        uuid account_id FK
        datetime started_at
        datetime ended_at
        string status
        string current_tone
    }
    CONVERSATION_MESSAGES {
        uuid id PK
        uuid session_id FK
        string sender
        text content
        string emotion_tag
        datetime sent_at
    }
    COGNITIVE_DISTORTIONS {
        uuid id PK
        uuid message_id FK
        string distortion_type
        string evidence
        float confidence
    }
    RISK_ASSESSMENTS {
        uuid id PK
        uuid session_id FK
        float risk_score
        string risk_level
        boolean crisis_triggered
        datetime assessed_at
    }
    CLINICAL_SUMMARIES {
        uuid id PK
        uuid account_id FK
        date period_start
        date period_end
        text dominant_emotions
        text key_triggers
        text synthesis_narrative
        datetime generated_at
    }

    CONVERSATION_SESSIONS ||--o{ CONVERSATION_MESSAGES : "contains"
    CONVERSATION_MESSAGES ||--o{ COGNITIVE_DISTORTIONS : "identifies"
    CONVERSATION_SESSIONS ||--o| RISK_ASSESSMENTS : "evaluated by"
    CONVERSATION_SESSIONS ||--o{ CLINICAL_SUMMARIES : "synthesized into"
```



### 2.6.4. Bounded Context: Communities

**Communities** es el contexto nuclear que gobierna la experiencia de apoyo comunitario anónimo de SafeDiary: administra la programación y el ciclo de vida de las salas, el ingreso como oyente, las solicitudes de turno de palabra, las reacciones de apoyo y las decisiones de moderación, reporte y bloqueo (US-004, US-005, US-034, US-035, TS-004, TS-005). Su objetivo es que una persona pueda recibir compañía o participar en una conversación sin revelar su identidad personal, clínica ni el contenido de su diario.

La frontera del contexto separa deliberadamente tres responsabilidades. **Profiles** es dueño de `CommunityAlias` y de la preferencia de enmascaramiento de voz; **IAM** valida la cuenta y las restricciones de acceso; **Rooms** establece y finaliza la conexión WebRTC. Communities consume esos contratos mediante puertos, pero es el único responsable de decidir si una sala puede abrirse, quién puede entrar, cuándo un oyente puede convertirse en orador y qué acción de moderación corresponde. El audio crudo no forma parte del modelo de Communities y no se conserva por defecto.

La máquina de estados de participación es `BROWSING -> JOINED_AS_LISTENER -> REQUESTING_SPEAKER -> SPEAKING -> LEFT`, con ramas excepcionales `MUTED`, `REMOVED` y `BLOCKED`. Un fallo de WebRTC no modifica por sí solo el estado del agregado: la operación puede reintentarse o compensarse sin duplicar participantes ni acciones de moderación.

#### 2.6.4.1. Domain Layer

**Entities y Aggregates**
- **CommunitySession (Aggregate Root):** id, topic, description, tags[], moderatorAliasId, scheduledAt, openedAt, closedAt, lifecycle (SCHEDULED, OPEN, CLOSED, CANCELLED), participationMode, capacity, participants[], speakerRequests[] y version. Representa la sesión social de apoyo y protege las invariantes de aforo, ciclo de vida y roles. Expone los comportamientos `schedule()`, `open()`, `joinAsListener()`, `leave()`, `requestSpeaker()`, `approveSpeaker()`, `rejectSpeaker()`, `sendReaction()`, `muteParticipant()`, `removeParticipant()` y `close()`.
- **ParticipantSession:** id, communitySessionId, communityAliasId, role (LISTENER, SPEAKER, MODERATOR), status (ACTIVE, MUTED, REMOVED, LEFT), joinedAt, leftAt. La identidad visible es exclusivamente el alias; `accountId`, nombre, correo y datos clínicos nunca ingresan al agregado.
- **SpeakerRequest:** id, communitySessionId, participantSessionId, requestedAt, resolvedAt, status (PENDING, APPROVED, REJECTED, CANCELLED), resolvedByAliasId. Solo puede existir una solicitud pendiente por participante y únicamente el moderador puede resolverla.
- **ModerationCase (Aggregate Root):** id, communitySessionId, reporterAliasId, reportedAliasId, reason, description, status (OPEN, UNDER_REVIEW, RESOLVED, DISMISSED), action, createdAt, resolvedAt. Conserva la trazabilidad del incidente sin almacenar audio crudo ni revelar el denunciante a la comunidad.
- **BlockRelation (Aggregate Root):** id, blockerAliasId, blockedAliasId, createdAt, active. Impide nuevas interacciones entre ambos alias y permite aplicar el bloqueo más allá de una sala concreta.

**Value Objects**
- **CommunitySessionId, ParticipantSessionId, SpeakerRequestId, ModerationCaseId, BlockRelationId:** identificadores fuertemente tipados.
- **CommunityAliasRef:** referencia opaca al alias validado por Profiles; no contiene datos personales ni clínicos.
- **SessionTopic:** título, descripción y etiquetas normalizadas; rechaza títulos vacíos o fuera de los límites permitidos.
- **SessionCapacity:** límite positivo de participantes y operación `hasAvailableSlot(currentParticipants)`.
- **SessionLifecycle:** SCHEDULED, OPEN, CLOSED, CANCELLED.
- **ParticipantRole:** LISTENER, SPEAKER, MODERATOR.
- **ParticipationStatus:** BROWSING, JOINED_AS_LISTENER, REQUESTING_SPEAKER, SPEAKING, MUTED, REMOVED, BLOCKED, LEFT.
- **ReactionType:** HUG, SUPPORT, THANKS, EMPATHY; restringe las reacciones a un catálogo seguro, sin texto libre.
- **ReportReason:** HARASSMENT, HATE_SPEECH, SEXUAL_CONTENT, SELF_HARM_RISK, SPAM, OTHER.
- **ModerationAction:** NONE, MUTE, REMOVE, BLOCK.

**Invariantes y reglas de negocio**
- Una sala solo acepta participantes cuando está `OPEN`, tiene capacidad disponible y el alias no está bloqueado.
- Toda incorporación comienza con el rol `LISTENER` y el micrófono silenciado; hablar requiere una `SpeakerRequest` aprobada.
- Solo el moderador de la sala puede aprobar turnos, silenciar, retirar participantes o cerrar la sala.
- Los comandos repetidos de unión, salida, bloqueo o cierre son idempotentes y no duplican sesiones ni eventos.
- Reportes, bloqueos y acciones de moderación producen un registro auditable; nunca exponen el alias del denunciante a otros participantes.
- El cierre de una sala finaliza todas las participaciones activas y solicita a Rooms liberar las sesiones de audio.
- Communities no persiste audio, transcripciones, emociones inferidas, nombres reales, credenciales ni contenido del diario.

**Domain Events**
- CommunitySessionScheduled, CommunitySessionOpened, CommunitySessionClosed, CommunitySessionCancelled.
- ParticipantJoinedAsListener, ParticipantLeft, SpeakerRequested, SpeakerRequestApproved, SpeakerRequestRejected, ParticipantPromotedToSpeaker.
- ReactionSent, ModerationCaseOpened, ParticipantMuted, ParticipantRemoved, ParticipantBlocked, ModerationCaseResolved.

**Commands**
- ScheduleCommunitySessionCommand, OpenCommunitySessionCommand, JoinCommunitySessionAsListenerCommand, LeaveCommunitySessionCommand.
- RequestSpeakerTurnCommand, ApproveSpeakerTurnCommand, RejectSpeakerTurnCommand, SendSupportReactionCommand.
- ReportParticipantCommand, MuteParticipantCommand, RemoveParticipantCommand, BlockParticipantCommand, ResolveModerationCaseCommand, CloseCommunitySessionCommand.

**Queries**
- GetOpenCommunitySessionsQuery, GetCommunitySessionByIdQuery, GetSessionParticipantsQuery, GetPendingSpeakerRequestsQuery.
- GetParticipantStateQuery, GetModerationCasesQuery, GetModerationCaseByIdQuery, IsAliasBlockedQuery.

**Domain Services (Contratos)**
- **CommunitySessionAccessPolicy:** decide si un alias puede entrar considerando vigencia, estado de la sesión, capacidad, bloqueos y una participación activa previa.
- **SpeakerTurnPolicy:** garantiza que la promoción a orador respete el orden de solicitud, el estado del participante y la autorización del moderador.
- **ModerationPolicy:** determina qué acciones están permitidas para cada rol y exige motivo y auditoría para retirar o bloquear.
- **CommunityModerationService:** coordina la apertura de un caso, la aplicación idempotente de la acción y la publicación de eventos cuando la decisión involucra más de un agregado.

#### 2.6.4.2. Interface Layer

**Controllers**
- **CommunitySessionsController:** programa, abre, consulta y cierra sesiones comunitarias; expone el listado de sesiones abiertas y su capacidad (US-004).
- **CommunityParticipationController:** permite entrar como oyente, salir, consultar el estado de participación, solicitar turno y enviar reacciones (US-005).
- **SpeakerQueueController:** permite al moderador consultar y resolver solicitudes pendientes de palabra.
- **CommunityModerationController:** registra reportes y bloqueos y permite silenciar o retirar participantes (US-034, US-035).

**Resources (Request/Response DTOs)**
- **Sessions:** ScheduleCommunitySessionResource, OpenCommunitySessionResource, CommunitySessionResource, CommunitySessionSummaryResource, SessionCapacityResource.
- **Participation:** JoinAsListenerResource, ParticipantSessionResource, RequestSpeakerTurnResource, SpeakerRequestResource, SendReactionResource.
- **Moderation:** ReportParticipantResource, ApplyModerationActionResource, ModerationCaseResource, BlockRelationResource.

Los recursos públicos solo incluyen `communityAlias`, rol y estado comunitario. Los identificadores internos de cuenta, datos clínicos y detalles de auditoría permanecen fuera de las respuestas dirigidas a participantes.

#### 2.6.4.3. Application Layer

**Command Handlers**
- **CommunitySessionCommandServiceImpl:** ScheduleCommunitySessionCommand, OpenCommunitySessionCommand y CloseCommunitySessionCommand.
- **CommunityParticipationCommandServiceImpl:** JoinCommunitySessionAsListenerCommand, LeaveCommunitySessionCommand, RequestSpeakerTurnCommand y SendSupportReactionCommand.
- **SpeakerQueueCommandServiceImpl:** ApproveSpeakerTurnCommand y RejectSpeakerTurnCommand.
- **CommunityModerationCommandServiceImpl:** ReportParticipantCommand, MuteParticipantCommand, RemoveParticipantCommand, BlockParticipantCommand y ResolveModerationCaseCommand.

**Query Handlers**
- **CommunitySessionQueryServiceImpl:** GetOpenCommunitySessionsQuery y GetCommunitySessionByIdQuery.
- **CommunityParticipationQueryServiceImpl:** GetSessionParticipantsQuery, GetParticipantStateQuery y GetPendingSpeakerRequestsQuery.
- **CommunityModerationQueryServiceImpl:** GetModerationCasesQuery, GetModerationCaseByIdQuery e IsAliasBlockedQuery.

**Event Handlers**
- **CommunitySessionOpenedEventHandler:** solicita a Rooms la creación de la sesión WebRTC y publica la disponibilidad de la sala.
- **ParticipantPromotedToSpeakerEventHandler:** concede temporalmente capacidad de publicación de audio mediante `AudioSessionPort`.
- **ParticipantRemovedEventHandler:** revoca el permiso de audio, actualiza la presencia y registra la acción en auditoría.
- **CommunitySessionClosedEventHandler:** finaliza conexiones activas y notifica a los participantes sin reabrir el agregado si la notificación falla.
- **ModerationCaseOpenedEventHandler:** remite el caso al servicio de Audit/Moderation para revisión asíncrona.

Cada handler utiliza claves de idempotencia compuestas por `commandId`, `communitySessionId` y `aliasId`. La persistencia del agregado y del evento saliente se realiza mediante el patrón Transactional Outbox para evitar estados confirmados sin notificación o eventos duplicados.

#### 2.6.4.4. Infrastructure Layer

**Repositories**
- **CommunitySessionRepository:** persistencia optimista del agregado y búsqueda por estado, horario y etiquetas.
- **ModerationCaseRepository:** persistencia append-friendly de reportes, decisiones y evidencias estructuradas.
- **BlockRelationRepository:** consulta eficiente de bloqueos activos entre alias.
- **CommunityOutboxRepository:** almacena eventos pendientes de publicación en el Event Bus.

**Adaptadores externos**
- **ProfilesAliasAdapter:** valida que `CommunityAliasRef` exista, esté activo y obtiene el `voiceMaskPreset` sin recuperar la identidad clínica.
- **IamEligibilityAdapter:** confirma que la cuenta asociada pueda usar la comunidad y no esté suspendida; la respuesta se reduce a un resultado de elegibilidad opaco.
- **RoomsAudioSessionAdapter:** implementa `AudioSessionPort` para crear/cerrar sesiones WebRTC, mantener el micrófono silenciado por defecto y conceder o revocar el rol de orador (TS-004).
- **AuditModerationAdapter:** registra reportes y acciones sensibles para revisión y cumplimiento, sin copiar audio ni datos clínicos (TS-005).
- **CommunityNotificationAdapter:** envía avisos de apertura, aprobación de turno, moderación y cierre.

Los adaptadores aplican timeout, reintento acotado y circuit breaker. Si Rooms no responde durante una apertura, la sala permanece `SCHEDULED` o se marca como apertura fallida; si falla una notificación, el evento queda en Outbox sin revertir una decisión de dominio ya confirmada.

#### 2.6.4.5. Bounded Context Software Architecture Component Level Diagrams

![structurizr-Communities-BC](../assets/images/chap2/boundedcontexts/Communities_Components.svg)

Código en **Structurizr DSL (C4 Model)** para el componente Communities:

```text
workspace "SafeDiary - Communities (Component Diagram)" "C4 Component Diagram del bounded context Communities" {
    model {
        participant = person "Participante" "Escucha, solicita turno, reacciona, reporta o bloquea mediante su alias comunitario."
        moderator   = person "Moderador / Anfitrión" "Conduce la sala y aplica acciones de seguridad autorizadas."

        safeDiary = softwareSystem "SafeDiary" {
            communitiesApi = container "Communities API" "Gobierna salas comunitarias, participación, turnos y moderación." "ASP.NET Core" {
                sessionsController      = component "CommunitySessionsController" "Endpoints del ciclo de vida y consulta de sesiones comunitarias." "REST Controller"
                participationController = component "CommunityParticipationController" "Endpoints de ingreso, salida, turno y reacciones." "REST Controller"
                speakerQueueController  = component "SpeakerQueueController" "Endpoints de la cola de solicitudes de palabra." "REST Controller"
                moderationController    = component "CommunityModerationController" "Endpoints de reporte, bloqueo, silencio y retiro." "REST Controller"

                sessionCmdService       = component "CommunitySessionCommandServiceImpl" "Orquesta programación, apertura y cierre." "Application Service"
                sessionQryService       = component "CommunitySessionQueryServiceImpl" "Consulta sesiones abiertas y detalle." "Application Service"
                participationCmdService = component "CommunityParticipationCommandServiceImpl" "Orquesta ingreso, salida, turno y reacciones." "Application Service"
                participationQryService = component "CommunityParticipationQueryServiceImpl" "Consulta presencia y cola de turnos." "Application Service"
                moderationCmdService    = component "CommunityModerationCommandServiceImpl" "Coordina reportes y acciones de seguridad." "Application Service"

                communitySessionAggregate = component "CommunitySession Aggregate" "Invariantes de ciclo de vida, aforo, roles y turnos." "Domain Model (DDD)"
                moderationCaseAggregate = component "ModerationCase Aggregate" "Ciclo auditable de un reporte comunitario." "Domain Model (DDD)"
                blockRelationAggregate  = component "BlockRelation Aggregate" "Restricción persistente entre alias." "Domain Model (DDD)"
                sessionAccessPolicy     = component "CommunitySessionAccessPolicy" "Valida alias, capacidad, estado y bloqueos." "Domain Service"
                moderationPolicy        = component "ModerationPolicy" "Autoriza y limita acciones del moderador." "Domain Service"

                sessionRepo         = component "CommunitySessionRepository" "Persistencia del agregado de sesión comunitaria." "Repository"
                moderationRepo      = component "ModerationCaseRepository" "Persistencia de casos de moderación." "Repository"
                blockRepo           = component "BlockRelationRepository" "Persistencia y consulta de bloqueos." "Repository"
                profilesAdapter     = component "ProfilesAliasAdapter" "Valida alias y preferencia de máscara." "Infrastructure Adapter"
                iamAdapter          = component "IamEligibilityAdapter" "Valida elegibilidad sin exponer identidad." "Infrastructure Adapter"
                roomsAdapter        = component "RoomsAudioSessionAdapter" "Administra permisos de sesión WebRTC." "Infrastructure Adapter"
                auditAdapter        = component "AuditModerationAdapter" "Registra decisiones y casos auditables." "Infrastructure Adapter"
                notificationAdapter = component "CommunityNotificationAdapter" "Envía avisos comunitarios." "Infrastructure Adapter"
            }

            postgres = container "Communities Database" "Salas, participaciones, turnos, reportes, bloqueos y Outbox." "PostgreSQL 15"
            eventBus = container "Event Bus" "Distribuye eventos comunitarios y de moderación." "RabbitMQ / Kafka"
        }

        profilesContext = softwareSystem "Profiles (Bounded Context externo)" "Es dueño de CommunityAlias y voiceMaskPreset."
        iamContext      = softwareSystem "IAM (Bounded Context externo)" "Valida cuenta y restricciones de acceso."
        roomsContext    = softwareSystem "Rooms (Bounded Context externo)" "Provee transporte de audio WebRTC en tiempo real."
        auditContext    = softwareSystem "Audit & Moderation" "Conserva trazabilidad y soporta revisión de incidentes."
        notifications   = softwareSystem "Notifications" "Entrega avisos push e in-app."

        participant -> sessionsController      "Consulta y crea sesiones comunitarias" "HTTPS/JSON"
        participant -> participationController "Entra, sale, solicita turno y reacciona" "HTTPS/JSON"
        participant -> moderationController    "Reporta o bloquea" "HTTPS/JSON"
        moderator   -> speakerQueueController  "Resuelve solicitudes de palabra" "HTTPS/JSON"
        moderator   -> moderationController    "Silencia o retira participantes" "HTTPS/JSON"

        sessionsController      -> sessionCmdService       "Envía comandos"
        sessionsController      -> sessionQryService       "Envía queries"
        participationController -> participationCmdService "Envía comandos"
        participationController -> participationQryService "Envía queries"
        speakerQueueController  -> participationCmdService "Resuelve turnos"
        moderationController    -> moderationCmdService    "Envía comandos"

        sessionCmdService       -> communitySessionAggregate "Modifica ciclo de vida"
        participationCmdService -> communitySessionAggregate "Modifica participantes y turnos"
        participationCmdService -> sessionAccessPolicy       "Valida acceso"
        moderationCmdService    -> moderationCaseAggregate "Abre y resuelve casos"
        moderationCmdService    -> blockRelationAggregate  "Aplica bloqueos"
        moderationCmdService    -> moderationPolicy        "Autoriza acción"

        sessionCmdService       -> sessionRepo    "Persiste"
        sessionQryService       -> sessionRepo    "Consulta"
        participationCmdService -> sessionRepo    "Persiste"
        moderationCmdService    -> moderationRepo "Persiste"
        moderationCmdService    -> blockRepo      "Persiste/consulta"
        sessionRepo    -> postgres "CRUD" "SQL/TCP"
        moderationRepo -> postgres "CRUD" "SQL/TCP"
        blockRepo      -> postgres "CRUD" "SQL/TCP"

        participationCmdService -> profilesAdapter "Valida CommunityAliasRef"
        participationCmdService -> iamAdapter      "Valida elegibilidad"
        sessionCmdService       -> roomsAdapter    "Crea o cierra sesión de audio"
        participationCmdService -> roomsAdapter    "Concede o revoca publicación de audio"
        moderationCmdService    -> auditAdapter    "Registra caso y acción"

        profilesAdapter -> profilesContext "Consulta alias activo" "HTTPS/JSON"
        iamAdapter      -> iamContext      "Consulta elegibilidad" "HTTPS/JSON"
        roomsAdapter    -> roomsContext    "Administra sesión WebRTC" "HTTPS/gRPC"
        auditAdapter    -> auditContext    "Publica registro auditable" "Event/HTTPS"

        communitySessionAggregate -> eventBus "Publica eventos de sesión comunitaria y participación"
        moderationCaseAggregate -> eventBus "Publica eventos de moderación"
        eventBus -> notifications "Entrega eventos notificables"
    }

    views {
        component communitiesApi "Communities_Components" {
            include *
            autoLayout
        }
        styles {
            element "Person" {
                shape Person
                background #08427b
                color #ffffff
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Component" {
                background #85bbf0
                color #000000
            }
        }
    }
}
```

#### 2.6.4.6. Bounded Context Software Architecture Code Level Diagrams


##### 2.6.4.6.1. Bounded Context Domain Layer Class Diagrams

Código en **Mermaid Class Diagram**:

```mermaid
classDiagram
    class CommunitySession {
        +UUID id
        +SessionTopic topic
        +CommunityAliasRef moderatorAliasId
        +DateTime scheduledAt
        +SessionLifecycle lifecycle
        +SessionCapacity capacity
        +int version
        +schedule()
        +open()
        +joinAsListener(alias)
        +leave(participantId)
        +requestSpeaker(participantId)
        +approveSpeaker(requestId, moderatorAlias)
        +sendReaction(participantId, reaction)
        +muteParticipant(participantId)
        +removeParticipant(participantId)
        +close()
    }
    class ParticipantSession {
        +UUID id
        +UUID communitySessionId
        +CommunityAliasRef aliasId
        +ParticipantRole role
        +ParticipationStatus status
        +DateTime joinedAt
        +DateTime leftAt
        +promoteToSpeaker()
        +mute()
        +leave()
    }
    class SpeakerRequest {
        +UUID id
        +UUID participantSessionId
        +DateTime requestedAt
        +SpeakerRequestStatus status
        +approve(moderatorAlias)
        +reject(moderatorAlias)
    }
    class ModerationCase {
        +UUID id
        +UUID communitySessionId
        +CommunityAliasRef reporterAliasId
        +CommunityAliasRef reportedAliasId
        +ReportReason reason
        +ModerationCaseStatus status
        +ModerationAction action
        +DateTime createdAt
        +resolve(action)
        +dismiss()
    }
    class BlockRelation {
        +UUID id
        +CommunityAliasRef blockerAliasId
        +CommunityAliasRef blockedAliasId
        +Boolean active
        +DateTime createdAt
        +deactivate()
    }
    class CommunitySessionAccessPolicy {
        +canJoin(alias, room, blocks) Boolean
    }
    class SpeakerTurnPolicy {
        +canApprove(request, moderator, room) Boolean
    }
    class ModerationPolicy {
        +canApply(actor, target, action) Boolean
    }
    class AudioSessionPort {
        <<interface>>
        +createSession(communitySessionId)
        +grantSpeaker(communitySessionId, participantId)
        +revokeSpeaker(communitySessionId, participantId)
        +closeSession(communitySessionId)
    }

    CommunitySession "1" *-- "0..*" ParticipantSession : contiene
    CommunitySession "1" *-- "0..*" SpeakerRequest : gestiona
    ParticipantSession "1" --> "0..1" SpeakerRequest : solicita
    CommunitySession "1" --> "0..*" ModerationCase : origina
    ModerationCase "0..*" --> "0..1" BlockRelation : puede crear
    CommunitySessionAccessPolicy ..> CommunitySession : valida
    CommunitySessionAccessPolicy ..> BlockRelation : consulta
    SpeakerTurnPolicy ..> SpeakerRequest : valida
    ModerationPolicy ..> ModerationCase : gobierna
    CommunitySession ..> AudioSessionPort : usa
```


##### 2.6.4.6.2. Bounded Context Database Design Diagram

Código en **Mermaid ER Diagram** para la base de datos relacional de Communities:

```mermaid
erDiagram
    COMMUNITY_SESSIONS {
        uuid id PK
        uuid moderator_alias_id
        string title
        text description
        string participation_mode
        string lifecycle
        int max_participants
        datetime scheduled_at
        datetime opened_at
        datetime closed_at
        int version
    }
    COMMUNITY_SESSION_TAGS {
        uuid community_session_id FK
        string tag
    }
    PARTICIPANT_SESSIONS {
        uuid id PK
        uuid community_session_id FK
        uuid community_alias_id
        string role
        string status
        datetime joined_at
        datetime left_at
    }
    SPEAKER_REQUESTS {
        uuid id PK
        uuid community_session_id FK
        uuid participant_session_id FK
        uuid resolved_by_alias_id
        string status
        datetime requested_at
        datetime resolved_at
    }
    SUPPORT_REACTIONS {
        uuid id PK
        uuid community_session_id FK
        uuid participant_session_id FK
        string reaction_type
        datetime sent_at
    }
    MODERATION_CASES {
        uuid id PK
        uuid community_session_id FK
        uuid reporter_alias_id
        uuid reported_alias_id
        string reason
        text description
        string status
        string action
        datetime created_at
        datetime resolved_at
    }
    BLOCK_RELATIONS {
        uuid id PK
        uuid blocker_alias_id
        uuid blocked_alias_id
        boolean active
        datetime created_at
        datetime deactivated_at
    }
    COMMUNITY_OUTBOX {
        uuid id PK
        string aggregate_type
        uuid aggregate_id
        string event_type
        text payload
        datetime occurred_at
        datetime published_at
    }

    COMMUNITY_SESSIONS ||--o{ COMMUNITY_SESSION_TAGS : "classified by"
    COMMUNITY_SESSIONS ||--o{ PARTICIPANT_SESSIONS : "contains"
    COMMUNITY_SESSIONS ||--o{ SPEAKER_REQUESTS : "manages"
    PARTICIPANT_SESSIONS ||--o{ SPEAKER_REQUESTS : "creates"
    COMMUNITY_SESSIONS ||--o{ SUPPORT_REACTIONS : "receives"
    PARTICIPANT_SESSIONS ||--o{ SUPPORT_REACTIONS : "sends"
    COMMUNITY_SESSIONS ||--o{ MODERATION_CASES : "originates"
    MODERATION_CASES }o--o| BLOCK_RELATIONS : "may produce"
```



### 2.6.5. Bounded Context: Rooms

**Rooms** es el contexto técnico que encapsula la infraestructura de comunicación de voz en tiempo real dentro de SafeDiary: administra la inicialización de las sesiones en el servidor de medios, la emisión de tokens de acceso, la negociación de señalización WebRTC y el control de los flujos de audio (silenciar/activar micrófono) (US-005, TS-004). Su objetivo es garantizar una conexión de audio estable, de baja latencia y segura, aislando la complejidad técnica del manejo de streams del resto de los flujos de negocio. La frontera del contexto es puramente técnica; delega todas las decisiones lógicas al contexto de *Communities*. El audio crudo nunca se graba ni se persiste en disco, actuando exclusivamente como un puente de transporte efímero.

La máquina de estados de un participante de medios es `DISCONNECTED` -> `CONNECTING` -> `CONNECTED` -> `DISCONNECTED`, con los sub-estados de flujo de audio `AUDIO_MUTED` y `AUDIO_UNMUTED`. Un fallo de conexión dispara mecanismos de reconexión ICE sin alterar el estado del participante en el dominio superior de *Communities*.

#### 2.6.5.1. Domain Layer

**Entities y Aggregates**

* **MediaRoom (Aggregate Root):** id, externalCommunitySessionId, status (INITIALIZED, ACTIVE, CLOSED), maxCapacity, activePeers[], createdAt, closedAt, version. Representa la sesión física alojada en el servidor WebRTC. Protege las invariantes de aforo técnico y ciclo de vida del socket (ej. solo acepta peers si está ACTIVE y tiene capacidad; se cierra por inactividad tras un periodo de gracia). Expone los comportamientos `initialize()`, `registerPeer()`, `mutePeerAudio()`, `unmutePeerAudio()` y `close()`.
* **MediaPeer:** id, mediaRoomId, externalParticipantId, connectionState (DISCONNECTED, CONNECTING, CONNECTED), audioState (MUTED, UNMUTED), joinedAt. La identidad es un identificador opaco proporcionado por *Communities*; no almacena alias, roles ni datos personales. Ingresa por defecto con el `audioState` en MUTED para proteger la privacidad (TS-004).

**Value Objects**

* **MediaRoomId, MediaPeerId:** identificadores únicos del dominio.
* **AudioToken:** JWT o credencial segura generada temporalmente para el handshake.
* **SignalingPayload:** estructuras de datos para `SdpOffer`, `SdpAnswer` y `IceCandidate`.
* **MediaRoomStatus:** INITIALIZED, ACTIVE, CLOSED.
* **PeerConnectionState:** DISCONNECTED, CONNECTING, CONNECTED.

**Domain Events**

* MediaRoomInitialized, MediaRoomClosed, PeerConnected, PeerDisconnected, PeerAudioMuted, PeerAudioUnmuted, AudioTokenIssued.

**Commands**

* InitializeMediaRoomCommand, CloseMediaRoomCommand, GenerateAudioTokenCommand, MutePeerAudioCommand, UnmutePeerAudioCommand.

**Queries**

* GetMediaRoomHealthStatusQuery, GetActivePeersQuery, GetPeerConnectionStateQuery.

**Domain Services (Contratos)**

* **MediaTokenIssuerPolicy:** orquesta la generación y firma criptográfica de los tokens de un solo uso que el cliente móvil presentará al servidor WebRTC para unirse.
* **ConnectionLifecycleService:** evalúa los *heartbeats* (latidos de conexión) para limpiar peers caídos (zombie peers) y mantener la precisión de la métrica de capacidad.

#### 2.6.5.2. Interface Layer

**Controllers**

* **MediaRoomController:** recibe llamadas S2S (Server-to-Server) internas para inicializar y destruir las sesiones de medios cuando el dominio lo requiere.
* **MediaTokenController:** expone endpoints seguros para emitir el token de acceso de medios una vez que *Communities* autorizó al participante (US-005).
* **SignalingController:** mantiene la conexión WebSocket y expone APIs REST para el intercambio inicial de candidatos ICE y negociación SDP entre el cliente y el servidor de medios.

**Resources (Request/Response DTOs)**

* **Media Management:** InitializeMediaRoomResource, MediaRoomHealthResource.
* **Signaling & Auth:** AudioTokenResource, SignalingPayloadResource, PeerStateResource. (Los recursos devueltos son estrictamente técnicos; omiten cualquier detalle clínico, de moderación o de identidad comunitaria).

#### 2.6.5.3. Application Layer

**Command Handlers**

* **MediaRoomCommandServiceImpl:** InitializeMediaRoomCommand, CloseMediaRoomCommand.
* **MediaPeerCommandServiceImpl:** GenerateAudioTokenCommand, MutePeerAudioCommand, UnmutePeerAudioCommand.

**Query Handlers**

* **MediaRoomQueryServiceImpl:** GetMediaRoomHealthStatusQuery, GetActivePeersQuery.

**Event Handlers**

* **CommunitySessionClosedEventHandler:** escucha el evento externo proveniente de *Communities* y dispara reactivamente el `CloseMediaRoomCommand` para tumbar la infraestructura asociada y evitar fugas de recursos (resource leaks).
* **PeerDroppedEventHandler:** detecta la pérdida de paquetes o caída de WebSocket y actualiza el agregado `MediaPeer` a DISCONNECTED.

#### 2.6.5.4. Infrastructure Layer

**Repositories**

* **MediaRoomRepository:** utiliza almacenamiento en memoria de acceso ultra-rápido (Redis) para persistir el estado transitorio del agregado y la lista de `activePeers`. Los datos de la sesión de red son efímeros y se descartan tras el cierre.
* **MediaOutboxRepository:** almacena eventos técnicos temporalmente mediante el patrón *Transactional Outbox* antes de ser despachados al Event Bus, empleando claves de idempotencia para evitar crear la sala WebRTC dos veces.

**Adaptadores externos**

* **WebRtcMediaServerAdapter (ACL):** traduce los comandos del dominio a llamadas propietarias del proveedor de infraestructura WebRTC (ej. LiveKit SDK, Agora o un servidor nativo Mediasoup). Administra el enrutamiento SFU y la asignación de pistas de audio, aplicando circuit breakers ante fallos externos (TS-004).
* **SignalingWebsocketAdapter:** gestiona el pool de conexiones WebSocket entrantes de los clientes móviles.


#### 2.6.5.5. Bounded Context Software Architecture Component Level Diagrams

![ROOMS_COMPONENT](../assets/images/bounded-context/rooms/rooms-components.png)


#### 2.6.5.6. Bounded Context Software Architecture Code Level Diagrams


##### 2.6.5.6.1. Bounded Context Domain Layer Class Diagrams

![ROOMS_CLASS](../assets/images/bounded-context/rooms/rooms-class-diagram.png)

##### 2.6.5.6.2. Bounded Context Database Design Diagram

![ROOMS_CLASS](../assets/images/bounded-context/rooms/rooms-class-diagram.png)

### 2.6.6. Bounded Context: Diary

**Diary (Diario Emocional)** es el contexto nuclear (*core domain*) que administra el registro personal, confidencial y cronológico de los pacientes en SafeDiary. Modela la experiencia clásica de un diario íntimo enriquecida para el entorno móvil, permitiendo al usuario capturar sus vivencias cotidianas mediante **texto libre o notas de voz** grabadas directamente desde el frontend (US-008). Asimismo, gobierna el registro rápido del estado anímico (*Mood Check-In*, US-010), la asociación de factores contextuales externos como sueño, energía y estrés (US-031), la configuración de recordatorios de escritura (US-024), el cálculo de rachas e insignias por constancia emocional (US-029), la selección de recuerdos retrospectivos (US-032) y la exportación estructurada del historial a formato PDF (US-028). 

Para salvaguardar la intimidad del paciente y mantener una separación de responsabilidades estricta, Diary opera bajo los siguientes límites arquitectónicos:
1. **Identidad y Bóveda Privada:** Diary no gestiona credenciales ni evalúa biometría; referencia el `accountId` provisto por IAM. Las entradas que el usuario traslada a su "Bóveda Privada" (US-025) son marcadas como protegidas (`isVaulted = true`), excluyéndose automáticamente de las consultas y vistas ordinarias del historial; la autorización de apertura y el PIN secundario residen exclusivamente en IAM.
2. **Consentimiento para Especialistas:** Cuando un psicólogo verificado consulta las entradas autorizadas de un paciente (US-045, US-046), Diary no evalúa reglas de acceso por sí mismo, sino que valida el alcance vigente a través del contrato `ConsentAuthorizationService` provisto por IAM.
3. **Audio e Inteligencia Artificial:** Diary recibe y almacena las referencias al archivo de audio crudo (`audioUrl`, duración, formato) generado desde el dispositivo móvil. Sin embargo, **no** realiza la transcripción fonética, ni el análisis de sentimientos, ni la generación de reflexiones terapéuticas asistidas; cuando una entrada de voz o texto se crea, Diary publica el evento `DiaryEntryCreated`, el cual es consumido de forma asíncrona por el contexto **AssistantAI** para procesar la transcripción y sugerir etiquetas emocionales sin bloquear la persistencia del diario clásico.
4. **Coherencia con los Mockups Móviles:** La interfaz de SafeDiary refleja este modelo en tres componentes clave: la pantalla *Home* (selector rápido de emociones de 1 toque con escala de valencia), la pantalla *Diary* (línea de tiempo cronológica, filtros por etiquetas, reproductor embebido de notas de voz y botón flotante de grabación), y la ventana modal de *Exportación* (que permite seleccionar rangos temporales y excluye por defecto entradas sensibles).

#### 2.6.6.1. Domain Layer

**Entities y Aggregates**
- **DiaryEntry (Aggregate Root):** id, accountId, title, content (cuerpo textual o transcripción final), entryType (TEXT, AUDIO, HYBRID), audioMetadata (referencia al archivo de voz grabado en el dispositivo), primaryEmotion, emotionalIntensity (escala 1-5), tags[], externalFactors, status (DRAFT, PUBLISHED, ARCHIVED), isSensitive, isVaulted, createdAt, updatedAt. Invariantes del agregado: una entrada debe contener obligatoriamente texto significativo o una referencia de audio válida (US-008); las entradas marcadas como `isVaulted = true` solo son legibles si la consulta incluye un token de autorización emitido por IAM.
- **MoodCheckIn (Aggregate Root):** id, accountId, emotion, valenceScore (-2 a +2), energyScore (1 a 5), loggedAt. Permite el registro rápido de un toque desde el *Home* sin exigir la redacción de una entrada completa (US-010).
- **DiaryReminder (Aggregate Root):** id, accountId, reminderTime (Time), daysOfWeek (arreglo de días activos), isEnabled, lastTriggeredAt. Modela las alarmas programadas para cultivar el hábito de registro diario (US-024).
- **DiaryStreak (Aggregate Root):** id, accountId, currentStreakDays, longestStreakDays, lastLogDate, freezeTokensAvailable. Mantiene la trazabilidad de la constancia del usuario; se actualiza de forma idempotente con cada entrada o check-in realizado en el día (US-029).

**Value Objects**
- **EntryId, MoodCheckInId, ReminderId, StreakId:** identificadores únicos fuertemente tipados.
- **EntryType:** TEXT, AUDIO, HYBRID.
- **EmotionType:** JOY, SADNESS, ANXIETY, ANGER, CALM, FEAR, SURPRISE, DISGUST (alineado con la rueda de Plutchik).
- **AudioMetadata:** audioUrl, durationSeconds, format (m4a/aac/wav), fileSizeBytes.
- **ExternalFactors:** sleepHours, energyLevel (LOW, MEDIUM, HIGH), stressLevel (LOW, MEDIUM, HIGH), caffeineIntake (NONE, MODERATE, HIGH) (US-031).
- **DateRange:** startDate, endDate.
- **EntryStatus:** DRAFT, PUBLISHED, ARCHIVED.

**Domain Events**
- **DiaryEntryCreated:** publicado cuando el usuario guarda una entrada (notifica a AssistantAI para transcripción/análisis y a Rutines/Streaks para registrar avance).
- **DiaryEntryUpdated:** publicado tras editar título, cuerpo o etiquetas de una entrada.
- **DiaryEntryDeleted:** publicado al descartar un registro.
- **DiaryEntryVaulted / DiaryEntryUnvaulted:** publicado cuando una entrada se traslada hacia o desde la bóveda privada.
- **MoodCheckInLogged:** emitido al marcar el estado anímico rápido en la pantalla principal.
- **DiaryStreakIncremented:** emitido cuando la racha de días consecutivos de registro aumenta.
- **DiaryStreakReset:** emitido cuando transcurre más de un día calendario sin actividad.

**Commands**
- CreateTextDiaryEntryCommand, CreateVoiceDiaryEntryCommand, UpdateDiaryEntryCommand, DeleteDiaryEntryCommand, ToggleEntryVaultStatusCommand, LogMoodCheckInCommand, ConfigureDiaryReminderCommand, ExportDiaryToPdfCommand.

**Queries**
- GetDiaryEntryByIdQuery, GetDiaryEntriesByAccountQuery (soporta filtros por rango de fechas, emoción predominante y etiquetas), GetMoodCheckInsByRangeQuery, GetDiaryStreakByAccountQuery, GetDiaryRemindersByAccountQuery, GetAuthorizedDiaryEntriesForSpecialistQuery (valida permisos de IAM), GetRetrospectiveMemoryQuery (US-032).

**Domain Services (Contratos)**
- **StreakCalculationService:** evalúa las fechas de los registros diarios del usuario; si la fecha corresponde al día siguiente de `lastLogDate`, incrementa `currentStreakDays`; si corresponde al mismo día, no altera la racha; si hay una brecha mayor a 24 horas y no hay fichas de congelamiento, reinicia el contador.
- **RetrospectiveMemoryService:** recupera entradas pasadas significativas (p. ej. de hace 30, 90 o 365 días) garantizando que ninguna entrada marcada como `isSensitive` o `isVaulted` sea expuesta en recordatorios automáticos (US-032).
- **DiaryExportPreparationService:** filtra, sanitiza y compila las entradas seleccionadas por el paciente para generar el informe PDF, excluyendo rigurosamente el material protegido en bóveda (US-028).

#### 2.6.6.2. Interface Layer

**Controllers**
- **DiaryEntriesController:** expone los endpoints REST para registrar entradas de texto y notas de voz (`multipart/form-data` o URL de blob pre-cargado), listar el historial cronológico con filtros paginados, actualizar y eliminar entradas (US-008, US-025).
- **MoodCheckInsController:** endpoint optimizado y de baja latencia para capturar el estado emocional rápido desde la pantalla de inicio (US-010).
- **DiaryRemindersController:** administración de horarios y días de recordatorios locales/push (US-024).
- **DiaryStreaksController:** consulta de la racha actual, récord histórico e insignias obtenidas (US-029).
- **DiaryExportsController:** solicita la generación y descarga segura del reporte en PDF con el resumen gráfico y cronológico (US-028).
- **SpecialistSharedDiaryController:** endpoint especializado que permite a un terapeuta con sesión activa consultar las entradas que el paciente le autorizó explícitamente compartir (US-045, US-046).

**Resources (Request/Response DTOs)**
- **DiaryEntry:** CreateTextDiaryEntryResource, CreateVoiceDiaryEntryResource, UpdateDiaryEntryResource, DiaryEntryResource, DiaryEntrySummaryResource (optimizado para feeds móviles).
- **MoodCheckIn:** LogMoodCheckInResource, MoodCheckInResource, MoodTimelineResource.
- **DiaryReminder:** ConfigureReminderResource, DiaryReminderResource.
- **DiaryStreak:** DiaryStreakResource.
- **DiaryExport:** RequestPdfExportResource, ExportStatusResource, ExportDownloadResource.
- **SpecialistShared:** SharedEntryResource, SharedHistoryScopeResource.

#### 2.6.6.3. Application Layer

**Command Handlers**
- **DiaryEntryCommandServiceImpl:** orquesta `CreateTextDiaryEntryCommand`, `CreateVoiceDiaryEntryCommand`, `UpdateDiaryEntryCommand`, `DeleteDiaryEntryCommand` y `ToggleEntryVaultStatusCommand`. Valida la no vacuidad del contenido, gestiona la subida de audio al repositorio de infraestructura y despacha `DiaryEntryCreated`.
- **MoodCheckInCommandServiceImpl:** maneja `LogMoodCheckInCommand`, persiste el check-in e invoca la actualización de racha.
- **DiaryReminderCommandServiceImpl:** gestiona `ConfigureDiaryReminderCommand` y sincroniza las reglas con el planificador de notificaciones.
- **DiaryExportCommandServiceImpl:** orquesta `ExportDiaryToPdfCommand`, consume `DiaryExportPreparationService` y delega la renderización visual al adaptador de PDF.
- **DiaryStreakCommandServiceImpl:** procesa la actualización de rachas en base al consumo de eventos internos.

**Query Handlers**
- **DiaryEntryQueryServiceImpl:** resuelve `GetDiaryEntryByIdQuery`, `GetDiaryEntriesByAccountQuery` y `GetRetrospectiveMemoryQuery`.
- **MoodCheckInQueryServiceImpl:** resuelve `GetMoodCheckInsByRangeQuery`.
- **DiaryStreakQueryServiceImpl:** resuelve `GetDiaryStreakByAccountQuery`.
- **SpecialistSharedDiaryQueryServiceImpl:** resuelve `GetAuthorizedDiaryEntriesForSpecialistQuery`, invocando previamente al adaptador de IAM para corroborar que el especialista solicitante cuenta con un `Consent` vigente.

#### 2.6.6.4. Infrastructure Layer

**Repositories**
- **DiaryEntryRepository:** implementación en PostgreSQL / EF Core o TypeORM. Indexado por `account_id` y `created_at` descendente; soporte de búsquedas por texto completo y etiquetas (`JSONB` o tabla relacional indexada).
- **MoodCheckInRepository:** persistencia optimizada para series temporales de estados de ánimo y agregaciones por semana/mes.
- **DiaryReminderRepository:** persistencia relacional de horarios y banderas de activación.
- **DiaryStreakRepository:** persistencia del estado de rachas e historial de días completados.

**Adaptadores externos**
- **AudioStorageAdapter:** almacena los audios crudos en un bucket privado de objetos (AWS S3 o Google Cloud Storage) mediante URLs presignadas y cifrado en reposo AES-256 (TS-002).
- **PdfGeneratorAdapter:** compila las entradas seleccionadas, gráficos de evolución y factores externos en un documento PDF protegido y visualmente profesional (US-028).
- **NotificationSchedulingAdapter:** se comunica con el servicio de mensajería push móvil (Firebase Cloud Messaging / Apple APNs) para despachar recordatorios configurados (US-024).
- **IamConsentClientAdapter:** cliente HTTP/gRPC que consulta la API de IAM para validar si una solicitud de especialista cumple las condiciones de `SharingPermission` (US-045, US-046).

#### 2.6.6.5. Bounded Context Software Architecture Component Level Diagrams

El siguiente código en **Structurizr DSL (C4 Model)** puede pegarse en [structurizr.com/dsl](https://structurizr.com/dsl) o en el [Structurizr Lite](https://docs.structurizr.com/lite) para generar el diagrama de componentes de Diary:

```text
workspace "SafeDiary - Diary (Component Diagram)" "C4 Component Diagram del bounded context Diary" {
    model {
        patient    = person "Paciente" "Registra vivencias por texto/voz, mood check-in y consulta su diario."
        specialist = person "Especialista Verificado" "Consulta las entradas autorizadas del diario de su consultante."

        safeDiary = softwareSystem "SafeDiary" {

            diaryApi = container "Diary API" "Gestiona entradas de texto/voz, check-in emocional, rachas y exportación." "ASP.NET Core / Node.js Web API" {
                entriesController     = component "DiaryEntriesController"          "Registro y gestión de entradas de texto y voz."       "REST Controller"
                moodController        = component "MoodCheckInsController"          "Captura rápida de estado de ánimo en 1 toque."       "REST Controller"
                remindersController   = component "DiaryRemindersController"        "Configura recordatorios de escritura."                "REST Controller"
                streaksController     = component "DiaryStreaksController"          "Consulta racha y constancia de registro."             "REST Controller"
                exportsController     = component "DiaryExportsController"          "Genera reportes descargables en PDF."                 "REST Controller"
                sharedController      = component "SpecialistSharedDiaryController" "Expone entradas autorizadas a especialistas."         "REST Controller"

                entryCmdService       = component "DiaryEntryCommandServiceImpl"     "Casos de uso de creación y edición de entradas."     "Application Service"
                entryQryService       = component "DiaryEntryQueryServiceImpl"       "Consultas del historial y recuerdos retrospectivos."  "Application Service"
                moodCmdService        = component "MoodCheckInCommandServiceImpl"    "Casos de uso de registro de humor."                   "Application Service"
                moodQryService        = component "MoodCheckInQueryServiceImpl"      "Consultas de serie temporal de humor."                "Application Service"
                reminderCmdService    = component "DiaryReminderCommandServiceImpl"  "Casos de uso de recordatorios."                       "Application Service"
                streakCmdService      = component "DiaryStreakCommandServiceImpl"    "Orquestación y actualización de rachas."              "Application Service"
                streakQryService      = component "DiaryStreakQueryServiceImpl"      "Consulta de días consecutivos de actividad."          "Application Service"
                exportCmdService      = component "DiaryExportCommandServiceImpl"    "Orquesta la compilación y renderizado de PDF."        "Application Service"
                sharedQryService      = component "SpecialistSharedDiaryQueryService" "Consulta entradas autorizadas validando consentimiento." "Application Service"

                entryAggregate        = component "DiaryEntry Aggregate"            "Invariantes de contenido, audio, emoción y bóveda."   "Domain Model (DDD)"
                moodAggregate         = component "MoodCheckIn Aggregate"           "Invariantes del check-in rápido."                     "Domain Model (DDD)"
                streakAggregate       = component "DiaryStreak Aggregate"           "Invariantes de racha y constancia."                   "Domain Model (DDD)"
                reminderAggregate     = component "DiaryReminder Aggregate"         "Invariantes de alarmas y frecuencias."                "Domain Model (DDD)"
                streakDomainService   = component "StreakCalculationService"        "Calcula avance o reseteo de rachas diarias."          "Domain Service"
                memoryDomainService   = component "RetrospectiveMemoryService"      "Selecciona vivencias pasadas no sensibles."           "Domain Service"
                exportDomainService   = component "DiaryExportPreparationService"   "Filtra y sanea datos para exportación."               "Domain Service"

                entryRepo             = component "DiaryEntryRepository"            "Persistencia y filtrado de entradas del diario."      "Repository"
                moodRepo              = component "MoodCheckInRepository"           "Persistencia de check-ins anímicos."                  "Repository"
                streakRepo            = component "DiaryStreakRepository"           "Persistencia de rachas de constancia."                "Repository"
                reminderRepo          = component "DiaryReminderRepository"         "Persistencia de recordatorios."                       "Repository"

                audioAdapter          = component "AudioStorageAdapter"             "Sube notas de voz con URLs presignadas (S3/GCS)."     "Infrastructure Adapter"
                pdfAdapter            = component "PdfGeneratorAdapter"             "Renderiza el historial seleccionado en PDF."          "Infrastructure Adapter"
                pushAdapter           = component "NotificationSchedulingAdapter"   "Programa avisos locales y notificaciones push."       "Infrastructure Adapter"
                iamClientAdapter      = component "IamConsentClientAdapter"         "Consulta contratos de consentimiento a IAM."          "Infrastructure Adapter"
            }

            postgres = container "Diary Database" "Persistencia relacional de entradas, estados y rachas." "PostgreSQL 15"
            eventBus = container "Event Bus"      "Publica DiaryEntryCreated, MoodCheckInLogged, DiaryStreakUpdated." "RabbitMQ / Kafka"
            storage  = container "Object Storage" "Almacenamiento cifrado de notas de voz en audio." "AWS S3 / GCS"
        }

        iamContext         = softwareSystem "IAM (Bounded Context externo)"         "Valida AccountId y autorizaciones de consentimiento de especialistas."
        assistantAiContext = softwareSystem "AssistantAI (Bounded Context externo)" "Consume DiaryEntryCreated para transcribir y generar reflexiones terapéuticas."

        patient    -> diaryApi "Registra pensamientos, notas de voz y estado de ánimo" "HTTPS/JSON & Audio Stream"
        specialist -> diaryApi "Consulta entradas autorizadas de sus consultantes"      "HTTPS/JSON"

        entriesController   -> entryCmdService     "Envía comandos"
        entriesController   -> entryQryService     "Envía queries"
        moodController      -> moodCmdService      "Envía comandos"
        moodController      -> moodQryService      "Envía queries"
        remindersController -> reminderCmdService  "Envía comandos"
        streaksController   -> streakQryService    "Envía queries"
        exportsController   -> exportCmdService    "Envía comandos"
        sharedController    -> sharedQryService    "Envía queries"

        entryCmdService   -> entryAggregate       "Orquesta"
        entryCmdService   -> audioAdapter         "Almacena nota de voz"
        entryCmdService   -> streakCmdService     "Notifica actividad de registro"
        entryQryService   -> memoryDomainService  "Aplica filtros retrospectivos"
        moodCmdService    -> moodAggregate        "Orquesta"
        moodCmdService    -> streakCmdService     "Notifica actividad de registro"
        streakCmdService  -> streakDomainService  "Calcula racha"
        streakCmdService  -> streakAggregate      "Actualiza racha"
        exportCmdService  -> exportDomainService  "Prepara datos"
        exportCmdService  -> pdfAdapter           "Genera documento"
        reminderCmdService-> pushAdapter          "Programa notificación"
        sharedQryService  -> iamClientAdapter     "Verifica alcance de Consent"

        entryCmdService   -> entryRepo            "Persiste"
        entryQryService   -> entryRepo            "Consulta"
        moodCmdService    -> moodRepo             "Persiste"
        moodQryService    -> moodRepo             "Consulta"
        streakCmdService  -> streakRepo           "Persiste"
        streakQryService  -> streakRepo           "Consulta"
        reminderCmdService-> reminderRepo         "Persiste"

        entryRepo    -> postgres "CRUD" "SQL/TCP"
        moodRepo     -> postgres "CRUD" "SQL/TCP"
        streakRepo   -> postgres "CRUD" "SQL/TCP"
        reminderRepo -> postgres "CRUD" "SQL/TCP"
        audioAdapter -> storage  "Guarda audio cifrado" "HTTPS/S3 API"

        entryAggregate  -> eventBus "Publica DiaryEntryCreated"
        moodAggregate   -> eventBus "Publica MoodCheckInLogged"
        streakAggregate -> eventBus "Publica DiaryStreakIncremented"

        eventBus         -> assistantAiContext "Entrega DiaryEntryCreated para transcripción e inferencia"
        iamClientAdapter -> iamContext         "Consulta ConsentScope" "HTTPS/JSON"
    }

    views {
        component diaryApi "Diary_Components" {
            include *
            autoLayout
        }
        styles {
            element "Person"          { shape Person background #08427b color #ffffff }
            element "Software System" { background #1168bd color #ffffff }
            element "Container"       { background #438dd5 color #ffffff }
            element "Component"       { background #85bbf0 color #000000 }
        }
    }
}
```

![Diary Components](../assets/images/bounded-context/diary/diary-c4-diagramDiaryComponents.png)

#### 2.6.6.6. Bounded Context Software Architecture Code Level Diagrams

##### 2.6.6.6.1. Bounded Context Domain Layer Class Diagrams

Código en **Mermaid** (puede pegarse en [mermaid.live](https://mermaid.live) para visualizarlo):

```mermaid
classDiagram
    class DiaryEntry {
        +String id
        +String accountId
        +String title
        +String content
        +EntryType entryType
        +AudioMetadata audioMetadata
        +EmotionType primaryEmotion
        +Int emotionalIntensity
        +List~String~ tags
        +ExternalFactors externalFactors
        +EntryStatus status
        +Boolean isSensitive
        +Boolean isVaulted
        +DateTime createdAt
        +DateTime updatedAt
        +create()
        +update()
        +markAsSensitive()
        +moveToVault()
        +removeFromVault()
        +attachExternalFactors(factors)
    }
    class AudioMetadata {
        +String audioUrl
        +Int durationSeconds
        +String format
        +Long fileSizeBytes
    }
    class ExternalFactors {
        +Float sleepHours
        +String energyLevel
        +String stressLevel
        +String caffeineIntake
    }
    class MoodCheckIn {
        +String id
        +String accountId
        +EmotionType emotion
        +Int valenceScore
        +Int energyScore
        +DateTime loggedAt
        +record()
    }
    class DiaryReminder {
        +String id
        +String accountId
        +Time reminderTime
        +List~Int~ daysOfWeek
        +Boolean isEnabled
        +configure()
        +toggle()
    }
    class DiaryStreak {
        +String id
        +String accountId
        +Int currentStreakDays
        +Int longestStreakDays
        +Date lastLogDate
        +Int freezeTokensAvailable
        +registerDailyActivity(Date logDate)
        +resetStreak()
    }
    class StreakCalculationService {
        +evaluateStreak(DiaryStreak, Date currentDate) Int
    }
    class RetrospectiveMemoryService {
        +findMemories(accountId, List~DiaryEntry~) List~DiaryEntry~
    }
    class DiaryExportPreparationService {
        +prepareExportData(List~DiaryEntry~, DateRange) List~DiaryEntry~
    }

    DiaryEntry "1" *-- "0..1" AudioMetadata : contiene
    DiaryEntry "1" *-- "0..1" ExternalFactors : asocia
    DiaryStreak ..> StreakCalculationService : utiliza
    RetrospectiveMemoryService ..> DiaryEntry : evalúa
    DiaryExportPreparationService ..> DiaryEntry : filtra
```

![Class Diagram](../assets/images/bounded-context/diary/diary-class-diagram.png)

##### 2.6.6.6.2. Bounded Context Database Design Diagram

Código en **Mermaid ER Diagram** (también puede importarse en [dbdiagram.io](https://dbdiagram.io) adaptando la sintaxis):

```mermaid
erDiagram
    DIARY_ENTRIES {
        uuid id PK
        uuid account_id FK
        string title
        text content
        string entry_type
        string audio_url
        int audio_duration_seconds
        string primary_emotion
        int emotional_intensity
        string status
        boolean is_sensitive
        boolean is_vaulted
        datetime created_at
        datetime updated_at
    }
    DIARY_ENTRY_TAGS {
        uuid id PK
        uuid diary_entry_id FK
        string tag_name
    }
    DIARY_EXTERNAL_FACTORS {
        uuid id PK
        uuid diary_entry_id FK
        float sleep_hours
        string energy_level
        string stress_level
        string caffeine_intake
    }
    MOOD_CHECK_INS {
        uuid id PK
        uuid account_id FK
        string emotion
        int valence_score
        int energy_score
        datetime logged_at
    }
    DIARY_REMINDERS {
        uuid id PK
        uuid account_id FK
        time reminder_time
        string days_of_week
        boolean is_enabled
        datetime updated_at
    }
    DIARY_STREAKS {
        uuid id PK
        uuid account_id FK
        int current_streak_days
        int longest_streak_days
        date last_log_date
        int freeze_tokens_available
        datetime updated_at
    }

    DIARY_ENTRIES ||--o{ DIARY_ENTRY_TAGS : "categorized by"
    DIARY_ENTRIES ||--o| DIARY_EXTERNAL_FACTORS : "contextualized by"
    DIARY_ENTRIES }o--|| MOOD_CHECK_INS : "shares account"
    DIARY_ENTRIES }o--|| DIARY_STREAKS : "increments"
```

![ER Diagram](../assets/images/bounded-context/diary/diary-database-diagram.png)



### 2.6.6. Bounded Context: DailyCare (Routines)

**DailyCare (Routines)** es el contexto que apoya el bienestar constante del usuario: administra la configuración de rutinas diarias personalizadas, la asignación y respuesta de prompts de escritura reflexiva, el inicio de ejercicios de regulación rápida (SOS / Respiración) y el envío autónomo de recordatorios. Su objetivo es fomentar hábitos de autocuidado y proporcionar herramientas de contención inmediata, interactuando con el usuario mediante un motor de notificaciones en horarios que respeten su conveniencia temporal.

La frontera del contexto separa la gestión de hábitos diarios del historial clínico estructurado o del diario emocional principal. Un ejercicio SOS o un prompt completado pertenecen al ámbito del cuidado diario, y su orquestación es en gran medida autónoma a través de un *Scheduler* interno.

La máquina de estados de una notificación programada es `PENDING` -> `SENT` o `FAILED`. La máquina de estados de un prompt de escritura es `ASSIGNED` -> `COMPLETED`. Si una notificación falla por problemas de red externos, el sistema registra el fallo sin corromper la rutina base, la cual sigue activa para el día siguiente.

#### 2.6.6.1. Domain Layer

**Entities y Aggregates**

* **User (Aggregate Root):** id, devicePushToken, preferredTimezone. Orquesta la configuración de rutinas y centraliza las preferencias necesarias para que el sistema respete los husos horarios del usuario al interactuar.
* **DailyRoutine (Aggregate Root):** id, userId, title, targetTime, isActive, createdAt. Representa el hábito o actividad programada. Protege las invariantes de creación y expone los comportamientos `updateTargetTime()`, `deactivate()` y `generateNextNotification()`.
* **ScheduledNotification (Entity):** id, routineId, scheduledFor, status (PENDING, SENT, FAILED), sentAt. Es la instancia transaccional individual del recordatorio que se disparará.
* **WritingPrompt (Aggregate Root):** id, userId, question, answerText, status (ASSIGNED, COMPLETED), assignedAt, answeredAt. Ejercicio guiado asignado al usuario que este debe responder y guardar en el sistema.
* **SosExercise (Aggregate Root):** id, userId, exerciseType (BREATHING, GROUNDING), durationSeconds, initiatedAt. Registro inmutable (log) de la herramienta de contención inmediata seleccionada y ejecutada de forma voluntaria.

**Value Objects**

* **RoutineId, NotificationId, PromptId, ExerciseId:** identificadores únicos del dominio.
* **TargetTime:** hora local sin fecha estricta (LocalTime) configurada para la rutina.
* **NotificationStatus:** PENDING, SENT, FAILED.
* **PromptStatus:** ASSIGNED, COMPLETED.
* **ExerciseType:** BREATHING, GROUNDING.

**Domain Events**

* DailyRoutineCreated, RoutineReminderSent, WritingPromptCompleted, SosExerciseInitiated.

**Commands**

* ConfigureDailyRoutineCommand, TriggerScheduledNotificationCommand, AnswerWritingPromptCommand, InitiateSosExerciseCommand.

**Queries**

* GetActiveRoutinesByUserQuery, GetPendingPromptsQuery, GetUserExerciseHistoryQuery.

**Domain Services (Contratos)**

* **UserConvenienceSchedulePolicy:** valida y determina el momento exacto (`DateTime`) del envío de notificaciones evaluando la hora objetivo (`targetTime`) contra la zona horaria del usuario (`preferredTimezone`), garantizando que los recordatorios se programen a conveniencia y no generen intrusión.

#### 2.6.6.2. Interface Layer

**Controllers**

* **RoutineManagementController:** expone endpoints para configurar, guardar, pausar y consultar nuevas actividades o rutinas diarias.
* **WritingPromptController:** expone los prompts pendientes asignados al usuario y permite enviar y guardar el texto de respuesta.
* **SosExerciseController:** permite seleccionar e iniciar un ejercicio de regulación rápida (SOS / Respiración), registrando la duración y el tipo de intervención.

**Resources (Request/Response DTOs)**

* **Routines:** ConfigureRoutineResource, DailyRoutineResource.
* **Prompts:** AnswerPromptResource, WritingPromptResource.
* **Exercises:** InitiateExerciseResource, SosExerciseLogResource.

#### 2.6.6.3. Application Layer

**Command Handlers**

* **RoutineCommandServiceImpl:** ConfigureDailyRoutineCommand.
* **NotificationTriggerServiceImpl:** TriggerScheduledNotificationCommand (comando interno invocado de forma autónoma por el Scheduler).
* **PromptCommandServiceImpl:** AnswerWritingPromptCommand.
* **SosExerciseCommandServiceImpl:** InitiateSosExerciseCommand.

**Query Handlers**

* **RoutineQueryServiceImpl:** GetActiveRoutinesByUserQuery.
* **PromptQueryServiceImpl:** GetPendingPromptsQuery.
* **ExerciseQueryServiceImpl:** GetUserExerciseHistoryQuery.

**Event Handlers**

* **RoutineCreatedEventHandler:** reacciona a la creación de una nueva rutina para calcular e insertar en la base de datos la primera instancia de `ScheduledNotification` utilizando la política de husos horarios.
* **NotificationTriggeredEventHandler:** solicita al adaptador de infraestructura el formateo y despacho del payload hacia el dispositivo móvil del usuario.

#### 2.6.6.4. Infrastructure Layer

**Repositories**

* **RoutineRepository:** persistencia relacional de rutinas configuradas, la preferencia de huso horario y el calendario de notificaciones (`ScheduledNotification`).
* **DailyActivityRepository:** persistencia append-friendly de prompts completados y registros de auditoría de los ejercicios SOS ejecutados.

**Adaptadores externos**

* **BackgroundSchedulerAdapter:** representa al actor autónomo interno ("SafeDiary Scheduler", construido sobre herramientas como Hangfire, Quartz o Node Cron). Se encarga de evaluar constantemente los registros `PENDING` en base al reloj del sistema y despachar los comandos de trigger correspondientes.
* **PushNotificationAdapter (ACL):** adaptador para formatear y enviar payloads al "Servicio de Notificaciones Push" externo (ej. Firebase Cloud Messaging - FCM o APNs). Traduce las respuestas técnicas, gestiona reintentos en caso de indisponibilidad temporal del proveedor y actualiza el estado de la notificación a `FAILED` si los tokens del dispositivo ya no son válidos.


#### 2.6.7.5. Bounded Context Software Architecture Component Level Diagrams

![RUTINES_COMPONENT](../assets/images/bounded-context/rutines/rutines-components.png)

#### 2.6.7.6. Bounded Context Software Architecture Code Level Diagrams


##### 2.6.7.6.1. Bounded Context Domain Layer Class Diagrams

![RUTINES_CLASS](../assets/images/bounded-context/rutines/rutines-class-diagram.png)

##### 2.6.7.6.2. Bounded Context Database Design Diagram

![RUTINES_DATABASE](../assets/images/bounded-context/rutines/rutines-database-diagram.png)

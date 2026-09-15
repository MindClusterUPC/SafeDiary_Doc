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

### 2.2.3. Análisis de entrevistas


#### Análisis del segmento objetivo 1: [Nombre]



#### Análisis del segmento objetivo 2: [Nombre]


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




### 2.3.3. User Journey Mapping



#### User Journey Map 1: [Nombre del User Persona]



#### User Journey Map 2: [Nombre del User Persona]



### 2.3.4. Empathy Mapping


#### Empathy Map 1: [Nombre del User Persona]



#### Empathy Map 2: [Nombre del User Persona]


### 2.3.5. Big Picture EventStorming



### 2.3.6. Ubiquitous Language



## 2.4. Requirements specification



### 2.4.1. User Stories



### 2.4.2. Impact Mapping



### 2.4.3. Product Backlog


## 2.5. Strategic-Level Domain-Driven Design


### 2.5.1. EventStorming


#### 2.5.1.1. Candidate Context Discovery



#### 2.5.1.2. Domain Message Flows Modeling



#### 2.5.1.3. Bounded Context Canvases



##### Bounded Context Canvas: [Context Name]


### 2.5.2. Context Mapping


### 2.5.3. Software Architecture


#### 2.5.3.1. Software Architecture Context Level Diagrams


#### 2.5.3.2. Software Architecture Container Level Diagrams



#### 2.5.3.3. Software Architecture Deployment Diagrams



## 2.6. Tactical-Level Domain-Driven Design


### 2.6.x. Bounded Context: &lt;Bounded Context Name&gt;



#### 2.6.x.1. Domain Layer


#### 2.6.x.2. Interface Layer



#### 2.6.x.3. Application Layer



#### 2.6.x.4. Infrastructure Layer



#### 2.6.x.5. Bounded Context Software Architecture Component Level Diagrams



##### Container: [Container Name]



#### 2.6.x.6. Bounded Context Software Architecture Code Level Diagrams



##### 2.6.x.6.1. Bounded Context Domain Layer Class Diagrams


##### 2.6.x.6.2. Bounded Context Database Design Diagram



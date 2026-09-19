# Recomendaciones

Para los siguientes avances de **SafeDiary**, se recomienda priorizar el desarrollo de las funcionalidades principales del sistema, comenzando por **IAM y Diary**, para asegurar primero el registro de usuarios, la privacidad y el funcionamiento del diario emocional antes de incorporar funcionalidades más complejas como **Communities** y **Rooms**.

Se recomienda implementar una arquitectura **Offline-First** para permitir que los usuarios puedan registrar sus emociones y entradas del diario incluso cuando no tengan conexión a internet, sincronizando la información posteriormente. También se debe priorizar la protección de la información mediante autenticación, biometría y mecanismos adecuados de privacidad para la **Private Vault**.

Para el **AssistantAI**, se recomienda mantener su función como herramienta de apoyo reflexivo y no como sustituto de un profesional. Además, su procesamiento debe realizarse de forma segura, evitando exponer información personal innecesaria y contemplando mecanismos de respuesta ante fallos del servicio.

Finalmente, se recomienda continuar con el despliegue progresivo del backend y la implementación de procesos de **CI/CD, pruebas y monitoreo**, permitiendo validar continuamente la estabilidad, seguridad y funcionamiento de SafeDiary durante las siguientes etapas del proyecto.
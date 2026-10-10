# Divisor de cuenta web

Autoridad: docs/Deber2.md y spec original specs/001-divisor-cuenta/spec.md.
No ejecutar speckit-specify ni modificar la spec o los esperados para hacer pasar pruebas.
Feature activo: source scripts/feature-env.sh; .specify/feature.json conserva la misma ruta.

Arquitectura: presentation -> domain <- data; domain JavaScript puro.
Solo src/main.jsx compone estrategias concretas. Hook recibe dependencias.
Estado local useState; sin paquetes de estado, backend, persistencia ni recursos remotos.

Pruebas: npm test (6 casos + 1 LSP + 3 pantalla), npm run lint, npm run build.
Los archivos de análisis y casos son borradores de agente. Las Partes 2 y 7.2
requieren revisión o ejecución personal del estudiante; no atribuirle trabajo manual.


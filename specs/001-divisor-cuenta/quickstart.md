# Quickstart

Node.js >=22.12. Desde la raíz independiente del proyecto:

```sh
npm ci
source scripts/feature-env.sh
npm run dev
npx vitest run test/division.test.js
npm test
npm run lint
npm run build
```

La suite requerida debe pasar 6 casos + 1 LSP + 3 pantallas (10 pruebas).
En el navegador: 100/4/10 exacto → 27.50; 50/0/0 → error sin resultado;
abc/4/0 → Monto inválido; 10/3/0 arriba → 4.00.
Después de un resultado válido, introducir 0 personas debe retirar el resultado.
La compilación genera dist/; los archivos estáticos permiten cálculos sin servicios.

Feature activo: specs/001-divisor-cuenta, conservado también en .specify/feature.json.
No ejecutar speckit-specify. El archivo de casos es borrador del agente:
el estudiante debe escribirlo personalmente según la Parte 7.2.


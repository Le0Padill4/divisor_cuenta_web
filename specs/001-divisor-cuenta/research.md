# Research — migración Flutter a React

Investigación del flujo speckit-plan por Codex y un agente de investigación, sin edición
de código por ese agente. No existen NEEDS CLARIFICATION bloqueantes.

- **Decisión:** estado local useState y dependencias por props/argumento.
  **Razón:** una pantalla; conserva DIP y permite sustituir el cálculo.
  **Alternativas:** estado global/Riverpod equivalente descartado por alcance.
  Fuentes: [useState](https://react.dev/reference/react/useState),
  [props](https://react.dev/learn/passing-props-to-a-component).
- **Decisión:** plantilla Vite react JavaScript; Node observado 24.14.0.
  **Razón:** la Parte 3 lo pide; supera 22.12.
  **Alternativas:** react-ts y backend descartados.
  Fuente: [Vite](https://vite.dev/guide/),
  [Node releases](https://nodejs.org/en/about/previous-releases).
- **Decisión:** Vitest run y jsdom global con setup de jest-dom.
  **Razón:** se sigue literalmente la Parte 7.1; los tests domain no importan React.
  **Alternativas:** entorno Node por defecto propuesto en investigación, descartado
  para conservar la configuración pedida. fireEvent permite interacción sin instalar user-event.
  Fuentes: [Vitest](https://vitest.dev/guide/),
  [environment](https://vitest.dev/guide/environment.html),
  [Testing Library](https://testing-library.com/docs/react-testing-library/api/),
  [jest-dom](https://github.com/testing-library/jest-dom#with-vitest).
- **Decisión:** conservar Oxlint de la plantilla como comprobación estática.
  **Razón:** mantiene la obligación de flutter analyze en tecnología web; no agrega otro linter.
- **Decisión:** traducción conceptual de Dart a JS y escenarios fijos.
  **Razón:** los seis casos son la autoridad. No se agrega validación de monto positivo
  porque el ejemplo pedagógico de la Parte 2 no es un requisito del spec original.


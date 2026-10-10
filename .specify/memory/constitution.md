# Divisor de cuenta Constitution

## Core Principles

### I. SRP — Responsabilidad única
Cada función o módulo tiene una razón de cambio. El cálculo no valida entradas ni formatea
moneda; la validación, presentación y cálculo permanecen separados.

### II. OCP — Abierto/cerrado
`calcularDivision` depende de `estrategiaRedondeo`. Agregar otra estrategia de
redondeo no requiere modificar el cálculo ni estrategias ya existentes.

### III. LSP — Sustitución de Liskov
Cualquier implementación de `estrategiaRedondeo` puede sustituir a otra sin
que quien calcula pregunte el tipo concreto ni haga casts.

### IV. ISP — Segregación de interfaces
`estrategiaRedondeo` expone una única función `aplicar(valor)` para redondear un valor; ningún
cliente depende de operaciones que no utiliza.

### V. DIP — Inversión de dependencias
La presentación depende de abstracciones del domain. `domain` no importa
React ni DOM y no depende de `data`. Solo `main.jsx` compone implementaciones
concretas.

## Restricciones adicionales

- La aplicación es una sola pantalla para monto, personas, propina y resultado.
- Las capas son `presentation`, `domain` y `data`, con dependencias
  `presentation -> domain <- data`.
- `domain` es JavaScript puro. La app funciona sin red ni base de datos.
- No se agregan secretos al repositorio. Los únicos paquetes de ejecución son
  `react` y `react-dom`; las herramientas permitidas son Vite y su plugin React,
  Oxlint de la plantilla, Vitest, Testing Library, jest-dom y jsdom.
  No se agregan librerías de estado externas.
- Se validan explícitamente las entradas numéricas y se representa con `null`
  la ausencia de resultado; se conservan nombres en español.

## Calidad y aprendizaje

- Cada criterio de aceptación tiene una prueba ejecutable; el cálculo crítico
  tiene pruebas sin React ni DOM y la pantalla tiene pruebas del DOM.
- El proyecto debe pasar `npm test`, `npm run lint` y `npm run build`.
- El estudiante debe poder explicar cada función generada: propósito, entradas,
  salida y errores posibles.

## Governance

Esta constitución gobierna la implementación y prevalece sobre decisiones de
plan o código que la contradigan. Todo cambio a estos principios requiere
actualizar este archivo y su versión. En cada revisión se comprueban las capas,
los cinco principios SOLID y las pruebas requeridas por la spec.

**Version**: 2.0.0 | **Ratified**: 2026-10-01 | **Last Amended**: 2026-10-09

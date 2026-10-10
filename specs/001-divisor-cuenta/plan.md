# Implementation Plan: Divisor de cuenta web

**Branch**: `sdd` | **Date**: 2026-10-09 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification at `specs/001-divisor-cuenta/spec.md`.

## Summary

Implementar en React/Vite/JavaScript el divisor offline de una pantalla, conservando
la spec Flutter byte por byte. `domain` contiene Cuenta, Resultado, validarEntrada,
calcularDivision y el contrato estrategiaRedondeo; `data` aporta dos objetos con
`aplicar(valor)`. `useDivisor` recibe sus dependencias; solo `main.jsx` compone
las implementaciones concretas.

## Technical Context

**Language/Version**: JavaScript ES modules y JSX; Node.js 24.14.0 (>=22.12), npm 11.9.0.

**Primary Dependencies**: React y React DOM 19.3.0 (manifest ^19.2.8); Vite 8.3.4, plugin React 6.1.2
y Oxlint 1.87.0 de la plantilla. No se usan librerías de estado externas.

**Storage**: Ninguno. No localStorage, cookies, historial, autenticación ni backend.

**Testing**: Vitest, Testing Library React, jest-dom y jsdom. Seis pruebas de dominio,
una LSP y tres de pantalla; `npm test`, `npm run lint`, `npm run build`.

**Target Platform**: Navegadores modernos; paquete estático HTML/CSS/JS.

**Project Type**: Aplicación web de una pantalla.

**Performance Goals**: Cálculo local inmediato para una cuenta; no se inventa una medición de latencia.

**Constraints**: Offline para calcular; sin llamadas de red ni base de datos; domain
no importa React ni DOM ni data. Ninguna fuente, recurso o script remoto en la app.
El servidor Vite sirve archivos durante desarrollo; no es un backend de negocio.

**Scale/Scope**: Una cuenta a la vez y una pantalla; mismos seis resultados.

## Constitution Check

- SRP: cálculo, validación, formato y dibujo separados.
- OCP: calcularDivision solo usa el contrato aplicar(valor), sin decidir el modo.
- LSP: los dos objetos de redondeo sustituyen el mismo argumento sin comprobaciones de tipo.
- ISP: estrategiaRedondeo documenta una sola operación.
- DIP: useDivisor recibe validar, calcular, estrategias y formatear; no importa data.
- Capas: presentation -> domain <- data; composición concreta exclusiva en src/main.jsx.
- Seguridad: sin secretos ni servicios; solo dependencias permitidas.
- Calidad/aprendizaje: 6+1+3 pruebas, lint, build; el estudiante explica las funciones.

**Gate inicial**: PASS. No hay contradicción tecnológica con la spec conservada.
**Gate posterior al diseño**: PASS. Se conservan comportamiento y cinco principios.

## Project Structure

### Documentation (this feature)

```text
specs/001-divisor-cuenta/
├── spec.md              # copia idéntica, no regenerada
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/pantalla.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── domain/
│   ├── cuenta.js
│   ├── resultado.js
│   ├── estrategiaRedondeo.js
│   ├── calcularDivision.js
│   └── validarEntrada.js
├── data/
│   ├── redondeoExacto.js
│   └── redondeoHaciaArriba.js
├── presentation/
│   ├── useDivisor.js
│   ├── formateadorMoneda.js
│   └── PantallaDivisor.jsx
├── main.jsx
└── index.css
test/
├── setup.js
├── casosDePrueba.js
├── division.test.js
└── pantalla.test.jsx
```

**Structure Decision**: Proyecto Vite independiente. JSX solo en presentación/composición.
No se diseñan endpoints ni persistencia.

## Design Decisions

- Cuenta conserva monto, personas y porcentajePropina; Resultado tiene montoPorPersona.
- validarEntrada devuelve un mensaje o null; se llama antes del cálculo. Se conserva
  la prioridad Flutter: monto finito, al menos una persona, propina finita.
- calcularDivision suma propina y divide; luego llama a estrategia.aplicar(valor).
- Redondeo exacto: Math.sign(valor) * Math.round(Math.abs(valor) * 100) / 100 (empates como Dart). Hacia arriba: Math.ceil(valor).
- useDivisor recibe dependencias por argumento y conserva campos/error/resultado con useState.
- El formulario acepta texto para que abc llegue a validarEntrada; la conversión
  exige personas enteras y no convierte el campo vacío en cero.
- Al calcular, se borra el resultado anterior antes de validar. Los errores nunca
  dejan un importe previo; formateadorMoneda usa dos decimales para presentación.
- Vitest configura jsdom, globals y test/setup.js como exige la Parte 7.1.
  Los tests de dominio no importan React; el núcleo sigue siendo JavaScript puro.
- Las pruebas se escriben antes del código; un fallo inicial por módulos ausentes
  se registra y se corrige en src, sin alterar esperados ni mensajes.
- Las métricas automáticas comienzan al ejecutar speckit-plan. Primero se registra
  build correcto; después se detiene el cronómetro al pasar los seis casos.
- Las Partes 2 y 7.2 son personales: documentos y tabla de casos generados por Codex
  son borradores; no se declara trabajo manual del estudiante.

## Visual Design

Público: quien comparte una cuenta de restaurante. Trabajo único: ingresar la cuenta
y leer cuánto paga cada persona. Paleta: fondo azul papel #eef4f8, tinta #172d3c,
azul título #12344c, acento #176b74, superficie #ffffff, texto secundario #4a6272.
Título Georgia; cuerpo sistema sans; importe monospace con números tabulares.
Firma: resultado en un recibo sencillo con borde discontinuo que recuerda la cuenta.
Se descartó un encabezado promocional grande: el formulario y su resultado llevan la jerarquía.

```text
Escritorio: [ monto / personas / propina / modo / Calcular ] [ recibo / valor ]
Móvil:     [ formulario ] [ recibo ]
```

CSS local, foco visible, etiquetas asociadas, errores role=alert y resultado accesible;
sin animación decorativa, recursos externos ni funcionalidades nuevas.

## Complexity Tracking

No existen violaciones a justificar. No se requiere una biblioteca de estado para una pantalla.

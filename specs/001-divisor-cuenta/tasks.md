# Tasks: Divisor de cuenta web

**Input**: specs/001-divisor-cuenta/spec.md (copia idéntica).
**Prerequisites**: plan.md, research.md, data-model.md, contracts/pantalla.md.
**Tests**: obligatorios: seis casos idénticos, LSP y tres pantallas.
**Organization**: una historia US1, prioridad P1; archivos relativos a esta raíz.

## Phase 1: Setup

- [X] T001 Comprobar origen Flutter y diff inicial vacío en evidencias/spec-inicial.diff.
- [X] T002 Mantener el feature activo en scripts/feature-env.sh y .specify/feature.json.
- [X] T003 Configurar dependencias permitidas y scripts en package.json, vite.config.js y test/setup.js.

## Phase 2: Foundational

- [X] T004 Crear el borrador fiel de test/casosDePrueba.js y advertir que Parte 7.2 exige escritura personal.
- [X] T005 Definir contrato de una operación aplicar(valor) en src/domain/estrategiaRedondeo.js.

## Phase 3: User Story 1 — Dividir una cuenta (P1)

**Goal**: calcular con propina y dos modos; mostrar resultado o error sin importe anterior.
**Independent Test**: 6 aceptación + 1 LSP + 3 pantallas.

### Tests antes de implementar

- [X] T006 [P] [US1] Crear test/division.test.js: bucle de seis casos, validación literal, no calcular errores y LSP sin if/tipos (AC1–AC6, SC-001/004).
- [X] T007 [P] [US1] Crear las tres pruebas de test/pantalla.test.jsx con etiquetas y clic; incluir retirar resultado previo (FR-006/007, SC-002).
- [X] T008 [US1] Registrar el fallo inicial por ausencia de módulos en evidencias/tests-red.txt sin editar los esperados.

### Implementación

- [X] T009 [P] [US1] Crear src/domain/cuenta.js y resultado.js con monto/personas/porcentajePropina y montoPorPersona.
- [X] T010 [US1] Implementar src/domain/validarEntrada.js y calcularDivision.js: monto finito, personas >=1 enteras y propina finita; sumar propina antes de dividir (FR-003/006/007).
- [X] T011 [P] [US1] Implementar src/data/redondeoExacto.js y redondeoHaciaArriba.js mediante aplicar(valor), sin modificar cálculo (FR-002/004/005).
- [X] T012 [US1] Crear src/presentation/useDivisor.js con useState y dependencias recibidas; crear formateadorMoneda.js con dos decimales (FR-004, SC-002).
- [X] T013 [US1] Crear src/presentation/PantallaDivisor.jsx e index.css: monto/personas/propina, selector y resultado en una pantalla (FR-001/002, SC-003).
- [X] T014 [US1] Componer solo en src/main.jsx, eliminar recursos de plantilla sin uso y configurar index.html en español (FR-008).

## Phase 4: Validación y entrega

- [X] T015 Registrar primer npm run build correcto y los 6 casos verdes en evidencias/cronometro.json.
- [X] T016 Verificar npm test, npm run lint y los cuatro controles SOLID; no red ni persistencia en src/ (FR-008, SC-001/002/003/004).
- [X] T017 Comparar spec, constituciones, planes y escenarios en evidencias/; completar analisis_spec.md, bitacora.md y respuestas.md.
- [X] T018 Comprobar interfaz real en navegador y registrar límites de esa observación en evidencias/browser.md.
- [X] T019 Preparar checklist.md con evidencia y pendientes personales; publicar los dos repositorios GitHub.

## Dependencies & Execution Order

Phase 1 precede Phase 2; luego US1: T006/T007 → T008 → T009–T014.
T005 se limita al contrato antes del código; T008 falla porque no existe la implementación.
T010 depende de T009/T005; T012 de T010/T011; T013/T014 de T012.
T015 se ejecuta con la implementación completa; T016–T019 finalizan después.
Converge se ejecuta después de implement, evalúa artefactos y código y no escribe código.

## Parallel Example: User Story 1

T006 y T007 trabajan en archivos diferentes; T009 y T011 también, tras sus contratos.
La ejecución principal será secuencial; solo la investigación del plan se delegó.

## Implementation Strategy

MVP es la única historia US1 completa. Escribir pruebas y registrar rojo; construir núcleo,
estrategias, hook y pantalla; registrar build antes de suite de aceptación; completar
suite/revisión y converge. No alterar spec ni test para hacer pasar la implementación.

Las tareas de generar borradores no acreditan los ejercicios personales: el estudiante
debe realizar/revisar Parte 2 y escribir Parte 7.2. Tampoco se cuenta eso como líneas manuales.


## Phase 5: Convergence

- [X] T020 Completar comparación y respuestas en analisis_spec.md, bitacora.md, respuestas.md y evidencias/ por T017 (missing, MEDIUM).
- [X] T021 Guardar observaciones y captura real en evidencias/browser.md por T018 (partial, LOW).
- [X] T022 Finalizar checklist.md y publicación verificable de ambos repositorios por T019 (missing, MEDIUM).

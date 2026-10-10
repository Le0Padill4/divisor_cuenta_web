# Respuestas — Deber 2

## 1. ¿Qué porcentaje de la especificación se pudo reutilizar?

Se reutilizó el **100 % sin cambios**: 0 % necesitó adaptación y 0 % se descartó.
La especificación decía qué debía hacer la app y no dependía de Flutter, como
muestran el [análisis](analisis_spec.md) y el [diff vacío](evidencias/spec-final.diff).
El agente tardó unos 6,5 minutos hasta que pasaron los seis casos; no hay un tiempo
registrado de Flutter para comparar.

## 2. ¿Qué cambió en la constitución?

**25 reglas quedaron idénticas, 9 se adaptaron y 5 se reemplazaron.** Se conservaron
las reglas generales, como SOLID; se adaptaron los nombres y el lenguaje; y se
reemplazaron las herramientas propias de Flutter por las de React.
La clasificación de cada regla está en el [análisis](analisis_spec.md), comparando
la [constitución Flutter](evidencias/flutter/constitution.md) con la
[constitución React](.specify/memory/constitution.md).

## 3. ¿Fue necesario modificar la especificación?

No. Las reglas de cálculo y los errores eran los mismos para las dos versiones.
Solo cambió la forma de construir la app, por eso la especificación se conservó completa.

## 4. ¿Cambiaron los seis casos de aceptación?

No cambió ningún resultado, mensaje de error ni escenario. Los seis casos pasaron
tanto en Flutter como en React; solo cambió cómo estaban escritos para cada lenguaje.

**Revisión personal:** revisé los seis casos a mano.

## 5. ¿Qué partes del plan Flutter dejaron de servir en React?

- El código en Dart se pasó a JavaScript.
- La pantalla hecha con widgets de Flutter se rehízo con componentes de React.
- Las pruebas de Flutter se adaptaron para ejecutarlas con Vitest.

## 6. ¿Qué artefacto fue el más reusable y cuál el menos reusable?

El más reusable fue la especificación, porque se conservó completa, como muestra
el [diff vacío](evidencias/spec-final.diff). El menos reusable fue el código Flutter,
porque hubo que escribirlo de nuevo para React; eso se ve en el
[historial de implementación](https://github.com/Le0Padill4/divisor_cuenta_web/commit/5f7402e).

Las salidas y comparaciones están en el [anexo de evidencias](evidencias/respuestas-anexo.md).

# Divisor de cuenta web — Deber 2

Migración del divisor Flutter SDD a React/Vite/JavaScript conservando la especificación.
Una pantalla, sin servicios, red de negocio ni persistencia.

## Entrega

- [Respuestas (6) y salidas completas](respuestas.md)
- [Análisis de enunciados y constituciones](analisis_spec.md)
- [Bitácora con métricas observadas](bitacora.md)
- [Checklist de las ocho partes](checklist.md)
- [Fuente del deber](docs/Deber2.md)
- [Feature y spec original copiada](specs/001-divisor-cuenta/spec.md)
- [Evidencias](evidencias/)
- [Flutter independiente, rama sdd](https://github.com/Le0Padill4/divisor_cuenta/tree/sdd)
- [Original del laboratorio en ClaseApps](https://github.com/Le0Padill4/ClaseApps/tree/sdd/Semana7_DivisorCuenta/divisor_cuenta)

**Pendiente personal:** Parte 2 exige análisis a mano y Parte 7.2 exige escribir la tabla
de casos. Los archivos actuales son borradores de Codex, aunque la ejecución técnica
está validada. Revisa las respuestas y explica las funciones antes de entregar.

## Ejecutar

Node.js >=22.12 (verificado 24.14.0), npm 11.9.0.

```sh
npm ci
source scripts/feature-env.sh
npm run dev
npm test
npm run lint
npm run build
node scripts/comparar-casos.mjs
```

La instalación usa package-lock.json. Solo react/react-dom en ejecución;
Vite/plugin, Oxlint y Vitest/Testing Library/jest-dom/jsdom en desarrollo.
No agregar librerías de estado ni ejecutar speckit-specify.

## Arquitectura SOLID

presentation -> domain <- data. Cuenta y Resultado son valores puros;
calcularDivision recibe una estrategia aplicar(valor). useDivisor recibe
validar/calcular/estrategias/formatear, sin importar data. main.jsx es la composición.

| Función | Entradas → salida | Responsabilidad / error |
|---|---|---|
| crearCuenta | monto, personas, propina → Cuenta | Datos; no valida |
| crearResultado | importe → Resultado | Datos; no formatea |
| validarEntrada | Cuenta → mensaje o null | Monto finito, personas enteras >=1, propina finita; mensajes literales |
| calcularDivision | Cuenta validada, estrategia → Resultado | Propina/división/redondeo; requiere entrada validada y aplicar |
| aplicar exacto | número → número | Centavos, empates como Dart |
| aplicar arriba | número → entero | Math.ceil |
| formateadorMoneda | número → texto | Dos decimales |
| convertirNumero | texto → número o NaN | Conversión del formulario |
| convertirPersonas | texto → entero o 0 | Equivalente de int.tryParse usado en Flutter |
| cambiarCampo | nombre, texto → actualiza estado | Limpia error/resultado anterior |
| calcularCuenta | submit → actualiza error/resultado | Valida antes de calcular; jamás calcula entrada inválida |
| useDivisor | dependencias → estado/acciones | Estado local de formulario |
| PantallaDivisor | dependencias → JSX | Dibujo y accesibilidad; no regla de cálculo |

Los seis casos no cambian: 27.50, 30.00, error de personas, error de monto, 3.33 y 4.00.
Validación automatizada: 10/10 pruebas; lint/build correctos. Consulta evidencias para
comandos, fechas y códigos de salida. La revisión real de navegador se registra por separado.

![Resultado normal](evidencias/pantalla-27-50.jpg)

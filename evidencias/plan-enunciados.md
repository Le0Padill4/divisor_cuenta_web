# Comparación de enunciados del plan

Inventario por aparición de decisiones normativas del plan original: resumen, contexto, gates y decisiones. Se dividen cláusulas independientes, se mantienen definiciones de entidad y protocolo como una idea. No se cuentan título/fecha, declaraciones PASS ni las líneas de los árboles de archivos. El árbol sí se compara en el diff físico. Las decisiones nuevas del plan React (CSS, conversión de textos, bitácora) se indican aparte; no se confunden con enunciados originales modificados.

| ID | Decisión Flutter | Decisión React | Resultado |
|---|---|---|---|
| P01 | Implementar Flutter estable | React/Vite/JavaScript | adaptado |
| P02 | Sin paquetes externos (resumen) | React y herramientas exigidas | adaptado |
| P03 | Sin servicios | Sin servicios | intacto |
| P04 | domain puro en Dart con entidades, validación, cálculo e interfaz | domain puro en JavaScript con contrato estructural | adaptado |
| P05 | data aporta dos implementaciones | data aporta dos objetos aplicar | adaptado |
| P06 | presentation coordina mediante dependencias por constructor | useDivisor recibe dependencias por argumento | adaptado |
| P07 | Solo main.dart crea concretas | Solo main.jsx compone concretas | adaptado |
| P08 | Dart 3.13.1 / Flutter 3.47.1 | JavaScript/JSX / Node24.14 | adaptado |
| P09 | Flutter SDK y flutter_test | React/React DOM + Vite/Vitest/Testing Library/jsdom | adaptado |
| P10 | Storage: ninguno | Storage: ninguno | intacto |
| P11 | flutter test, Dart y tres widgets | npm test, dominio JS y tres DOM | adaptado |
| P12 | Android APK debug / Flutter multiplataforma | Navegador / paquete estático | adaptado |
| P13 | App móvil de una pantalla | App web de una pantalla | adaptado |
| P14 | Cálculo local inmediato | Cálculo local inmediato | intacto |
| P15 | Offline | Offline para cálculos | intacto |
| P16 | Sin red | Sin llamadas de red | intacto |
| P17 | Sin persistencia | Sin persistencia | intacto |
| P18 | Sin dependencias externas (constraints) | Solo dependencias permitidas | adaptado |
| P19 | domain no importa Flutter (constraints) | domain no importa React/DOM | adaptado |
| P20 | Respetar SOLID y alcance de spec | Respetar SOLID y alcance de spec | intacto |
| P21 | Una cuenta a la vez | Una cuenta a la vez | intacto |
| P22 | Una pantalla | Una pantalla | intacto |
| P23 | SRP: cálculo/validación/formato/dibujo separados | Misma separación | intacto |
| P24 | OCP: CalcularDivision depende de EstrategiaRedondeo | calcularDivision depende de aplicar | adaptado |
| P25 | LSP: estrategias intercambiables por interfaz | Objetos intercambiables por contrato | adaptado |
| P26 | ISP: interfaz de un método | Contrato de una función aplicar | adaptado |
| P27 | DIP: controller depende de abstracciones | Hook depende de funciones/estrategias recibidas | adaptado |
| P28 | Composición concreta en main.dart (gate) | Composición concreta en main.jsx | adaptado |
| P29 | presentation -> domain <- data | Misma dirección | intacto |
| P30 | domain no importa Flutter (gate) | domain no importa React/DOM | adaptado |
| P31 | Sin credenciales | Sin secretos | intacto |
| P32 | Sin dependencias extras (gate) | Sin dependencias ajenas a las permitidas | adaptado |
| P33 | Funciones pequeñas y explicables | Misma obligación de explicar | intacto |
| P34 | Único proyecto Flutter | Único proyecto Vite independiente | adaptado |
| P35 | No API | No endpoints/backend | intacto |
| P36 | No contratos de red | No contratos de red (solo contrato UI local) | intacto |
| P37 | No datos persistentes | No datos persistentes | intacto |
| P38 | Cuenta: total/personas/porcentaje | Cuenta: monto/personas/porcentajePropina | intacto |
| P39 | Resultado: valor por persona | Resultado: montoPorPersona | intacto |
| P40 | ValidarEntrada devuelve mensaje nullable | validarEntrada devuelve mensaje o null | adaptado |
| P41 | Validar antes del cálculo | Validar antes del cálculo | intacto |
| P42 | CalcularDivision recibe Cuenta/EstrategiaRedondeo | calcularDivision recibe Cuenta/objeto aplicar | adaptado |
| P43 | Repartir total más propina | Sumar propina antes de dividir | intacto |
| P44 | Aplicar estrategia después de dividir | Aplicar estrategia después de dividir | intacto |
| P45 | Exacto expresa centavos a dos decimales | Exacto redondea centavos; formateador muestra dos decimales | intacto |
| P46 | Arriba al siguiente entero | Math.ceil | intacto |
| P47 | Controller recibe dependencias por constructor | Hook recibe dependencias por argumento | adaptado |
| P48 | Flutter setState conserva estado | React useState conserva estado | adaptado |
| P49 | Pruebas de dominio recorren seis casos | Vitest recorre seis casos | adaptado |
| P50 | Prueba sustitución LSP | Misma prueba conceptual | intacto |
| P51 | Tres pruebas de widgets resultado/errores | Tres pruebas DOM resultado/errores | adaptado |

Enunciados originales: 51; adaptados: 27; intactos: 24.

Esto mide decisiones del inventario, no líneas físicas ni porcentaje de código reusable. El diff físico incluye 103 líneas añadidas y 59 retiradas (162 afectadas); no son 162 enunciados. Las tareas/code se rehacen para JSX, hooks, contrato estructural, runner y paquete web.

Las precisiones nuevas —parseo equivalente a Flutter, retiro de resultado previo, contrato UI, configuración de jsdom, diseño CSS local y registro automático— justifican la ejecución web o evidencian requisitos existentes; no alteran la spec.

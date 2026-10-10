# Contrato de pantalla — US1

Una pantalla con campos etiquetados Monto total, Personas y Propina (%); selector
Redondeo con opciones Exacto (2 decimales) y Hacia arriba (entero); botón Calcular.

PantallaDivisor recibe dependencias y llama useDivisor(dependencias).
useDivisor no importa implementaciones de data; calcularDivision solo recibe
Cuenta y un objeto con aplicar(valor).

Resultado válido: texto de dos decimales y etiqueta Por persona.
Error: mensaje literal en role=alert y ausencia de resultado, incluso después de éxito.

Casos US1/AC1–AC6: 27.50, 30.00, Debe haber al menos una persona,
Monto inválido, 3.33, 4.00 con las entradas del spec sin cambios.
Sin red, persistencia ni autenticación.


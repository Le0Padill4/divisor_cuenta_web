# Data Model

- **Cuenta:** monto (number), personas (entero), porcentajePropina (number).
  No hay almacenamiento. El validador devuelve exactamente «Monto inválido» para
  monto no finito, «Debe haber al menos una persona» para personas menores a una
  o no enteras, y «Propina inválida» para propina no finita (equivalente Flutter).
- **Resultado:** montoPorPersona (number), luego de propina y estrategia.
- **estrategiaRedondeo:** contrato estructural { aplicar(valor): number }.
  No clase base ni operaciones adicionales.
- **Estado de presentación:** textos monto/personas/propina, modo exacto/arriba,
  error null|string y resultado null|Resultado. Entradas vacías se convierten en
  NaN; personas inválidas equivalen al 0 usado por el parser Flutter.
- **Transiciones:** editar campo limpia resultado/error; calcular limpia estado previo,
  valida, muestra error o calcula con estrategia recibida y formatea. No historial.


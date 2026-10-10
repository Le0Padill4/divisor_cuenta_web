/** Devuelve un mensaje literal o null, en el mismo orden de la versión Flutter. */
export function validarEntrada(cuenta) {
  if (!Number.isFinite(cuenta.monto)) {
    return 'Monto inválido'
  }
  if (!Number.isInteger(cuenta.personas) || cuenta.personas < 1) {
    return 'Debe haber al menos una persona'
  }
  if (!Number.isFinite(cuenta.porcentajePropina)) {
    return 'Propina inválida'
  }
  return null
}


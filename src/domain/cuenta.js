/** Construye los datos de una cuenta; la validación pertenece a validarEntrada. */
export function crearCuenta(monto, personas, porcentajePropina) {
  return Object.freeze({ monto, personas, porcentajePropina })
}


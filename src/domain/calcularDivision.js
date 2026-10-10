import { crearResultado } from './resultado.js'

/**
 * Calcula una cuenta ya validada. La estrategia decide el redondeo.
 * @param {{monto: number, personas: number, porcentajePropina: number}} cuenta
 * @param {import('./estrategiaRedondeo.js').EstrategiaRedondeo} estrategia
 */
export function calcularDivision(cuenta, estrategia) {
  const totalConPropina = cuenta.monto * (1 + cuenta.porcentajePropina / 100)
  const montoPorPersona = totalConPropina / cuenta.personas
  return crearResultado(estrategia.aplicar(montoPorPersona))
}


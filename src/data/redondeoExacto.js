/** @type {import('../domain/estrategiaRedondeo.js').EstrategiaRedondeo} */
export const redondeoExacto = Object.freeze({
  aplicar(valor) {
    // Dart round() resuelve los empates alejándose de cero, también en negativos.
    return Math.sign(valor) * Math.round(Math.abs(valor) * 100) / 100
  },
})


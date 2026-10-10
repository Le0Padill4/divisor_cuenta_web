/** @type {import('../domain/estrategiaRedondeo.js').EstrategiaRedondeo} */
export const redondeoHaciaArriba = Object.freeze({
  aplicar(valor) {
    return Math.ceil(valor)
  },
})


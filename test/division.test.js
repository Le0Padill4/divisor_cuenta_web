import { describe, it, expect, vi } from 'vitest'
import { crearCuenta } from '../src/domain/cuenta.js'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'
import { casos } from './casosDePrueba.js'

describe('Los mismos seis casos de aceptación de Flutter', () => {
  for (const caso of casos) {
    it(caso.nombre, () => {
      const cuenta = crearCuenta(caso.monto, caso.personas, caso.propina)
      const calcular = vi.fn(calcularDivision)
      const error = validarEntrada(cuenta)
      if (caso.errorEsperado !== undefined) {
        expect(error).toBe(caso.errorEsperado)
        expect(calcular).not.toHaveBeenCalled()
        return
      }
      expect(error).toBeNull()
      const estrategia = caso.modo === 'arriba' ? redondeoHaciaArriba : redondeoExacto
      const resultado = calcular(cuenta, estrategia)
      expect(resultado.montoPorPersona).toBeCloseTo(caso.esperado, 2)
      expect(calcular).toHaveBeenCalledOnce()
    })
  }
})

it('LSP: el mismo cálculo recibe ambas estrategias sin conocer su tipo', () => {
  const cuenta = crearCuenta(10, 3, 0)
  expect(calcularDivision(cuenta, redondeoExacto).montoPorPersona).toBeCloseTo(3.33, 2)
  expect(calcularDivision(cuenta, redondeoHaciaArriba).montoPorPersona).toBeCloseTo(4.00, 2)
})


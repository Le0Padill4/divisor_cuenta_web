import { afterEach, describe, it, expect, vi } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { PantallaDivisor } from '../src/presentation/PantallaDivisor.jsx'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'
import { formateadorMoneda } from '../src/presentation/formateadorMoneda.js'

afterEach(cleanup)

function crearPantalla() {
  const calcular = vi.fn(calcularDivision)
  render(<PantallaDivisor dependencias={{
    validar: validarEntrada, calcular, formatear: formateadorMoneda,
    estrategias: { exacto: redondeoExacto, arriba: redondeoHaciaArriba },
  }} />)
  return calcular
}

function completar(monto, personas, propina = '0') {
  fireEvent.change(screen.getByLabelText('Monto total'), { target: { value: monto } })
  fireEvent.change(screen.getByLabelText('Personas'), { target: { value: personas } })
  fireEvent.change(screen.getByLabelText('Propina (%)'), { target: { value: propina } })
  fireEvent.click(screen.getByRole('button', { name: 'Calcular' }))
}

describe('Pantalla del divisor', () => {
  it('100, 4 y 10: Calcular muestra 27.50', () => {
    crearPantalla()
    completar('100', '4', '10')
    expect(screen.getByText('27.50')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('50 y 0 personas: error literal sin resultado, incluso después de éxito', () => {
    const calcular = crearPantalla()
    completar('100', '4', '10')
    expect(screen.getByText('27.50')).toBeInTheDocument()
    calcular.mockClear()
    completar('50', '0')
    expect(screen.getByRole('alert')).toHaveTextContent('Debe haber al menos una persona')
    expect(screen.queryByTestId('resultado')).not.toBeInTheDocument()
    expect(screen.queryByText('27.50')).not.toBeInTheDocument()
    expect(calcular).not.toHaveBeenCalled()
  })

  it('abc: Calcular muestra Monto inválido y no calcula', () => {
    const calcular = crearPantalla()
    completar('abc', '4')
    expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido')
    expect(screen.queryByTestId('resultado')).not.toBeInTheDocument()
    expect(calcular).not.toHaveBeenCalled()
  })
})


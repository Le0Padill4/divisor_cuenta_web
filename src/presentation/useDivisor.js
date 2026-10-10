import { useState } from 'react'
import { crearCuenta } from '../domain/cuenta.js'

function convertirNumero(texto) {
  const limpio = texto.trim()
  return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(limpio)
    ? Number(limpio)
    : NaN
}

function convertirPersonas(texto) {
  const limpio = texto.trim()
  return /^[+-]?\d+$/.test(limpio) ? Number(limpio) : 0
}

/** Coordina campos y cálculo con dependencias recibidas; no conoce data. */
export function useDivisor({ validar, calcular, estrategias, formatear }) {
  const [campos, setCampos] = useState({
    monto: '', personas: '4', propina: '0', modo: 'exacto',
  })
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState(null)

  function cambiarCampo(nombre, valor) {
    setCampos(actuales => ({ ...actuales, [nombre]: valor }))
    setResultado(null)
    setError(null)
  }

  function calcularCuenta(evento) {
    evento.preventDefault()
    setResultado(null)
    setError(null)
    const cuenta = crearCuenta(
      convertirNumero(campos.monto),
      convertirPersonas(campos.personas),
      convertirNumero(campos.propina),
    )
    const mensaje = validar(cuenta)
    if (mensaje !== null) {
      setError(mensaje)
      return
    }
    setResultado(calcular(cuenta, estrategias[campos.modo]))
  }

  return {
    campos, error,
    resultado: resultado === null ? null : formatear(resultado.montoPorPersona),
    cambiarCampo, calcularCuenta,
  }
}


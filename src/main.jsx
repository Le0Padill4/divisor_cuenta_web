import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { validarEntrada } from './domain/validarEntrada.js'
import { calcularDivision } from './domain/calcularDivision.js'
import { redondeoExacto } from './data/redondeoExacto.js'
import { redondeoHaciaArriba } from './data/redondeoHaciaArriba.js'
import { formateadorMoneda } from './presentation/formateadorMoneda.js'
import { PantallaDivisor } from './presentation/PantallaDivisor.jsx'
import './index.css'

const dependencias = {
  validar: validarEntrada,
  calcular: calcularDivision,
  estrategias: { exacto: redondeoExacto, arriba: redondeoHaciaArriba },
  formatear: formateadorMoneda,
}

createRoot(document.getElementById('root')).render(
  <StrictMode><PantallaDivisor dependencias={dependencias} /></StrictMode>,
)

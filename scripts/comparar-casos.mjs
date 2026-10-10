import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { casos } from '../test/casosDePrueba.js'

const fuente = new URL('../evidencias/flutter/casos_de_prueba.dart', import.meta.url)
const dart = readFileSync(fuente, 'utf8')
const bloques = [...dart.matchAll(/CasoDivision\(\s*nombre:\s*'([^']+)'([\s\S]*?)\n  \),/g)]
const claves = ['monto', 'personas', 'propina', 'modo', 'esperado', 'errorEsperado']
const originales = bloques.map(([, nombre, bloque]) => {
  const caso = { nombre }
  for (const clave of claves) {
    const encontrado = bloque.match(new RegExp(clave + ":\\s*('([^']*)'|double\\.nan|[-\\d.]+)"))
    if (encontrado) {
      caso[clave] = encontrado[2] ?? (encontrado[1] === 'double.nan' ? 'NaN' : Number(encontrado[1]))
    }
  }
  return caso
})
const traducidos = casos.map(caso => Object.fromEntries(
  Object.entries(caso).map(([clave, valor]) => [clave, Number.isNaN(valor) ? 'NaN' : valor]),
))
assert.equal(originales.length, 6)
assert.deepEqual(traducidos, originales)
console.log('PASS: 6/6 escenarios conceptualmente idénticos (incluido NaN).')
console.log(JSON.stringify({ flutter: originales, react: traducidos }, null, 2))


import { useDivisor } from './useDivisor.js'

/** Dibuja el formulario y su resultado; la coordinación vive en useDivisor. */
export function PantallaDivisor({ dependencias }) {
  const { campos, error, resultado, cambiarCampo, calcularCuenta } = useDivisor(dependencias)
  return (
    <main className="divisor">
      <header className="encabezado">
        <p className="contexto">La cuenta, entre todos</p>
        <h1>Divisor de cuenta</h1>
        <p>Incluye la propina y calcula cuánto paga cada persona.</p>
      </header>
      <div className="cuenta">
        <form className="formulario" onSubmit={calcularCuenta} noValidate>
          <div className="campo">
            <label htmlFor="monto">Monto total</label>
            <div className="entrada-moneda">
              <span aria-hidden="true">USD</span>
              <input id="monto" type="text" inputMode="decimal" autoComplete="off"
                placeholder="100.00" value={campos.monto}
                onChange={e => cambiarCampo('monto', e.target.value)} />
            </div>
          </div>
          <div className="fila">
            <div className="campo">
              <label htmlFor="personas">Personas</label>
              <input id="personas" type="text" inputMode="numeric" autoComplete="off"
                value={campos.personas} onChange={e => cambiarCampo('personas', e.target.value)} />
            </div>
            <div className="campo">
              <label htmlFor="propina">Propina (%)</label>
              <input id="propina" type="text" inputMode="decimal" autoComplete="off"
                value={campos.propina} onChange={e => cambiarCampo('propina', e.target.value)} />
            </div>
          </div>
          <div className="campo">
            <label htmlFor="modo">Redondeo</label>
            <select id="modo" value={campos.modo}
              onChange={e => cambiarCampo('modo', e.target.value)}>
              <option value="exacto">Exacto (2 decimales)</option>
              <option value="arriba">Hacia arriba (entero)</option>
            </select>
          </div>
          <button type="submit">Calcular</button>
          {error !== null && <p className="error" role="alert">{error}</p>}
        </form>
        <section className="recibo" aria-labelledby="titulo-resultado">
          <h2 id="titulo-resultado">Por persona</h2>
          <div className="respuesta" aria-live="polite" aria-atomic="true">
            {resultado === null
              ? <p className="vacio">Ingresa la cuenta<br />y pulsa Calcular.</p>
              : <p className="importe" data-testid="resultado"><span>USD</span><strong>{resultado}</strong></p>}
          </div>
          <p className="nota">La propina se suma antes de dividir.</p>
        </section>
      </div>
      <footer>El cálculo se realiza en tu dispositivo.</footer>
    </main>
  )
}


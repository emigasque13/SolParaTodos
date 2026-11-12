import Reveal from './Reveal'
import { CONTROLES, REQUISITOS } from '../config'

// Lista etiqueta → valor con líneas finas, como una tabla sin bordes.
function DataList({ title, rows }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">{title}</h3>
      <dl className="mt-6">
        {rows.map(({ label, value }) => (
          <div key={label} className="grid gap-1 border-t border-ink/15 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-slate">{label}</dt>
            <dd className="font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// Guía del proyecto: cómo se usa la app y qué necesita. Edita las listas en src/config.js.
export default function Specs() {
  const blocks = [
    { title: 'Controles', rows: CONTROLES },
    { title: 'Requisitos', rows: REQUISITOS },
  ].filter((b) => b.rows.length > 0)

  if (blocks.length === 0) return null

  return (
    <section id="guia" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">Guía del proyecto</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Cómo se usa y qué necesita
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Una referencia rápida para moverte dentro de la simulación y revisar que tu teléfono pueda correrla.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-16">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <DataList {...b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

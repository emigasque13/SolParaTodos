import Reveal from './Reveal'
import { CONTROLES, REQUISITOS } from '../config'

// Lista etiqueta → valor con líneas finas, como una tabla sin bordes.
function DataList({ title, rows }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      <dl className="mt-8">
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

// Requisitos y controles. Edita las listas en src/config.js; una lista vacía oculta su bloque.
export default function Specs() {
  const blocks = [
    { title: 'Requisitos', rows: REQUISITOS },
    { title: 'Controles', rows: CONTROLES },
  ].filter((b) => b.rows.length > 0)

  if (blocks.length === 0) return null

  return (
    <section id="requisitos" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <DataList {...b} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

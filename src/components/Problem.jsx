import Reveal from './Reveal'

// "El problema": por qué existe el proyecto. Tres causas, sin adornos.
const CAUSES = [
  {
    title: 'Se ve lejana',
    text: 'Un campo solar es una instalación enorme y cerrada. Casi nadie ha caminado entre sus filas ni ha visto cómo está armada.',
  },
  {
    title: 'No se ve qué la hace producir',
    text: 'El ángulo de los paneles, la hora del día y la sombra cambian cuánta energía se genera, pero eso no se percibe a simple vista.',
  },
  {
    title: 'Es difícil imaginar su impacto',
    text: 'Se habla de kilowatts y toneladas de CO₂, pero pocas veces se traduce a algo cercano, como cuántos hogares abastece.',
  },
]

export default function Problem() {
  return (
    <section id="por-que" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">El problema</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            La energía solar está ahí, pero casi no se entiende
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            En Yucatán el sol pega fuerte casi todo el año. El recurso es abundante, pero la gente rara vez ve cómo se
            aprovecha. Sin entenderla, cuesta valorar la energía solar o considerarla una opción.
          </p>
        </Reveal>

        <ul className="lg:col-span-7">
          {CAUSES.map(({ title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <li className="grid grid-cols-[3.2rem_1fr] gap-x-4 border-t border-ink/15 py-7 sm:grid-cols-[4.5rem_1fr]">
                <span className="font-display text-4xl font-bold leading-none text-blue sm:text-5xl">{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-slate">{text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

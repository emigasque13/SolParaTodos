import { motion } from 'framer-motion'
import Reveal, { EASE } from './Reveal'

// Una secuencia real, por eso va numerada.
const STEPS = [
  { title: 'Sale el sol', text: 'La luz llega con una dirección distinta según la hora. Al amanecer y al atardecer entra más inclinada y atraviesa más atmósfera, así que llega menos energía.' },
  { title: 'Los paneles reciben la luz', text: 'Las celdas de silicio convierten la luz en corriente continua. Cuanto más de frente les pega el sol, más producen: la simulación lo calcula con el ángulo entre el sol y el panel.' },
  { title: 'El inversor la prepara', text: 'Los inversores transforman la corriente continua en alterna, que es la que se puede usar en casas y entregar a la red.' },
  { title: 'La app mide el resultado', text: 'El panel de datos muestra la potencia en kW, la eficiencia, cuántos hogares se podrían abastecer y cuánto CO₂ se evita.' },
]

const rule = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }
const numeral = { hidden: { opacity: 0.2 }, show: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } }
const body = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: EASE } } }

export default function HowItWorks() {
  return (
    <section id="funciona" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">Cómo funciona</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              De la luz del sol a un número que se entiende
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
              La simulación sigue el mismo recorrido que una planta solar real, en cuatro pasos. Todo se recalcula cada
              vez que mueves la hora.
            </p>
          </Reveal>
        </div>

        <ol className="lg:col-span-7">
          {STEPS.map(({ title, text }, i) => (
            <motion.li
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-12% 0px' }}
              className="relative grid grid-cols-[3.2rem_1fr] gap-x-4 py-8 sm:grid-cols-[4.5rem_1fr]"
            >
              <motion.span variants={rule} aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-ink/25" />
              <motion.span variants={numeral} className="font-display text-4xl font-bold leading-none text-blue sm:text-5xl">
                {i + 1}
              </motion.span>
              <motion.div variants={body}>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-slate">{text}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

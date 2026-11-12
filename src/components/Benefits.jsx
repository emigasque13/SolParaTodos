import Reveal from './Reveal'
import { HomeIcon, LeafIcon, PhoneIcon, SchoolIcon, SparkIcon, BoltIcon } from './Icons'

// En qué ayuda y para quién. Sin promesas exageradas: es una herramienta para aprender.
const AUDIENCE = [
  { Icon: SchoolIcon, title: 'Escuelas y clases', text: 'Para explicar el efecto fotovoltaico y el ángulo solar viéndolo, no solo leyéndolo.' },
  { Icon: HomeIcon, title: 'Familias y comunidades', text: 'Para imaginar cuántos hogares podría abastecer un campo solar y por qué importa.' },
  { Icon: BoltIcon, title: 'Quien quiera curiosear', text: 'Basta un celular Android. No hay que registrarse ni conectarse a nada.' },
]

const HELPS = [
  { Icon: SparkIcon, title: 'Entender sin instalar paneles', text: 'Probar variables como la hora o el ángulo cuesta cero y no arriesga nada.' },
  { Icon: LeafIcon, title: 'Ver el impacto', text: 'El CO₂ evitado y los hogares abastecidos traducen los kilowatts a algo cercano.' },
  { Icon: PhoneIcon, title: 'Cabe en tu bolsillo', text: 'Está optimizada para correr fluida en celulares de gama media.' },
]

function Item({ Icon, title, text, delay }) {
  return (
    <Reveal delay={delay} className="border-t border-ink/15 pt-6">
      <span className="text-[1.6rem] text-blue">
        <Icon />
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-md leading-relaxed text-slate">{text}</p>
    </Reveal>
  )
}

export default function Benefits() {
  return (
    <section id="ayuda" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">En qué ayuda</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Hacer visible la energía solar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            El objetivo no es vender un producto, sino que más personas entiendan cómo funciona la energía solar y vean
            que es una opción real y cercana.
          </p>
        </Reveal>

        <h3 className="mt-14 font-display text-sm font-bold uppercase tracking-[0.14em] text-slate">Para quién es</h3>
        <div className="mt-5 grid gap-x-12 gap-y-10 sm:grid-cols-3">
          {AUDIENCE.map((a, i) => (
            <Item key={a.title} {...a} delay={i * 0.08} />
          ))}
        </div>

        <h3 className="mt-14 font-display text-sm font-bold uppercase tracking-[0.14em] text-slate">Qué aporta</h3>
        <div className="mt-5 grid gap-x-12 gap-y-10 sm:grid-cols-3">
          {HELPS.map((a, i) => (
            <Item key={a.title} {...a} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

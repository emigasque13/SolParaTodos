import Reveal from './Reveal'
import { ChartIcon, ClockIcon, CubeIcon, MoonIcon, BookIcon, ScanIcon } from './Icons'

// Qué es la app y qué se puede hacer dentro. Todo esto existe en el APK.
const FEATURES = [
  {
    Icon: ClockIcon,
    title: 'Mover la hora del día',
    text: 'Desliza el sol de las 6:00 a las 18:00 y mira cómo cambian las sombras, la potencia y la eficiencia del campo.',
  },
  {
    Icon: ChartIcon,
    title: 'Leer los datos en vivo',
    text: 'Un panel translúcido muestra la potencia en kW y la eficiencia. Con «Más detalles» aparecen la irradiancia, los hogares abastecidos y el CO₂ evitado.',
  },
  {
    Icon: ScanIcon,
    title: 'Verlo desde tres vistas',
    text: 'Panorámica de todo el campo, detalle de un panel y un recorrido a nivel del suelo con joystick, entre las estructuras.',
  },
  {
    Icon: MoonIcon,
    title: 'Probar el modo Crepúsculo',
    text: 'De noche, los indicadores luminosos dibujan la silueta del campo y los inversores muestran su estado en verde.',
  },
  {
    Icon: BookIcon,
    title: 'Consultar fichas técnicas',
    text: 'Tres fichas explican cómo funcionan las celdas, la estructura y la optimización gráfica que hace posible la simulación en un celular.',
  },
  {
    Icon: CubeIcon,
    title: 'Un campo con 308 paneles',
    text: 'Filas ordenadas, caminos de tierra, cerca perimetral e inversores: un campo completo, no un solo panel de ejemplo.',
  },
]

export default function Features() {
  return (
    <section id="que-es" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">¿Qué es?</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Un campo solar que puedes recorrer y probar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Sol Para Todos es una app para Android que simula un campo fotovoltaico en 3D. No vende ni instala nada:
            sirve para ver y entender cómo se aprovecha el sol, moviendo tú mismo las variables.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08} className="border-t border-ink/15 pt-6">
              <span className="text-[1.6rem] text-blue">
                <Icon />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-slate">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

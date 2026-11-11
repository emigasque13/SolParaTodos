import Reveal from './Reveal'
import { CodeIcon, CubeIcon, LayersIcon, ScanIcon } from './Icons'

const FEATURES = [
  {
    Icon: CubeIcon,
    title: 'Recorrer el campo en 3D',
    text: 'Muévete por una escena interactiva con paneles fotovoltaicos y observa cómo se organiza una instalación solar.',
  },
  {
    Icon: ScanIcon,
    title: 'Verlo en realidad aumentada',
    text: 'Coloca el campo solar en tu espacio real a través de la cámara del teléfono.',
  },
  {
    Icon: LayersIcon,
    title: 'Modelado optimizado con LODs',
    text: 'Los modelos cambian su nivel de detalle según la distancia a la cámara, para que la simulación se mantenga fluida en un celular.',
  },
  {
    Icon: CodeIcon,
    title: 'Hecho con Unity y Blender',
    text: 'Blender modela los paneles y el entorno. Unity reúne la escena, integra la realidad aumentada y la exporta como app para Android.',
  },
]

export default function Features() {
  return (
    <section id="proyecto" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Qué puedes hacer en Sol Para Todos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Es una simulación interactiva para entender cómo funciona un campo de paneles fotovoltaicos, desarrollada en
            la materia de Gráficas por Computadora.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {FEATURES.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.08} className="border-t border-ink/15 pt-6">
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

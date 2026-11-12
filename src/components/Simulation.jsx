import Reveal from './Reveal'
import LodDemo from './LodDemo'
import { STATS } from '../config'

const STACK = [
  ['Modelado', 'Blender: panel, estructura y entorno'],
  ['Motor', 'Unity 6 con Universal Render Pipeline (móvil)'],
  ['Rendimiento', 'LOD Group de 3 niveles, SRP Batcher, MSAA 4x'],
  ['Entrada', 'Input System: joystick y botones táctiles'],
  ['Plataforma', 'Android ARM64, compilado con IL2CPP'],
]

// "Lo de Unity": una explicación corta de cómo se construyó, más el demo de LODs.
export default function Simulation() {
  return (
    <section id="simulacion" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">La simulación</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Hecha en Unity, pensada para un celular
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            El panel se modeló en Blender y se llevó a Unity, donde se multiplicó hasta formar un campo completo. Un
            script calcula en cada cuadro la posición del sol, la energía que recibe cada panel y los datos que ves en
            pantalla.
          </p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.06} className="border-t border-ink/15 pt-5">
              <dd className="font-display text-3xl font-bold tracking-tight text-blue sm:text-4xl">{value}</dd>
              <dt className="mt-1 text-sm text-slate">{label}</dt>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-14">
          <dl>
            {STACK.map(([term, value]) => (
              <div key={term} className="grid gap-1 border-t border-ink/15 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-slate">{term}</dt>
                <dd className="font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Demo interactivo de LODs (misma sección, sin otra línea divisoria) */}
      <div className="[&>section]:border-t-0">
        <LodDemo />
      </div>
    </section>
  )
}

import { ACADEMIC, REPO_URL } from '../config'
import { SunMark } from './Icons'

// Cada dato del proyecto es un par término/valor (<dl>): semántico y fácil de leer.
const DATA = [
  ['Universidad', ACADEMIC.universidad],
  ['Carrera', ACADEMIC.carrera],
  ['Materia', ACADEMIC.materia],
  ['Autor', ACADEMIC.autor],
  ['Año', ACADEMIC.anio],
]

export default function Footer() {
  return (
    <footer id="creditos" className="bg-night text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <SunMark className="h-8 w-8" />
            <span className="font-display text-xl font-bold tracking-tight">Sol Para Todos</span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-paper/60">
            Simulación interactiva en 3D y realidad aumentada de un campo fotovoltaico, hecha con Unity y Blender.
          </p>
          {REPO_URL && (
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-semibold underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-sun"
            >
              Ver el código fuente
            </a>
          )}
        </div>

        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-7">
          {DATA.map(([term, value]) => (
            <div key={term} className={term === 'Carrera' ? 'sm:col-span-2' : ''}>
              <dt className="text-sm text-paper/50">{term}</dt>
              <dd className="mt-1 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-sm text-paper/50 sm:flex-row sm:items-center sm:px-8">
          <p>
            © {ACADEMIC.anio} {ACADEMIC.autor}. Proyecto académico, {ACADEMIC.universidad}.
          </p>
          <a href="#inicio" className="font-semibold text-paper/80 transition-colors hover:text-paper">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  )
}

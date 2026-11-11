import Reveal from './Reveal'
import { CAPTURAS } from '../config'

// "Dentro de la simulación": capturas con pie de foto. Se llena desde src/config.js (CAPTURAS).
// Mientras la lista esté vacía, la sección no se muestra.
export default function Gallery() {
  if (CAPTURAS.length === 0) return null

  return (
    <section id="capturas" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Dentro de la simulación
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAPTURAS.map((c, i) => (
            <Reveal key={c.src} delay={(i % 3) * 0.08}>
              <figure className="group">
                <div className="overflow-hidden rounded-2xl border border-line bg-wash">
                  <img
                    src={c.src}
                    alt={c.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-sm italic text-slate">{c.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

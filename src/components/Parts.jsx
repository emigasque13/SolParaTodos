import { useState } from 'react'
import Reveal from './Reveal'

// "Partes": lista a la izquierda, esquema a la derecha. Al pasar el cursor (o tocar) una parte, se resalta en el dibujo.
const PARTS = [
  { id: 'sol', title: 'Sol y cielo', text: 'La hora del día mueve el sol, cambia la luz y las sombras. De noche el cielo se oscurece.' },
  { id: 'paneles', title: 'Paneles fotovoltaicos', text: 'Cada unidad tiene módulos de celdas de silicio que convierten la luz en corriente. Su inclinación decide cuánta captan.' },
  { id: 'estructura', title: 'Estructura y soporte', text: 'Pilares de concreto y perfiles de aluminio que sostienen los paneles en el ángulo correcto durante años.' },
  { id: 'inversor', title: 'Inversores', text: 'Casetas blancas junto al camino central. Convierten la corriente continua de los paneles en alterna, y su luz LED indica el estado.' },
  { id: 'caminos', title: 'Caminos y cerca', text: 'Caminos de tierra para dar servicio a cada fila y una cerca perimetral, como en una instalación real.' },
  { id: 'datos', title: 'Panel de datos', text: 'Potencia, eficiencia, hogares abastecidos y CO₂ evitado, calculados en tiempo real con la posición del sol.' },
]

function Diagram({ active }) {
  // Cuando hay una parte activa, las demás se atenúan.
  const o = (id) => (active === null || active === id ? 1 : 0.22)
  const t = { transition: 'opacity 0.3s' }

  return (
    <svg viewBox="0 0 520 340" className="block h-auto w-full" role="img" aria-label="Esquema de las partes del campo solar">
      <rect width="520" height="340" fill="#E8ECF0" />

      {/* Caminos y cerca */}
      <g style={{ ...t, opacity: o('caminos') }}>
        <rect y="262" width="520" height="78" fill="#D3DAE2" />
        <path d="M0 312 Q 200 292 520 304 L520 330 Q 220 322 0 338Z" fill="#E7DFC9" />
        {[22, 52, 82, 112, 142].map((x) => (
          <line key={x} x1={x} y1="236" x2={x} y2="270" stroke="#5A6578" strokeWidth="3" strokeLinecap="round" />
        ))}
        <path d="M22 246H142M22 258H142" stroke="#5A6578" strokeWidth="1.5" />
      </g>

      {/* Sol */}
      <g style={{ ...t, opacity: o('sol') }}>
        <circle cx="76" cy="66" r="34" fill="#C8901A" opacity="0.2" />
        <circle cx="76" cy="66" r="21" fill="#C8901A" />
        <g stroke="#C8901A" strokeWidth="3" strokeLinecap="round">
          <path d="M76 30v-8M76 110v-8M40 66h-8M120 66h-8M50.5 40.5l-5.5-5.5M107 97l-5.5-5.5M50.5 91.5 45 97M107 35l-5.5 5.5" />
        </g>
      </g>

      {/* Estructura */}
      <g style={{ ...t, opacity: o('estructura') }} stroke="#8793A5" strokeWidth="6" strokeLinecap="round">
        <line x1="212" y1="214" x2="212" y2="278" />
        <line x1="318" y1="198" x2="318" y2="272" />
        <line x1="212" y1="236" x2="318" y2="224" strokeWidth="3" />
      </g>

      {/* Paneles */}
      <g style={{ ...t, opacity: o('paneles') }}>
        <polygon points="168,176 352,142 366,214 186,246" fill="#25477A" />
        <g stroke="#fff" strokeOpacity="0.3" strokeWidth="1">
          <path d="M213.8 167.5 231.6 237.4M260 159 276.9 229M306 150.5 322 220.5" />
          <path d="M175.5 204.7 359 173.2M180.8 225.3 362.5 193.6" />
        </g>
      </g>

      {/* Inversor */}
      <g style={{ ...t, opacity: o('inversor') }}>
        <rect x="408" y="222" width="52" height="66" rx="4" fill="#fff" stroke="#111A2B" strokeOpacity="0.35" />
        <path d="M434 230v50" stroke="#111A2B" strokeOpacity="0.2" />
        <circle cx="421" cy="236" r="4" fill="#2FA866" />
        <rect x="402" y="288" width="64" height="5" fill="#8C8F93" />
      </g>

      {/* Panel de datos */}
      <g style={{ ...t, opacity: o('datos') }}>
        <rect x="352" y="28" width="150" height="74" rx="10" fill="#111A2B" />
        <text x="366" y="50" fill="#fff" fillOpacity="0.6" fontSize="10" fontFamily="Hanken Grotesk, sans-serif">Potencia</text>
        <rect x="366" y="57" width="104" height="6" rx="3" fill="#fff" fillOpacity="0.15" />
        <rect x="366" y="57" width="72" height="6" rx="3" fill="#C8901A" />
        <text x="366" y="82" fill="#fff" fillOpacity="0.6" fontSize="10" fontFamily="Hanken Grotesk, sans-serif">Eficiencia</text>
        <rect x="366" y="89" width="104" height="6" rx="3" fill="#fff" fillOpacity="0.15" />
        <rect x="366" y="89" width="88" height="6" rx="3" fill="#C8901A" />
      </g>
    </svg>
  )
}

export default function Parts() {
  const [active, setActive] = useState(null)

  return (
    <section id="partes" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">Partes</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Lo que hay dentro del campo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Seis piezas que se ven en la simulación. Pasa el cursor por una (o tócala en el celular) y se resalta en el esquema.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-7 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-line">
              <Diagram active={active} />
            </div>
          </Reveal>

          <ul className="lg:col-span-5 lg:order-1" onMouseLeave={() => setActive(null)}>
            {PARTS.map(({ id, title, text }, i) => (
              <li key={id} className="border-t border-ink/15">
                <button
                  type="button"
                  onMouseEnter={() => setActive(id)}
                  onFocus={() => setActive(id)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(active === id ? null : id)}
                  aria-pressed={active === id}
                  className="grid w-full grid-cols-[2.4rem_1fr] gap-x-3 py-5 text-left"
                >
                  <span className={`font-display text-lg font-bold transition-colors ${active === id ? 'text-sun' : 'text-blue'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold">{title}</span>
                    <span className="mt-1 block leading-relaxed text-slate">{text}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

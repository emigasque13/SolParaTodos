import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

/* Demo interactivo de niveles de detalle (LOD).
   Al alejar la cámara, Unity cambia a una versión más simple del modelo.
   Aquí se ve con un panel: cerca (muchas celdas) → lejos (un bloque plano). */
const LODS = [
  { tag: 'LOD 0', label: 'Cerca', cols: 8, rows: 5, scale: 1, text: 'Máximo detalle: marco, celdas y soporte modelados.' },
  { tag: 'LOD 1', label: 'Media distancia', cols: 4, rows: 2, scale: 0.78, text: 'Detalle medio: menos celdas, misma silueta.' },
  { tag: 'LOD 2', label: 'Lejos', cols: 0, rows: 0, scale: 0.58, text: 'Detalle mínimo: un bloque simple que casi no cuesta rendimiento.' },
]

function PanelLod({ level }) {
  const { cols, rows, scale } = LODS[level]

  // Trapecio que simula un panel inclinado: TL(46,26) TR(246,26) BR(214,136) BL(14,136)
  const lines = []
  for (let i = 1; i < cols; i++) {
    const t = i / cols
    lines.push(`M${46 + 200 * t} 26L${14 + 200 * t} 136`)
  }
  for (let j = 1; j < rows; j++) {
    const t = j / rows
    lines.push(`M${46 - 32 * t} ${26 + 110 * t}H${246 - 32 * t}`)
  }

  return (
    <svg viewBox="0 0 260 176" className="mx-auto w-full max-w-[300px]" aria-hidden="true">
      <motion.g animate={{ scale }} transition={{ type: 'spring', stiffness: 180, damping: 20 }} className="svg-fill-box">
        {level < 2 && <line x1="130" y1="136" x2="130" y2="168" stroke="#8793A5" strokeWidth="6" strokeLinecap="round" />}
        <motion.g key={level} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
          <path d="M46 26H246L214 136H14Z" fill="#25477A" strokeLinejoin="round" />
          {lines.length > 0 && <path d={lines.join('')} stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />}
        </motion.g>
      </motion.g>
    </svg>
  )
}

export default function LodDemo() {
  const [level, setLevel] = useState(0)
  const lod = LODS[level]

  return (
    <section id="lod" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Menos detalle, misma escena
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Un panel que está lejos no necesita cada celda. Los niveles de detalle (LOD) reemplazan el modelo por
            versiones más simples según la distancia, y así el celular conserva la fluidez. Mueve el control y míralo.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="grid min-h-[210px] place-items-center rounded-2xl border border-line bg-wash py-6">
            <PanelLod level={level} />
          </div>

          <div className="mt-6 flex items-baseline justify-between gap-3">
            <span className="font-display text-sm font-bold text-blue">{lod.tag}</span>
            <span className="text-sm font-semibold">{lod.label}</span>
          </div>

          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="lod-range mt-3"
            aria-label="Distancia de la cámara al panel"
            aria-valuetext={`${lod.tag}: ${lod.label}`}
          />
          <div className="mt-2 flex justify-between text-xs text-slate">
            <span>Cerca</span>
            <span>Lejos</span>
          </div>
          <p className="mt-4 min-h-[2.5rem] text-sm leading-relaxed text-slate">{lod.text}</p>
        </Reveal>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { DEMO_VIDEO_POSTER, DEMO_VIDEO_URL } from '../config'

/* ──────────────────────────────────────────────────────────────
   SolarField: ilustración plana del hero.

   El sol recorre su arco y cada panel se inclina hacia él, como un
   seguidor solar real. En reposo el sol se mueve solo; con el mouse
   (hover) o el dedo (arrastrar en horizontal) lo mueves tú.

   Todo se calcula con MotionValues de Framer Motion: el SVG se actualiza
   sin re-renderizar React, así que corre fluido incluso en móviles.
   ────────────────────────────────────────────────────────────── */

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

// p ∈ [0,1] → posición del sol sobre su arco (coordenadas del viewBox 640×400)
const sunPos = (p) => ({ x: 70 + p * 500, y: 132 - Math.sin(p * Math.PI) * 82 })

// Ángulo (en grados) que gira un panel en (cx, cy) para mirar hacia el sol
const tiltFor = (p, cx, cy) => {
  const s = sunPos(p)
  const deg = (Math.atan2(s.x - cx, cy - s.y) * 180) / Math.PI
  return clamp(deg * 0.7, -40, 40)
}

// Dos filas: la trasera es más pequeña y clara para sugerir profundidad
const FRONT = { cy: 312, w: 84, h: 50, stand: 30, xs: [128, 256, 384, 512], fill: '#25477A' }
const BACK = { cy: 240, w: 60, h: 36, stand: 14, xs: [64, 192, 320, 448, 576], fill: '#6F8CB3' }

// Trayectoria del sol (línea punteada de referencia)
const ARC = Array.from({ length: 22 }, (_, i) => {
  const { x, y } = sunPos(0.08 + (i * 0.84) / 21)
  return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
}).join('')

/** Un panel: soporte fijo + panel que gira sobre su centro. */
function Panel({ p, cx, cy, w, h, stand, fill }) {
  const angle = useTransform(p, (v) => tiltFor(v, cx, cy))

  // Celdas: 4 columnas × 3 filas, dibujadas como un solo path
  const cells = []
  for (let i = 1; i < 4; i++) cells.push(`M${-w / 2 + (w * i) / 4} ${-h / 2}V${h / 2}`)
  for (let j = 1; j < 3; j++) cells.push(`M${-w / 2} ${-h / 2 + (h * j) / 3}H${w / 2}`)

  return (
    <g transform={`translate(${cx} ${cy})`}>
      <line x1="0" y1={h / 2} x2="0" y2={h / 2 + stand} stroke="#8793A5" strokeWidth="4" strokeLinecap="round" />
      <motion.g style={{ rotate: angle }}>
        <rect x={-w / 2} y={-h / 2} width={w} height={h} rx="3" fill={fill} />
        <path d={cells.join('')} stroke="#fff" strokeOpacity="0.28" strokeWidth="0.8" />
        <path d={`M${-w / 2 + 4} ${h / 2 - 3}L${-w / 2 + w * 0.42} ${-h / 2 + 3}H${-w / 2 + w * 0.56}L${-w / 2 + 18} ${h / 2 - 3}Z`} fill="#fff" opacity="0.12" />
      </motion.g>
    </g>
  )
}

export default function SolarField() {
  const reduceMotion = useReducedMotion()
  const frameRef = useRef(null)
  const idle = useRef(null)

  // rawP: lo que mandan el puntero o la animación en reposo. p: versión suavizada con resorte.
  const rawP = useMotionValue(0.2)
  const p = useSpring(rawP, { stiffness: 80, damping: 18, mass: 0.7 })
  const sunX = useTransform(p, (v) => sunPos(v).x)
  const sunY = useTransform(p, (v) => sunPos(v).y)

  const startIdle = () => {
    idle.current?.stop()
    if (reduceMotion) return
    idle.current = animate(rawP, [0.1, 0.9], {
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    })
  }

  useEffect(() => {
    if (reduceMotion) rawP.set(0.5)
    else startIdle()
    return () => idle.current?.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion])

  const onPointerMove = (e) => {
    const rect = frameRef.current.getBoundingClientRect()
    const v = clamp((e.clientX - rect.left) / rect.width, 0, 1)
    idle.current?.stop()
    rawP.set(0.08 + v * 0.84)
  }

  // Si config.js define DEMO_VIDEO_URL, se muestra tu video en lugar de la ilustración
  if (DEMO_VIDEO_URL) {
    return (
      <figure>
        <div className="aspect-[640/400] w-full overflow-hidden rounded-2xl border border-line">
          <video className="h-full w-full object-cover" src={DEMO_VIDEO_URL} poster={DEMO_VIDEO_POSTER || undefined} autoPlay muted loop playsInline />
        </div>
        <figcaption className="mt-3 text-sm italic text-slate">Un recorrido por el campo solar.</figcaption>
      </figure>
    )
  }

  return (
    <figure>
      <div
        ref={frameRef}
        onPointerMove={onPointerMove}
        onPointerLeave={startIdle}
        style={{ touchAction: 'pan-y' }}
        role="group"
        aria-label="Ilustración del campo solar: mueve el sol y los paneles se inclinan hacia él"
        className="select-none overflow-hidden rounded-2xl border border-line bg-wash"
      >
        <svg viewBox="0 0 640 400" className="block h-auto w-full" aria-hidden="true">
          {/* Suelo */}
          <rect y="262" width="640" height="138" fill="#D3DAE2" />
          <line x1="0" y1="262" x2="640" y2="262" stroke="#111A2B" strokeOpacity="0.18" />

          {/* Trayectoria del sol */}
          <path d={ARC} fill="none" stroke="#9AA6B6" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />

          {/* Sol */}
          <motion.g style={{ x: sunX, y: sunY }}>
            <circle r="36" fill="#C8901A" opacity="0.2" />
            <circle r="22" fill="#C8901A" />
          </motion.g>

          {/* Paneles: fila trasera (clara) y frontal */}
          {BACK.xs.map((cx) => (
            <Panel key={`b${cx}`} p={p} cx={cx} {...BACK} />
          ))}
          {FRONT.xs.map((cx) => (
            <Panel key={`f${cx}`} p={p} cx={cx} {...FRONT} />
          ))}
        </svg>
      </div>
      <figcaption className="mt-3 text-sm italic text-slate">
        El sol recorre su arco y los paneles lo siguen. Arrástralo para moverlo.
      </figcaption>
    </figure>
  )
}

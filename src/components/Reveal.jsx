import { motion } from 'framer-motion'

// Curva de easing compartida por todo el sitio (suave, con "frenada" final).
export const EASE = [0.22, 1, 0.36, 1]

/**
 * Scroll reveal: el contenido aparece al entrar en pantalla, una sola vez.
 * Misma distancia y duración en todo el sitio para que se sienta coherente.
 * `MotionConfig reducedMotion="user"` (en App.jsx) lo desactiva automáticamente
 * para quien pidió reducir el movimiento.
 */
export default function Reveal({ children, delay = 0, y = 20, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

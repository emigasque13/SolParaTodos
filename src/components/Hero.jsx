import { motion } from 'framer-motion'
import DownloadButton from './DownloadButton'
import SolarField from './SolarField'
import { EASE } from './Reveal'

// El título entra línea por línea desde una máscara: la única animación "de carga" de la página.
const LINES = ['Sol Para', 'Todos']

export default function Hero() {
  return (
    <section id="inicio" className="pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* ───── Texto y botones ───── */}
        <div className="lg:col-span-6">
          <h1 className="font-display text-[clamp(3.2rem,11vw,6.4rem)] font-bold leading-[0.95] tracking-tight">
            <span className="sr-only">Sol Para Todos</span>
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]" aria-hidden="true">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-lg text-lg leading-relaxed text-slate sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          >
            Recorre en 3D un campo de paneles fotovoltaicos y llévalo a tu mesa con realidad aumentada, para entender
            cómo la luz del sol se convierte en electricidad.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
          >
            <DownloadButton size="lg" label="Descargar para Android" />
            <a href="#instalacion" className="btn-ghost">
              Cómo instalarla
            </a>
          </motion.div>
        </div>

        {/* ───── Ilustración interactiva (o tu video, ver config.js) ───── */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <SolarField />
        </motion.div>
      </div>
    </section>
  )
}

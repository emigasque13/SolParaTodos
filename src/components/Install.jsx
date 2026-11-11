import { motion } from 'framer-motion'
import DownloadButton from './DownloadButton'
import Reveal, { EASE } from './Reveal'

// Esto sí es una secuencia: por eso los pasos van numerados.
const STEPS = [
  {
    title: 'Descarga el APK',
    text: 'Toca el botón de descarga y guarda SolParaTodos.apk en tu teléfono Android.',
  },
  {
    title: 'Abre el archivo',
    text: 'Cuando termine, toca la notificación de descarga o búscalo en el gestor de archivos, en la carpeta Descargas.',
  },
  {
    title: 'Permite la instalación',
    text: 'Android pedirá permiso para instalar apps desde tu navegador o gestor de archivos. Actívalo en el aviso o en Ajustes, en Seguridad. El nombre exacto cambia según la marca. Es normal en apps que no vienen de Google Play.',
  },
  {
    title: 'Instala y abre Sol Para Todos',
    text: 'Toca Instalar. Si Play Protect avisa que la app no es conocida, elige instalarla de todos modos. Al abrirla, concede el permiso de cámara para usar la realidad aumentada.',
  },
]

// Variantes: la línea se dibuja, el número se enciende y el texto sube un poco, en secuencia.
const rule = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }
const numeral = { hidden: { opacity: 0.2 }, show: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } }
const body = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: EASE } } }

export default function Install() {
  return (
    <section id="instalacion" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Encabezado fijo en escritorio */}
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Cómo instalarla</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
              La app se instala desde un archivo APK. Tarda un par de minutos y no necesitas crear una cuenta.
            </p>
            <div className="mt-8">
              <DownloadButton size="lg" />
            </div>
          </Reveal>
        </div>

        <ol className="lg:col-span-7">
          {STEPS.map(({ title, text }, i) => (
            <motion.li
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-12% 0px' }}
              className="relative grid grid-cols-[3.2rem_1fr] gap-x-4 py-8 sm:grid-cols-[4.5rem_1fr]"
            >
              <motion.span variants={rule} aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-ink/25" />
              <motion.span variants={numeral} className="font-display text-4xl font-bold leading-none text-blue sm:text-5xl">
                {i + 1}
              </motion.span>
              <motion.div variants={body}>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-slate">{text}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

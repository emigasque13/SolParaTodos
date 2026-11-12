import { motion } from 'framer-motion'
import DownloadButton from './DownloadButton'
import Reveal, { EASE } from './Reveal'
import { APP, PLAY_PATH } from '../config'
import PlayQR from './PlayQR'

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
    text: 'Toca Instalar. Si Play Protect avisa que la app no es conocida, elige instalarla de todos modos. Al abrirla verás el menú de inicio y podrás entrar a la simulación.',
  },
]

// Variantes: la línea se dibuja, el número se enciende y el texto sube un poco, en secuencia.
const rule = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }
const numeral = { hidden: { opacity: 0.2 }, show: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } }
const body = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: EASE } } }

export default function Install() {
  return (
    <section id="descargar" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Encabezado fijo en escritorio */}
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">Descarga</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Descárgala e instálala</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
              La app se instala desde un archivo APK. Tarda un par de minutos y no necesitas crear una cuenta.
            </p>
            <dl className="mt-8 max-w-sm">
              {[
                ['Versión', APP.version],
                ['Tamaño', APP.tamano],
                ['Requiere', APP.android],
                ['Costo', APP.precio],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-t border-ink/15 py-3">
                  <dt className="text-slate">{k}</dt>
                  <dd className="text-right font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <DownloadButton size="lg" label="Descargar APK" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
        <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center">
          <PlayQR />
          <div>
            <h3 className="font-display text-xl font-semibold">Versión de navegador</h3>
            <a href={PLAY_PATH} className="mt-4 inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-blue">
              Abrir versión web
            </a>
          </div>
        </div>
        <ol>
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
      </div>
    </section>
  )
}

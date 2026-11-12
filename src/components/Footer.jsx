import { ACADEMIC, APP, APK_FILENAME, APK_URL, GUIDE_URL, REPO_URL } from '../config'
import { BookIcon, DownloadIcon, GitHubIcon, SunMark } from './Icons'

const linkCls = 'inline-flex items-center gap-2.5 text-paper/75 transition-colors hover:text-sun'

// Créditos: tres columnas (proyecto · descarga · enlaces), como en Cenote Vivo.
export default function Footer() {
  return (
    <footer id="creditos" className="bg-night text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        {/* Proyecto */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <SunMark className="h-8 w-8" />
            <span className="font-display text-xl font-bold tracking-tight">Sol Para Todos</span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-paper/60">
            Proyecto de {ACADEMIC.materia} realizado por {ACADEMIC.autor}, {ACADEMIC.carrera}. Hecho con Unity 6 y URP,
            con el modelo del panel en Blender. Profesor: {ACADEMIC.profesor}.
          </p>
          <img
            src="/marista-logo.png"
            alt="Universidad Marista de Mérida"
            width="120"
            height="181"
            loading="lazy"
            className="mt-7 h-auto w-24"
          />
        </div>

        {/* Descarga */}
        <div className="lg:col-span-4">
          <h2 className="font-display text-lg font-bold">Descarga</h2>
          <dl className="mt-5 max-w-xs">
            {[
              ['Versión', APP.version],
              ['Tamaño', APP.tamano],
              ['Requiere', APP.android],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[5rem_1fr] gap-3 py-1.5 text-sm">
                <dt className="text-paper/50">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <a href={APK_URL} download={APK_FILENAME} className={`${linkCls} mt-5 text-sm font-semibold !text-sun/90 hover:!text-sun`}>
            <DownloadIcon />
            Descargar APK
          </a>
        </div>

        {/* Enlaces */}
        <div className="lg:col-span-3">
          <h2 className="font-display text-lg font-bold">Enlaces</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {REPO_URL && (
              <li>
                <a href={REPO_URL} target="_blank" rel="noreferrer" className={linkCls}>
                  <GitHubIcon className="text-lg" />
                  Repositorio en GitHub
                </a>
              </li>
            )}
            <li>
              <a href={GUIDE_URL} className={linkCls}>
                <BookIcon className="text-lg" />
                Guía del proyecto
              </a>
            </li>
          </ul>
        </div>
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

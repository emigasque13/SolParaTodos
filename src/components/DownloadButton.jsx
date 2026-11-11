import { APK_FILENAME, APK_URL } from '../config'
import { DownloadIcon } from './Icons'

/**
 * Botón de descarga del APK.
 * Sólido y sobrio; al pasar el cursor se llena de ocre desde abajo y la flecha baja.
 * (Los estilos están en index.css: .btn y .btn--sm)
 */
export default function DownloadButton({ size = 'lg', label = 'Descargar para Android', className = '' }) {
  return (
    <a
      href={APK_URL}
      download={APK_FILENAME}
      className={`btn ${size === 'sm' ? 'btn--sm' : ''} ${className}`}
    >
      <span>{label}</span>
      <span className="btn__icon">
        <DownloadIcon />
      </span>
    </a>
  )
}

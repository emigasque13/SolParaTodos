// ─────────────────────────────────────────────────────────────
// Configuración central del sitio. Edita aquí, no en los componentes.
// ─────────────────────────────────────────────────────────────

// Archivo APK. Coloca tu archivo en  public/downloads/SolParaTodos.apk
// o define VITE_APK_URL (por ejemplo, un enlace de GitHub Releases).
export const APK_URL = import.meta.env.VITE_APK_URL || '/downloads/SolParaTodos.apk'
export const APK_FILENAME = 'SolParaTodos.apk'

// Enlace al repositorio (opcional). Si lo dejas vacío, el enlace no aparece en el footer.
export const REPO_URL = ''

// Video de demostración opcional para el hero.
// Si pones una URL (por ejemplo '/demo.mp4' dentro de /public), reemplaza
// la ilustración del campo solar por tu video.
export const DEMO_VIDEO_URL = ''
export const DEMO_VIDEO_POSTER = ''

// Datos académicos (Footer).
export const ACADEMIC = {
  universidad: 'Universidad Marista de Mérida',
  carrera: 'Ingeniería en Tecnologías Digitales',
  materia: 'Gráficas por Computadora',
  autor: 'Emiliano Gasque',
  anio: '2026',
}

// ── Secciones opcionales ─────────────────────────────────────
// Cada lista que dejes vacía hace que su sección no se muestre.

// Requisitos: agrega filas como { label: 'Versión de Android', value: '8.0 o superior' }
// (versión, procesador, tamaño del APK...) cuando tengas los datos reales.
export const REQUISITOS = [
  { label: 'Sistema', value: 'Android' },
  { label: 'Instalación', value: 'Archivo APK, fuera de Google Play' },
  { label: 'Realidad aumentada', value: 'Cámara y compatibilidad con ARCore' },
]

// Controles de la app: { label: 'Moverse', value: 'Joystick izquierdo' }
export const CONTROLES = []

// Capturas de pantalla: { src: '/capturas/campo.jpg', alt: 'Vista general del campo', caption: 'El campo solar al amanecer' }
// Coloca las imágenes en public/capturas/.
export const CAPTURAS = []

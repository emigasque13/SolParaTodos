// ─────────────────────────────────────────────────────────────
// Configuración central del sitio. Edita aquí, no en los componentes.
// ─────────────────────────────────────────────────────────────

// Archivo APK (public/downloads/SolParaTodos.apk). Si algún día lo subes a GitHub Releases,
// define VITE_APK_URL con el enlace directo.
export const APK_URL = import.meta.env.VITE_APK_URL || '/downloads/SolParaTodos.apk'
export const APK_FILENAME = 'SolParaTodos.apk'

// Enlaces del footer (créditos)
export const REPO_URL = 'https://github.com/emigasque13/SolParaTodos'
export const GUIDE_URL = '#guia' // la guía vive en esta misma página

// Video de demostración opcional para el hero (por ejemplo '/demo.mp4' dentro de /public).
// Si lo dejas vacío se muestra la ilustración interactiva del campo solar.
export const DEMO_VIDEO_URL = ''
export const DEMO_VIDEO_POSTER = ''

// Datos reales del APK
export const APP = {
  version: '0.1.0',
  tamano: '48.7 MB',
  android: 'Android 8.0 o superior',
  arquitectura: 'ARM64 (casi todos los teléfonos actuales)',
  precio: 'Gratis',
}

// Datos académicos (footer)
export const ACADEMIC = {
  universidad: 'Universidad Marista de Mérida',
  carrera: 'Ingeniería en Tecnologías Digitales',
  materia: 'Gráficas por Computadora',
  profesor: 'Luis de Jesús López Hernández',
  autor: 'Emiliano Gasque',
  anio: '2026',
}

// Cifras de la simulación
export const STATS = [
  { value: '308', label: 'paneles solares en la escena' },
  { value: '1 016 kWp', label: 'capacidad instalada simulada' },
  { value: '3', label: 'niveles de detalle por panel' },
  { value: '3', label: 'vistas de cámara' },
]

// Capturas de pantalla (opcional). { src: '/capturas/campo.jpg', alt: '...', caption: '...' }
// Coloca las imágenes en public/capturas/. Con la lista vacía la sección no se muestra.
export const CAPTURAS = []

// Requisitos para la guía
export const REQUISITOS = [
  { label: 'Sistema', value: APP.android },
  { label: 'Procesador', value: APP.arquitectura },
  { label: 'Tamaño', value: APP.tamano },
  { label: 'Instalación', value: 'Archivo APK, fuera de Google Play' },
  { label: 'Conexión', value: 'No necesita cuenta ni registro' },
]

// Controles de la app
export const CONTROLES = [
  { label: 'Hora del día', value: 'Barra inferior: de 6:00 a 18:00' },
  { label: 'Cambiar de vista', value: 'Botones del costado: panorámica, detalle de panel y recorrido' },
  { label: 'Recorrer la granja', value: 'Joystick en pantalla (vista de recorrido)' },
  { label: 'Modo día / noche', value: 'Botón de la luna: activa el modo Crepúsculo' },
  { label: 'Más datos', value: 'Botón «Más detalles» en el panel de telemetría' },
  { label: 'Fichas técnicas', value: 'Botón de información: celdas, estructura y optimización' },
]

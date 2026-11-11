// Iconos de línea fina (sin dependencias). Heredan color y tamaño del texto (1em).
const base = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const DownloadIcon = (props) => (
  <svg {...base} strokeWidth="1.8" {...props}>
    <path d="M12 4v11" />
    <path d="m7.5 11 4.5 4.5 4.5-4.5" />
    <path d="M5 20h14" />
  </svg>
)

export const MenuIcon = (props) => (
  <svg {...base} strokeWidth="1.8" {...props}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const CloseIcon = (props) => (
  <svg {...base} strokeWidth="1.8" {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

// Marca solar de la navegación y del footer
export const SunMark = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <g stroke="#C8901A" strokeWidth="2.4" strokeLinecap="round">
      <path d="M16 2.5v3.5M16 26v3.5M2.5 16H6M26 16h3.5M6.5 6.5 9 9M23 23l2.5 2.5M6.5 25.5 9 23M23 9l2.5-2.5" />
    </g>
    <circle cx="16" cy="16" r="6" fill="#C8901A" />
  </svg>
)

/* Iconos de las funciones */
export const CubeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
    <path d="M4 7.5 12 12l8-4.5M12 12v9" />
  </svg>
)

export const ScanIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    <path d="M12 8 16 10.2v3.6L12 16l-4-2.2v-3.6L12 8Z" />
  </svg>
)

export const LayersIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12.5 9 5 9-5M3 16.5l9 5 9-5" />
  </svg>
)

export const CodeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
)

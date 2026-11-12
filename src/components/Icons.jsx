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

/* Iconos extra (secciones nuevas) */
export const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
)

export const BookIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5v-15Z" />
    <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5A1.5 1.5 0 0 1 20 20.5v-15Z" />
  </svg>
)

export const ClockIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const BoltIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
  </svg>
)

export const MoonIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
  </svg>
)

export const ChartIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 20V4M4 20h16" />
    <path d="m8 15 3.5-4 3 2.5L19 8" />
  </svg>
)

export const HomeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 11 12 4l8 7v8.5a.5.5 0 0 1-.5.5H15v-6H9v6H4.5a.5.5 0 0 1-.5-.5V11Z" />
  </svg>
)

export const SchoolIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" />
    <path d="M6.5 12v4.5c0 1 2.5 2.5 5.5 2.5s5.5-1.5 5.5-2.5V12" />
  </svg>
)

export const LeafIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
    <path d="M5 19c3-5 6-7.5 10-9" />
  </svg>
)

export const PhoneIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
    <path d="M11 18.5h2" />
  </svg>
)

export const SparkIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
  </svg>
)

export const CheckIcon = (props) => (
  <svg {...base} strokeWidth="1.8" {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
)

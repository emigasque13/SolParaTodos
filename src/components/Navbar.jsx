import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CloseIcon, MenuIcon, SunMark } from './Icons'
import DownloadButton from './DownloadButton'

const LINKS = [
  { href: '#que-es', label: '¿Qué es?' },
  { href: '#partes', label: 'Partes' },
  { href: '#funciona', label: 'Cómo funciona' },
  { href: '#simulacion', label: 'Simulación' },
  { href: '#guia', label: 'Guía' },
  { href: '#creditos', label: 'Créditos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Fondo translúcido solo después de hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const glass = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        glass ? 'glass' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        {/* Identidad de la universidad */}
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Ir al inicio">
          <SunMark className="h-7 w-7 flex-none" />
          <span className="font-display text-[0.82rem] font-semibold leading-tight sm:text-sm">
            Universidad Marista <span className="text-slate">de Mérida</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <DownloadButton size="sm" label="Descargar" />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full text-2xl lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
            aria-label="Principal móvil"
          >
            <ul className="px-5 pb-4">
              {LINKS.map((l) => (
                <li key={l.href} className="border-t border-line">
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-3.5 text-lg font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

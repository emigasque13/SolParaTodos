import Reveal from './Reveal'
import DownloadButton from './DownloadButton'

// Cierre de la página: una última invitación a descargar, sin adornos.
export default function FinalCTA() {
  return (
    <section id="descargar" className="border-t border-line py-20 sm:py-28">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
        <h2 className="max-w-md font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Descárgala y recorre el campo solar
        </h2>
        <DownloadButton size="lg" />
      </Reveal>
    </section>
  )
}

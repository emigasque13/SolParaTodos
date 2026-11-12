import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { PLAY_PATH } from '../config'

// QR que apunta a la versión web (misma página, ruta aparte). Usa la dirección real donde esté publicada.
export default function PlayQR({ size = 168 }) {
  const [src, setSrc] = useState('')
  const url = typeof window !== 'undefined' ? window.location.origin + PLAY_PATH : PLAY_PATH

  useEffect(() => {
    QRCode.toDataURL(url, { width: size * 2, margin: 1, color: { dark: '#111A2B', light: '#FFFFFF' } })
      .then(setSrc)
      .catch(() => setSrc(''))
  }, [url, size])

  if (!src) return null
  return <img src={src} width={size} height={size} alt="Código QR para abrir la versión web" className="rounded-xl border border-line bg-white p-2" />
}

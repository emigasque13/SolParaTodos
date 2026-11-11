import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LodDemo from './components/LodDemo'
import Install from './components/Install'
import Gallery from './components/Gallery'
import Specs from './components/Specs'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user": si el sistema pide menos movimiento, Framer Motion
    // desactiva las animaciones de transformación automáticamente.
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LodDemo />
        <Install />
        <Gallery />
        <Specs />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  )
}

import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import Parts from './components/Parts'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Simulation from './components/Simulation'
import Install from './components/Install'
import Gallery from './components/Gallery'
import Specs from './components/Specs'
import Footer from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user": si el sistema pide menos movimiento, Framer Motion
    // desactiva las animaciones de transformación automáticamente.
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Parts />
        <HowItWorks />
        <Benefits />
        <Simulation />
        <Install />
        <Gallery />
        <Specs />
      </main>
      <Footer />
    </MotionConfig>
  )
}

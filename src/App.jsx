import './App.css'
import { Nav } from './components/layout/Nav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Process from './components/sections/Process'
import Work from './components/sections/Work'
import Trust from './components/sections/Trust'
import AICapabilities from './components/sections/AiCapabilities'
import Manifesto from './components/sections/Manifesto'
import Valuescroll from './components/sections/Vlaue'
import TrustBadges from './components/sections/TrustBadges'
import InteractiveTestimonials from './components/sections/Testimonials'
import StickyFooter from './components/layout/Footer'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactLenis } from 'lenis/react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import AIUpdates from './components/sections/AiUpdates'

function App() {


  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      delay: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
     <ReactLenis root>
      <div className=''>
        <div id="home" className="h-screen overflow-hidden" data-aos="fade-in" data-aos-duration="1000">
          <Nav className="max-w-7xl mx-auto"/>
          <Hero/>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <About />
        </div>
          <div data-aos="fade-up" data-aos-duration="800">
          <Trust/>
        </div>
        <Process/>
        <div data-aos="fade-up" data-aos-duration="800">
          <Work/>
        </div>
      
        <div data-aos="fade-up" data-aos-duration="800">
          <AICapabilities/>
        </div>
        <Manifesto/>
        <Valuescroll/>
        <div data-aos="fade-up" data-aos-duration="800">
          <TrustBadges/>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <InteractiveTestimonials/>
        </div>
         <div data-aos="fade-up" data-aos-duration="800">
          <AIUpdates/>
        </div>
        <StickyFooter/>
      </div>
    </ReactLenis>
         <motion.a
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="whatsapp-float relative"
      href="https://wa.me/918148196404"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Free Business consultation"
    >
      <motion.span
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
        aria-hidden="true"
      />
      <motion.span
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
        aria-hidden="true"
      />

      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="relative z-10">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43Zm-8.44 18.3h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.52-5.26C2.19 6.44 6.62 2 12.08 2a9.83 9.83 0 0 1 7 2.91 9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.87-9.9 9.87Zm5.42-7.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>

      <motion.a
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.15, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="phone-float relative"
      href="tel:+918148196404"
      aria-label="Call Priya"
      title="Free Business Enquiry"
    >
      <motion.span
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
        className="pointer-events-none absolute inset-0 rounded-full bg-blue-500"
        aria-hidden="true"
      />
      <motion.span
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
        className="pointer-events-none absolute inset-0 rounded-full bg-blue-500"
        aria-hidden="true"
      />

      <motion.span
        animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
        className="relative z-10 flex"
      >
        <Phone size={26} strokeWidth={2.4} aria-hidden="true" />
      </motion.span>
    </motion.a>
    </>
  )
}

export default App

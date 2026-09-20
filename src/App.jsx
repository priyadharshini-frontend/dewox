import './App.css'
import { Nav } from './components/layout/Nav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import ImageMouseTrail from './components/uilayouts/mousetrail'
import AccordianModal from './components/uilayouts/AccordianModal'
import Example from './components/uilayouts/AiGradientAnimationCard'
import VelocityText from './components/uilayouts/VelocityText'
import Services from './components/sections/Services'
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

function App() {
//   const images = [
//   'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format',
//   'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format',
// ];

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
        <div className="h-screen overflow-hidden" data-aos="fade-in" data-aos-duration="1000">
          <Nav className="max-w-7xl mx-auto"/>
          <Hero/>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <About />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Services/>
        </div>
        <Process/>
        <div data-aos="fade-up" data-aos-duration="800">
          <Work/>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Trust/>
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
        <StickyFooter/>
      </div>
    </ReactLenis>
    </>
  )
}

export default App

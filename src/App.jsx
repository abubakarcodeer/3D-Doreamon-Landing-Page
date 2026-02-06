import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100
    })

  }, [])

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
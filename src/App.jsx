import React from 'react'
import Navbar from './components/Navbar'

import FooterSection from './components/FooterSection'
import PerViewCarousel from './components/PerViewCarousel'
import HeroSection from './components/HeroSection'
import DetailCardSection from './components/DetailCardSection'
import Animation from './components/Animation'



export default function App() {
  return (
    <div>
          
       <Navbar/>   
       <PerViewCarousel/>
       <HeroSection/>
       <DetailCardSection/>
       <Animation/>
       <FooterSection/>

       

    </div>
  )
}

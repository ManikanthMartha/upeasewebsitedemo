import React from 'react'

import Hero from './layouts/Hero/Hero'
import Features from './layouts/Features/Features'
import './App.css'
import bg1 from './assets/bgg1.svg'
import bg2 from './assets/bgg2.svg'
import bg3 from './assets/bgg3.svg'
import bg4 from './assets/bgg4.svg'

import { Route, Routes } from 'react-router-dom'
import Cta from './layouts/CTA/Cta'
import Stats from './layouts/Stats/Stats'
import Navbar from './components/Navbar/Navbar'



const App = () => {
  return (
    <div>
    <Navbar></Navbar>
      <section id='home' style={{backgroundImage : `url(${bg1})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
        <Hero></Hero>        
      </section>
      <section id='whyupease' style={{backgroundImage : `url(${bg2})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
        <Features></Features>
      </section>
      <section id='stats' style={{backgroundImage : `url(${bg3})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
        <Stats></Stats>
      </section>
      <section id='contactus' style={{backgroundImage : `url(${bg4})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}>
        <Cta></Cta>
      </section>
    </div>
  )
}

export default App
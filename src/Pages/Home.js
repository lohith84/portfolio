import React from 'react'
import Header from '../Components/Header/Header'
import Homepage from '../Components/Homepage/Homepage'
import Aboutpage from '../Components/Aboutpage/Aboutpage'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import Contactpage from '../Components/Contactpage/Contactpage'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <Aboutpage />
      <Skills />
      <Projects />
      <Contactpage />
      <Footer />
    </div>
  )
}


export default Home
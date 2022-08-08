import React from 'react'
import './portfolio.css'
import NavBar from '../navbar/NavBar'
import Header from '../header/Header'
import TechStack from '../techstacks/TechStack'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <NavBar />
        <Header />
        <TechStack />
        <Projects />
        <Contact />
    </div>
  )
}

export default Portfolio;
import React from 'react'
import './header.css'
import Resume from '../../assets/resume123.pdf'


const Header = () => {
  return (
    <div className='header'>
      <div className="overlays">
        <h1>Hello, I am <span>{'"'}Abhijeet Takle{'"'}.</span></h1>
        <h3>I am currently studing Electronics and <br /> aspiring to be a <span>{"<"}Software Developer{" />"}</span>.</h3>

        <div className='headerlinks'>
          <a href={Resume} download><p>Download CV</p></a>
          <a href='#contactme'><p>Let's Talk</p></a>
        </div>
      </div>
      {/* <video className='vid' src={videoBg} autoPlay loop muted /> */}
    
    </div>
  )
}

export default Header
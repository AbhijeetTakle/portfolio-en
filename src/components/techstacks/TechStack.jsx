import React from 'react'
import './techstacks.css'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaNode } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'


const TechStack = () => {
  return (
    <div className='techstack'>
      <p>I work with...</p>
      <div className='logos'>
          <div className='logo' style={{ color: "rgb(225, 60, 34)" }}><IoLogoHtml5 /></div>
          <div className='logo' style={{ color: "rgb(13, 103, 213)" }}><IoLogoCss3 /></div>
          <div className='logo' style={{ color: "rgb(242, 230, 0)" }}><IoLogoJavascript /></div>  
          <div className='logo' style={{ color: "rgb(1, 201, 251)" }}><FaReact /></div> 
          <div className='logo' style={{ color: "rgb(1, 251, 51)" }}><FaNode /></div>
          <div className='logo' style={{ color: "rgb(1, 118, 3)" }}><SiMongodb /></div>
          <div className='logo' style={{ color: "rgb(159, 0, 119)" }}><SiExpress /></div> 
        {/* <div className='basiclogos'>        
        </div>
        <div className='advlogos'>
        </div>        */}
      </div>
    </div>
  )
}

export default TechStack
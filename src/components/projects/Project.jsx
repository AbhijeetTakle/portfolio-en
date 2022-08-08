import React from 'react'
import './project.css'
import { BsFillEyeFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const Project = (props) => {
  return (
    <div className='project'>
        <img src={props.src} />
        <div className='description'>
            <p>Lorem ipsum dolor sit amet consectetu dolor sit amet consectetudolor sit amet consectetu.</p>
            <div className='project-links'>
                <a href={props.gitlink}><FaGithub /></a>
                <a href={props.demolink}><BsFillEyeFill /></a>
            </div>    
        </div>
    </div>
  )
}

export default Project
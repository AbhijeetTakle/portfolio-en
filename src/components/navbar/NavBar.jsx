import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='title'>
            <a href="#root"><h1>Portfolio.</h1></a>
        </div>
        <div className='links'>
            <a className='linkedin' href="https://www.linkedin.com/in/abhijeet-takle-139b1b193/"><FaLinkedinIn/></a>
            <a className='github' href="https://github.com/AbhijeetTakle"><FaGithub/></a>
        </div>
    </div>
  )
}

export default NavBar;
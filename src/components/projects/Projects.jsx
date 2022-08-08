import React from 'react'
import Project from './Project'
import './projects.css'
import SudokuSrc from '../../assets/sudoku.jpg'
import JavaSrc from '../../assets/java.jpg'
import EcomSrc from '../../assets/ecom.jpg'


const Projects = () => {
  return (
    <div className='projects-container'>
        <h3>Projects</h3>
        <div className='projects'>
            <div>           
              <Project src={SudokuSrc} gitlink="https://github.com/projectPossible/Sudoku-Game" demolink="https://github.com/"/>
            </div>
            <div>            
              <Project src={JavaSrc} gitlink="https://github.com/AbhijeetTakle/Data-Structures-Algorithms" demolink="https://github.com/" />
            </div>
            <div>            
              <Project src={EcomSrc} gitlink="https://github.com/AbhijeetTakle/Ecommerce-Website" demolink="https://github.com/"/>
            </div>
            {/* <div>            
              <Project src={SudokuSrc} gitlink="https://github.com/" demolink="https://github.com/"/>
            </div>
            <div>
              <Project src={JavaSrc} gitlink="https://github.com/" demolink="https://github.com/"/>
            </div>
            <div>            
              <Project src={EcomSrc} gitlink="https://github.com/" demolink="https://github.com/"/>
            </div> */}
        </div>
    </div>
  )
}

export default Projects
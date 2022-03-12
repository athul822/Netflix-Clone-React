import React from 'react'
import '../Fontawsome'
import './MainContent.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function MainContent() {
  return (
    <div className='container'>
        <div className='main-content'>
            <h1 className='main-title'>MONEY HEIST</h1>
            <div className="buttons">
                <button className='btn-play btn'><span className='fa-icons'><FontAwesomeIcon icon="fa-solid fa-play" className='play-icon' /></span>Play</button>
                <button className='btn-info btn'><span className='fa-icons'><FontAwesomeIcon icon="fa-solid fa-circle-info" /></span> More Info</button></div>
            </div>
            <div className='linear-bg'></div>

        </div>
  )
}

export default MainContent
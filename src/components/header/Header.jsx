import React from 'react'
import NavBar from '../navBar/NavBar'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <NavBar />
        <div>
            <h1 className='header__div'>INMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
    </div>
  )
}

export default Header
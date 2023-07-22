import React from 'react'
import NavBar from '../navBar/NavBar'
import './header.scss'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <NavBar className={'header__navbar'} />
        <img className='header__logo' src={logo} alt="" />
        <div>
            <h1 className='header__div'>INMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
    </div>
  )
}

export default Header
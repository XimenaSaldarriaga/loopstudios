import React from 'react'
import Header from '../header/Header.jsx'
import Info from '../info/Info.jsx'
import Footer from '../footer/Footer.jsx'
import './home.scss'

const Home = () => {
  return (
    <>
    <div className='home'>
    <Header />
    <Info />
    <Footer />
    </div>
    </>
  )
}

export default Home

import React from 'react'
import Header from '../header/Header.jsx'
import Info from '../info/Info.jsx'
import Footer from '../footer/Footer.jsx'
import Creations from '../creations/Creations.jsx'
import './home.scss'

const Home = () => {
  return (
    <>
    <div>
    <Header />
    <Info />
    <Creations />
    <Footer />
    </div>
    </>
  )
}

export default Home

import React from 'react'
import Card from '../card/Card'
import './creations.scss'

const Creations = () => {
  return (
    <div className='creations'>
    <div className='creations__header'>
      <h2 className='creations__title'>OUR CREATIONS</h2>
      <button className='creations__button'>SEE ALL</button>
    </div>
    <Card />
    </div>
  )
}

export default Creations
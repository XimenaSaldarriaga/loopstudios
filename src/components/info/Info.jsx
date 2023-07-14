import React from 'react'
import interactive from "../../images/desktop/image-interactive.jpg"
import './info.scss'

const Info = () => {
    return (
        <div className='info'>
            <img className='info__image' src={interactive} alt="" />
            <div className='info__div'>
                <h2 className='info__title'>THE LEADER IN INTERACTIVE VR</h2>
                <p className='info__paragraph'>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </div>
    )
}

export default Info
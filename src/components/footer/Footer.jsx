import React from 'react'
import NavBar from '../navBar/NavBar'
import './footer.scss'
import facebookIcon from '../../images/icon-facebook.svg';
import instagramIcon from '../../images/icon-instagram.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';
import twitterIcon from '../../images/icon-twitter.svg';

const Footer = () => {
  const iconList = [
    {
      icon: facebookIcon,
      name: 'facebook',
    },
    {
      icon: twitterIcon,
      name: 'twitter',
    },
    {
      icon: pinterestIcon,
      name: 'pinterest',
    },
    {
      icon: instagramIcon,
      name: 'instagram',

    },
  ];
  return (

    <footer className='footer'>
      <div className='footer__social'>
        {iconList.map((icon, index) => (
          <figure className='footer__icon' key={index}>
            <img className='footer__image' src={icon.icon} alt={icon.name} />
          </figure>
        ))}
      </div>
      <span className='footer__text'> © 2021 Loopstudios. All rights reserved.</span>
      <div className='footer__nav'>
 
      </div>

    </footer>

  )
}

export default Footer
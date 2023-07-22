import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../images/logo.svg';

const links = [
  {
    name: 'About',
    link: '',
  },
  {
    name: 'Careers',
    link: '',
  },
  {
    name: 'Events',
    link: '',
  },
  {
    name: 'Products',
    link: '',
  },
  {
    name: 'Support',
    link: '',
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`navbar ${isOpen && 'open'}`}>
      <img className={`navbar__logo ${isOpen && 'open'}`} src={logo} alt="" />
      <ul className={`navbar__links ${isOpen && 'open'}`}>
        {links.map((link, index) => (
          <li className="navbar__link" key={index}>
            <span>{link.name}</span>
            <hr />
          </li>
        ))}
      </ul>
      <div
        className={`nav_toggle ${isOpen && 'open'}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;

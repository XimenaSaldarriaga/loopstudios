import React from 'react'
import './navbar.scss'
import logo from '../../images/logo.svg'

const links = [
    {
        name: "About",
        link: "",
    },
    {
        name: "Careers",
        link: "",
    },
    {
        name: "Events",
        link: "",
    },
    {
        name: "Products",
        link: "",
    },
    {
        name: "Support",
        link: "",
    },
];

const NavBar = ({  className })  => {
    return (
        <nav className={`navbar ${className}`}>
            <img className='navbar__logo' src={logo} alt="" />
            <ul className="navbar__links">
                {links.map((link, index) => (
                    <li className="navbar__link" key={index}>
                        <span>{link.name}</span>
                        <hr />
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default NavBar
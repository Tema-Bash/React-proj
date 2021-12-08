import React from 'react'
import "./Navbar.css"

const Navbar = ({navbarLinks}) => {
  return (
    <nav className="navbar">
      <span className="navbar__logo">Хайтекдиджит</span>
      <ul className="navbar__list">  
        {navbarLinks.map((item) => {
          return (
          <li className="navbar__item" key={item.title}>
            <a className="navbar__link" href={item.url}>{item.title}</a>   {/**/}
          </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar

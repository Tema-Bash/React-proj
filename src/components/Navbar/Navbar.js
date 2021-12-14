import React, { useState, useEffect } from 'react';
import "./Navbar.css"


const Navbar = ({navbarLinks}) => {
  const handleScroll = () => {
    const changeNavbar = document.querySelector(".navbar");
    const changeNav__button = document.querySelector(".navbar__button");
    if(window.scrollY >= 600){
      changeNav__button.classList.add("navbar__button_type_scrolled")
    }else {
      changeNav__button.classList.remove("navbar__button_type_scrolled")
    }
    if(window.scrollY > 0){
      changeNavbar.classList.add("navbar_type_scrolled")
    }else {
      changeNavbar.classList.remove("navbar_type_scrolled")
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    handleScroll()
  })

  return (
    <nav className="navbar">
      <div className='navbar__container'>
        <span className="navbar__logo">Хайтекдиджит</span>
        <ul className="navbar__list">  
          {navbarLinks.map((item, index) => {
            if(item.button){
              return (
                <li className="navbar__item" key={item.index}>
                  <a className="navbar__link navbar__button" href={item.url}>{item.title}</a> 
                </li>
                );
            }else{
              return (
                <li className="navbar__item" key={item.index}>
                  <a className="navbar__link" href={item.url}>{item.title}</a>
                </li>
                );
            }
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
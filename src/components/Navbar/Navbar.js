import React, { useState, useEffect } from 'react';
import "./Navbar.css"


const Navbar = ({navbarLinks}) => {

  let handleScroll = function(){
    let changeNav__button = document.querySelector(".navbar__button");
    window.scrollY >= 600 ? changeNav__button.classList.add("navbar__button_type_scrolled") : changeNav__button.classList.remove("navbar__button_type_scrolled")
  }
  

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    handleScroll()
  })

  return (
    <nav className="navbar">
      <span className="navbar__logo">Хайтекдиджит</span>
      <ul className="navbar__list">  
        {navbarLinks.map((item, index) => {
          if(item.button){
            return (
              <li className="navbar__item" key={item.index}>
                <a className="navbar__link navbar__button" href={item.url}>{item.title}</a> {/*navbar__button */}
              </li>
              );
          }else{
            return (
              <li className="navbar__item" key={item.index}>
                <a className="navbar__link" href={item.url}>{item.title}</a> {/*navbar__button */}
              </li>
              );
          }
        })}
      </ul>
    </nav>
  )
}

export default Navbar
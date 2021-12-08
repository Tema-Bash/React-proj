import React from 'react'
import "./Directions.css"

const Directions = () => {
  return (
    <section className="directions">
    <h2 className="directions__title">Направления разработки</h2>
    <p className="directions__subtitle">Хайтекдиджит существует с 2005 года. <br/>Более 15 лет на рынке программных решений</p>
    <ul className="directions__cards">
      <li className="directions__card">
        <img className="directions__icon" src="/images/directions-web.svg" alt="Веб-приложения"/>
        <h3 className="directions__description">Web<br/>приложения</h3>
      </li>
      <li className="directions__card">
        <img className="directions__icon" src="/images/directions-PC.svg" alt="Декстоп приложения"/>
        <h3 className="directions__description">Десктоп<br/>приложения </h3>
      </li>
      <li className="directions__card">
        <img className="directions__icon" src="/images/directions-mobile.svg" alt="МОбильные приложения"/>
        <h3 className="directions__description">Мобильные<br/>приложения</h3>
      </li>
    </ul>
  </section>
  )
}

export default Directions

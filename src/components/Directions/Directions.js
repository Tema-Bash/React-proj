import React from 'react'
import "./Directions.css"

const Directions = ({directionsList}) => {
  return (
    <section className="directions">
    <h2 className="directions__title">Направления разработки</h2>
    <p className="directions__subtitle">Хайтекдиджит существует с 2005 года. <br/>Более 15 лет на рынке программных решений</p>
    <ul className="directions__cards">
      {directionsList.map((item) => {
        return (
        <li className="directions__card" key={item.title}>
            <img className="directions__icon" src={Object.values(item.imageSrc)} alt={item.alt}/>
            <h3 className="directions__description">{item.title}</h3>
        </li>
        );
      })}
    </ul>
  </section>
  )
}

export default Directions

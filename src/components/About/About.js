import React from 'react'
import "./About.css"

const About = ({aboutList}) => {
  return (
    <section className="about">
    <h2 className="about__title">Почему мы</h2>
    <ul className="about__list">
    {aboutList.map((item) => {
        return (
        <li className="about__item" key={item.pos}>{item.advantage}</li>
        );
      })}
    </ul>
  </section>
  )
}

export default About

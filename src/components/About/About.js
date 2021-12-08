import React from 'react'
import "./About.css"

const About = ({aboutList}) => {
  return (
    <section class="about">
    <h2 class="about__title">Почему мы</h2>
    <ul class="about__list">
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

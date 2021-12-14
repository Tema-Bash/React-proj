import React from 'react'
import "./Lead.css"

const Lead = ({leadTitle, leadSubtitle}) => {
  return (
    <section className="lead">
     <h1 className="lead__title">{leadTitle}</h1>
     <p className="lead__subtitle">{leadSubtitle}</p>
     <button className="lead__button" aria-label="Обсудить проект" type="button">Обсудить проект</button>
    </section>
  )
}

export default Lead

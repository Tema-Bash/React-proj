import React from 'react'
import "./Background.css"

const Background = ({imgItem}) => {
  return (
    <div className="background__list">
<div key="topRight" className="background__item" style={{background: 'url(' + Object.values(imgItem[0].imageSrc) + ')', top: "-670px", left: "797px", width: "2310px", height: "1819px"}}></div>
      <div key="topLeft" className="background__item" style={{background: 'url(' + Object.values(imgItem[1].imageSrc) + ')', top: "-890px", left: "-1000px", width: "2310px", height: "1726px"}}></div>
      <div key="bottom" className="background__item" style={{background: 'url(' + Object.values(imgItem[2].imageSrc) + ')', bottom: "0", left: "50%", width: "2048px", height: "797px", marginRight: "-50%", transform: "translate(-50%, 0%)"}}></div>
    </div>
  )
}

export default Background
import React from "react"
import "./ExtraText.css"

const ExtraText = ({ main, top, bottom, color = "black" }) => {
  return (
    <div className="extra" style={{ color }}>
      <p className="extra-number">{main}</p>
      <div className="extra-col">
        <p className="extra-top">{top}</p>
        <p className="extra-bottom">{bottom}</p>
      </div>
    </div>
  )
}

export default ExtraText

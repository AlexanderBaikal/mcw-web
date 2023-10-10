import React from "react"
import "./HeroSection.css"
import image from "../../images/handbg.jpg"
import imageBottom from "../../images/hand2.jpg"
import asLink from "../../images/as_disabled.png"
import gpLink from "../../images/gp.png"

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left-wrapper">
          <div className="hero-left">
            <div className="title">
              <p>Car wash</p>
              <p>in an instant</p>
            </div>
            <div className="subtitle">
              <p>No more long lines.</p>
              <p>just sign up and come</p>
            </div>
            <div className="hero-btns">
              <a href="https://play.google.com/store/apps/details?id=com.megacarwash"
                target="_blank" >
                <img className="gp-link" src={gpLink} alt={"goople play"} />
              </a>
              <img className="as-link" src={asLink} alt={"appstore"} />
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img className="image-right" src={image} alt={"hand"} />
        </div>
        <div className="hero-bottom">
          <img className="image-bottom" src={imageBottom} alt={"hand"} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection

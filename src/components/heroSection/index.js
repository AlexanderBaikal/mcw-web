import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../ButtonElements"
import "./HeroSection.css"
import image from "../../images/hand.png"

const HeroSection = () => {
  return (
    <div className="hero-container">
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
          <Button fontBig primary>
            Get started
          </Button>
        </div>
        <div className="subtitle">
          <p>Additional.</p>
          <p>information</p>
        </div>
      </div>
      <div className="hero-right">
        <img className="image-right" src={image} alt={"hand"} />
      </div>
    </div>
  )
}

export default HeroSection

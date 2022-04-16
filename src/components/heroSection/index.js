import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../ButtonElements"
import "./HeroSection.css"
import image from "../../images/handbg.jpg"
import imageBottom from "../../images/hand2.jpg"
import asLink from "../../images/as_disabled.png"
import gpLink from "../../images/gp.png"
import ExtraText from "../extraText"

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
              <img className="gp-link" src={gpLink} alt={"goople play"} />
              <img className="as-link" src={asLink} alt={"appstore"} />
              {/* <Button fontBig primary>
                Get started
              </Button> */}
            </div>
            {/* <div className="extras">
              <div className="extra extra-left">
                <ExtraText
                  main={"10"}
                  top={"companies"}
                  bottom={"joined"}
                  color={"white"}
                />
              </div>
              <ExtraText
                main={"1000+"}
                top={"active"}
                bottom={"clients"}
                color={"white"}
              />
            </div> */}
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

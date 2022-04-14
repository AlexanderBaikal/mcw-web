import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../ButtonElements"
import "./HeroSection.css"
import image from "../../images/handbg.jpg"
import imageBottom from "../../images/hand2.jpg"
import asLink from "../../images/as.png"
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
              <img className="as-link" src={asLink} alt={"appstore"} />
              <img className="gp-link" src={gpLink} alt={"goople play"} />
              {/* <Button fontBig primary>
                Get started
              </Button> */}
            </div>
            <div className="extras">
              <div className="extra extra-left">
                <p className="extra-number">10</p>
                <div className="extra-col">
                  <p className="extra-top">companies</p>
                  <p className="extra-bottom">joined</p>
                </div>
              </div>
              <div className="extra">
                <p className="extra-number">1000+</p>
                <div className="extra-col">
                  <p className="extra-top">active</p>
                  <p className="extra-bottom">clients</p>
                </div>
              </div>
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

import React from "react"
import { Button } from "../ButtonElements"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Travel more</h1>
      <p>Plan your next trip today</p>
      <div className="hero-btns">
        <Button fontBig primary>
          Get started
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

import React from "react"
import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutImageContainer,
  AboutTitle,
  ExtraContainer,
  ExtrasContainer,
  ExtrasWrapper,
} from "./AboutSection"
import image from "../../images/about.png"
import ExtraText from "../extraText"

const aboutItems = [
  {
    main: "JS",
    top: "main",
    bottom: "language",
  },
  {
    main: "E2E",
    top: "1 person",
    bottom: "100% work",
  },
  {
    main: "6",
    top: "month",
    bottom: "of work",
  },
  {
    main: "1M+",
    top: "lines",
    bottom: "of code",
  },
  {
    main: "UI",
    top: "modern",
    bottom: "design",
  },
]

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutTitle>About this project</AboutTitle>
      <ExtrasWrapper>
        <ExtrasContainer>
          {aboutItems.map((item, key) => (
            <ExtraContainer>
              <ExtraText main={item.main} top={item.top} bottom={item.bottom} />
            </ExtraContainer>
          ))}
        </ExtrasContainer>
      </ExtrasWrapper>
      <AboutContent>
        This application was created to sign up for the services of a car wash
        complex in an instant. Each user can add multiple vehicles. To sign up
        for the service, you need to select a transport, a car wash complex,
        select services from the list. After that, you need to select the time
        and date and confirm the entry. The owner of a car wash complex can
        accrue bonuses to customers. It is also possible to notify customers
        about promotions and discounts of the company. In addition, the
        application has a page with information about the company, where you can
        find a description of the car complex, contacts for communication, as
        well as photos. Users can also leave reviews and form a company rating.
      </AboutContent>
      <AboutImageContainer>
        <AboutImage src={image} />
      </AboutImageContainer>
    </AboutContainer>
  )
}

export default AboutSection

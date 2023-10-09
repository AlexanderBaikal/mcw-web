import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  ExtraContainer,
  ExtrasContainer,
  ExtrasTitle,
  ExtrasWrapper, Wrapper
} from "./Companies"
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

const CompaniesSection = ({ top }) => {
  return (
    <Wrapper top={top}>
      <ExtrasWrapper>
        <ExtrasContainer>
          {aboutItems.map((item, key) => (
            <ExtraContainer>
              <ExtraText main={item.main} top={item.top} bottom={item.bottom} />
            </ExtraContainer>
          ))}
        </ExtrasContainer>
      </ExtrasWrapper>
    </Wrapper>
  )
}

export default CompaniesSection

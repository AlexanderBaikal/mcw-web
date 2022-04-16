import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Companies, ImageContainer, LogoImage, Wrapper } from "./Companies"

const CompaniesSection = ({ top }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "images/logos/" } }) {
        edges {
          node {
            id
            base
            publicURL
          }
        }
      }
    }
  `)

  return (
    <Wrapper top={top}>
      <Companies top={top}>
        {data.allFile.edges.map((edge, key) => (
          <ImageContainer top={top}>
            <LogoImage
              top={top}
              src={edge.node.publicURL}
              alt={edge.node.base}
            />
          </ImageContainer>
        ))}
      </Companies>
    </Wrapper>
  )
}

export default CompaniesSection

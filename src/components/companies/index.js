import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import {
  Companies,
  ImageContainer,
  LogoImage,
  Text,
  Wrapper,
} from "./Companies"

const CompaniesSection = () => {
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
    <Wrapper>
      <Companies>
        {data.allFile.edges.map((edge, key) => (
          <ImageContainer>
            <LogoImage src={edge.node.publicURL} alt={edge.node.base} />
          </ImageContainer>
        ))}
      </Companies>
    </Wrapper>
  )
}

export default CompaniesSection

{
  /* <ImageContainer>
<GatsbyImage
  objectFit="contain"
  imgStyle={{ width: "auto" }}
  image={getImage(edge.node.childImageSharp)}
  alt={edge.node.base}
/>
</ImageContainer> */
}

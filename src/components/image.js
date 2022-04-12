import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./image.css"

const Img = ({ image, alt }) => {
  return (
    <GatsbyImage className="image-item" image={getImage(image)} alt={alt} />
  )
}

function Image() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(png)|(jpg)|(jpeg)/" }
          name: { nin: ["background", "background2"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(formats: [AUTO, AVIF], placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  return (
    <div className="image-container">
      <h1>View our destinations</h1>
      <div className="image-grid">
        {data.allFile.edges.map((edge, key) => (
          <Img
            key={key}
            image={edge.node.childImageSharp}
            alt={edge.node.base}
          />
        ))}
      </div>
    </div>
  )
}

export default Image

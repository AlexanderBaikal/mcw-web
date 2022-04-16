import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  PreviewContainer,
  PreviewImage,
  PreviewImageList,
  PreviewTitle,
  PreviewWrapper,
  SliderStyled,
} from "./PreviewSection"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const PreviewSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "images/previews/" } }) {
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

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    draggable: false,
    pauseOnHover: false,
  }

  const { width } = useWindowDimensions()

  return (
    <PreviewWrapper>
      <PreviewTitle>Preview</PreviewTitle>
      {width <= 1080 ? (
        <SliderStyled {...settings}>
          {data.allFile.edges.map((edge, key) => (
            <PreviewImage src={edge.node.publicURL} alt={edge.node.base} />
          ))}
        </SliderStyled>
      ) : (
        <PreviewContainer>
          <PreviewImageList>
            {data.allFile.edges.map((edge, key) => (
              <PreviewImage src={edge.node.publicURL} alt={edge.node.base} />
            ))}
            {data.allFile.edges.map((edge, key) => (
              <PreviewImage src={edge.node.publicURL} alt={edge.node.base} />
            ))}
          </PreviewImageList>
        </PreviewContainer>
      )}
    </PreviewWrapper>
  )
}

export default PreviewSection

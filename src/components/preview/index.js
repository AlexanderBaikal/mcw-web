import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import {
  PreviewContainer,
  PreviewImage,
  PreviewTitle,
  PreviewWrapper,
  SliderStyled,
} from "./PreviewSection"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

  return (
    <PreviewWrapper>
      <PreviewTitle>Preview</PreviewTitle>
      <SliderStyled {...settings}>
        {data.allFile.edges.map((edge, key) => (
          <PreviewImage src={edge.node.publicURL} alt={edge.node.base} />
        ))}
      </SliderStyled>
    </PreviewWrapper>
  )
}

export default PreviewSection

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  Preview,
  PreviewBottom,
  PreviewButton,
  PreviewContainer,
  PreviewDescription,
  PreviewHeader,
  PreviewImage,
  PreviewImageList,
  PreviewLeft,
  PreviewRight,
  PreviewTitle,
  PreviewWrapper,
} from "./PreviewSection"

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
    <Preview>
      <PreviewWrapper>
        <PreviewLeft>
          <PreviewTitle>Preview</PreviewTitle>
          <PreviewDescription>Discover the future in your hands!
            Watch our demo video on YouTube and witness the extraordinary features that await you!</PreviewDescription>
          <PreviewButton href="https://www.youtube.com/watch?v=ZonTNczrThM" target="_blank">Live demo</PreviewButton>
        </PreviewLeft>
        <PreviewContainer>
          <PreviewImageList>
            {data.allFile.edges.map((edge, key) => (
              <PreviewImage src={edge.node.publicURL} alt={edge.node.base} />
            ))}
          </PreviewImageList>
        </PreviewContainer>
        <PreviewRight>
          <PreviewHeader>Anywhere, Anytime Access</PreviewHeader>
          <PreviewDescription>Say goodbye to long queues and scheduling hassles! With our app, you can register for a carwash from the comfort of your home or office. No need to waste time driving to a carwash center</PreviewDescription>
        </PreviewRight>
      </PreviewWrapper>
      <PreviewBottom>
        <PreviewDescription>Mobile app for remote registration for car wash services.
          The app includes authorization by email, user & organization info, adding multiple cars, posting reviews etc...</PreviewDescription>
        <PreviewDescription>Inspired by my friend’s startup idea I’ve built this product end-to-end: requirements and subject area analysis, product design, UI/UX design, architecture</PreviewDescription>
      </PreviewBottom>
    </Preview>
  )
}

export default PreviewSection

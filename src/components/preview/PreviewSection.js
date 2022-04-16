import Slider from "react-slick"
import styled, { keyframes } from "styled-components"

const ticker = keyframes`
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0%, 0);
      visibility: visible;
    }
 
    to {
      -webkit-transform: translate(-300px, 0);
      transform: translate(-1800px, 0);
  }`

export const PreviewContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
`

export const PreviewImageList = styled.div`
  white-space: nowrap;

  @media screen and (min-width: 1080px) {
    animation: ${ticker} 45s linear infinite;
  }
`

export const PreviewTitle = styled.h1`
  text-align: center;
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
`

export const PreviewWrapper = styled.div`
  margin: 80px 0;
`

export const PreviewImage = styled.img`
  width: 300px;
  object-fit: contain;

  @media screen and (max-width: 1080px) {
    height: 70vh;
  }
`

export const SliderStyled = styled(Slider)`
  overflow: hidden;
`

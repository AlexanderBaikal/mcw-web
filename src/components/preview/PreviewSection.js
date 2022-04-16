import Slider from "react-slick"
import styled from "styled-components"

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
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
  height: 80vh;
  object-fit: contain;
`

export const SliderStyled = styled(Slider)`
  overflow: hidden;
`

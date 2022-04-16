import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`

export const Companies = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: grid;
  -webkit-box-align: center;
  width: 100%;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 68px;
  max-width: 1000px;
  /* padding-left: 125px;
  padding-right: 125px; */
  /* -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* -ms-grid-rows: auto auto; */
  grid-template-rows: auto auto;
  padding: 0 65px;
  /* grid-template-areas:
    "a b c"
    "a b c"
    "a b c"; */

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  height: 56px;
  max-width: 100%;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
`

export const LogoImage = styled.img`
  height: 56px;
  /* width: 100%; */
  /* aspect-ratio: 1;  */
  /* margin-right: 36px;
  margin-left: 36px; */
`

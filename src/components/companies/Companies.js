import styled from "styled-components"

export const Wrapper = styled.div`
  display: ${({ top }) => (top ? "flex" : "none")};
  flex-direction: ${({ top }) => (top ? "row" : "column")};
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  margin-bottom: 30px;

  @media screen and (max-width: 1080px) {
    display: ${({ top }) => (top ? "none" : "flex")};
  }
`




export const Companies = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: ${({ top }) => (top ? "flex" : "grid")};
  justify-content: center;
  -webkit-box-align: center;
  width: 100%;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 0 65px;

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
  min-width: ${({ top }) => (top ? "9vw" : "100%")};
`

export const LogoImage = styled.img`
  height: ${({ top }) => (top ? "4vw" : "56px")};
`

export const ExtrasContainer = styled.div`
  margin: 0;
  display: grid;
  -webkit-box-align: center;
  width: 100%;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 0px;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media screen and (max-width: 1230px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`

export const ExtraContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
`

export const ExtrasWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 30px 0;
`
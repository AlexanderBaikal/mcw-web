import styled from "styled-components"

export const AboutContainer = styled.div`
  margin-bottom: 60px;
  padding: 0 10%;

  @media screen and (max-width: 860px) {
    /* padding: 0 30px; */
  }
`

export const AboutTitle = styled.h1`
  text-align: center;
  display: flex;
  justify-content: center;
`

export const AboutContent = styled.span`
  text-align: left;
  font-size: 20px;
  line-height: 40px;
`

export const AboutImage = styled.img`
  width: 100%;
  max-width: 800px;
  padding: 0 10%;
`

export const AboutImageContainer = styled.div`
  margin: 80px 0;
  justify-content: center;
  display: flex;
  width: 100%;
`

export const ExtrasContainer = styled.div`
  margin: 60px 0;
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
    grid-row-gap: 68px;
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
`

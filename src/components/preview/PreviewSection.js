import styled, { keyframes } from "styled-components"


const ticker = keyframes`
0% {
  opacity:1;
}
17% {
  opacity:1;
}
25% {
  opacity:0;
}
92% {
  opacity:0;
}
100% {
  opacity:1;
}`

export const PreviewContainer = styled.div`
  height: 560px;
  width: 300px;
  overflow: hidden;
  pointer-events: none;
  width: 33.33%;
  display: flex;
  justify-content: center;
`

export const PreviewImageList = styled.div`
  white-space: nowrap;
  width: 300px;

    & img {
      position: absolute;
      animation-name: ${ticker};
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 8s;
  
      &:nth-of-type(1) {
        animation-delay: 6s;
      }
      &:nth-of-type(2) {
        animation-delay: 4s;
      }
      &:nth-of-type(3) {
        animation-delay: 2s;
      }
      &:nth-of-type(4) {
        animation-delay: 0;
      }
    }
`

export const PreviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.33%;
  padding-bottom: 80px;
`

export const PreviewRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  text-align: right;
  width: 33.33%;
  padding-bottom: 80px;
`

export const PreviewBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > div {
    width: 50%;
    max-width: calc(50% - 40px);

    &:last-child{ 
      text-align: right;
      font-style: italic;
    }
  }
`


export const PreviewTitle = styled.h1`
  font-size: 63px;
  font-weight: 600;
  margin-bottom: 22px;
  color: #2196F3;
`

export const PreviewDescription = styled.div`
font-size: 15px;
font-weight: 500;
margin-bottom: 35px;
line-height: 1.75;
max-width: calc(100% - 40px);

&:last-child{
margin-bottom: 0;
}

@media screen and (max-width: 1200px) {
  max-width: 500px;
}
`

export const PreviewHeader = styled.div`
font-size: 15px;
color: #2196F3;
margin-bottom: 22px;
font-weight: 600;
`



export const PreviewButton = styled.a`
font-size: 17px;
font-weight: 500;
display: flex;
justify-content: center;
align-item: center;
padding: 10px 20px;
height: fit-content;
width: fit-content;
background: #FF0000;
color: white;
text-decoration: none;
`

export const PreviewWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 1200px) {
   flex-direction: column;

   > div {
    width: 100%;

   }

   > div:first-child {
    padding-bottom: 40px;
    text-align: center;
    align-items: center;
   }

   > div:last-child {
    padding-bottom: 30px;
    padding-top: 40px;
    text-align: center;
    align-items: center;
   }
  }
`

export const Preview = styled.div`
padding: 0 10%;
`

export const PreviewImage = styled.img`
  width: 300px;
  object-fit: contain;
`

export const SliderStyled = styled.div`
  overflow: hidden;
`

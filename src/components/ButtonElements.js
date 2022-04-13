import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#000" : "#FFF")};
  align-self: center;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#fff" : "#2196f3")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 1px #2196f3 solid;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    border-color: ${({ primary }) => (primary ? "#fff" : "#000")};
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#fff" : "#000")};
    color: ${({ primary }) => (primary ? "#2196f3" : "#fff")};
  }

  @media screen and (max-width: 960px) {
  }
`

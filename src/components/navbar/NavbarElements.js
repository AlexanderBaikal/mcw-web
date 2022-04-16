import styled from "styled-components"
import { Link } from "gatsby"
import McwLogo from "../icons/McwLogo"

export const Nav = styled.nav`
  background: ${({ active }) => (active ? "#fff" : "#2196F3")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  width: "100%";
  align-items: center;
  font-style: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "rgba(255,255,255,1)")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
`
export const NavLogo = styled(Link)`
  color: ${({ dark }) => (dark ? "#2196F3" : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    color: #2196f3;
  }
`

export const NavIcon = styled(McwLogo)`
  margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 50px;

  @media screen and (max-width: 960px) {
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    right: 0;
    opacity: 1;
    transition: all 0.2s ease;
    background: #fff;
  }
`

export const SemiBold = styled.span`
  font-weight: 600;
`

export const NavLinks = styled(Link)`
  color: ${({ dark }) => (dark ? "#2196F3" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #2196f3;

    &:hover {
      color: #000;
      transition: all 0.3s ease;
    }
  }

  @media screen and (max-width: 960px) {
  }
`
export const NavItem = styled.li`
  height: 80px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const HiddenNarrow = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const HiddenWide = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`

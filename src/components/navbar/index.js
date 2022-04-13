import React, { useEffect, useState } from "react"
import { IconContext } from "react-icons/lib"
import { FaBars, FaTimes } from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  SemiBold,
  HiddenWide,
  HiddenNarrow,
} from "./NavbarElements"
import McwLogo from "../../images/assets/megacarwash.svg"
import { Button } from "../ButtonElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) setScroll(true)
    else setScroll(false)
  }
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
    return () => {
      window.removeEventListener("scroll", changeNav)
    }
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo dark={scroll} to="/">
              {/* <NavIcon /> */}
              <McwLogo />
              Mega<SemiBold>carwash</SemiBold>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes color="#2196F3" /> : <FaBars color="#2196F3" />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks dark={scroll} to="/">
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks dark={scroll} to="/images">
                  Images
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks dark={scroll} to="/about">
                  About
                </NavLinks>
              </NavItem>
              <HiddenWide>
                <NavItem>
                  <NavLinks dark={scroll} to="/">
                    Contact us
                  </NavLinks>
                </NavItem>
              </HiddenWide>
            </NavMenu>
            <NavItem>
              <HiddenNarrow>
                <Button>Contact us</Button>
              </HiddenNarrow>
            </NavItem>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

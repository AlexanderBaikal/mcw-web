import React, { useEffect, useState } from "react"
import { IconContext } from "react-icons/lib"
import { FaBars, FaTimes } from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
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
import useWindowSize from "../../hooks/useGatsbyWindowSize"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)
  const { width } = useWindowSize()

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
              <McwLogo
                fill={scroll || width < 960 ? "#2196F3" : "#fff"}
                style={{ height: "40px", paddingRight: "12px" }}
              />
              {width >= 960 ? (
                <>
                  <span>Mega</span>
                  <SemiBold>carwash</SemiBold>
                </>
              ) : null}
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes color="#2196F3" /> : <FaBars color="#2196F3" />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
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
                <Button>Author</Button>
              </HiddenNarrow>
            </NavItem>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

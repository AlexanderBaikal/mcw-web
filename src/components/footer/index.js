import React from "react"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import {
  FooterContainer,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"
import McwLogo from "../../images/assets/megacarwash.svg"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaWrap>
        <SocialLogo to="/">
          <McwLogo
            fill={"#fff"}
            style={{ height: "16px", paddingRight: "10px" }}
          />
          Megacarwash
        </SocialLogo>
        <WebsiteRights>© {(new Date(Date.now())).getFullYear()} Aleksandr Baranov</WebsiteRights>
        <SocialIcons>
          <SocialIconLink
            href="https://github.com/AlexanderBaikal"
            target="blank"
            aria-label="Github"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.instagram.com/aleks_baikalov/"
            target="blank"
            aria-label="Intagram"
          >
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com/in/aleksandr-baikalov/"
            target="blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </FooterContainer>
  )
}

export default Footer

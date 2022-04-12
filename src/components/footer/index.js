import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaWrap>
        <SocialLogo to="/">
          <SocialIcon />
          Explore
        </SocialLogo>
        <WebsiteRights>Explore</WebsiteRights>
        <SocialIcons>
          <SocialIconLink href="/" traget="_" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" traget="_" aria-label="Intagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="/" traget="_" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" traget="_" aria-label="Youtube">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="/" traget="_" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </FooterContainer>
  )
}

export default Footer

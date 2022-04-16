import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegram,
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
        <WebsiteRights>© 2022 Aleksandr Baranov</WebsiteRights>
        <SocialIcons>
          <SocialIconLink
            href="https://github.com/AlexanderBaikal"
            target="blank"
            aria-label="Github"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.instagram.com/alex_baikalovvv/"
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

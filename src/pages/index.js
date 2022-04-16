import * as React from "react"
import AboutSection from "../components/aboutSection"
import CompaniesSection from "../components/companies"
import HeroSection from "../components/heroSection"
import Image from "../components/image"
import Layout from "../components/layout"
import PreviewSection from "../components/preview"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <CompaniesSection top />
    <PreviewSection />
    <CompaniesSection />
    <AboutSection />
    {/* <Image /> */}
  </Layout>
)

export default IndexPage

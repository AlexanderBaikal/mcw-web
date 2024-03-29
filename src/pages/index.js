import * as React from "react"
import AboutSection from "../components/aboutSection"
import CompaniesSection from "../components/companies"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"
import PreviewSection from "../components/preview"
import Seo from "../components/seo"
import Technologies from "../components/technologies"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <CompaniesSection top />
    <PreviewSection />
    <Technologies />
    {/* <CompaniesSection /> */}
    {/* <AboutSection /> */}
    {/* <Image /> */}
  </Layout>
)

export default IndexPage

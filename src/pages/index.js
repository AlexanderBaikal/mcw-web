import * as React from "react"
import CompaniesSection from "../components/companies"
import HeroSection from "../components/heroSection"
import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <CompaniesSection />
    <Image />
  </Layout>
)

export default IndexPage

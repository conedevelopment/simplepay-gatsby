import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

import SEO from "../components/seo"
import Hero from '../components/hero'
import About from '../components/about'
import AboutSimplePay from '../components/about-simplepay'
import OpenSource from '../components/open-source'
import Faq from '../components/faq'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Kezdőlap" description="With all of your communication and tools in one place, remote teams will stay productive no matter where you’re working from." />
      <Hero />
      <About />
      <AboutSimplePay />
      <OpenSource />
      <Faq />
    </Layout>
  )
}

export default IndexPage
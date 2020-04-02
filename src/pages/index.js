import React from "react"
import Layout from '../components/layout'

import SEO from "../components/seo"
import Hero from '../components/hero'
import About from '../components/about'
import AboutSimplePay from '../components/about-simplepay'
import OpenSource from '../components/open-source'
import Faq from '../components/faq'
import Using from '../components/using'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Kezdőlap" description="Integráld a SimplePay fizetési megoldást áruházba bővítményünk segítségével. Értékesíts jobban, kényelmesebben." />
      <Hero />
      <About />
      <AboutSimplePay />
      <OpenSource />
      <Faq />
      <Using />
    </Layout>
  )
}

export default IndexPage
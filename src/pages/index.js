import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

import SEO from "../components/seo"
import Hero from '../components/hero'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Kezdőlap" description="With all of your communication and tools in one place, remote teams will stay productive no matter where you’re working from." />
      <Hero />
      <h1>Hello.</h1>
      <p><Link to="/contact">Contact me.</Link></p>
      
      <section id="section-1">section 1</section>
      <section id="section-2">section 2</section>
      <section id="section-3">section 3</section>
    </Layout>
  )
}

export default IndexPage
import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <p><Link to="/contact">Contact me.</Link></p>
      
      <section id="section-1">section 1</section>
      <section id="section-2">section 2</section>
      <section id="section-3">section 3</section>
    </Layout>
  )
}

export default IndexPage
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import postStyles from "./post.module.scss"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
      }
      html
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title} description={props.data.markdownRemark.frontmatter.description} />

      <div className={postStyles.wrapper}>
        <div className={postStyles.heading}>
          <h1 className={postStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
          <p className={postStyles.meta}>{props.data.markdownRemark.frontmatter.date}</p>
        </div>
        <div className={postStyles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export default Blog
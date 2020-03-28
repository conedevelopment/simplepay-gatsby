import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import usingStyles from "./using.module.scss"

const Using = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <section id="igy-hasznald-helper" className={usingStyles.wrapper}>
    <span id="igy-hasznald" className={usingStyles.anchorHelper} aria-hidden="true"></span>
      <div className={usingStyles.inner}>
        <div className={usingStyles.block}>
          <h2 className={usingStyles.blockTitle}>Akik már használják</h2>
          <ul className={usingStyles.blockList}>
              <li><a href="https://bumm.co/">bumm! - Küldj többet egy kártyánál!</a></li>
              <li><a href="https://themamakin.com/">the Mama Kin Jewelery</a></li>
          </ul>
        </div>
        <div className={usingStyles.block}>
          <h2 className={usingStyles.blockTitle}>Így használd</h2>
          
          <ul className={usingStyles.blockListSecondary}>
            {data.allMarkdownRemark.edges.map((edge) => {
              return (
                <li>
                  <Link to={`${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Using
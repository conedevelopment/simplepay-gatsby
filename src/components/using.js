import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import usingStyles from "./using.module.scss"

const Using = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}) {
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
            <li><a href="https://bumm.co/" rel="nofollow">bumm! - Küldj többet egy kártyánál!</a></li>
            <li><a href="https://themamakin.com/" rel="nofollow">the Mama Kin Jewelery</a></li>
            <li><a href="https://www.bvfheating.hu/" rel="nofollow">BVF Heating Solutions - Elektromos padlófűtés</a></li>
            <li><a href="https://www.noirot.hu/" rel="nofollow">Noirot fűtőpanel</a></li>
            <li><a href="https://www.caleo.hu/" rel="nofollow">Caleo fűtőfilm</a></li>
          </ul>
          <p className={usingStyles.info}>A fenti listát szeretnénk bővíteni. Amennyiben használod a bővítményünket, úgy megköszönjük, ha elküldöd nekünk az oldal URL-jét e-mailben a következő címre: <a href="mailto:hello@conedevelopment.com">hello@conedevelopment.com</a>.</p>
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
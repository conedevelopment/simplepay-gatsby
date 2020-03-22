import React from "react"
import { Link } from "gatsby"

import Logo from "../assets/svgs/logo-monochrome.svg"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.inner}>
        <Link className={footerStyles.logo} to="/" title="Cone Development">
          <Logo />
        </Link>
        <div className={footerStyles.col}>
          <ul className={footerStyles.navigation}>
            <li>
              <a href="https://conedevelopment.com/hu/szolgaltatasaink/alkalmazas-fejlesztes/">Webalkalmazás fejlesztés</a>
            </li>
            <li>
              <a href="https://conedevelopment.com/hu/szolgaltatasaink/weboldal-fejlesztes/">Weboldal fejlesztés</a>
            </li>
            <li>
              <a href="https://conedevelopment.com/hu/rolunk/">Rólunk</a>
            </li>
          </ul>
          <p className={footerStyles.copyright}>2020 © Cone Development</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

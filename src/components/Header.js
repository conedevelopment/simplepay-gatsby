import React from "react"
import { Link } from "gatsby"
import Scrollspy from 'react-scrollspy'

import Logo from "../assets/svgs/logo.svg"
import buttonStyles from "./button.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.inner}>
        <div className={headerStyles.col}>
          <Link className={headerStyles.logo} to="/" title="Cone Development">
            <Logo />
          </Link>
          <nav className={headerStyles.navigation}>
            <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4'] } currentClassName={headerStyles.isActive}>
              <li><a href="#section-1">A bővítményről</a></li>
              <li><a href="#section-2">A SimplePay-ről</a></li>
              <li><a href="#section-3">GYIK</a></li>
              <li><a href="#section-4">Így használd</a></li>
            </Scrollspy>
          </nav>
        </div>
        <div className={headerStyles.col}>
          <a
            className={buttonStyles.primary}
            href="https://github.com/thepinecode/simplepay-gateway/issues"
            style={{
              marginRight: '1rem'
            }}
          >
            GitHub támogatás
          </a>
          <a
            className={buttonStyles.primary}
            href="https://github.com/thepinecode/simplepay-gateway/archive/master.zip"
          >
            Letöltés
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

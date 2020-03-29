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
            <Scrollspy items={ ['a-bovitmenyrol-helper', 'a-simplepayrol-helper', 'gyik-helper', 'igy-hasznald-helper'] } currentClassName={headerStyles.isActive} offset={-70}>
              <li><a href="#a-bovitmenyrol">A bővítményről</a></li>
              <li><a href="#a-simplepayrol">A SimplePay-ről</a></li>
              <li><a href="#gyik">GYIK</a></li>
              <li><a href="#igy-hasznald">Így használd</a></li>
            </Scrollspy>
          </nav>
        </div>
        <div className={headerStyles.col}>
          <a
            className={buttonStyles.primary}
            href="https://github.com/thepinecode/simplepay-gateway/"
            style={{
              marginRight: '1rem'
            }}
          >
            GitHub
          </a>
          <a
            className={buttonStyles.primary}
            href="bit.ly/simplepay-woocommerce"
          >
            Letöltés
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
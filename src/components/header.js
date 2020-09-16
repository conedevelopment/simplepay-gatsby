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
        </div>
        <div className={headerStyles.col}>
          <nav className={headerStyles.navigation}>
            <Scrollspy items={ ['a-bovitmenyrol-helper', 'a-simplepayrol-helper', 'gyik-helper', 'igy-hasznald-helper'] } currentClassName={headerStyles.isActive} offset={-70}>
              <li><Link to="/#a-bovitmenyrol">A bővítményről</Link></li>
              <li><Link to="/#a-simplepayrol">A SimplePay-ről</Link></li>
              <li><Link to="/#gyik">GYIK</Link></li>
              <li><Link to="/#igy-hasznald">Így használd</Link></li>
            </Scrollspy>
          </nav>
          <a
            className={buttonStyles.primary}
            href="https://github.com/conedevelopment/simplepay-gateway"
            style={{
              marginRight: '1rem'
            }}
          >
            GitHub
          </a>
          <a
            className={buttonStyles.primary}
            href="https://bit.ly/simplepay-woocommerce"
          >
            Letöltés
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
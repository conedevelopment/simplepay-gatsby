import React from "react"
import heroStyles from "./hero.module.scss"

const Hero = () => {

  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.inner}>
        <div>
          <span className={heroStyles.subtitle}>Ingyenes és megbízható</span>
          <h1 className={heroStyles.title}>WooCommerce SimplePay bővítmény</h1>
          <p className={heroStyles.description}>Integráld a SimplePay fizetési megoldást áruházba bővítményünk segítségével. Értékesíts jobban, kényelmesebben.</p>
          <img className={heroStyles.simplepayLogo} src={'/simplepay-logo.png'} alt="SimplePay" />
        </div>
        <img className={heroStyles.image} src={'/hero.png'} alt="Paying with debit card" />
      </div>
    </section>
  )
}

export default Hero

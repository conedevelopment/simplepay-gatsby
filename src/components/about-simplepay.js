import React from "react"
import aboutStyles from "./about-simplepay.module.scss"

const AboutSimplePay = () => {
  return (
    <section id="a-simplepayrol-helper" className={aboutStyles.simplepay}>
    <span id="a-simplepayrol" className={aboutStyles.anchorHelper} aria-hidden="true"></span>
      <div className={aboutStyles.inner}>
        <div>
          <h2 className={aboutStyles.title}>Mi az a SimplePay?</h2>
          <p className={aboutStyles.description}>A <a href="https://simplepay.hu/">SimplePay</a> egy online bankkártyás fizetési rendszer, amivel könnyen kezelhetjük a kártyás fizetéseinket WooCommerce-en belül is. A fizetés és a kritikus adatok megoldása már a SimplePay oldalán történik, ami nagyban fokozza a biztnoságot.</p>
          <p className={aboutStyles.description}>A megoldás az OTP fejlesztése, ami hazánk egyik legnagyobb bankja, így nyugodtan bízhatjuk rá üzletünk online pénzforgalmának kezelését.</p>
        </div>
        <img className={aboutStyles.image} src={'/about-simplepay.png'} alt="Fizetés bankkártyával mobilon keresztül" />
      </div>
    </section>
  )
}

export default AboutSimplePay

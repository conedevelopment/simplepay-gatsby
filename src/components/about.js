import React from "react"
import aboutStyles from "./about.module.scss"


import AboutIcon01 from "../assets/svgs/about-icon-01.svg"
import AboutIcon02 from "../assets/svgs/about-icon-02.svg"
import AboutIcon03 from "../assets/svgs/about-icon-03.svg"

const About = () => {
  return (
    <section id="a-bovitmenyrol-helper" className={aboutStyles.information}>
      <span id="a-bovitmenyrol" className={aboutStyles.anchorHelper} aria-hidden="true"></span>
      <div className={aboutStyles.heading}>
        <h2 className={aboutStyles.headingTitle}>A bővítményről</h2>
        <p className={aboutStyles.headingSubtitle}>Ezért jó választás a mi SimplePay bővítményünket választanod</p>
      </div>
      <div className={aboutStyles.inner}>
        <div className={aboutStyles.block}>
          <AboutIcon01 />
          <h3 className={aboutStyles.title}>Megbízható, biztonságos</h3>
          <p className={aboutStyles.description}>Egyszerűen telepíthető, könnyen konfigurálható. Ha bankkártyás fizetést szeretnél, akkor az egyik legjobb választás magyar területen.</p>
        </div>
        <div className={aboutStyles.block}>
          <AboutIcon02 />
          <h3 className={aboutStyles.title}>Valóban ingyen van</h3>
          <p className={aboutStyles.description}>Ezért a bővítményért mi nem kérünk pénzt. Open source módon fejlesztjük (MIT licensz alatt), bárki szabadon használhatja.</p>
        </div>
        <div className={aboutStyles.block}>
          <AboutIcon03 />
          <h3 className={aboutStyles.title}>Tudja, amit kell</h3>
          <p className={aboutStyles.description}>Biztonságos, többször tesztelt megoldás, amit jelenleg is aktívan fut több helyen is.</p>
        </div>
      </div>
    </section>
  )
}

export default About

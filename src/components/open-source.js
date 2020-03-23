import React from "react"
import openStyles from "./open-source.module.scss"

const OpenSource = () => {
  return (
    <section className={openStyles.openSource}>
      <div className={openStyles.inner}>
        <h2 className={openStyles.title}>Kedveljük az open source-ot</h2>
        <p className={openStyles.description}>Sok mindent kapunk lényegében ingyen (például a WordPress-t), ez a kód és a web kultújára. Ezzel a bővíménnyel mi közvetlenül nem akarunk pénzt keresni, ezért is tudod ingyen beszerezni.</p>
      </div>
    </section>
  )
}

export default OpenSource

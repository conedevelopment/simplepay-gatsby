import React from "react"
import openStyles from "./open-source.module.scss"

const OpenSource = () => {
  return (
    <section className={openStyles.openSource}>
      <div className={openStyles.inner}>
        <h2 className={openStyles.title}>Szeretjük az open source-ot</h2>
        <p className={openStyles.description}>At npm, Inc., we're proud to dedicate teams of full-time employees to operating the npm Registry, enhancing the CLI, improving JavaScript security, and other projects that support and nurture a vibrant open source community.</p>
      </div>
    </section>
  )
}

export default OpenSource

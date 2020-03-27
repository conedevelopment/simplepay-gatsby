import React from "react"
import faqStyles from "./faq.module.scss"

const Faq = () => {
  return (
    <section id="gyik-helper" className={faqStyles.wrapper}>
      <span id="gyik" className={faqStyles.anchorHelper} aria-hidden="true"></span>
      <div className={faqStyles.inner}>
        <div className={faqStyles.questions}>
          <h2 className={faqStyles.title}>Kérdésed van?</h2>
          <div className={faqStyles.block}>
            <h3 className={faqStyles.blockTitle}>Valóban ingyenes a bővímtény?</h3>
            <p className={faqStyles.blockDescription}>Igen, ezt a bővítményt költségek nélkül töltheted le és használhatod.</p>
          </div>
          <div className={faqStyles.block}>
            <h3 className={faqStyles.blockTitle}>Jár hozzá frissítés?</h3>
            <p className={faqStyles.blockDescription}>Igen, rendszeresen frissítjük és karbantartjuk. Ez a saját fejlesztéseink alatt is fut, így biztosan folyamatosan naprakész lesz.</p>
          </div>
          <div className={faqStyles.block}>
            <h3 className={faqStyles.blockTitle}>Kérhetek tőletek segítséget?</h3>
            <p className={faqStyles.blockDescription}>Személyesen segítséget nem áll módunkban ingyen biztosítani. Ettől függetlenül a fejlesztőknek a <a href="https://github.com/thepinecode/simplepay-gateway/issues">GitHub</a> nyitva áll, ha javítani szeretnének a kódon, vagy egy hibát jelenteni. Lejjebb számos leírással segítünk abban is, hogy hogyan tudod te önállóan beállítani.</p>
          </div>
          <div className={faqStyles.block}>
            <h3 className={faqStyles.blockTitle}>A bővítmény támogatja az ismétlődő fizetéseket?</h3>
            <p className={faqStyles.blockDescription}>Nem. Mi úgy látjuk, hogy a kereskedőt túl nagy felelőség terheli. A mi tapasztalatunk szerint nem minden rendszer mögött van ott egy szakértő, aki megfelelően felépíteni és karbantartani is képes egy olyan rendszert amely időzített feladatokat lát el. Ezért jobbnak láttuk, ha ezt egyenlőre kihagyjuk.</p>
          </div>
          <div className={faqStyles.block}>
            <h3 className={faqStyles.blockTitle}>Milyen valutákat támogat a bővítmény?</h3>
            <p className={faqStyles.blockDescription}>Jelenleg USD, EUR és HUF. Amennyiben az OTP újabb pénznemeket vezet be, mi is bővítjük a támogatást.</p>
          </div>
          <div className={faqStyles.block}>
            <h3 className={faqStyles.blockTitle}>Az OTP ellenőrízte a bővítményt?</h3>
            <p className={faqStyles.blockDescription}>Igen. Az áruházban való élesítés előtt az OTP munkatársai lefuttatnak egy teszt vásárlást amely során a bővítmény és az adott áruház funkcionalitása is tesztelés alá kerül.</p>
          </div>
        </div>
        <img className={faqStyles.image} src={'/faq.png'} alt="Kérdéseken gondolkodó ember" />
      </div>
    </section>
  )
}

export default Faq
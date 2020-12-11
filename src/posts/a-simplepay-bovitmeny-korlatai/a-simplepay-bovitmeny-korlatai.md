---
date: "2020. 05. 31."
title: "A SimplePay bővítmény korlátai"
description: "Mint általában, úgy ennek a bővítménynek az esetében is kell számítanunk korlátozásra."
order: 5
---

__Mint általában, úgy ennek a bővítménynek az esetében is kell számítanunk korlátozásra. Ezek a megkötések többnyire a szolgáltató oldalán keletkeznek, kérünk vedd őket figyelembe.__

### Támogatott devizák

Jelenleg (a SimplePay által) támogatott devizák: __HUF__, __EUR__ és __USD__.

### Adók

A WooCommerce (WordPress) máshogy kezeli az adókat mint a SimplePay. A lehetséges áreltérések megelőzése érdekében, a bruttó árak kerülnek átadása, de a feltüntetett adó mértéke 0.

### Kedvezmények

A WooCommerce (WordPress) máshogy kezeli a kedvezményeket mint a SimplePay. A lehetséges áreltérések megelőzése érdekében, a kedvezményes árak kerülnek átadása, de a feltüntetett kedvezmény mértéke 0.

### Mennyiségek

A SimplePay csak egész számokat kezel a mennyiség adatoknál, így a WooCommerce (WordPress) a felfelé kerekített mennyiségi értékeket adja át a SimplePay API-nak. Például: `0,4 m` esetén `1 m`, `2,7 kg` esetén `3 kg` kerül átadásra. **Ez az árat nem befolyásolja**. Lásd: [#26](https://github.com/conedevelopment/simplepay-gateway/issues/26)

### Ismétlődő fizetések

Jelenleg nem támogatjuk az ismétlődő fizetéseket. Miért? Mert a tranzakciók indítása, ütemezése és kezelése az áruházat terhelik. Ennek üzembiztos megvalósítása sok áruház esetében nem garantált.

---
date: "2020. 05. 31."
title: "Mi az a Sandbox? Miért szükséges, hasznos?"
description: "A Sandbox – magyarul homokozó – egy olyan felület, amely kinézetre és funkcionalitásra megegyezik az éles felülettel, de csak tesztelésre és fejlesztésre alkalmas, valódi tranzakciókat nem indít a rendszer, tehát terhelés sem történik."
order: 4
---

__A Sandbox – magyarul homokozó – egy olyan felület, amely kinézetre és funkcionalitásra megegyezik az éles felülettel, de csak tesztelésre és fejlesztésre alkalmas, valódi tranzakciókat nem indít a rendszer, tehát terhelés (fizetés) sem történik.__

A hozzáféréseket a szerződéskötés részeként kapjuk meg, így létre tudjuk hozni a teszt kapcsolatot a SimplePay és az áruházunk között.

## Hogyan kell beállítani? 

Miután megkaptuk a belépési adatokat, össze kell kapcsolni az áruházba telepített bővítményt a sandbox felülettel. Ezzel kapcsolatban korábban már írtunk, keresd fel a [SimplePay beállításairól](https://simplepay.conedevelopment.com/a-simplepay-bovitmeny-beallitasi-lehetosegei) szóló bejegyzést.

## Kell mindenképp?

Igen, mindenképp szükséges. Fontos, hogy az éles fiókhoz nem kapunk hozzáférést addig, amíg az OTP le nem teszteli az integrációt a teszt felületen és nem hagyják jóvá azt.

Tehát a valós tranzakciókkal operáló integráció előszobája egy hibátlanul működő teszt összekötés, amelyet a sandbox segítségével tudunk megoldani.

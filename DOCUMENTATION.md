## **1. Az alkalmazás célja**

Ez a webes alkalmazás egy vállalatirányítási rendszernek a lehetőségeit mutatja be a felhasználó számára. Egy vállalatnak az irányításához szükséges erőforrások, termékek, raktárak, üzleti partnerek, megrendelések, számlák, vevők adatainak nyilvántartását tárja elénk egy könnyen kezelhető adminisztrációs felülettel. 

---

## **2. Az alkalmazás telepítése**

- A célgépre le kell klónozni az adott GitHub repository tartalmát.
- Gyökérkönyvtárnak a klónozott könyvtárat kell beállítani `code . -r` segítségével.
- Telepíteni kell az alkalmazás függőségeit az `npm i` paranccsal.
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.

---

## **3. Az alkalmazás konfigurálása**

A _base.service.ts_ állományban be kell állítani az API végpont elérési útvonalát:  

[comment]: <> (Kiegészítés később - pl. http://localhost:3000)

---

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása.

-  Docker Desktop alkalmazás indítása saját gépen.
-  A Vizsgaremek/backend mappába belépve a terminálban: `npm run dev` parancsot kell kiadni.  
-  A Vizsgaremek/frontend mappába belépve a terminálban:`npm start` paranccsal indítható a frontend.

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):  

E-mail | Jelszó
------------ | -------------
09dporkolabm@gmail.com | test1234

---

## **5. A végpontok dokumentációja**

[Swagger](https://)

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/Desszi/Vizsgaremek/blob/main/README.md)

- [A kiegészítő anyagok itt érhetők el.]()


## **1. Az alkalmazás célja**

Ez a webes alkalmazás egy vállalatirányítási rendszernek a lehetőségeit mutatja be a felhasználó számára. Egy vállalatnak az irányításához szükséges erőforrások, termékek, raktárak, üzleti partnerek, megrendelések, számlák, vevők adatainak nyilvántartását tárja elénk egy könnyen kezelhető adminisztrációs felülettel. 

---

## **2. Az alkalmazás telepítése**
- A célgépre le kell klónozni az adott GitHub repository tartalmát forkolás után.
- Gyökérkönyvtárnak a klónozott könyvtárat kell beállítani `code . -r` segítségével.
- Telepíteni kell az alkalmazás függőségeit az `npm i` paranccsal.
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.
- A terminálban ki kell adni az ng build parancsot.
- A terminálon be kell lépni a /backend mappába és futtatni az `npm run build` parancsot.
---

## **3. Az alkalmazás konfigurálása**


A Vizsgaremek/frontend/environments mappában be kell állítani az API végpont elérési útvonalát: 

  - _environment.ts_ állomány: http://127.0.0.1:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/ 

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

[Swagger](https://localhost:3000/api-docs)

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/Desszi/Vizsgaremek/blob/main/README.md)


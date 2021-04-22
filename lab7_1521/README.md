Inainte de a incepe: <br />
1. Sa se instaleze node.js <br />
2. npm init -> creaza un proiect <br />
    -> adauga package.json, unde sunt detalii despre proiect <br />
3. npm install --save express body-parser <br />
4. npm install -> adauga package-lock.json (cu detalii despre librariile instalate) + node_modules <br />
                (unde sunt toate librariile instalate) <br />
    OBS: node_modules nu este incarcat cu fisierul: cititi punctul 10 de mai jos pentru detalii <br />
    Pentru a rula proiectul: din terminal in folder-ul unde se afla fisierul index.js -> node index.js <br />
    (sau orice denumire dati fisierului de javascript) <br />



ALTE DETALII PREZENTATE LA LABORATOR: <br />
1. Node.js nu este un framework sau un limbaj de programare; este un runtime build, capabil sa <br />
    execute cod de javascript <br />
2. Express este framework-ul care permite crearea de servere <br />
4. body-parser -> folosit pentru a putea parsa body-ul request-urilor <br />
5. require este echivalent cu include-ul din C/C++ (puteti adauga fisiere existente sau, <br />
        cum e in cazul exemplului de mai jos, adauga librarii existente din node_modules) <br />
6. use specifica ce librarii ar trebui sa foloseasca aplicatia noastra si este interpretat la rulare <br />
7. Pentru a intelege mai bine notiunea de Frontend (FE) si Backend (BE), ganditi-va la pagina de <br />
    sign up de la facebook: <br />
    -> FE - pagina pe care o vedeti cu elemente de html, css si javascript <br />
    -> BE - dupa apasarea butonului de Sign up se face un REQUEST din FE catre server unde <br />
            user-ul este salvat in baza de date a facebook-ului <br />
8. Tipuri de request-uri: <br />
    -> GET - aducerea de informatii din baza de date in FE (ex. Login, cand intrati pe newsfeed <br />
            si toate postarile va sunt aduse in functie de ce prieteni aveti sau ce pagini <br />
            ati apreciat, etc) <br />
    -> POST - insereaza informatii in baza de date (ex. register/sign up, cand faceti o postare <br />
                noua, cand adaugati un nou prieten, etc) <br />
    -> PUT - updateaza ceva deja existent in baza de date (ex. va schimbati poza de profil, numele, etc) <br />
    -> DELETE - sterge ceva din baza de date (ex. va stergeti contul de facebook) <br />
9. node_modules - nu se incarca pe git, fiind in general un fisier foarte mare <br />
                 - daca este sters/nu exista -> comanda npm install se uita in package.json <br />
                    si instaleaza inapoi tot ce gaseste acolo <br />
10. req -> request = ce primesc pe request; req.params -> ce e pe url; req.body -> ce trimit pe data cu client <br />
    res -> response = ce trimit inapoi; send() <br />
11. app.listen specifica express-ului pe ce port sa asculte <br />
    IMPORTANT -> port-ul trebuie sa fie liber <br />
    GRESEALA FRECVENTA: sa pornesti aceasi aplicatie de mai multe ori -> o sa dea eroare pentru ca <br />
                        portul este deja ocupat. <br />
12. app.use('/', controller) - Ii spunem ce controllere o sa foloseasca atunci cand primeste un request de la client. <br />
13. module.exports - ce exportam si putem folosi in alt fisier (pot fi obiecte (vezi in FirstService.js) sau functii); <br />
                   - in controllere exportam router <br />
14. async & await - JS este un limbaj asincron (inseamnca nu asteapta ca o line sa fie executata ca sa treaca la urmatoarea) <br />
                  - punem await in fata cand o functie intoarce un promise <br />
                  - async in fata definirii functiei cand vrem sa folosim await sau sa spunem ca functia respectiva <br />
                    intoarce un promise <br />
<br />
POSTGRESQL (https://www.tutorialspoint.com/postgresql/index.htm) <br />
<br />
1. Il instalam dupa cum este specificat in functie de sistemul nostru de operare (https://www.tutorialspoint.com/postgresql/postgresql_environment.htm) <br />
2. In linia de comanda dupa: <br />
    a. psql postgres - porneste postgresql-ul pe database-ul postgres <br />
    b. CREATE DATABASE tw; - creeaza alt databse <br />
    c. \c tw; - se conecteaza la database-ul specificat <br />
    d. CREATE SCHEMA proiect; - creeaza o schema noua <br />
    e. create table proiect.phots( <br />
        ID INT PRIMARY KEY     NOT NULL, <br />
        NAME           TEXT    NOT NULL); - tabel nou <br />
    f. INSERT INTO proiect.photos VALUES (1, '1.png'); <br />
3. In model ne vom conecta la baza de date folosind host-ul (localhost), username-ul & parola (cele ale calculatorului vostru) si database-ul (tw) (https://node-postgres.com/features/connecting)<br />
<br />
<br />
Cum structuram codul? <br />

1. CONTROLLER - unde avem definite request-urile <br />
2. SERVICE - unde este logica de business, serviciul este apelat din controller <br />
3. MODELS - unde ne conectam la baza de date, facem request-uri la baza de date, apelat din service <br />

<br />

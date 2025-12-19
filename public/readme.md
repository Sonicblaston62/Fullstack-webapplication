
# Oppsett av prosjektet

Dette prosjektet består av en PostgreSQL‑database som kjøres i Docker, samt en Node.js‑backend som henter data fra databasen. Her er instruksjonene for å kjøre prosjektet lokalt.

## 1. Klon prosjektet

Åpne terminal og skriv:

```
git clone https://github.com/Sonicblaston62/Fullstack-webapplication.git
cd Fullstack-webapplication
```

## 2. Start databasen med Docker Compose

Prosjektet inneholder en ferdig `docker-compose.yml` som setter opp PostgreSQL.

Start databasen:

```
docker compose up -d
```

Sjekk at containeren kjører:

```
docker ps
```

Containeren skal hete `gamestore-db`.

## 3. Koble til databasen

Bruk VS Code Database Client utvidelsen som kan bli åpnet fra sidemenyen til venstre

Bruk disse innstillingene:

Velg postgres 
- Host: localhost  
- Port: 5432  
- Bruker: postgres  
- Passord: mysecretpassword  
- Database: gamestore  

## 4. Kjør SQL‑filene

Kjør `schema.sql` for å opprette tabellen:

1. Åpne `schema.sql` i database-utvidelsen
2. Kjør hele filen  

Kjør deretter `seed.sql` for å legge inn data:

1. Åpne `seed.sql`  
2. Kjør hele filen  

Test at dataene er lagt inn:

```
SELECT * FROM games;
```

## 5. Installer backend‑avhengigheter

I prosjektmappen:

```
npm install
```

## 6. Start backend‑serveren

Sørg for at databasen kjører:

```
docker compose up -d
```

Start serveren:

```
node server.js
```

Backend kjører nå lokalt. Test i nettleser:

```
http://localhost:3000/games
```

Dette viser JSON med alle spillene i databasen.

## 7. Nyttige Docker‑kommandoer

Stoppe databasen:

```
docker compose down
```

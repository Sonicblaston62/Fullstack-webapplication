nettside

Jeg startet prosjektet med å finne noen ideer til hva jeg skulle lage, siden jeg ville velge den alternative oppgaven hvor jeg selv kunne bestemme innholdet. Jeg endte opp med ideen om noe som lignet på et Steam‑bibliotek. Tanken var å lage en hovedside med alle spillene dine og coverart for hvert spill. Du skal kunne legge til dine egne spill, men et par standardspill ligger inne fra før. Hvert spill skal også ha sin egen side hvor du kan se beskrivelse av spillet, utgivelsesdato, utvikler osv.

Jeg begynte veldig enkelt med en HTML‑fil som jeg koblet videre til JavaScript. Jeg ønsket at mesteparten av nettsiden skulle genereres gjennom JavaScript for å lettere kunne koble den opp mot databasen senere. Strukturen var litt vanskelig å finne ut av, og jeg måtte få litt hjelp av KI for å komme i gang. Dessverre gjør KI ofte oppgaven mer komplisert enn nødvendig. Derfor måtte jeg fjerne en god del av det som ble foreslått og heller gjøre det selv.

KI sin originale idé var å skrive ut hver linje med HTML‑kode direkte i JavaScript og så legge inn de forskjellige dataene fra listen. Dette ble veldig rotete og vanskelig å utvide. I stedet endte jeg opp med å lage en ID for hver bit med data fra listen, slik at informasjonen kunne hentes derfra. Dette gjorde koden mye ryddigere.

Etter at jeg fikk opp grid‑visningen med alle spillcoverne, ville jeg legge til en måte å vise navnet på spillet når man holder musepekeren over det. Dette var ganske forvirrende, så jeg fikk hjelp av KI igjen. KI ga meg rundt 20 linjer med CSS og et par linjer JavaScript. Igjen var løsningen mye mer komplisert enn nødvendig — 18 av de 20 CSS‑linjene kunne fjernes, og det samme gjaldt en av JavaScript‑linjene.

Etter dette fikk jeg lagt inn en footer og en header med en home‑knapp for å komme tilbake til biblioteket. Jeg la også inn en knapp på slutten av grid‑en for å legge til nye spill. Foreløpig gjør den ingenting.

Database

Da jeg var ferdig med den statiske delen av nettsiden, begynte jeg på databasen. Jeg startet først databasen med en vanlig docker run‑kommando. Det fungerte greit, men kommandoen ble ganske lang, og det var upraktisk å skrive den inn på nytt hver gang jeg skulle teste noe eller gjøre endringer. Det gjorde det tydelig at jeg trengte en mer ryddig og gjentakbar løsning. Jeg fikk hjelp av KI til å lage et ER diargram av hvordan databasen ser ut akkuratt nå:
+--------------------------------------------------+
|                     games                        |
+--------------------------------------------------+
| id               (PK, serial)                    |
| developer        (varchar)                       |
| publisher        (varchar)                       |
| name             (varchar, not null)             |
| cover            (varchar)                       |
| genre            (varchar)                       |
| release_date     (date)                          |
| description      (text)                          |
+--------------------------------------------------+

For å gjøre oppsettet enklere lagde jeg en docker-compose.yml‑fil i stedet. Da kunne je samle alt og gjøre det mye ryddigere og starte databasen med én enkel kommando. Dette gjorde det mye lettere både for meg og hvis andre skal kjøre prosjektet. Etter at jeg fikk compose‑filen til å fungere, kunne jeg starte databasen med docker compose up -d, og alt ble satt opp automatisk.

Deretter laget jeg to SQL‑filer: schema.sql og seed.sql. schema.sql inneholder selve strukturen til databasen, altså tabellen med alle kolonnene. seed.sql inneholder alle INSERT‑setningene som legger inn spillene jeg bruker i prosjektet. Jeg måtte teste flere ganger før alt fungerte, fordi jeg glemte semikolon et par steder og hadde noen små skrivefeil i kolonnenavnene. Etter at jeg fikk rettet opp dette, kunne jeg koble meg til databasen gjennom VS Code og kjøre begge filene uten problemer.

Til slutt testet jeg databasen ved å kjøre en enkel SELECT‑setning for å se om alle spillene faktisk lå inne. Da jeg så at alt dukket opp som det skulle, var det deilig at alt endelig funka. Nå er alt klart til å koble nettisden og databasen sammen etter jul.
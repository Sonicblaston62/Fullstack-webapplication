install docker desktop
install node.js
open docker desktop to start it
open the command line and run
docker run --name gamestore-db `
-e POSTGRES_USER=postgres `
-e POSTGRES_PASSWORD=mysecretpassword `
-e POSTGRES_DB=gamestore `
-p 5432:5432 `
-d postgres

import { sql } from './db.js'

sql`
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`.then(() => {
    console.log("tabela criada");
})
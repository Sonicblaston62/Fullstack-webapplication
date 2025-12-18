const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gamestore',
  password: 'mysecretpassword',
  port: 5432,
});

async function test() {
  const res = await pool.query('SELECT name FROM games ORDER BY id');
  console.log(res.rows);
}

test().catch(console.error);

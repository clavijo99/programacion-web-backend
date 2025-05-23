const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: () => {
    pool.connect()
      .then(() => console.log('PostgreSQL connected'))
      .catch(err => console.error('Connection error', err.stack));
  }
};

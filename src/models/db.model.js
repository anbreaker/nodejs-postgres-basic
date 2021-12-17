const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: process.env.DB_PASS,
  database: 'postgresapi',
  port: '5432',
});

module.exports = {
  pool,
};

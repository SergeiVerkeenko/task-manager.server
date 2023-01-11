require('dotenv').config();

const { Pool } = require('pg');

const { PORT_DB, PASSWORD_DB, NAME_DB, HOST_DB, USER_DB } = process.env

const pool = new Pool({
  user: USER_DB,
  host: HOST_DB,
  database: NAME_DB,
  password: PASSWORD_DB,
  port: PORT_DB,
});

module.exports = {
  pool,
};

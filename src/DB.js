const {
    Pool
} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'task_manager',
    password: 'cthutq123',
    port: '5432'
});

module.exports = {
    pool
};
const { pool } = require('../DB')

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'INSERT INTO users(name,surname, email, pwd) VALUES ($1, $2, $3, $4) '
        await client.query(sql, [name, surname, email, pwd])

        await client.query('COMMIT')

    } catch (error) {
        await client.query('ROLLBACK')
        console.log(error.message);
        return []

    }
}

async function getUsersByEmailDB(email) {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users WHERE email = $1'
    const data = (await client.query(sql, [email]))
    return data
}

async function checkUserByIdPwdDB(pwd) {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users WHERE pwd = $1'
    const data = (await client.query(sql, [pwd])).rows
    return data
}

module.exports = { createUserDB, getUsersByEmailDB, checkUserByIdPwdDB }
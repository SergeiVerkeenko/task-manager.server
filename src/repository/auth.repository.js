const { pool } = require('../DB')
const bcrypt = require('bcrypt');

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'INSERT INTO users(name,surname, email, pwd) VALUES ($1, $2, $3, $4) '
        // const b = bcrypt.hash(pwd, 10, function (err, hash) {
        //     console.log(hash);
        //     return hash
        //     // сохранение в базу данных
        // });
        // bcrypt
        //     .hashSync(pwd, 10)
        //     .then(hash => {
        //         console.log('Hash ', hash)
        //         return hash
        //     })
        //     .catch(err => console.error(err.message))
        // console.log(`privet ${bcrypt.hashSync(pwd, 10).then}`);
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
    const data = (await client.query(sql, [email])).rows
    return data
}






// async function checkUser(username, password) {
//     //... fetch user from a db etc.
//     const pword = 'asdsd';

//     const match = await bcrypt.compare(password, user.passwordHash);
//     console.log(match);

// }
// checkUser()

module.exports = { createUserDB, getUsersByEmailDB }
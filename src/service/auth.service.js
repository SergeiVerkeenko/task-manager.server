const { createUserDB, getUsersByEmailDB } = require('../repository/auth.repository')
const bcrypt = require('bcrypt');

const saltround = 10;

async function createUser(name, surname, email, pwd) {
    const foundUser = await getUsersByEmailDB(email)
    if (foundUser.length) throw new Error('est takoi')
    const hashedPwd = await bcrypt.hash(pwd, saltround)

    await createUserDB(name, surname, email, hashedPwd)

}

async function doAuthorisation(email, pwd) {
    const foundUser = await getUsersByEmailDB(email)
    if (!foundUser.length) throw new Error('net  takogo')

    const hashedPwd = foundUser[0].pwd

    if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error('error pwd')
}

module.exports = { createUser, doAuthorisation }
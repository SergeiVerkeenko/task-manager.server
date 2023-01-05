const { createUserDB, getUsersByEmailDB, checkUserByIdPwdDB } = require('../repository/auth.repository')

async function createUser(name, surname, email, pwd) {
    const foundUser = await getUsersByEmailDB(email)
    if (foundUser.length) throw new Error('est takoi')
    await createUserDB(name, surname, email, pwd)
}

async function doAuthorisation(email, pwd) {
    const foundUser = await getUsersByEmailDB(email)
    if (foundUser.length) throw new Error('est takoi')
    const user = await checkUserByIdPwdDB(pwd)
    if (!user.length) throw new Error('Пароль не совпадает');
}

module.exports = { createUser, doAuthorisation }
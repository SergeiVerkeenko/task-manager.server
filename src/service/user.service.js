const { getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB } = require('../repository/user.repository')

async function getUsers() {
    const user = await getUsersDB()
    if (!user.length) throw new Error('Not found')
    return user
}

async function getUsersById(id) {
    const user = await getUsersByIdDB(id)
    if (!user.length) throw new Error('Not found')
    return user
}

async function updateUsers(id, name, surname, pwd, email, status) {
    const user = await updateUsersDB(id, name, surname, pwd, email, status)
    if (!user.length) throw new Error('Not found')
    return user
}

async function deleteUsers(id) {
    const user = await deleteUsersDB(id);
    if (!user.length) throw new Error('not found')
    return user
}

module.exports = { getUsers, getUsersById, updateUsers, deleteUsers }
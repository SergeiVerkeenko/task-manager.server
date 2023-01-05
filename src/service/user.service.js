const ExceptionType = require('../helper/exceptions.type')
const { getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB, pachtUsersDB } = require('../repository/user.repository')

async function getUsers() {
    const user = await getUsersDB()
    if (!user.length) throw new Error(ExceptionType.GET_USER_NOT_FOUND.message)
    return user
}

async function getUsersById(id) {
    const user = await getUsersByIdDB(id)
    if (!user.length) throw new Error(ExceptionType.GET_USERS_NOT_FOUND.message)
    return user
}

async function updateUsers(id, name, surname, pwd, email, status) {
    const user = await updateUsersDB(id, name, surname, pwd, email, status)
    if (!user.length) throw new Error(ExceptionType.PUT_USER_NOT_FOUND.message)
    return user
}

async function deleteUsers(id) {
    const user = await deleteUsersDB(id);
    if (!user.length) throw new Error(ExceptionType.DELETE_USER_NOT_FOUND.message)
    return user
}

async function pachtUsers(id, dataFromClient) {
    const users = await pachtUsersDB(id, dataFromClient)
    if (!users.length) throw new Error(ExceptionType.PATCH_USER_NOT_FOUND.message)
    return users
}

module.exports = { getUsers, getUsersById, updateUsers, deleteUsers, pachtUsers }
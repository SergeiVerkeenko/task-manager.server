const ExceptionType = require("./exceptions.type");

async function isValidUserId(req, res, next) {
    const { id } = req.params
    if (!id) throw new Error(ExceptionType.USER_ID_NOT_FOUND.message)
    if (isNaN(id)) throw new Error(ExceptionType.USER_ID_NOT_VALID.message);
    next();
}

async function isValidBody(req, res, next) {
    const { name, surname, pwd, email, status } = req.body
    if (!name) throw new Error(ExceptionType.USER_NAME_NOT_FOUND.message)
    if (!surname) throw new Error(ExceptionType.USER_SURNAME_NOT_FOUND.message)
    if (!/^[0-9a-z]+\.[0-9a-z]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error(ExceptionType.USER_EMAIL_NOT_FOUND.message)
    next()
}

module.exports = { isValidUserId, isValidBody }
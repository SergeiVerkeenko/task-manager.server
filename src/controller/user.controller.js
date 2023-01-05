const express = require('express')
const { getUsers, getUsersById, updateUsers, deleteUsers, pachtUsers } = require('../service/user.service')
const { buildResponse } = require('../helper/buildResponse')
const { handleError } = require('../helper/handleError')
const { isValidUserId, isValidBody } = require('../helper/validation')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const user = await getUsers()
        buildResponse(res, 200, user)
    } catch (error) {
        handleError(res, 404, error.message)
    }
})

route.get('/:id', isValidUserId, async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUsersById(id)
        buildResponse(res, 200, user)
    } catch (error) {
        handleError(res, 404, error.message)

    }
})

route.put('/:id', isValidUserId, isValidBody, async (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, pwd, email, status } = req.body;
        const user = await updateUsers(id, name, surname, pwd, email, status)
        buildResponse(res, 200, user)
    } catch (error) {
        handleError(res, 404, error.message)
    }
})

route.delete('/:id', isValidUserId, async (req, res) => {
    try {
        const { id } = req.params
        const user = await deleteUsers(id)
        buildResponse(res, 200, user)
    } catch (error) {
        handleError(res, 404, error.message)

    }
})

route.patch('/:id', isValidUserId, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pachtUsers(id, req.body)
        buildResponse(res, 200, user)
    } catch (error) {
        handleError(res, 404, error.message)
    }
})

module.exports = route
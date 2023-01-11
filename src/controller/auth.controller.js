const express = require('express');
const { createUser, doAuthorisation } = require('../service/auth.service');
const { buildResponse } = require('../helper/buildResponse');
const { handleError } = require('../helper/handleError');
const { isValidEmail, isValidBody } = require('../helper/validation')

const route = express.Router();

route.post('/reg', isValidEmail, isValidBody, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    await createUser(name, surname, email, pwd);
    buildResponse(res, 200, 'SUCCESS');
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

route.post('/auth', isValidEmail, async (req, res) => {
  try {
    const { email, pwd } = req.body;
    await doAuthorisation(email, pwd);
    buildResponse(res, 200, 'SUCCESS');
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

module.exports = route;

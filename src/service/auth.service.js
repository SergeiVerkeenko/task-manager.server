const { createUserDB, getUsersByEmailDB } = require('../repository/auth.repository');
const ExceptionType = require('../helper/exceptions.type');
const bcrypt = require('bcrypt');

const saltround = 10;

async function createUser(name, surname, email, pwd) {
  const foundUser = await getUsersByEmailDB(email);
  if (foundUser.length) throw new Error(ExceptionType.CREATE_TASK_NOT_FOUND.message);
  const hashedPwd = await bcrypt.hash(pwd, saltround);

  await createUserDB(name, surname, email, hashedPwd);
}

async function doAuthorisation(email, pwd) {
  const foundUser = await getUsersByEmailDB(email);
  if (!foundUser.length) throw new Error(ExceptionType.AUTH_USER_WITH_EMAIL.message);

  const hashedPwd = foundUser[0].pwd;

  if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error(ExceptionType.AUTH_USER_WITH_PWD.message);
}

module.exports = { createUser, doAuthorisation };

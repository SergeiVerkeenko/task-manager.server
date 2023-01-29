import bcrypt from 'bcrypt';
import { createUserDB, getUsersByEmailDB } from '../repository/auth.repository';
import ExceptionType from '../helper/exceptions.type';

const saltround = 10;

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<void> {
  const foundUser = await getUsersByEmailDB(email);
  if (foundUser.length) throw new Error(ExceptionType.CREATE_TASK_NOT_FOUND.message);
  const hashedPwd = await bcrypt.hash(pwd, saltround);

  await createUserDB(name, surname, email, hashedPwd);
}

async function doAuthorisation(email: string, pwd: string): Promise<void> {
  const foundUser = await getUsersByEmailDB(email);
  if (!foundUser.length) throw new Error(ExceptionType.AUTH_USER_WITH_EMAIL.message);

  const hashedPwd = foundUser[0].pwd;
  console.log(hashedPwd);

  if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error(ExceptionType.AUTH_USER_WITH_PWD.message);
}

export { createUser, doAuthorisation };

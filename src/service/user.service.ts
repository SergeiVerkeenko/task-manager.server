import ExceptionType from '../helper/exceptions.type';
import { getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB, pachtUsersDB } from '../repository/user.repository';
import { iUser } from '../interfaces/interfaces';

async function getUsers(): Promise<iUser[]> {
  const user = await getUsersDB();
  if (!user.length) throw new Error(ExceptionType.GET_USER_NOT_FOUND.message);
  return user;
}

async function getUsersById(id: number): Promise<iUser[]> {
  const user = await getUsersByIdDB(id);
  if (!user.length) throw new Error(ExceptionType.GET_USERS_NOT_FOUND.message);
  return user;
}

async function updateUsers(id: number, name: string, surname: string, pwd: string, email: string, status: number): Promise<iUser[]> {
  const user = await updateUsersDB(id, name, surname, pwd, email, status);
  if (!user.length) throw new Error(ExceptionType.PUT_USER_NOT_FOUND.message);
  return user;
}

async function deleteUsers(id: number): Promise<iUser[]> {
  const user = await deleteUsersDB(id);
  if (!user.length) throw new Error(ExceptionType.DELETE_USER_NOT_FOUND.message);
  return user;
}

async function pachtUsers(id: number, dataFromClient: iUser): Promise<iUser[]> {
  const users = await pachtUsersDB(id, dataFromClient);
  if (!users.length) throw new Error(ExceptionType.PATCH_USER_NOT_FOUND.message);
  return users;
}

export { getUsers, getUsersById, updateUsers, deleteUsers, pachtUsers };

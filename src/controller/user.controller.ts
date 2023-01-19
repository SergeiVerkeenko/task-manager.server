import express, { Request, Response } from 'express';
import { getUsers, getUsersById, updateUsers, deleteUsers, pachtUsers } from '../service/user.service';
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError';
import { isValidUserId, isValidBody, isValidEmail } from '../helper/validation';

const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
  try {
    const user = await getUsers();
    buildResponse(res, 200, user);
  } catch (error) {
    handleError(res, 404, error);
  }
});

route.get('/:id', isValidUserId, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUsersById(id);
    buildResponse(res, 200, user);
  } catch (error) {
    handleError(res, 404, error);
  }
});

route.put('/:id', isValidUserId, isValidBody, isValidEmail, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, surname, pwd, email, status } = req.body;
    const user = await updateUsers(id, name, surname, pwd, email, status);
    buildResponse(res, 200, user);
  } catch (error) {
    handleError(res, 404, error);
  }
});

route.delete('/:id', isValidUserId, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await deleteUsers(id);
    buildResponse(res, 200, user);
  } catch (error) {
    handleError(res, 404, error);
  }
});

route.patch('/:id', isValidUserId, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await pachtUsers(id, req.body);
    buildResponse(res, 200, user);
  } catch (error) {
    handleError(res, 404, error);
  }
});

export default route;

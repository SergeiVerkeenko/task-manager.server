import { Response } from 'express';

function handleError(res: Response, status: number, message: any) {
  res.status(status).send(message);
}

export { handleError };

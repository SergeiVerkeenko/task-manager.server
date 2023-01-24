import { Response } from 'express';

function handleError(res: Response, status: number, message: any) {
  res.send(message);
  res.status(status);
}

export { handleError };

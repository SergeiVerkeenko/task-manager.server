import { handleError } from "../../../helper/handleError";
import { Request, Response, NextFunction } from 'express';
import ExceptionType from "../../../helper/exceptions.type";
describe('hendleError', () => {
    test('SUCCESS', () => {
        const mResponse:Response = {
            status: jest.fn(),
            send: jest.fn()
        }

        handleError(mResponse, 404, ExceptionType.TASK_NOT_FOUND.message)

        expect(mResponse.status).toHaveBeenCalled()
        expect(mResponse.send).toHaveBeenCalled()
        expect(mResponse.status).toHaveBeenCalledWith(404)
        expect(mResponse.send).toHaveBeenCalledWith(ExceptionType.TASK_NOT_FOUND.message)

    })
})
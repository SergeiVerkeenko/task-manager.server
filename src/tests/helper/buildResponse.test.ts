import { buildResponse } from "../../helper/buildResponse";
import { Request, Response, NextFunction } from 'express';

describe('test buildResponse function', () => {
    test('SUCCESS', () => {
        const mResponse:Response = {
            status: jest.fn(),
            send: jest.fn()
        }
        buildResponse(mResponse, 200, 'success')

        expect(mResponse.status).toHaveBeenCalled()
        expect(mResponse.send).toHaveBeenCalled()
        expect(mResponse.status).toHaveBeenCalledWith(200)
        expect(mResponse.send).toHaveBeenCalledWith('success')
    })
})
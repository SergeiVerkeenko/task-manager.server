import { isValidUserId, isValidBody, isValidEmail } from '../../helper/validation'
import { Request, Response, NextFunction } from 'express';
import ExceptionType from '../../helper/exceptions.type';

describe('isValidId', () => {
    test('should return success', () => {
        const mRequest: Request = { params: { id: 1 } }
        const mResponse: Response = jest.fn()
        const mNext: NextFunction = jest.fn()

        isValidUserId(mRequest, mResponse, mNext)

        expect(mNext).toHaveBeenCalled()

    })

    test('should return exception: id is not exist', () => {
        const mRequest: Request = { params: { id: 1 } }
        const mResponse: Response = jest.fn()
        const mNext: NextFunction = jest.fn()

        try {
            isValidUserId(mRequest, mResponse, mNext)

        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.USER_ID_NOT_FOUND.message)

        }
    })
})

describe('isValidBody function ', () => {
    test('should return success', () => {
        const mRequest: Request = { body: { name: 'S', surname: 'V' } }
        const mResponse: Response = jest.fn()
        const mNext: NextFunction = jest.fn()

        isValidBody(mRequest, mResponse, mNext)

        expect(mNext).toHaveBeenCalled()

    })
    test('should return exception: name is not exist', () => {
        const mRequest: Request = { body: { name: '', surname: 'V' } }
        const mResponse: Response = jest.fn()
        const mNext: NextFunction = jest.fn()

        try {
            isValidBody(mRequest, mResponse, mNext)

        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.USER_NAME_NOT_FOUND.message)

        }

    })
    test('should return exception: surname is not exist', () => {
        const mRequest: Request = { body: { name: 'S', surname: '' } }
        const mResponse: Response = jest.fn()
        const mNext: NextFunction = jest.fn()

        try {
            isValidBody(mRequest, mResponse, mNext)

        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.USER_SURNAME_NOT_FOUND.message)

        }

    })
})

describe('isValidEmail function', () => {
    test('should return success', () => {
        const mRequest: Request = { body: { email: 'ser@gmail.ru' } }
        const mResponse: Response = jest.fn()
        const mNext: NextFunction = jest.fn()
        isValidEmail(mRequest, mResponse, mNext)
        expect(mNext).toHaveBeenCalled()
    })
    test('should return exception: email is invalid', () => {
        const mRequest: Request = { body: { email: '' } }
        const mResponse: Response = jest.fn()
        const mNext: NextFunction = jest.fn()
        try {
            isValidEmail(mRequest, mResponse, mNext)

        } catch (error: any) {
            expect(error.message).toBe(ExceptionType.USER_EMAIL_NOT_FOUND.message)

        }
    })
})
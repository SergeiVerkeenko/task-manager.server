import { createUser, doAuthorisation } from '../../../service/auth.service'
import * as repository from '../../../repository/auth.repository'
import ExceptionType from '../../../helper/exceptions.type';

describe("createUser function", () => {
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "createUserDB")

        mock.mockResolvedValue()

        await createUser("name", "surname", "pwd", "email@mail.ru")

        expect(mock).toHaveBeenCalled()
    })

    test("should return exception: is not null", async () => {
        const mock = jest.spyOn(repository, "createUserDB")

        mock.mockResolvedValue()

        try {
            await createUser("name", "surname", "pwd", "email@mail.ru")
        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.CREATE_TASK_NOT_FOUND.message)
        }
    })
})
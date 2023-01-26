import { getUsers, getUsersById, updateUsers, deleteUsers, pachtUsers } from '../../../service/user.service'
import * as repository from '../../../repository/user.repository'
import ExceptionType from '../../../helper/exceptions.type';

describe("getUsers function", () => {
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "getUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        await getUsers()

        expect(mock).toHaveBeenCalled()
    })

    test("should return exception: is not null", async () => {
        const mock = jest.spyOn(repository, "getUsersDB")

        mock.mockResolvedValue([])

        try {
            await getUsers()
        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.GET_USER_NOT_FOUND.message)
        }
    })
})
describe("getUsersById function", () => {
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "getUsersByIdDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await getUsersById(1)
        expect(result[0].id).toBe(1)

        expect(mock).toHaveBeenCalled()
    })

    test("should return exception: is not null", async () => {
        const mock = jest.spyOn(repository, "getUsersByIdDB")

        mock.mockResolvedValue([])

        try {
            await getUsersById(1)
        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.GET_USERS_NOT_FOUND.message)
        }
    })
})
describe("updateUsers function", () => {
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "updateUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await updateUsers(1, "sergei", "verk", "1303", "s@mail.ru", 1)
        expect(result[0].id).toBe(1)
        expect(result[0].email).toBe("s@mail.ru")
        expect(result[0].name).toBe('sergei')
        expect(result[0].pwd).toBe('1303')
        expect(result[0].status).toBe(1)
        expect(result[0].surname).toBe('verk')
        expect(mock).toHaveBeenCalled()
    })

    test("should return exception: is not null", async () => {
        const mock = jest.spyOn(repository, "updateUsersDB")

        mock.mockResolvedValue([])

        try {
            await updateUsers(1, "sergei", "verk", "1303", "s@mail.ru", 1)
        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.PUT_USER_NOT_FOUND.message)
        }
    })
})
describe("pachtUsers function", () => {
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "pachtUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await pachtUsers(1, { name: "sergei" })
        expect(result[0].name).toBe("sergei")
        expect(mock).toHaveBeenCalled()
    })
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "pachtUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await pachtUsers(1, { surname: "verk" })
        expect(result[0].surname).toBe("verk")
        expect(mock).toHaveBeenCalled()
    })
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "pachtUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await pachtUsers(1, { email: "s@mail.ru" })
        expect(result[0].email).toBe("s@mail.ru")
        expect(mock).toHaveBeenCalled()
    })
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "pachtUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await pachtUsers(1, { status: 1 })
        expect(result[0].status).toBe(1)
        expect(mock).toHaveBeenCalled()
    })
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "pachtUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await pachtUsers(1, { pwd: "1303" })
        expect(result[0].pwd).toBe("1303")
        expect(mock).toHaveBeenCalled()
    })

    test("should return exception: is not null", async () => {
        const mock = jest.spyOn(repository, "pachtUsersDB")

        mock.mockResolvedValue([])

        try {
            await pachtUsers(1, {})
        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.PATCH_USER_NOT_FOUND.message)
        }
    })
})
describe("deleteUsers function", () => {
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "deleteUsersDB")

        mock.mockResolvedValue([{ id: 1, name: "sergei", surname: "verk", pwd: "1303", email: "s@mail.ru", status: 1 }])

        const result = await deleteUsers(1)
        expect(result[0].id).toBe(1)
        expect(mock).toHaveBeenCalled()
    })

    test("should return exception: is not null", async () => {
        const mock = jest.spyOn(repository, "deleteUsersDB")

        mock.mockResolvedValue([])

        try {
            await deleteUsers(1)
        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.DELETE_USER_NOT_FOUND.message)
        }
    })
})
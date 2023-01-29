import { getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB, pachtUsersDB } from "../../../repository/user.repository" 

const mClient = {
    query: jest.fn()
}

jest.mock('pg', () => {
    const mPool = {
        connect: jest.fn(() => mClient)
    }
    return { Pool: jest.fn(() => mPool) }
})

describe('getUsersDB', ()=>{
    test("should return succes", async()=>{
        const mockUsers = [{ id: 1, name: "name", surname: "surname", pwd: "pwd12345", email: "ser@mail.ru", status: 1 }]

        mClient.query.mockResolvedValue({ rows: mockUsers })
        const expected = await getUsersDB()

        expect(expected).toEqual(mockUsers)
    })
})

describe("getUsersByIdDB", ()=>{
    test("should return succes", async()=>{
        const mockUsers = [{ id: 1, name: "name", surname: "surname", pwd: "pwd12345", email: "ser@mail.ru", status: 1 }]

        mClient.query.mockResolvedValue({ rows: mockUsers })
        const expected = await getUsersByIdDB(1)

        expect(expected).toEqual(mockUsers)
    })
})

describe("updateUsersDB", ()=>{
    test("should return succes", async()=>{
        const mockUsers = [{ id: 1, name: "name", surname: "surname", pwd: "pwd12345", email: "ser@mail.ru", status: 1 }]

        mClient.query.mockResolvedValue({ rows: mockUsers })
        const expected = await updateUsersDB(1, "name", "surname", "pwd12345", "ser@mail.ru", 1)

        expect(mClient.query).toBeCalledWith('COMMIT')
        expect(expected).toEqual(mockUsers)
    })
})

describe("deleteUsersDB", ()=>{
    test("should return succes", async()=>{
        const mockUsers = [{ id: 1, name: "name", surname: "surname", pwd: "pwd12345", email: "serl@mail.ru", status: 1 }]

        mClient.query.mockResolvedValue({ rows: mockUsers })
        const expected = await deleteUsersDB(1)

        expect(mClient.query).toBeCalledWith('COMMIT')
        expect(expected).toEqual(mockUsers)
    })
})

describe("patchUsersDB", ()=>{
    test("should return succes", async()=>{
        const mockUsers = [{ id: 1, name: "name", surname: "surname", pwd: "pwd12345", email: "ser@mail.ru", status: 1 }]

        mClient.query.mockResolvedValue({ rows: mockUsers })
        const expected = await pachtUsersDB(1, {name: "name"})

        expect(mClient.query).toBeCalledWith('COMMIT')
        expect(expected).toEqual(mockUsers)
    })
})
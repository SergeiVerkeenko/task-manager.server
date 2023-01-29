import { createUserDB, getUsersByEmailDB } from '../../../repository/auth.repository'

const mClient = {
    query: jest.fn()
}

jest.mock('pg', () => {
    const mPool = {
        connect: jest.fn(() => mClient)
    }
    return { Pool: jest.fn(() => mPool) }
})

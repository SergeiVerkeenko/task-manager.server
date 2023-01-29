// import { createUserDB, getUsersByEmailDB } from '../../../repository/auth.repository'

// const mClient = {
//     query: jest.fn()
// }

// jest.mock('pg', () => {
//     const mPool = {
//         connect: jest.fn(() => mClient)
//     }
//     return { Pool: jest.fn(() => mPool) }
// })


// test('create', async () => {
//     await createUserDB('test', 'test', '123', 'test@mainModule.ru')
//     expect(mClient.query).toBeCalled()
//     expect(mClient.query).toBeCalledWith('COMMIT')

// })
// afterEach(() => {
//     jest.clearAllMocks()

// })

test('getUsersByEmailDB',async ()=>{
    // await createUserDB('test', 'test', '123', 'test@mainModule.ru')

})
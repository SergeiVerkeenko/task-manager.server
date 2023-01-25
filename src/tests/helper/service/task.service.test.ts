import { createTask, getTasks, getTaskByID, updateTask, deleteTask, patchTask } from '../../../service/task.service'
import * as repository from '../../../repository/task.repository'
import ExceptionType from '../../../helper/exceptions.type';

describe('test createTaskDB', () => {
    test('test', async () => {
        const mock = jest.spyOn(repository, 'createTaskDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        const result = await createTask('task', 1)

        expect(mock).toHaveBeenCalled()
        expect(result[0].task).toBe('task')
        expect(result[0].user_id).toBe(1)

    })
    test('test is null', async () => {
        const mock = jest.spyOn(repository, 'createTaskDB')

        mock.mockResolvedValue([{}])

        try {
            await createTask('task', 1)

        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.CREATE_TASK_NOT_FOUND.message)

        }
    })

})
describe('test getTasks', () => {
    test('test', async () => {
        const mock = jest.spyOn(repository, 'getTasksDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        await getTasks()

        expect(mock).toHaveBeenCalled()
        

    })
    test('test is null', async () => {
        const mock = jest.spyOn(repository, 'getTasksDB')

        mock.mockResolvedValue([{}])

        try {
            await getTasks()

        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.GET_TASKS_NOT_FOUND.message)

        }
    })

})
describe('test getTasksID', () => {
    test('test', async () => {
        const mock = jest.spyOn(repository, 'getTasksDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        await getTasks()

        expect(mock).toHaveBeenCalled()
        

    })
    test('test is null', async () => {
        const mock = jest.spyOn(repository, 'getTasksDB')

        mock.mockResolvedValue([{}])

        try {
            await getTasks()

        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.GET_TASKS_NOT_FOUND.message)

        }
    })

})

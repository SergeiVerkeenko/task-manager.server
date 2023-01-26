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
        const mock = jest.spyOn(repository, 'getTaskByIDDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        const result = await getTaskByID(1)
        expect(result[0].user_id).toBe(1)

        expect(mock).toHaveBeenCalled()


    })
    test('test is null', async () => {
        const mock = jest.spyOn(repository, 'getTaskByIDDB')

        mock.mockResolvedValue([{}])

        try {
            await getTaskByID(1)

        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.GET_TASKS_NOT_FOUND.message)

        }
    })

})
describe('test updateTask', () => {
    test('test', async () => {
        const mock = jest.spyOn(repository, 'updateTaskDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        const result = await updateTask(1, 'task', 1)

        expect(mock).toHaveBeenCalled()
        expect(result[0].user_id).toBe(1)
        expect(result[0].id).toBe(1)
        expect(result[0].task).toBe('task')



    })
    test('test is null', async () => {
        const mock = jest.spyOn(repository, 'updateTaskDB')

        mock.mockResolvedValue([{}])

        try {
            await updateTask(1, 'task', 1)

        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.PUT_TASK_NOT_FOUND.message)

        }
    })

})
describe('test deleteTask', () => {
    test('test', async () => {
        const mock = jest.spyOn(repository, 'deleteTaskDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        const result = await deleteTask(1)

        expect(mock).toHaveBeenCalled()
        expect(result[0].id).toBe(1)



    })
    test('test is null', async () => {
        const mock = jest.spyOn(repository, 'deleteTaskDB')

        mock.mockResolvedValue([{}])

        try {
            await deleteTask(1)

        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.DELETE_TASK_NOT_FOUND.message)

        }
    })

})
describe('test patchTask', () => {
    test('test', async () => {
        const mock = jest.spyOn(repository, 'patchTaskDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        const result = await patchTask(1, { task: 'task' })

        expect(mock).toHaveBeenCalled()
        expect(result[0].id).toBe(1)
        expect(result[0].task).toBe('task')



    })
    test('test', async () => {
        const mock = jest.spyOn(repository, 'patchTaskDB')

        mock.mockResolvedValue([{ id: 1, task: 'task', user_id: 1 }])

        const result = await patchTask(1, { user_id: 1 })

        expect(mock).toHaveBeenCalled()
        expect(result[0].id).toBe(1)
        expect(result[0].user_id).toBe(1)



    })
    test('test is null', async () => {
        const mock = jest.spyOn(repository, 'patchTaskDB')

        mock.mockResolvedValue([{}])

        try {
            await patchTask(1, { task: 'task' })

        } catch (error: any) {
            expect(mock).toHaveBeenCalled()
            expect(error.message).toBe(ExceptionType.PATCH_TASK_NOT_FOUND.message)

        }
    })

})

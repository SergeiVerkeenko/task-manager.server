const ExceptionType = require('../helper/exceptions.type')
const { createTaskDB, getTasksDB, getTaskByIDDB, updateTaskDB, deleteTaskDB, patchTaskDB } = require('../repository/task.repository')

async function getTasks() {
    const dataTasks = await getTasksDB()
    if (!dataTasks.length) throw new Error(ExceptionType.getTaskByID.message)
    return dataTasks
}
async function getTaskByID(id) {
    const dataTasks = await getTaskByIDDB(id)
    if (!dataTasks.length) throw new Error(ExceptionType.getTaskByIDDB.message)
    return dataTasks
}

async function createTask(task, user_id) {
    const dataTask = await createTaskDB(task, user_id)
    if (!dataTask.length) throw new Error(ExceptionType.CREATE_TASK_NOT_FOUND.message)
    return dataTask
}

async function updateTask(id, task, user_id) {
    const dataTask = await updateTaskDB(id, task, user_id)
    if (!dataTask.length) throw new Error(ExceptionType.PUT_TASK_NOT_FOUND.message)
    return dataTask
}

async function deleteTask(id) {
    const dataTask = await deleteTaskDB(id)
    if (!dataTask.length) throw new Error(ExceptionType.DELETE_TASK_NOT_FOUND.message)
    return dataTask
}

async function patchTask(id, dataClient) {
    const dataTask = await patchTaskDB(id, dataClient)
    if (!dataTask.length) throw new Error(ExceptionType.PATCH_TASK_NOT_FOUND.message)
    return dataTask
}

module.exports = { createTask, getTasks, getTaskByID, updateTask, deleteTask, patchTask }
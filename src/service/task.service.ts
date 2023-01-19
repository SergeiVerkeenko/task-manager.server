import ExceptionType from '../helper/exceptions.type';
import { createTaskDB, getTasksDB, getTaskByIDDB, updateTaskDB, deleteTaskDB, patchTaskDB } from '../repository/task.repository';
import { iTask } from '../interfaces/interfaces';

async function getTasks(): Promise<iTask[]> {
  const dataTasks = await getTasksDB();
  if (!dataTasks.length) throw new Error(ExceptionType.GET_TASKS_NOT_FOUND.message);
  return dataTasks;
}
async function getTaskByID(id: number): Promise<iTask[]> {
  const dataTasks = await getTaskByIDDB(id);
  if (!dataTasks.length) throw new Error(ExceptionType.GET_TASKS_NOT_FOUND.message);
  return dataTasks;
}

async function createTask(task: string, user_id: number): Promise<iTask[]> {
  const dataTask = await createTaskDB(task, user_id);
  if (!dataTask.length) throw new Error(ExceptionType.CREATE_TASK_NOT_FOUND.message);
  return dataTask;
}

async function updateTask(id: number, task: string, user_id: number): Promise<iTask[]> {
  const dataTask = await updateTaskDB(id, task, user_id);
  if (!dataTask.length) throw new Error(ExceptionType.PUT_TASK_NOT_FOUND.message);
  return dataTask;
}

async function deleteTask(id: number): Promise<iTask[]> {
  const dataTask = await deleteTaskDB(id);
  if (!dataTask.length) throw new Error(ExceptionType.DELETE_TASK_NOT_FOUND.message);
  return dataTask;
}

async function patchTask(id: number, dataClient: iTask): Promise<iTask[]> {
  const dataTask = await patchTaskDB(id, dataClient);
  if (!dataTask.length) throw new Error(ExceptionType.PATCH_TASK_NOT_FOUND.message);
  return dataTask;
}

export { createTask, getTasks, getTaskByID, updateTask, deleteTask, patchTask };

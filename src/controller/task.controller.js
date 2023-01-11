const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { handleError } = require('../helper/handleError');
const { getTasks, createTask, getTaskByID, updateTask, deleteTask, patchTask } = require('../service/task.service');
const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const dataTasks = await getTasks();
    buildResponse(res, 200, dataTasks);
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const dataTask = await getTaskByID(id);
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const dataTask = await createTask(task, user_id);
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

route.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { task, user_id } = req.body;
    const dataTask = await updateTask(id, task, user_id);
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

route.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const dataTask = await deleteTask(id);
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

route.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const dataTask = await patchTask(id, req.body);
    buildResponse(res, 200, dataTask);
  } catch (error) {
    handleError(res, 404, error.message);
  }
});

module.exports = route;

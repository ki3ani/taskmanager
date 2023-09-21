const express = require('express');
const router = express.Router();
const taskController = require('./taskcontroller');

// Create a new task
router.post('/tasks', taskController.createTask);

// Get all tasks
router.get('/tasks', taskController.getTasks);

// Update a task
router.patch('/tasks/:id', taskController.updateTask);

// Delete a task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;

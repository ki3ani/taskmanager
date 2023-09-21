const Task = require('./task');

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.title = req.body.title || task.title;
      task.description = req.body.description || task.description;
      task.completed = req.body.completed || task.completed;

      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id); // Change this line
    if (task) {
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};


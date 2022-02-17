const router = require('express').Router();
const { Task, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tasksData = await Task.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });
    return res.status(200).json(tasksData);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const taskData = await Task.findByPk(req.params.id);
    if (!taskData) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.status(200).json(taskData);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await Task.update(req.body);
    const taskData = await Task.findByPk(req.params.id);
    if (!taskData) {
      return res.status(400).json({ message: 'Task not found' });
    }
    return res.status(200).json({ message: 'Task updated' });
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;

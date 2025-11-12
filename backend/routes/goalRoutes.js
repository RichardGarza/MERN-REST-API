const express = require('express');
const router = express.Router();
const {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController.js');

// Get All Goals & Create Goal
router.route('/').get(getGoals).post(createGoal);

// The next 4 lines are replaced by the router.route function above.
// Get All Goals
// router.get('/', getGoals);
// Create Goal
// router.post('/', createGoal);

// Get Single Goal
router.get('/:id', getGoal);

// Update Goal
router.put('/:id', updateGoal);

// Delete Goal
router.delete('/:id', deleteGoal);

module.exports = router;

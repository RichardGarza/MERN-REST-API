const express = require('express');
const router = express.Router();
const {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController.js');

// Use router.route to combine similar paths with different methods.
router.route('/').get(getGoals).post(createGoal);
router.route('/:id').get(getGoal).put(updateGoal).delete(deleteGoal);

// The lines below are replaced by the router.route function above.
// Get All Goals
// router.get('/', getGoals);
// Get Single Goal
//router.get('/:id', getGoal);
// Create Goal
// router.post('/', createGoal);
// Update Goal
//router.put('/:id', updateGoal);
// Delete Goal
//router.delete('/:id', deleteGoal);

module.exports = router;

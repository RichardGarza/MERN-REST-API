
// Express built in async handler to handle catch / errors
const asyncHandler = require('express-async-handler')

// Get All Goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'All Goals' });
})

// Get Single Goal
const getGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goal retrieved, goal id: ${req.params.id}` });
})

// Create Goal with error handling
const createGoal = asyncHandler(async (req, res) => {
   if (!req.body) {
    res.status(400)
    throw new Error('Please add a text field')
  } 
    res.status(200).json({ message: `This is your text: ${req.body.text}` })
})

// Update Goal
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal id: ${req.params.id}` });
})

// Delete Goal
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal id: ${req.params.id}` });
})

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};

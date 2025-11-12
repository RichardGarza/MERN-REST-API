
// Express built in async handler to handle catch / errors
const asyncHandler = require('express-async-handler')

// Goal Mongoose Model built on Schema in goalModel file.
const Goal = require('../models/goalModel')

// Get All Goals (request goals from mongoose, await response, return with status 200)
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals);
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
    const goal = await Goal.create({
      text: req.body.text
    })
    res.status(200).json(goal)
})

// Update Goal
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error(`Goal ID: ${req.params.id} not found.`)
  } else {

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json({ message: `Updated goal id: ${req.params.id}`, updatedGoal });
  }
})

// Delete Goal
const deleteGoal = asyncHandler(async (req, res) => {
    const goalToBeDeleted = await Goal.findById(req.params.id)

    if (!goalToBeDeleted) {
      throw new Error('Goal not found.')
    } else {

      const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

      res.status(200).json({ id: req.params.id });
    }

  
})

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};

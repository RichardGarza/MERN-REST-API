const getGoals = (req, res) => res.status(200).json({ message: 'All Goals' });

const getGoal = (req, res) =>
  res
    .status(200)
    .json({ message: `Goal retrieved, goal id: ${req.params.id}` });

const createGoal = (req, res) =>
  res.status(200).json({ message: 'Goal created' });

const updateGoal = (req, res) =>
  res.status(200).json({ message: `Updated goal id: ${req.params.id}` });

const deleteGoal = (req, res) =>
  res.status(200).json({ message: `Deleted goal id: ${req.params.id}` });

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};

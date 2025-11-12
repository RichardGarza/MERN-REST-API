const getGoals = (req, res) => {res.status(200).json({ message: 'All Goals' });}

const getGoal = (req, res) =>{
  res
    .status(200)
    .json({ message: `Goal retrieved, goal id: ${req.params.id}` });
}

// Create Goal with error handling
const createGoal = (req, res) => {
   if (!req.body) {
    res.status(400)
    throw new Error('Please add a text field')
  } 
  
    res.status(200).json({ message: `This is your text: ${req.body.text}` })
  
}

const updateGoal = (req, res) =>{
  res.status(200).json({ message: `Updated goal id: ${req.params.id}` });
}

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted goal id: ${req.params.id}` });
}

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};

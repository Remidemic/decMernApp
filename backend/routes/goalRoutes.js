const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalContorller')

const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getGoals).post(protect, setGoal)

router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router

// replaces routes above

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.delete('/:id', deleteGoal)
// router.put('/:id' , updateGoal)
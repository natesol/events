/* ------------------------------------------------------------------------------------------------ */
/* ---- Tasks Routes Initialization -------------------------------------------------------------- */

const express = require('express');

const { getTasks, setTask, updateTask, deleteTask, getTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getTasks).post(protect, setTask);
router.route('/:id').delete(protect, deleteTask).put(protect, updateTask).get(protect, getTask);

module.exports = router;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */

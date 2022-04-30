/* ------------------------------------------------------------------------------------------------ */
/* ---- Events Routes Initialization -------------------------------------------------------------- */

const express = require('express');

const { getEvents, setEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getEvents).post(protect, setEvent);
router.route('/:id').delete(protect, deleteEvent).put(protect, updateEvent);

module.exports = router;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */

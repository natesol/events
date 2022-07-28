/* ------------------------------------------------------------------------------------------------ */
/* ---- Events Routes Initialization -------------------------------------------------------------- */

const express = require('express');

const { getEvents, setEvent, updateEvent, deleteEvent, getEvent } = require('../controllers/eventController');
const { uploadImage } = require('../controllers/imageController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getEvents).post(protect, uploadImage.single('image'), setEvent);
router.route('/:id').delete(protect, deleteEvent).put(protect, updateEvent).get(protect, getEvent);

module.exports = router;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */

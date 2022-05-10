/* ------------------------------------------------------------------------------------------------ */
/* ---- Events Routes Initialization -------------------------------------------------------------- */

const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    },
});

const upload = multer({ storage: storage });

const { getEvents, setEvent, updateEvent, deleteEvent, getEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getEvents).post(protect, upload.single('image'), setEvent);
router.route('/:id').delete(protect, deleteEvent).put(protect, updateEvent).get(protect, getEvent);

module.exports = router;

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */

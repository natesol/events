/* ------------------------------------------------------------------------------------------------ */
/* ---- Events Routes Controller ------------------------------------------------------------------ */

const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {
    cb(null, true);
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('.', 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, '').replace(/\./g, '-') +
                '.' +
                file.originalname.split('.').splice(-1)
        );
    },
});

const uploadImage = multer({ storage: storage });

module.exports = {
    uploadImage,
};

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */

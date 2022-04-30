/* ------------------------------------------------------------------------------------------------ */
/* ---- MongoDB Configurations -------------------------------------------------------------------- */

const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log(`[dataBase] mongoDB connected: ${res.connection.host}`.cyan);
    } catch (error) {
        console.log(`[dataBase] ${error}`.cyan);
        process.exit(1);
    }
};

module.exports = { connectToDB };

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */

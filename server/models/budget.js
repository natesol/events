/* ------------------------------------------------------------------------------------------------ */
/* ---- DataBase Model - Events - Mongoose Schema ------------------------------------------------- */

const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema(
    {
        event: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Event',
        },
        incomes: [
            {
                amount: {
                    type: Number,
                },
                description: {
                    type: String,
                },
            },
        ],
        expenses: [
            {
                amount: {
                    type: Number,
                },
                description: {
                    type: String,
                },
                assignment: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Assignment',
                },
            },
        ],
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Budget', budgetSchema);

/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */

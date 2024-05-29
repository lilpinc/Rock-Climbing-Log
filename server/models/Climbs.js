const { Schema, model } = require('mongoose');

const climbsSchema = new Schema(
    {
        climbName: {
            type: String,
            required: true,
            trim: true
        },
        grade: {
            type: String,
            required: true,
        },
        climbType:{
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true
        },
        notes: {
            type: String,
            required: true
        }
    }
);

const Climbs = model('Climbs', climbsSchema);

module.exports = Climbs;
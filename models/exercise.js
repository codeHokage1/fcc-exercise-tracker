const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Must include a userId"]
    },
    description: {
        type: String,
        required: [true, "Must include a description"]
    },
    duration: {
        type: Number,
        required: [true, "Must include a duration"]
    },
    date: {
        type: String,
        default: new Date().toDateString()
    }
})

module.exports = mongoose.model('Exercise', exerciseSchema);


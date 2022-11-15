const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Must include a username"]
    }
})

module.exports = mongoose.model('User', userSchema);


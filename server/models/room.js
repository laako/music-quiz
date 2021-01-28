const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    roomcode: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    // players: [{
    //     _id: {
    //         type: String,
    //         required: true
    //     },
    //     score: {
    //         type: Number
    //     }
    // }]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

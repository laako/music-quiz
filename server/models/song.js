const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
    },
    artits: {
        type: String,
        trim: true,
    },
    movie: {
        type: String,
        trim: true,
    },
    serie: {
        type: String,
        trim: true,
    },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;

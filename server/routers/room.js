const express = require('express');
const Room = require('../models/room');
const auth = require('../middleware/auth');
const router = new express.Router();

const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length),
        );
    }
    return result;
};

router.post('/room/create', auth, async (req, res) => {
    const roomcode = makeid(4);
    const room = new Room({
        author: req.user.username,
        roomcode,
    });

    try {
        await room.save();
        res.status(201).json({
            author: room.author,
            roomcode,
        });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/room/destroy/:id', auth, async (req, res) => {
    const deleted = await Room.deleteOne({
        author: req.user.username,
        roomcode: req.params.id,
    });
    if (deleted.deletedCount !== 0) {
        res.json({});
    } else {
        res.status(403).send();
    }
});

router.get('/room', auth, async (req, res) => {
    const roomsByYou = await Room.find({
        author: req.user.username,
    });

    if (!roomsByYou) {
        res.status(404).json([]);
    }

    res.json(roomsByYou);
});

router.get('/room/:code', async (req, res) => {
    const roomcode = req.params.code;

    try {
        const room = await Room.findOne({
            roomcode,
        });

        if (!room) res.status(404).send();

        res.send(room);
    } catch (e) {
        res.status(404).send();
    }
});

module.exports = router;

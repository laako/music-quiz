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
        res.status(201).send(room);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.post('/room/destroy', auth, async (req, res) => {});

router.get('/room/:code', async (req, res) => {
    const roomcode = req.params.code;

    try {
        const room = await Room.findOne({
            roomcode,
        });

        if (!room) res.status(201).send();

        res.send(room);
    } catch (e) {
        res.status(404).send();
    }
});

module.exports = router;

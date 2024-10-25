const express = require('express');
constdb = require('../db');
const router = express.Router();

// Send a message
router.post('/', (req, res) => {
const{ eventId, userId, message } = req.body;
constsql = 'INSERT INTO messages (event_id, user_id, message) VALUES (?, ?, ?)';
db.query(sql, [eventId, userId, message], (err) => {
        if (err) return res.status(500).send(err);
res.status(201).send('Message sent');
    });
});

// Get messages for an event
router.get('/:eventId', (req, res) => {
consteventId = req.params.eventId;
constsql = 'SELECT * FROM messages WHERE event_id= ?';
db.query(sql, [eventId], (err, results) => {
        if (err) return res.status(500).send(err);
res.json(results);
    });
});

module.exports = router;

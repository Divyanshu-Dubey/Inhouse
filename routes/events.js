const express = require('express');
constdb = require('../db');
const router = express.Router();

// Create an event
router.post('/', (req, res) => {
const{ title, description, location, date } = req.body;
constsql = 'INSERT INTO events (title, description, location, date) VALUES (?, ?, ?, ?)';
db.query(sql, [title, description, location, date], (err, result) => {
        if (err) return res.status(500).send(err);
res.status(201).json({ id: result.insertId, title, description, location, date });
    });
});

// Get all events
router.get('/', (req, res) => {
constsql = 'SELECT * FROM events';
db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
res.json(results);
    });
});

// RSVP to an event
router.post('/:id/rsvp', (req, res) => {
const{ userId } = req.body;
consteventId = req.params.id;
constsql = 'INSERT INTO rsvps (event_id, user_id) VALUES (?, ?)';
db.query(sql, [eventId, userId], (err) => {
        if (err) return res.status(500).send(err);
res.status(201).send('RSVP successful');
    });
});

module.exports = router;

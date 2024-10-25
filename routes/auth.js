const express = require('express');
constbcrypt = require('bcryptjs');
constjwt = require('jsonwebtoken');
constdb = require('../db');
const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
const{ username, password } = req.body;
consthashedPassword = await bcrypt.hash(password, 10);
constsql = 'INSERT INTO users (username, password) VALUES (?, ?)';
db.query(sql, [username, hashedPassword], (err) => {
        if (err) return res.status(500).send(err);
res.status(201).send('User registered');
    });
});

// Login user
router.post('/login', async (req, res) => {
const{ username, password } = req.body;
constsql = 'SELECT * FROM users WHERE username = ?';
db.query(sql, [username], async (err, results) => {
        if (err || results.length === 0) return res.status(401).send('Invalid credentials');
const user = results[0];
const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).send('Invalid credentials');

const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
res.json({ token });
    });
});

module.exports = router;

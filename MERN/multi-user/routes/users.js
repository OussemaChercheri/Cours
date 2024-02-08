const express = require('express');
const router = express.Router();
const connection = require('../connect');

// Get Users
router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM users', (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// Get a specific user by ID
router.get('/:id', (req, res, next) => {
    const userId = req.params.id;
    connection.query('SELECT * FROM users WHERE id = ?', [userId], (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(results[0]);
    });
});

// Create a new user
router.post('/', (req, res, next) => {
    const { username, email } = req.body;
    connection.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'User created successfully', id: results.insertId });
    });
});

// Update an existing user
router.put('/:id', (req, res, next) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    connection.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId], (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'User updated successfully' });
    });
});

// Delete a user
router.delete('/:id', (req, res, next) => {
    const userId = req.params.id;
    connection.query('DELETE FROM users WHERE id = ?', [userId], (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'User deleted successfully' });
    });
});

module.exports = router;

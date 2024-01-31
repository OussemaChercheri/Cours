const express = require('express');
const router = express.Router();
const connection = require('../connect');
const { model } = require('mongoose');

// Get Users
router.get('/', (req, res, next) => {

    connection.query('SELECT * FROM users', (err, results, fields) => {
        !err ? res.json(results) : res.json({ err });
    });
});

module.exports = router;

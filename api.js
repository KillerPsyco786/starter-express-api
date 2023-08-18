const express = require('express');
const { Machine } = require('./models/machine'); // Adjust the path accordingly

const router = express.Router();

router.get('/data', async (req, res) => {
    try {
        const machines = await Machine.find();
        res.json(machines);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

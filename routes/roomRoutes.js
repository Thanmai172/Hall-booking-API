const express = require('express');
const router = express.Router();
const Room = require('../models/Room'); // Ensure the path is correct

// Create a new room (POST request)
router.post('/create', async (req, res) => {
    try {
        const { name, seats, amenities, price } = req.body;

        // Validate input
        if (!name || !seats || !price) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newRoom = new Room({ name, seats, amenities, price });
        await newRoom.save();
        res.status(201).json({ message: "Room created successfully!", newRoom });
    } catch (error) {
        console.error("Error creating room:", error.message);
        res.status(500).json({ error: error.message });
    }
}); 

module.exports = router;

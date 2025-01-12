const Room = require('../models/Room');  // Ensure the path is correct

exports.createRoom = async (req, res) => {
    try {
        const { name, seats, amenities, price } = req.body;

        // Validation
        if (!name || !seats || !amenities || !price) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newRoom = new Room({ name, seats, amenities, price });
        await newRoom.save();
        res.status(201).json({ message: "Room created successfully!", newRoom });
    } catch (error) {
        console.error("Error creating room:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

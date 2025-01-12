const Booking = require('../models/Booking');
const Room = require('../models/Room');

// Booking a room
exports.bookRoom = async (req, res) => {
    try {
        const { roomId } = req.body;
        const room = await Room.findById(roomId);
        if (!room) return res.status(404).send('Room not found');

        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        res.status(500).send(error);
    }
};

// List all rooms with booking data
exports.listRooms = async (req, res) => {
    try {
        const rooms = await Room.find().populate('bookings');  // Should work now
        res.status(200).send(rooms);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving rooms", error: error.message });
    }
};

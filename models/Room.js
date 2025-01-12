const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    amenities: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]  // Add this line
});

module.exports = mongoose.model('Room', RoomSchema);

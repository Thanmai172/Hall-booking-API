const express = require('express');
const router = express.Router();
const { bookRoom, listRooms } = require('../controllers/bookingController');

router.post('/book', bookRoom);
router.get('/rooms', listRooms);

module.exports = router;

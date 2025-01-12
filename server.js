const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors"); // when we trying to access one server from another server..

dotenv.config(); // to load teh env variables

//connect to the database
connectDB();

const app = express(); // this will gives us to create the express server with this app variables

// whenever we are doing the api, we have to use middleware 
app.use(express.json())
app.use(cors());

// Import routes
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Use routes
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

// Import required packages and modules
var express = require('express');
var app = express();
var cors = require('cors');
const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config')

// Connect to MongoDB database
mongoose.connect(MONGODB_URL);

// Event listeners for database connection
mongoose.connection.on("connected", () => {
    console.log("DB connected");
});
mongoose.connection.on('error', (error) => {
    console.log("Not able to connect to DB");
});

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Require and use user and addsales models
require('./models/user-models');
require('./models/addsales-model');

// Require and use user and addsales routes
app.use(require('./routes/user-routes'));
app.use(require('./routes/addsales-routes'));

// Start the server and listen on port 5500
app.listen(5500, () => {
    console.log("Server started");
});

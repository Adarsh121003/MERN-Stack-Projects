// Import required modules
const express = require("express"); // Import the Express framework
const cors = require("cors"); // Import the CORS middleware for handling cross-origin requests
const NodePersist = require("node-persist"); // Import the NodePersist library for data persistence

// Create an Express application instance
const app = express();

// Define the port on which the server will listen
const port = 5000;

// Use the CORS middleware to allow cross-origin requests
app.use(cors());

// Use the built-in JSON parsing middleware of Express
app.use(express.json());

// Function to initialize NodePersist and set initial data
const initNodePersist = async () => {
    await NodePersist.init(); // Initialize the NodePersist storage
    await NodePersist.setItem("tasks", []); // Initialize tasks data if not present
};

// Function to clear persisted data
const clearPersistedData = async () => {
    await NodePersist.clear(); // Clear all stored data
};

// Initialize NodePersist and data
initNodePersist();

// Endpoint to get tasks
app.get("/tasks", async (_, res) => {
    const tasks = await NodePersist.getItem("tasks"); // Retrieve tasks data from storage
    res.json(tasks || []); // Respond with tasks data or an empty array
});

// Endpoint to add a new task
app.post("/tasks", async (req, res) => {
    const { task } = req.body; // Extract the task from the request body
    let tasks = await NodePersist.getItem("tasks"); // Retrieve current tasks data
    tasks = tasks || []; // Initialize tasks if not present
    tasks.push(task); // Add the new task to the tasks array
    await NodePersist.setItem("tasks", tasks); // Update tasks data in storage
    res.sendStatus(200); // Respond with success status
});

// Endpoint to delete tasks
app.delete("/tasks", async (_, res) => {
    await NodePersist.removeItem("tasks"); // Remove the tasks data from storage
    res.sendStatus(200); // Respond with success status
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Clear data when the server is restarted
process.on("SIGINT", async () => {
    await clearPersistedData(); // Clear data before exiting the process
    process.exit(); // Exit the process
});

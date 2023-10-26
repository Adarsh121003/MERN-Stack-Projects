// Import required libraries and modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Create an instance of Express app
const app = express();
const port = 5000;

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "taskdb",
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to database!");
});

// Enable CORS for cross-origin requests
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Route to retrieve tasks from the database
app.get("/api/tasks", (req, res) => {
    const query = "SELECT * FROM tasks";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error getting tasks:", err);
            res.status(500).json({ error: "Failed to get tasks" });
        } else {
            res.json(results);
        }
    });
});

// Route to add a new task to the database
app.post("/api/tasks", (req, res) => {
    const { task } = req.body;
    const query = "INSERT INTO tasks (name) VALUES (?)";
    connection.query(query, [task], (err, results) => {
        if (err) {
            console.error("Error adding task:", err);
            res.status(500).json({ error: "Failed to add task" });
        } else {
            const insertedId = results.insertId;
            res.json({ success: true, id: insertedId });
        }
    });
});

// Route to update a task in the database
app.put("/api/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    const query = "UPDATE tasks SET name = ? WHERE id = ?";
    connection.query(query, [task, id], (err, results) => {
        if (err) {
            console.error("Error updating task:", err);
            res.status(500).json({ error: "Failed to update task" });
        } else {
            res.json({ success: true });
        }
    });
});

// Route to delete a task from the database
app.delete("/api/tasks/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM tasks WHERE id = ?";
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error deleting task:", err);
            res.status(500).json({ error: "Failed to delete task" });
        } else {
            res.json({ success: true });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

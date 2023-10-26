// Import the necessary modules and create an Express app
var express = require('express');
var app = express();
const storage = require('node-persist');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
storage.init();

// Route to add a new student's details via a POST request
app.post("/student", jsonParser, async (req, res) => {
    // Extract the student details from the request body
    const { student_id, student_name, student_gpa } = req.body;
    
    // Store the student details in the storage using their ID as the key
    await storage.setItem(student_id, { student_id, student_name, student_gpa });

    // Send a success response to the client
    res.send("Student Added Successfully");
});

// Route to get a particular student's details by their ID via a GET request
app.get("/student/:student_id", async (req, res) => {
    // Check if the student with the given ID exists in the storage
    if ((await storage.keys()).includes(req.params.student_id)) {
        // If found, retrieve the student details from the storage
        const user = await storage.getItem(req.params.student_id);

        // Send the student details in the response body with appropriate HTML formatting
        res.send(`
        <h1> Student Details </h1>
        <h4> Student Id: ${user.student_id}</h4>
        <h4> Student Name: ${user.student_name}</h4>
        <h4> Student GPA: ${user.student_gpa}</h4>
        `);
    } else {
        // If the student is not found, send an error message
        res.send("Student Not Found");
    }
});

// Route to get details of all students stored in the storage via a GET request
app.get('/allStudentsData', async (req, res) => {
    // Retrieve all student objects from the storage
    const Students = await storage.values();
    
    // Prepare a response containing details of all students with appropriate HTML formatting
    let Data = `<h1>All Students Data </h1> <hr> `;
    for (let i = 0; i < Students.length; i++) {
        Data += `<br>
        <h4> Student Id: ${Students[i].student_id}</h4>
        <h4> Student Name: ${Students[i].student_name}</h4>
        <h4> Student GPA: ${Students[i].student_gpa}</h4>
        <hr>`;
    }
    
    // Send the response containing all students' details
    res.send(Data);
});

// Route to get details of the topper student via a GET request
app.get('/topper', async (req, res) => {
    // Retrieve all student objects from the storage
    const Students = await storage.values();

    // Initialize a variable to keep track of the student with the highest GPA
    let topper = Students[0];

    // Loop through all students to find the student with the highest GPA
    for (let i = 1; i < Students.length; i++) {
        if (Students[i].student_gpa >= topper.student_gpa) {
            topper = Students[i];
        }
    }

    // Send the details of the topper student in the response with appropriate HTML formatting
    res.send(
        `<h1> Topper Student Data </h1> <hr> 
        <h4> Student Id: ${topper.student_id}</h4>
        <h4> Student Name: ${topper.student_name}</h4>
        <h4> Student GPA: ${topper.student_gpa}</h4>
        <hr>`
    );
});

// Start the server and listen on port 5500
app.listen(5500, () => {
    console.log("Server is running on port 5500");
});

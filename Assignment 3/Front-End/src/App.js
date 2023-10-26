import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./App.css";

const App = () => {
  // State to hold the current task being added
  const [task, setTask] = useState("");
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // useEffect hook to fetch tasks when the component mounts
  useEffect(() => {
    getTasks();
  }, []);

  // Set default base URL for axios requests
  axios.defaults.baseURL = "http://localhost:5000";

  // Function to fetch tasks from the server
  const getTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to add a new task
  const addTask = async () => {
    try {
      const response = await axios.post("/api/tasks", { task });
      if (response.data.success) {
        setTask("");
        getTasks();
        Swal.fire("Success", "Task added successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to add task", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to add task", "error");
    }
  };

  // Function to delete a task
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`/api/tasks/${id}`);
      if (response.data.success) {
        getTasks();
        Swal.fire("Success", "Task deleted successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to delete task", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to delete task", "error");
    }
  };

  // Function to update a task
  const updateTask = async (id, newTask) => {
    try {
      const response = await axios.put(`/api/tasks/${id}`, { task: newTask });
      if (response.data.success) {
        getTasks();
        Swal.fire("Success", "Task updated successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to update task", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update task", "error");
    }
  };

  return (
    <div className="app-container">
      <h1>Task List</h1>
      <div className="input-container">
        <button className="design3">Enter the Task</button>
        {/* Input field for adding new tasks */}
        <input
          className="design1"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        {/* Button to add the task */}
        <button className="design" onClick={addTask}>Add Task</button>
      </div>
      {/* List of tasks */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {/* Display task name */}
            <span className="task-name">{task.name}</span>
            <div className="task-buttons">
              {/* Button to delete task */}
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
              {/* Button to edit task */}
              <button
                className="edit-button"
                onClick={() => {
                  const newTask = prompt("Enter the updated task:");
                  if (newTask) {
                    updateTask(task.id, newTask);
                  }
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

import axios from "axios";

const API_URL = "http://localhost:5000/tasks"; // Change if using a different backend URL

// Fetch all tasks
export const fetchTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add a new task
export const addTask = async (task) => {
  const res = await axios.post(API_URL, task);
  return res.data;
};

// Edit a task
export const editTask = async (taskId, updatedTask) => {
  const res = await axios.put(`${API_URL}/${taskId}`, updatedTask);
  return res.data;
};

// Delete a task
export const deleteTask = async (taskId) => {
  const res = await axios.delete(`${API_URL}/${taskId}`);
  return res.data;
};


// Update task in MongoDB
export const updateTask = async (updatedTask) => {
  const response = await fetch(`http://localhost:5000/tasks/${updatedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) {
    throw new Error("Task update failed");
  }

  return response.json(); // Return the updated task
};

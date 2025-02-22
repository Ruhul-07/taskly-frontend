import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");
  const queryClient = useQueryClient();

  const addTaskMutation = useMutation({
    mutationFn: async (newTask) => {
      const response = await axios.post("http://localhost:5000/tasks", newTask);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Refresh tasks after adding
      setTitle("");
      setDescription("");
      setCategory("To-Do");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return; // Prevent empty submissions

    addTaskMutation.mutate({ title, description, category });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-slate-200 shadow-lg rounded-xl max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Task</h2>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={50}
        className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      {/* Description Input */}
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={200}
        className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      {/* Category Selection */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 border rounded-lg mb-3 bg-white focus:ring-2 focus:ring-blue-500"
      >
        <option value="To-Do">To-Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        disabled={addTaskMutation.isPending}
      >
        {addTaskMutation.isPending ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
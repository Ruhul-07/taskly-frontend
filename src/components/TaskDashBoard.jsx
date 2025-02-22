
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DragDropContext } from "@hello-pangea/dnd";
import TaskColumn from "./TaskColumn";
import { fetchTasks, updateTask } from "../api/tasks";
import { useEffect, useState } from "react";

const TaskDashboard = () => {
  const queryClient = useQueryClient();
  // const [taskss, setTaskss] = useState([]);

  // Fetch tasks using React Query
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");
  
    socket.onmessage = (event) => {
      const change = JSON.parse(event.data);
      console.log("Received change:", change);
  
      // If the operation is an update, update the task in React Query cache
      if (change.operationType === "update") {
        const updatedTask = change.fullDocument; // Get updated task from the WebSocket
  
        // Update the cache with the new task data
        queryClient.setQueryData(["tasks"], (oldTasks) =>
          oldTasks.map((task) =>
            task._id === updatedTask._id ? updatedTask : task
          )
        );
      }
    };
  
    return () => {
      socket.close(); // Clean up WebSocket connection on component unmount
    };
  }, [queryClient]);
  

  const updateTaskMutation = useMutation({
    mutationFn: ({ id, updatedData }) => updateTask(id, updatedData), // Update task
    onMutate: async ({ id, updatedData }) => {
      // Cancel any outgoing requests
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
  
      // Snapshot the previous value
      const previousTasks = queryClient.getQueryData(["tasks"]);
  
      // Optimistically update the task in the cache
      queryClient.setQueryData(["tasks"], (oldTasks) =>
        oldTasks.map((task) =>
          task._id === id ? { ...task, ...updatedData } : task
        )
      );
  
      return { previousTasks };
    },
    onError: (error, variables, context) => {
      // On error, roll back the optimistic update
      console.error("Error updating task:", error);
      if (context?.previousTasks) {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      }
    },
    onSettled: () => {
      // Always refetch the tasks after mutation (to ensure data is up-to-date)
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  

  if (isLoading) return <p>Loading tasks...</p>;

  // Group tasks by category
  const columns = {
    "To-Do": tasks.filter((task) => task.category === "To-Do"),
    "In Progress": tasks.filter((task) => task.category === "In Progress"),
    Done: tasks.filter((task) => task.category === "Done"),
  };

  // Handle Drag-and-Drop
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return; // Drop outside a valid column

    const sourceCategory = source.droppableId;
    const destCategory = destination.droppableId;

    // Find the dragged task
    const draggedTask = columns[sourceCategory][source.index];

    // If the task is moved to a different category, update it in DB
    if (sourceCategory !== destCategory) {
      const updatedTask = { category: destCategory };

      updateTaskMutation.mutate({
        id: draggedTask._id,
        updatedData: updatedTask,
      });
    }
  };

  return (
    <div className="flex space-x-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(columns).map(([category, tasks]) => (
          <TaskColumn key={category} title={category} tasks={tasks} />
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskDashboard;





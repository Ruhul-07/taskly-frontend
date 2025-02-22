import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-bold text-gray-700 mb-4">{title}</h2>
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-full space-y-4"
          >
            {tasks.map((task, index) => (
              <TaskCard key={task._id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskColumn;

import AddTaskForm from "../components/AddTaskForm";
import TaskDashboard from "../components/TaskDashBoard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto bg-slate-100 shadow-2xl rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Task Management
        </h1>

        {/* Add Task Form Section */}
        <div className="mb-6 p-6 bg-blue-50 shadow-md rounded-xl">
          <AddTaskForm />
        </div>

        {/* Task Dashboard Section */}
        <div className="p-6 bg-purple-400 shadow-md rounded-xl">
          <TaskDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


// import AddTaskForm from "../components/AddTaskForm";
// import TaskDashboard from "../components/TaskDashBoard";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-8">
//       <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">
//         <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
//           Task Management
//         </h1>
//         <div className="mb-6 p-4 bg-gray-50 shadow-md rounded-lg">
//           <AddTaskForm />
//         </div>
//         <div className="p-4 bg-gray-50 shadow-md rounded-lg">
//           <TaskDashboard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import AddTaskForm from "../components/AddTaskForm";
// import TaskDashboard from "../components/TaskDashBoard";

// const Dashboard = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold text-center mb-6">Task Management</h1>
//       <AddTaskForm></AddTaskForm>
//       <TaskDashboard></TaskDashboard>
//     </div>
//   );
// };

// export default Dashboard;

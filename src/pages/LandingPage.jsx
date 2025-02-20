import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center min-h-96 pt-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Organize Your Tasks, Boost Your Productivity
        </h1>
        <p className="text-lg mb-6 max-w-xl">
          A modern and easy-to-use task management tool to help you stay on top of your work.
        </p>
        <button
          onClick={() => navigate("/signUp")}
          className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-200 transition transform hover:scale-105"
        >
          Get Started for Free
        </button>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose TaskManager?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Simple & Fast</h3>
              <p className="text-gray-600">Easily create, update, and track your tasks in real time.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Drag & Drop</h3>
              <p className="text-gray-600">Move tasks between categories with a simple drag-and-drop feature.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-2">Stay Organized</h3>
              <p className="text-gray-600">Manage your to-dos efficiently and never miss a deadline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Taskly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

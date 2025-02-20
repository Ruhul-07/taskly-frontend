import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full z-10">
      <h1 className="text-2xl font-bold text-blue-600">Taskly</h1>
      <button
        onClick={() => navigate("/signUp")}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;

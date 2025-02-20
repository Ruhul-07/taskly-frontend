import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
  };

  const signInWithGoogle = () => {
    googleSignIn()
    .then(result => {
        console.log(result)
        navigate("dashboard")
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Sign In</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSignUp} className="mt-6">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <button
            // type="submit"
            onClick={signInWithGoogle}
            className="mt-6 w-full bg-green-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In With Google
          </button>

        <p className="mt-4 text-gray-600 text-center">
          Not an account?{" "}
          <a href="/signUP" className="text-blue-600 hover:underline">
            SignUp here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

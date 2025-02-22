import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>
  }
]);
export default router;

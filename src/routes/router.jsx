import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

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
  }
]);
export default router;

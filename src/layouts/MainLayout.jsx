import { Outlet } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const MainLayout = () => {
    return (
        <div>
            <LandingPage></LandingPage>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import MainNav from "../pages/shared/Navbar/MainNav";

 

const MainLayout = () => {
    return (
        <div>
            <MainNav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Layout = ()=>{
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <Outlet/>
            {location.pathname !== '/login' && location.pathname !== '/register' && <Footer/>}
        </div>
    )
}
export default Layout;
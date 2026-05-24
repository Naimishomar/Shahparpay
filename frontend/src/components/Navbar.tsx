import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const location = useLocation();

    if (location.pathname === "/login" || location.pathname === "/register") {
        return null;
    }
    
    return(
        <div className={`fixed z-50 w-[90%] left-[5%] top-[2%] rounded-[2rem] flex justify-between items-center px-5 md:px-6 py-3 border border-white/50 shadow-md bg-white/60 backdrop-blur-lg`}>
            
            <img src="https://shahparpay.com/assets/shahparasset/img/wl_logo_black.png" alt="shahparpay logo" className="h-7 md:h-8 object-contain cursor-pointer" onClick={()=> navigate("/")} />
            
            <div className="hidden xl:flex items-center gap-6">
                <button onClick={()=> navigate('/')} className={`cursor-pointer hover:text-gray-600 active:text-gray-800 transition-colors text-sm font-semibold ${location.pathname === "/" ? "text-blue-500" : ""}`}>Home</button>
                <button onClick={() => navigate("/about")} className={`cursor-pointer hover:text-gray-600 active:text-gray-800 transition-colors text-sm font-semibold ${location.pathname === "/about" ? "text-blue-500" : ""}`}>About ShahparPay</button>
                <button onClick={() => navigate("/services")} className={`text-white px-5 py-2 rounded-full cursor-pointer hover:shadow-lg transition-all text-sm font-semibold ${location.pathname === "/services" ? "bg-blue-600 shadow-md" : "bg-black hover:bg-gray-800"}`}>Our Services</button>
                <button className="cursor-pointer hover:text-gray-600 active:text-gray-800 transition-colors text-sm font-semibold">Product & Solutions</button>
                <button onClick={() => navigate("/contact")} className={`cursor-pointer hover:text-gray-600 active:text-gray-800 transition-colors text-sm font-semibold ${location.pathname === "/contact" ? "text-blue-500" : ""}`}>Contact Us</button>
            </div>
            
            <div className="hidden xl:flex gap-2">
                { loading  ? (
                    <div className="text-md font-semibold px-4 py-2 rounded-full text-white bg-black cursor-pointer hover:bg-gray-900 active:bg-black">Loading...</div>
                ) : (
                    user ? (
                        <button onClick={()=> navigate('/profile')} className="text-md font-semibold px-4 py-2 rounded-full text-white bg-blue-500 cursor-pointer hover:bg-blue-600 active:bg-blue-500">{user?.retailerId}</button>
                    ) : (
                        <button onClick={()=> navigate('/login')} className="text-md font-semibold px-4 py-2 rounded-full text-white bg-blue-500 cursor-pointer hover:bg-blue-600 active:bg-blue-500">Login</button>
                    )
                )}
                {
                    location.pathname !== "/dashboard" && (
                        <button onClick={()=> navigate("/dashboard")} className="text-md font-semibold px-4 py-2 rounded-full text-white bg-black cursor-pointer hover:bg-gray-900 active:bg-black">{user ? "Dashboard" : "Get Started"}</button>
                    )
                }
            </div>

            <div className="xl:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-blue-600 focus:outline-none p-1">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-[120%] left-0 w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 flex flex-col p-5 gap-3 xl:hidden">
                    <button onClick={()=> { navigate('/'); setIsOpen(false); }} className={`text-left text-sm font-semibold p-3 rounded-xl hover:bg-gray-50 transition-colors ${location.pathname === "/" ? "text-blue-600 bg-blue-50/50" : "text-gray-700"}`}>Home</button>
                    <button onClick={() => { navigate("/about"); setIsOpen(false); }} className={`text-left text-sm font-semibold p-3 rounded-xl hover:bg-gray-50 transition-colors ${location.pathname === "/about" ? "text-blue-600 bg-blue-50/50" : "text-gray-700"}`}>About ShahparPay</button>
                    <button onClick={() => { navigate("/services"); setIsOpen(false); }} className={`text-left text-sm font-semibold p-3 rounded-xl hover:bg-gray-50 transition-colors ${location.pathname === "/services" ? "text-blue-600 bg-blue-50/50" : "text-gray-700"}`}>Our Services</button>
                    <button onClick={() => { setIsOpen(false); }} className="text-left text-sm font-semibold p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700">Product & Solutions</button>
                    <button onClick={() => { navigate("/contact"); setIsOpen(false); }} className={`text-left text-sm font-semibold p-3 rounded-xl hover:bg-gray-50 transition-colors ${location.pathname === "/contact" ? "text-blue-600 bg-blue-50/50" : "text-gray-700"}`}>Contact Us</button>
                    
                    <div className="border-t border-gray-100 my-2"></div>
                    
                    <div className="flex flex-col gap-3">
                        { loading  ? (
                            <div className="text-center text-sm font-semibold px-4 py-3 rounded-xl text-white bg-gray-500">Loading...</div>
                        ) : (
                            user ? (
                                <button onClick={()=> { navigate('/profile'); setIsOpen(false); }} className="text-center text-sm font-semibold px-4 py-3 rounded-xl text-white bg-blue-500 hover:bg-blue-600">Profile ({user?.retailerId})</button>
                            ) : (
                                <button onClick={()=> { navigate('/login'); setIsOpen(false); }} className="text-center text-sm font-semibold px-4 py-3 rounded-xl text-white bg-blue-500 hover:bg-blue-600">Login</button>
                            )
                        )}
                        {
                            location.pathname !== "/dashboard" && (
                                <button onClick={()=> { navigate("/dashboard"); setIsOpen(false); }} className="text-center text-sm font-semibold px-4 py-3 rounded-xl text-white bg-black hover:bg-gray-900">{user ? "Dashboard" : "Get Started"}</button>
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100">
                <p className="text-2xl text-gray-600 font-medium bg-white/60 backdrop-blur-xl px-10 py-6 rounded-3xl border border-white">Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 flex justify-center items-start bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100 px-6">
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-white">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-40 relative">
                    <div className="absolute -bottom-16 left-10 w-32 h-32 bg-white rounded-full flex justify-center items-center shadow-xl border-4 border-white text-5xl font-extrabold text-blue-600 uppercase">
                        {user.name.charAt(0)}
                    </div>
                </div>

                <div className="pt-24 pb-12 px-10 md:px-14">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
                            <p className="text-lg text-gray-500 font-medium mt-1">Retailer ID: <span className="text-blue-600 font-bold">{user.retailerId || "N/A"}</span></p>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition-all px-8 py-3 rounded-full font-bold shadow-sm border border-red-100 hover:shadow-md flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                            </svg>
                            Logout
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100 hover:shadow-lg hover:bg-white transition-all duration-300">
                            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Info
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 font-semibold">Email Address</p>
                                    <p className="text-gray-900 font-bold text-lg">{user.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 font-semibold">Phone Number</p>
                                    <p className="text-gray-900 font-bold text-lg">+91 {user.phone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100 hover:shadow-lg hover:bg-white transition-all duration-300">
                            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Location Details
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 font-semibold">Address</p>
                                    <p className="text-gray-900 font-bold text-lg">{user.address}</p>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1 font-semibold">City</p>
                                        <p className="text-gray-900 font-bold text-base">{user.city}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1 font-semibold">State</p>
                                        <p className="text-gray-900 font-bold text-base">{user.state}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1 font-semibold">ZIP</p>
                                        <p className="text-gray-900 font-bold text-base">{user.zip}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
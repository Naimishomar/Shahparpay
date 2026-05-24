import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const loginImages = [
    "https://rnfiservices.com/images/relipay-banner-1.png",
    "https://rnfiservices.com/images/relipay-banner.png",
    "https://rnfiservices.com/images/relipay-banner-2.png"
];

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setImageIndex((prevIndex) =>
                    prevIndex === loginImages.length - 1 ? 0 : prevIndex + 1
                );
                setIsTransitioning(false);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) {
            toast.error("Please agree to the Terms & Conditions");
            return;
        }
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            setLoading(true);
            const { data } = await api.post("/retailer/login", { email, password });
            
            if (data.success) {
                toast.success(data.message || "Login successful!");
                await login(data.token);
                navigate("/dashboard");
            } else {
                toast.error(data.message || "Login failed");
            }
        } catch (error: any) {
            console.error("Login error:", error);
            toast.error(error.response?.data?.message || "Something went wrong during login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-[#fff]">
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-2xl blur-3xl bg-gradient-to-r from-blue-200 via-blue-200 to-blue-200"></div>
            <div className="flex flex-col justify-center items-center px-8 lg:px-16 relative h-full">
                <div className="w-full max-w-md flex flex-col items-center pt-8">
                    <div className="mb-5 px-6 py-2">
                        <img src="https://shahparpay.com/assets/shahparasset/img/wl_logo_black.png" alt="ShahparPay Logo" className="h-10" />
                    </div>

                    <h2 className="text-3xl font-bold text-[#1e2330] tracking-tight mb-1">
                        Retailer Login
                    </h2>
                    <p className="text-[#6B7280] text-[14px] mb-6 font-medium">
                        Please enter your details below
                    </p>

                    <form className="w-full space-y-4" onSubmit={handleLogin}>
                        <div>
                            <div className="relative border-[1.5px] border-[#3741A1] rounded-2xl bg-white px-4 py-2 shadow-[0_4px_12px_rgba(55,65,161,0.06)] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                <label className="block text-[11px] font-bold text-[#3741A1] mb-1">
                                    Agent ID / Email
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[16px] font-medium bg-transparent outline-none h-6"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-2 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                <label className="block text-[11px] font-bold text-gray-500 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[16px] font-medium bg-transparent outline-none h-6"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-start mt-2 mb-6">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="w-5 h-5 text-[#3741A1] bg-[#3741A1] border-0 rounded focus:ring-0 cursor-pointer"
                                />
                            </div>
                            <div className="ml-2 text-[13px] pt-0.2">
                                <label htmlFor="terms" className="font-medium text-[#1e2330] cursor-pointer">
                                    I agree to <span className="text-[#3741A1] font-bold underline decoration-1 underline-offset-2 hover:text-[#2d3674]">Terms & Conditions</span> , <span className="text-[#3741A1] font-bold underline decoration-1 underline-offset-2 hover:text-[#2d3674]">Privacy Policy</span> and <span className="text-[#3741A1] font-bold underline decoration-1 underline-offset-2 hover:text-[#2d3674]">EULA</span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3.5 px-4 text-[16px] font-bold rounded-2xl text-white shadow-lg ${
                                loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-xl transition-all duration-300"
                            }`}
                        >
                            {loading ? "Processing..." : "Proceed"}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center w-full max-w-[200px]">
                        <div className="border-t-[1.5px] border-gray-300 flex-grow"></div>
                        <span className="px-4 text-[12px] font-bold text-[#1e2330]">OR</span>
                        <div className="border-t-[1.5px] border-gray-300 flex-grow"></div>
                    </div>

                    <div className="mt-3 text-center text-[14px] font-medium text-[#6B7280]">
                        Don't have an account? <Link to="/register" className="text-[#3741A1] font-bold hover:underline underline-offset-2">Register now</Link>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex relative bg-white items-center justify-center overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-2xl blur-3xl bg-gradient-to-r from-blue-200 via-blue-200 to-blue-200"></div>
                <div className="relative w-full h-full max-w-3xl flex items-center justify-center p-10">
                    {loginImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Shahpar Pay Info Slide ${index + 1}`} 
                            className={`absolute w-[80%] object-contain transition-opacity duration-700 ${index === imageIndex
                                    ? isTransitioning ? "opacity-100 fade-in scale-100" : "opacity-100 scale-100" : isTransitioning ? "opacity-0 fade-out scale-95" : "opacity-0 scale-95"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Login;
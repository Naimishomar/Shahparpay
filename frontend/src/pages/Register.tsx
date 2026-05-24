import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const registerImages = [
    "https://rnfiservices.com/images/relipay-banner-1.png",
    "https://rnfiservices.com/images/relipay-banner.png",
    "https://rnfiservices.com/images/relipay-banner-2.png"
];

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setImageIndex((prevIndex) =>
                    prevIndex === registerImages.length - 1 ? 0 : prevIndex + 1
                );
                setIsTransitioning(false);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.address || !formData.city || !formData.state || !formData.zip) {
            toast.error("Please fill in all fields.");
            return;
        }

        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }
        
        if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit Indian phone number starting with 6-9.");
            return;
        }

        try {
            setLoading(true);
            const { data } = await api.post("/retailer/register", formData);
            
            if (data.success) {
                toast.success(data.message || "Registration successful!");
                await login(data.token);
                navigate("/dashboard");
            } else {
                toast.error(data.message || "Registration failed");
            }
        } catch (error: any) {
            console.error("Registration error:", error);
            toast.error(error.response?.data?.message || "Something went wrong during registration");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#F6F7FA]">
            <div className="lg:col-span-7 flex flex-col justify-center items-center px-8 lg:px-12 relative h-full">
                <div className="w-full max-w-2xl flex flex-col items-center pt-4">
                    <div className="mb-0 px-6 py-1">
                        <img src="https://shahparpay.com/assets/shahparasset/img/wl_logo_black.png" alt="ShahparPay Logo" className="h-8" />
                    </div>

                    <h2 className="text-[1.5rem] font-bold text-[#1e2330] tracking-tight mb-0.5">
                        Create an Account
                    </h2>
                    <p className="text-[#6B7280] text-[13px] mb-5 font-medium">
                        Join ShahparPay as a Retailer
                    </p>

                    <form className="w-full space-y-2.5" onSubmit={handleRegister}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            
                            <div className="space-y-2.5">
                                <div>
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            Full Name
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            Email Address
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <input
                                            name="phone"
                                            type="text"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="9876543210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            Password
                                        </label>
                                        <input
                                            name="password"
                                            type="password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <div>
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            Street Address
                                        </label>
                                        <input
                                            name="address"
                                            type="text"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="123 Main St"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            City
                                        </label>
                                        <input
                                            name="city"
                                            type="text"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="Mumbai"
                                        />
                                    </div>
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            State
                                        </label>
                                        <input
                                            name="state"
                                            type="text"
                                            required
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="Maharashtra"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="relative border-[1.5px] border-gray-200 rounded-2xl bg-white px-4 py-1.5 focus-within:border-[#3741A1] focus-within:ring-4 focus-within:ring-[#3741A1]/10 transition-all">
                                        <label className="block text-[10px] font-bold text-gray-500 mb-0.5 uppercase tracking-wide">
                                            ZIP / Postal Code
                                        </label>
                                        <input
                                            name="zip"
                                            type="text"
                                            required
                                            value={formData.zip}
                                            onChange={handleChange}
                                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-400 focus:ring-0 text-[14px] font-medium bg-transparent outline-none h-5"
                                            placeholder="400001"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-3 max-w-sm mx-auto">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 px-4 text-[15px] font-bold rounded-2xl text-white shadow-lg ${
                                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-xl transition-all duration-300"
                                }`}
                            >
                                {loading ? "Processing..." : "Register Account"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-5 flex items-center justify-center w-full max-w-[200px]">
                        <div className="border-t-[1.5px] border-gray-300 flex-grow"></div>
                        <span className="px-4 text-[12px] font-bold text-[#1e2330]">OR</span>
                        <div className="border-t-[1.5px] border-gray-300 flex-grow"></div>
                    </div>

                    <div className="mt-4 text-center text-[13px] font-medium text-[#6B7280]">
                        Already have an account? <Link to="/login" className="text-[#3741A1] font-bold hover:underline underline-offset-2">Sign in instead</Link>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:col-span-5 relative bg-white items-center justify-center overflow-hidden">
                <div className="relative w-full h-full max-w-xl flex items-center justify-center p-10">
                    {registerImages.map((image, index) => (
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

export default Register;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const heroImages = [
    "https://rnfiservices.com/images/relipay-banner-1.png",
    "https://rnfiservices.com/images/relipay-banner.png",
    "https://rnfiservices.com/images/relipay-banner-2.png"
];

const Hero = ()=>{
    const [imageIndex, setImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setImageIndex((prevIndex) =>
                    prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
                );
                setIsTransitioning(false);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 px-2 md:px-5 pt-20 md:pt-10">
            <div className="flex flex-col justify-center items-start pl-5 z-10">
                <h1 className="text-5xl text-start md:text-start md:text-5xl font-bold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Empowering Digital </span> 
                    Transactions, Simplifying Everyday Life
                </h1>
                <p className="text-xl md:text-lg font-medium mt-3 text-gray-700 max-w-full">Empower Your Business with India’s Leading Assisted Banking Network. Deliver Banking and Digital Services from One AI-Powered Platform for Smoother Operations and Higher Earnings.</p>
                <p className="text-xl md:text-lg font-medium mt-3 text-gray-700 max-w-full">Experience seamless, secure, and instant financial services with Shahparpay Solutions Pvt Ltd
— Your trusted fintech partner.</p>
                <div className="mt-8 w-full flex justify-center items-center">
                    <button onClick={() => navigate("/register")} className="bg-black text-white px-14 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-gray-400/40 w-full md:min-w-[340px]">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="relative">
                {heroImages.map((image, index) => (
                    <img key={index} src={image} alt={`Shahpar Pay Banner ${index + 1}`} className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${index === imageIndex
                            ? isTransitioning ? "opacity-100 fade-in" : "opacity-100" : isTransitioning ? "opacity-0 fade-out" : "opacity-0"}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero;
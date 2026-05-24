const row1 = [
    { name: "RBI", sub: "RBI - PPI License", color: "text-amber-600" },
    { name: "BBPS", sub: "Bharat Bill Payment", color: "text-blue-600" },
    { name: "IRCTC", sub: "IRCTC Principal Agency", color: "text-blue-800" },
    { name: "IRDAI", sub: "IRDAI Corporate Agency", color: "text-rose-500" },
    { name: "UIDAI", sub: "AUA/KUA license", color: "text-orange-500" },
    { name: "Kotak", sub: "Kotak Bank", color: "text-red-600" },
];

const row2 = [
    { name: "NSDL", sub: "NSDL Payments Bank", color: "text-gray-700" },
    { name: "AXIS", sub: "AXIS Bank", color: "text-rose-700" },
    { name: "YES", sub: "YES Bank", color: "text-blue-700" },
    { name: "Muthoot", sub: "Muthoot Finance", color: "text-red-600" },
    { name: "Delhivery", sub: "Delhivery", color: "text-black" },
    { name: "CMS", sub: "CMS Commerce", color: "text-indigo-600" },
];

const TrustedBy = () => {
    return (
        <div className="w-full py-4 relative z-10 overflow-hidden">
            <style>
                {`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes scroll-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 40s linear infinite;
                    }
                    .animate-scroll-right {
                        animation: scroll-right 40s linear infinite;
                    }
                    .animate-scroll-left:hover, .animate-scroll-right:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>
            
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Trusted by</span><br/>
                    Banks, Regulators & Industry Experts
                </h2>
            </div>

            <div className="relative w-full overflow-hidden mb-6 pb-3">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50/80 to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scroll-right">
                    {[...row1, ...row1, ...row1, ...row1].map((partner, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-36 md:w-48 h-20 md:h-24 mx-3 flex-shrink-0 group cursor-pointer transition-transform border border-gray-300 rounded-2xl">
                            <h3 className={`text-xl md:text-2xl font-bold mb-1 ${partner.color}`}>{partner.name}</h3>
                            <p className="text-[10px] md:text-xs text-gray-500 font-medium text-center">{partner.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-full overflow-hidden pb-6">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50/80 to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scroll-left">
                    {[...row2, ...row2, ...row2, ...row2].map((partner, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-36 md:w-48 h-20 md:h-24 mx-3 flex-shrink-0 rounded-2xl group cursor-pointer transition-transform bg-white/70">
                            <h3 className={`text-xl md:text-2xl font-bold mb-1 ${partner.color}`}>{partner.name}</h3>
                            <p className="text-[10px] md:text-xs text-gray-500 font-medium text-center">{partner.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;

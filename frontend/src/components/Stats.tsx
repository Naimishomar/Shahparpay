import React from 'react';

const stats = [
    { value: "16.4L+", label: "Banking Agents" },
    { value: "2.56L", label: "Towns Covered" },
    { value: "95%", label: "Pincode Covered" },
    { value: "380L", label: "Customer Transactions" },
    { value: "816L", label: "Semi-Urban Customers" },
    { value: "726L", label: "Districts/Town Customers" },
];

const Stats = () => {
    return (
        <div className="w-full px-10 pt-12 pb-5 relative z-10">
            <div className="max-w-[90rem] mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Empowering New India. </span>
                    Strengthening its backbone
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
                    Millions of Indians in small towns and semi-urban areas trust our agent network for their core banking needs including cash withdrawal, money transfer, bill payment and many other services.
                </p>

                <div className="relative bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full md:w-1/6 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                    <div className="absolute bottom-0 left-0 w-full md:w-1/6 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center group relative lg:border-r border-gray-300/40 last:border-0 cursor-pointer">
                                <h3 className="text-4xl md:text-[2.75rem] font-extrabold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-400 transition-all duration-300 drop-shadow-sm">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-gray-500 font-semibold text-center px-4 leading-relaxed">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;

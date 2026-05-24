
const services = [
    {
        title: "Money Transfer",
        description: "With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        )
    },
    {
        title: "Aadhaar Banking",
        description: "Our Aadhaar banking services - Cash Withdrawal, Balance Enquiry, Aadhaar Pay, Mini Statement, and Cash Deposit - have made basic banking more accessible for all.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
        )
    },
    {
        title: "Mini ATM",
        description: "Now merchants can set up Micro-ATMs and carry out bank transactions such as making balance inquiries, cash withdrawals and obtaining a mini-statement for their customers.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        )
    },
    {
        title: "Digital Payment",
        description: "We have introduced a wide range of digital payment solutions to empower businesses to conduct swift and secure business transactions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Utility Payments",
        description: "We provide services such as mobile recharges and Bill Payments to fulfil walk-in customers' most basic and recurring payment needs via assisted model.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        title: "Travel Services",
        description: "We are the principal agent of IRCTC and also provide discounted prices on Air Travel and also Planning to offer complete travel packages very soon.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "PAN Card",
        description: "With the help of RNFI's pan card application services in association with Protean E Gov services, an individual can obtain a new PAN card and can also rectify their pan card details.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
        )
    },
    {
        title: "ITR Filing",
        description: "Paying tax was never so easy, but we in RNFI have made it even easier for every Bhartiya. - “Paying Tax is paying Duty”.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    }
];

const OurServices = () => {
    return (
        <div className="w-full px-10 py-14">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-10 flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Our Services</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-4xl italic leading-relaxed">
                        At Shahparpay Solutions, we offer a robust suite of fintech services including AEPS for Aadhaar-based banking, DMT for fast and secure money transfers, mobile recharge for all major operators, and BBPS for seamless bill payments — all designed to empower businesses and enhance user convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start group cursor-pointer bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:bg-white/60 transition-all duration-300">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-black flex justify-center items-center text-white shadow-lg shadow-gray-400/50 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;

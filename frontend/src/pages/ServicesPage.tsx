import { useEffect } from 'react';

const services = [
    {
        title: "Money Transfer",
        description: "With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network.",
        image: "https://images.unsplash.com/photo-1580519542036-ed474256eb91?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Aadhaar Banking",
        description: "Our Aadhaar banking services - Cash Withdrawal, Balance Enquiry, Aadhaar Pay, Mini Statement, and Cash Deposit - have made basic banking more accessible for all.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Mini ATM",
        description: "Now merchants can set up Micro-ATMs and carry out bank transactions such as making balance inquiries, cash withdrawals and obtaining a mini-statement for their customers.",
        image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Digital Payment",
        description: "We have introduced a wide range of digital payment solutions to empower businesses to conduct swift and secure business transactions.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Utility Payments",
        description: "We provide services such as mobile recharges and Bill Payments to fulfil walk-in customers' most basic and recurring payment needs via assisted model.",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Travel Services",
        description: "We are the principal agent of IRCTC and also provide discounted prices on Air Travel and also Planning to offer complete travel packages very soon.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "PAN Card",
        description: "With the help of RNFI's pan card application services in association with Protean E Gov services, an individual can obtain a new PAN card and can also rectify their pan card details.",
        image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "ITR Filing",
        description: "Paying tax was never so easy, but we in RNFI have made it even easier for every Bhartiya. - “Paying Tax is paying Duty”.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
    }
];

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100 pt-36 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-[4rem] font-bold mb-6 text-gray-900 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Premium Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore our comprehensive suite of fintech solutions designed to empower your business and simplify digital transactions.
                    </p>
                </div>

                <div className="space-y-10">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`bg-white/60 p-8 lg:p-12 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                
                                <div className="w-full lg:w-1/2">
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 group">
                                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="w-full h-[350px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <div className={`inline-block w-20 h-1.5 mb-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full ${!isEven ? 'lg:ml-auto' : ''}`}></div>
                                    <h2 className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight ${!isEven ? 'lg:text-right' : ''}`}>
                                        {service.title}
                                    </h2>
                                    <p className={`text-lg md:text-xl text-gray-600 leading-relaxed font-medium ${!isEven ? 'lg:text-right' : ''}`}>
                                        {service.description}
                                    </p>
                                </div>
                                
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default ServicesPage;

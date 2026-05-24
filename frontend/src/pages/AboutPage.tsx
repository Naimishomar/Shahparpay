import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100 pt-36 pb-24 px-6">
            <div className="max-w-5xl mx-auto text-center bg-white/60 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 tracking-tight">
                    About Us
                </h1>
                <div className="space-y-8 text-lg md:text-[1.15rem] text-gray-700 leading-relaxed font-medium">
                    <p>
                        At Shahparpay Solutions Pvt Ltd, we empower retailers, distributors, and businesses with robust, secure, and scalable fintech solutions. Our platform offers a comprehensive suite of services including AEPS (Aadhaar Enabled Payment System), Domestic Money Transfer (DMT), Mobile & DTH Recharge, and BBPS (Bharat Bill Payment System) — all through a user-friendly dashboard.
                    </p>
                    <p>
                        With a vision to bridge the digital gap and enable financial inclusion across India, we are committed to delivering instant transactions, transparent reporting, and 24/7 support. Whether you're a local store owner or a large distributor, Shahparpay Solutions Pvt Ltd helps you serve your customers better and earn more on every transaction.
                    </p>
                    <p className="font-bold text-gray-900 mt-10 text-xl md:text-2xl pt-8 border-t border-gray-200">
                        Join thousands of trusted partners and grow your digital service business with us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

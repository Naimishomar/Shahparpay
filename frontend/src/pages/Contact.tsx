const Contact = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-5 relative overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100">
            <div className="absolute top-20 -left-20 w-[40rem] h-[40rem] bg-orange-400 rounded-full filter blur-[128px] opacity-10 -z-10"></div>
            <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-rose-400 rounded-full filter blur-[128px] opacity-10 -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Get in Touch</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions about our digital platform or banking services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/50 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-200/50">
                    
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Whether you're interested in joining our network, exploring our API solutions, or just have a general inquiry, our team is ready to assist you.
                            </p>
                        </div>
                        
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center text-white shrink-0 shadow-md">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Corporate Office</h4>
                                <p className="text-gray-600 mt-1 leading-relaxed">Shahpar Global Knowledge Park, 19A & 19B,<br/>Sector-125, Noida-201301, UP</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center text-white shrink-0 shadow-md">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Email Us</h4>
                                <p className="text-gray-600 mt-1">support@shahparpay.com</p>
                                <p className="text-gray-600">sales@shahparpay.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center text-white shrink-0 shadow-md">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Call Us</h4>
                                <p className="text-gray-600 mt-1">+91 12345 67890</p>
                                <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 relative">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-colors bg-gray-50/50" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-colors bg-gray-50/50" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-colors bg-gray-50/50" placeholder="How can we help you?" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-colors bg-gray-50/50 resize-none" placeholder="Write your message here..."></textarea>
                            </div>
                            <button className="w-full bg-black text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-gray-400/50 hover:-translate-y-1 hover:shadow-gray-500/50 transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

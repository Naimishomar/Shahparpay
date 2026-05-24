const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 pt-16 text-sm">
            <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <div className="col-span-1 lg:col-span-2 flex flex-col space-y-6 pr-8">
                    <div className="bg-white/95 px-4 py-3 rounded-lg inline-block w-max shadow-sm">
                        <img src="https://shahparpay.com/assets/shahparasset/img/wl_logo_black.png" alt="ShahparPay Logo" className="w-40" />
                    </div>
                    <div>
                        <p className="font-semibold text-white text-base">Shahpar Pay Limited</p>
                        <p className="mt-1 leading-relaxed text-gray-400">A subsidiary of Shahpar Technologies Limited</p>
                        <p className="mt-1 italic text-gray-400">(BSE- 517214) (NSE - SHAHPAR)</p>
                    </div>
                    <div>
                        <p className="font-semibold text-white">Corporate Office</p>
                        <p className="mt-1 leading-relaxed text-gray-400">Shahpar Global Knowledge Park, 19A & 19B,<br/>Sector-125, Noida-201301, UP</p>
                    </div>
                    <div className="flex gap-4 items-center flex-wrap pt-2">
                        <div className="bg-black text-white border border-gray-600 rounded-md px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 3.5v17a.5.5 0 00.75.43l14-8.5a.5.5 0 000-.86l-14-8.5A.5.5 0 004 3.5z" className="text-green-400" />
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-[10px] leading-none text-gray-300">GET IT ON</span>
                                <span className="text-sm font-semibold leading-tight">Google Play</span>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold px-5 py-2.5 rounded-md hover:bg-gray-200 transition-colors">
                            Lodge a Complaint
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Company</h3>
                    <ul className="space-y-4 text-[13px]">
                        <li><a href="#" className="hover:text-white transition-colors">Our Philosophy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Investor Centre</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Life at Shahpar</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                    </ul>
                </div>

                <div className="pt-0 lg:pt-10">
                    <ul className="space-y-4 text-[13px]">
                        <li><a href="#" className="hover:text-white transition-colors">Aadhaar Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Policies</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Service Charges</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Grievance</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Case-Study</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Shahpar Pay - PPI</h3>
                    <ul className="space-y-4 text-[13px]">
                        <li><a href="#" className="hover:text-white transition-colors">Shahpar Pay T&C</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Shahpar Pay FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Schedule of Fee</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Limit on Shahpar Pay App</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">List of Authorized Agents</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-16 py-3 bg-[#222222]">
                <div className="max-w-[90rem] mx-auto px-6 text-center text-gray-400 text-xs">
                    Copyright © 2025 Shahpar Pay Limited. | A subsidiary of Shahpar Technologies Limited | All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
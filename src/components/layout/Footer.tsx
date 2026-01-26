import Link from "next/link"
import { companyInfo } from "@/lib/data"
import { ArrowUpRight, MessageCircle } from "lucide-react"

export function Footer() {
    return (
        <div className="w-full bg-background px-4 md:px-8 pb-8 pt-12">
            <footer className="w-full bg-[#020617] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                    {/* Left Column: Branding and Nav */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                                {/* Placeholder for Logo if SVG is complex, else using text as backup or image */}
                                <span className="text-[#020617] font-bold text-xl">AT</span>
                            </div>
                            <h2 className="text-2xl font-medium tracking-wide">
                                Shaping Futures with Innovation
                            </h2>
                        </div>

                        <nav className="flex flex-col space-y-4 text-gray-300">
                            <Link href="/" className="hover:text-[#f6c804] transition-colors text-lg">Home</Link>
                            <Link href="/colleges" className="hover:text-[#f6c804] transition-colors text-lg">Colleges</Link>
                            <Link href="/exams" className="hover:text-[#f6c804] transition-colors text-lg">Exams</Link>
                            <Link href="/blogs" className="hover:text-[#f6c804] transition-colors text-lg">Blogs</Link>
                        </nav>
                    </div>

                    {/* Right Column: Map and Contact */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Office Location</p>
                            <p className="text-lg leading-relaxed">{companyInfo.address.full}</p>
                        </div>

                        {/* Wide Map Widget */}
                        <div className="w-full h-48 rounded-2xl overflow-hidden border border-gray-800 relative group">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=GN-34%2F1%2C%20AURORA%20WATER%20FRONT%2C%20Unit%2021%2C%20Salt%20Lake%2C%20Kolkata%20700091&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                title="Office Location"
                                className="filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                            ></iframe>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-2">
                            <Link href="/contact" className="flex-1">
                                <button className="w-full bg-[#1e293b] hover:bg-[#f6c804] hover:text-[#020617] text-[#f6c804] border border-[#f6c804]/20 py-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 group">
                                    Contact Us
                                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                            </Link>
                            <a
                                href="https://wa.me/917815052090"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-[#1e293b] hover:bg-[#f6c804] hover:text-[#020617] text-[#f6c804] border border-[#f6c804]/20 p-4 rounded-xl transition-all duration-300" aria-label="WhatsApp">
                                    <MessageCircle className="h-6 w-6" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© All copyrights by {companyInfo.name}</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy.</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms & Conditions.</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { companyInfo } from "@/lib/data"
import { ArrowUpRight, Youtube, Facebook } from "lucide-react"

export function Footer() {
    return (
        <div className="w-full bg-background px-4 md:px-8 pb-8">
            <footer className="w-full bg-[#020617] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                    {/* Left Column: Branding and Nav */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                                <Image
                                    src="/footer-logo.jpg"
                                    alt="Akash Talks Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-2xl font-medium tracking-wide">
                                Shaping Futures with Innovation
                            </h2>
                        </div>

                        <nav className="flex flex-col space-y-4 text-gray-300">
                            <Link href="/" className="hover:text-[#f6c804] transition-colors text-lg w-fit">Home</Link>
                            <Link href="/about" className="hover:text-[#f6c804] transition-colors text-lg w-fit">About Us</Link>
                            <Link href="/colleges" className="hover:text-[#f6c804] transition-colors text-lg w-fit">Colleges</Link>
                            <Link href="/exams" className="hover:text-[#f6c804] transition-colors text-lg w-fit">Exams</Link>
                        </nav>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://www.instagram.com/akash_talks/?utm_source=ig_profile_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/profile.php?id=61582065763156"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://x.com/akash_talks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-black hover:text-white transition-all duration-300"
                                aria-label="X"
                            >
                                {/* X (Twitter) Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@akash_talks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-red-600 hover:text-white transition-all duration-300"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Map and Contact */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Office Location</p>
                            <p className="text-lg leading-relaxed">{companyInfo.address.full}</p>
                        </div>

                        {/* Interactive Map Widget */}
                        <div className="w-full h-48 rounded-2xl overflow-hidden border border-gray-800 relative" style={{ touchAction: "auto" }}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="yes"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.4123456!3d22.5791234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b4e3f41cd3%3A0x2c7c8b8b8b8b8b8b!2sAurora%20Waterfront!5e0!3m2!1sen!2sin!4v1706961600000!5m2!1sen!2sin"
                                title="Office Location"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                allow="fullscreen"
                                style={{
                                    pointerEvents: "auto",
                                    touchAction: "auto"
                                }}
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
                                <button className="bg-[#1e293b] hover:bg-[#25D366] hover:text-white text-[#25D366] border border-[#25D366]/20 p-4 rounded-xl transition-all duration-300" aria-label="WhatsApp">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
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


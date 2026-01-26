import Link from "next/link"
import { companyInfo } from "@/lib/data"
import { Phone, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-lg">{companyInfo.name}</h3>
                        <p className="text-sm text-muted-foreground">{companyInfo.tagline}</p>
                        <p className="text-sm text-muted-foreground">
                            {companyInfo.address.line1}<br />
                            {companyInfo.address.line2}<br />
                            {companyInfo.address.city} - {companyInfo.address.pincode}
                        </p>

                        {/* Google Map Widget */}
                        <div className="w-full h-48 rounded-lg overflow-hidden border border-border mt-4">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=GN-34%2F1%2C%20AURORA%20WATER%20FRONT%2C%20Unit%2021%2C%20Salt%20Lake%2C%20Kolkata%20700091&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                title="Office Location"
                                className="filter grayscale hover:grayscale-0 transition-all duration-300"
                            ></iframe>
                        </div>
                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://www.instagram.com/akash_talks/?utm_source=ig_profile_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
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
                                className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/akash_talks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 hover:bg-sky-200 dark:hover:bg-sky-900/50 transition-colors"
                                aria-label="Twitter"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                            <a
                                href="https://youtube.com/@featuredColleges"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                                aria-label="YouTube Channel"
                            >
                                <Youtube className="h-4 w-4" />
                            </a>
                            <a
                                href="https://instagram.com/learn_with_akash"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                                aria-label="Second Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h3 className="font-bold">Quick Links</h3>
                        <div className="flex flex-col space-y-2">
                            <Link href="/colleges" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Colleges
                            </Link>
                            <Link href="/exams" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Exams
                            </Link>
                            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Contact Us
                            </Link>
                            <a href="https://akashtalks.classx.co.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Our Courses
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.akash.talks" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                Download App
                            </a>
                        </div>
                    </div>

                    {/* States */}
                    <div className="space-y-3">
                        <h3 className="font-bold">States We Cover</h3>
                        <div className="flex flex-col space-y-1">
                            {companyInfo.states.slice(0, 4).map((state) => (
                                <span key={state} className="text-sm text-muted-foreground">{state}</span>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3">
                        <h3 className="font-bold">Contact</h3>
                        <div className="space-y-2">
                            {companyInfo.phones.map((phone) => (
                                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                    <Phone className="h-4 w-4" />
                                    {phone}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

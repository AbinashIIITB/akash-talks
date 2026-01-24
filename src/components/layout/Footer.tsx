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
                            {companyInfo.address.city}<br />
                            {companyInfo.address.state} - {companyInfo.address.pincode}
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            <a 
                                href={companyInfo.youtube} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                                aria-label="YouTube Channel"
                            >
                                <Youtube className="h-4 w-4" />
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
                            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Contact Us
                            </Link>
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

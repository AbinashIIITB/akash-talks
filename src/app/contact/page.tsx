import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function ContactPage() {
    return (
        <div className="container px-4 py-12 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Get in touch with our expert counselors for personalized guidance on B.Tech admissions.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Visit Us</h3>
                            <p className="text-muted-foreground">
                                {companyInfo.address.line1}<br />
                                {companyInfo.address.line2}<br />
                                {companyInfo.address.city} - {companyInfo.address.pincode}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Email Us</h3>
                            <p className="text-muted-foreground">
                                {companyInfo.email}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Call Us</h3>
                            <p className="text-muted-foreground">
                                {companyInfo.phones[0]}<br />
                                {companyInfo.phones[1]}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Office Timing</h3>
                            <p className="text-muted-foreground">
                                10:00 am to 6:00 pm
                            </p>
                        </div>
                    </div>

                    {/* States We Cover */}
                    <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                        <h3 className="text-lg font-bold mb-3">States We Cover</h3>
                        <div className="flex flex-wrap gap-2">
                            {companyInfo.states.map((state) => (
                                <span key={state} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                    {state}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6 bg-card border rounded-xl p-8 shadow-sm">
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-2xl font-bold">Send us a message</h2>
                        <p className="text-sm text-muted-foreground">We usually respond within 24 hours.</p>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="Akash" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Sharma" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="akash@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea className="min-h-[120px]" id="message" placeholder="How can we help you?" />
                        </div>
                        <Button className="w-full text-md font-bold" size="lg">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

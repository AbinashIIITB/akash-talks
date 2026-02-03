"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, Loader2, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { useCounsellingDialog } from "@/components/providers/CounsellingDialogProvider";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const { openDialog } = useCounsellingDialog();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong');
            }

            setSubmitStatus('success');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-start justify-center pt-24 pb-12 px-4">
            <div className="container max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Get in touch with our expert counselors for personalized guidance on B.Tech admissions.
                        </p>
                    </div>
                    <Button
                        onClick={openDialog}
                        className="mt-4 bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold px-8 py-3 rounded-full"
                        size="lg"
                    >
                        <Calendar className="mr-2 h-5 w-5" />
                        Book a Free Consultation
                    </Button>
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

                        {submitStatus === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 space-y-4">
                                <CheckCircle className="h-16 w-16 text-green-500" />
                                <h3 className="text-xl font-bold text-green-600">Thank You!</h3>
                                <p className="text-muted-foreground text-center">
                                    Your message has been received. We will contact you soon.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => setSubmitStatus('idle')}
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name <span className="text-red-500">*</span></Label>
                                        <Input id="firstName" name="firstName" placeholder="Akash" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                                        <Input id="phone" name="phone" placeholder="+91 98765 43210" type="tel" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name <span className="text-muted-foreground text-xs font-normal">(Optional)</span></Label>
                                    <Input id="lastName" name="lastName" placeholder="Sharma" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email <span className="text-muted-foreground text-xs font-normal">(Optional)</span></Label>
                                    <Input id="email" name="email" placeholder="akash@example.com" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message <span className="text-muted-foreground text-xs font-normal">(Optional)</span></Label>
                                    <Textarea className="min-h-[120px]" id="message" name="message" placeholder="How can we help you?" />
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
                                        <AlertCircle className="h-5 w-5" />
                                        <span className="text-sm">{errorMessage}</span>
                                    </div>
                                )}

                                <Button
                                    className="w-full text-md font-bold"
                                    size="lg"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

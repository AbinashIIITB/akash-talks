import { Metadata } from "next";
import { Users, Target, Award, Heart, CheckCircle, Building2, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CursorTrackingCTA } from "@/components/ui/CursorTrackingCTA";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
    title: "About Us - Akash Talks | B.Tech & MBA Admission Guidance",
    description: "Learn about Akash Talks - India's trusted educational consultancy for B.Tech and MBA admissions. We provide expert guidance for admissions in top colleges across West Bengal, Karnataka, Maharashtra, and more.",
    keywords: [
        "about Akash Talks",
        "educational consultancy India",
        "college admission counseling",
        "B.Tech admission guidance",
        "MBA counseling",
        "career counseling India",
    ],
    openGraph: {
        title: "About Us - Akash Talks",
        description: "India's trusted educational consultancy for B.Tech and MBA admissions.",
        url: "https://www.akashtalks.in/about",
        siteName: "Akash Talks",
        locale: "en_IN",
        type: "website",
    },
    alternates: {
        canonical: "https://www.akashtalks.in/about",
    },
};

export default function AboutPage() {
    const stats = [
        { number: "28+", label: "Partner Colleges", icon: Building2 },
        { number: "5000+", label: "Students Placed", icon: GraduationCap },
        { number: "6+", label: "States Covered", icon: Target },
        { number: "10+", label: "Years Experience", icon: Briefcase },
    ];

    const values = [
        {
            icon: Heart,
            title: "Student-First Approach",
            description: "We prioritize your career goals and work tirelessly to match you with the perfect college and course.",
        },
        {
            icon: Target,
            title: "Transparency",
            description: "No hidden fees, no false promises. We provide honest guidance based on your profile and preferences.",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We partner only with reputed institutions that offer quality education and strong placement records.",
        },
        {
            icon: CheckCircle,
            title: "End-to-End Support",
            description: "From college selection to admission confirmation, we guide you through every step of the journey.",
        },
    ];

    const services = [
        "Personalized college recommendations based on your scores and preferences",
        "Application and documentation support",
        "Scholarship and fee financing guidance",
        "Direct admission assistance in partner colleges",
        "Exam preparation tips and resources",
        "Post-admission support and orientation",
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        About <span className="text-[#f6c804]">Akash Talks</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We are India&apos;s trusted educational consultancy dedicated to helping students secure admissions in top engineering and management colleges. With 5+ years of experience, we&apos;ve guided thousands of students towards their dream careers.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-4">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center p-6 bg-card rounded-xl border shadow-sm">
                                <stat.icon className="h-8 w-8 text-[#f6c804] mx-auto mb-3" />
                                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</div>
                                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 bg-secondary/30">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                At Akash Talks, we believe every student deserves access to quality education. Our mission is to bridge the gap between aspiring students and their dream colleges by providing:
                            </p>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-[#f6c804] mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl p-8 border shadow-md">
                            <h3 className="text-xl font-bold mb-4">States We Cover</h3>
                            <div className="flex flex-wrap gap-2">
                                {companyInfo.states.map((state) => (
                                    <span key={state} className="px-4 py-2 bg-[#f6c804]/10 text-[#f6c804] rounded-full text-sm font-medium">
                                        {state}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t">
                                <p className="text-sm text-muted-foreground">
                                    Based in <strong>Kolkata, West Bengal</strong>, we have helped students from across India get admissions in premier institutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4">
                <div className="container max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide us in helping students achieve their educational goals.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                                <value.icon className="h-10 w-10 text-[#f6c804] mb-4" />
                                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="py-16 px-4 bg-secondary/30">
                <div className="container max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Have questions about admissions? Our expert counselors are here to help you make the right choice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button className="bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold px-8 py-3 rounded-full">
                                Contact Us
                            </Button>
                        </Link>
                        <Link href="https://wa.me/919874878782" target="_blank">
                            <Button variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 px-8 py-3 rounded-full">
                                WhatsApp Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section - Cursor Tracking Interactive */}
            <CursorTrackingCTA />
        </div>
    );
}

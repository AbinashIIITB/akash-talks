import { notFound } from "next/navigation";
import Link from "next/link";
import { colleges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    MapPin, Star, Building2, Download, Share2,
    CheckCircle2, Globe, GraduationCap, Briefcase,
    Calendar, Users, DollarSign, BookOpen
} from "lucide-react";

// In Next.js 15, params is a Promise
interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CollegeDetailPage(props: PageProps) {
    const params = await props.params;
    const college = colleges.find((c) => c.slug === params.slug);

    if (!college) {
        notFound();
    }

    const sections = [
        { id: "about", label: "About", icon: Building2 },
        { id: "courses", label: "Courses", icon: BookOpen },
        { id: "fees", label: "Fees", icon: DollarSign },
        { id: "placements", label: "Placements", icon: Briefcase },
        { id: "infrastructure", label: "Infrastructure", icon: Building2 },
        { id: "admission", label: "Admissions", icon: GraduationCap },
        { id: "scholarships", label: "Scholarships", icon: Star },
        { id: "faqs", label: "FAQs", icon: Users },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />

                {/* Background Pattern/Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                </div>

                <div className="relative z-30 container h-full flex flex-col justify-end pb-12 px-4 md:px-8">
                    <div className="max-w-4xl space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-[#f6c804] text-black hover:bg-[#e5b703] border-none text-sm px-3 py-1">
                                {college.type}
                            </Badge>
                            {college.tags.map((tag, i) => (
                                <Badge key={i} variant="outline" className="text-white border-white/30 backdrop-blur-sm">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            {college.name}
                        </h1>

                        <div className="flex flex-wrap items-center text-gray-300 gap-6 text-lg">
                            <span className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#f6c804]" /> {college.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-[#f6c804] text-[#f6c804]" /> {college.rating} Rating ({college.reviews} reviews)
                            </span>
                            <span className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-blue-400" /> Established 2000
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar Navigation (Desktop) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-2 bg-card border rounded-2xl p-4 shadow-sm">
                            <p className="font-semibold text-muted-foreground px-4 mb-2 text-sm uppercase tracking-wider">Table of Contents</p>
                            {sections.map(({ id, label, icon: Icon }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6 space-y-12">

                        {/* About */}
                        <section id="about" className="scroll-mt-24 space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <Building2 className="h-6 w-6 text-[#f6c804]" /> About
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {college.about || college.description || "No description available."}
                            </p>
                            {college.highlights && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {college.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <div className="h-px w-full bg-border" />

                        {/* Courses */}
                        <section id="courses" className="scroll-mt-24 space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <BookOpen className="h-6 w-6 text-[#f6c804]" /> Courses Offered
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {college.courses.map((course, idx) => (
                                    <div key={idx} className="p-4 border rounded-xl hover:border-[#f6c804]/50 transition-colors bg-card">
                                        <h3 className="font-bold text-lg">{course}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">4 Years • Full Time</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="h-px w-full bg-border" />

                        {/* Fees */}
                        <section id="fees" className="scroll-mt-24 space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <DollarSign className="h-6 w-6 text-[#f6c804]" /> Fee Structure
                            </h2>
                            <div className="p-6 bg-muted/30 border rounded-2xl">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-primary">{college.fees.split(' ')[0]} {college.fees.split(' ')[1]}</span>
                                    <span className="text-muted-foreground">/ year</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    *Fees are approximate and subject to change. Valid for 2026-27 session.
                                </p>
                            </div>
                        </section>

                        <div className="h-px w-full bg-border" />

                        {/* Placements */}
                        {college.placements && (
                            <section id="placements" className="scroll-mt-24 space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Briefcase className="h-6 w-6 text-[#f6c804]" /> Placements
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {college.placements.stats.map((stat, i) => (
                                        <div key={i} className="p-5 border bg-card rounded-xl text-center">
                                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                                            <p className="text-xl font-bold text-foreground">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-lg">Top Recruiters</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {college.placements.topRecruiters.map((cat, i) => (
                                            <div key={i}>
                                                <h4 className="text-sm font-medium text-[#f6c804] mb-2">{cat.category}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {cat.companies.map((co, j) => (
                                                        <span key={j} className="px-2 py-1 bg-muted rounded text-sm text-muted-foreground">{co}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        <div className="h-px w-full bg-border" />

                        {/* Scholarships */}
                        {college.scholarships && (
                            <section id="scholarships" className="scroll-mt-24 space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Star className="h-6 w-6 text-[#f6c804]" /> Scholarships
                                </h2>
                                <div className="space-y-4">
                                    {college.scholarships.map((sch, i) => (
                                        <div key={i} className="border p-4 rounded-xl">
                                            <h3 className="font-bold text-lg mb-3">{sch.title}</h3>
                                            <ul className="space-y-2">
                                                {sch.items.map((item, j) => (
                                                    <li key={j} className="flex justify-between text-sm">
                                                        <span className="text-muted-foreground">{item.label}</span>
                                                        <span className="font-medium text-foreground">{item.value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className="h-px w-full bg-border" />

                        {/* FAQs */}
                        {college.faqs && (
                            <section id="faqs" className="scroll-mt-24 space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Users className="h-6 w-6 text-[#f6c804]" /> FAQs
                                </h2>
                                <div className="space-y-4">
                                    {college.faqs.map((faq, i) => (
                                        <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                                            <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                                            <p className="text-muted-foreground">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Right Sidebar: Enquiry Form */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="border border-[#f6c804]/20 rounded-2xl p-6 bg-card shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#f6c804]" />
                                <h3 className="text-xl font-bold mb-2">Admissions Open 2026</h3>
                                <p className="text-sm text-muted-foreground mb-6">Get detailed counseling and fee breakdown for {college.name}.</p>

                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Input placeholder="Full Name" className="bg-muted/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input type="tel" placeholder="+91 Phone Number" className="bg-muted/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input type="email" placeholder="Email Address" className="bg-muted/50" />
                                    </div>
                                    <Button className="w-full bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold">
                                        Apply Now
                                    </Button>
                                </form>

                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    800+ students applied last week
                                </p>
                            </div>

                            <a
                                href="https://wa.me/917815052090"
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full p-4 rounded-xl border-2 border-dashed border-green-500/20 bg-green-500/5 text-green-600 font-bold hover:bg-green-500/10 transition-colors cursor-pointer"
                            >
                                <Users className="h-5 w-5" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return colleges.map((college) => ({
        slug: college.slug,
    }));
}

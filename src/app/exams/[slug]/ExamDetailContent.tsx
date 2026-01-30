"use client";

import { useState } from "react";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle2, FileText, ChevronRight, HelpCircle, BookOpen, AlertCircle, ExternalLink, Info, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Exam } from "@/lib/data";

interface ExamDetailContentProps {
    exam: Exam;
}

export default function ExamDetailContent({ exam }: ExamDetailContentProps) {
    const [activeSection, setActiveSection] = useState("introduction");

    const sections = [
        { id: "introduction", label: "Introduction", icon: Info },
        { id: "overview", label: "Overview", icon: BookOpen },
        { id: "dates", label: "Important Dates", icon: Calendar },
        { id: "process", label: "Application Process", icon: FileText },
        { id: "documents", label: "Documents Required", icon: FileText },
        { id: "eligibility", label: "Eligibility", icon: CheckCircle2 },
        { id: "about", label: "About Exam", icon: GraduationCap },
        { id: "pattern", label: "Exam Pattern", icon: AlertCircle },
        { id: "counselling", label: "Counselling", icon: Users },
        { id: "faqs", label: "FAQs", icon: HelpCircle },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <LayoutContainer>
                <div className="grid gap-8 lg:grid-cols-12">

                    {/* Sidebar / Table of Contents - Hidden on mobile, sticky on desktop */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-28 space-y-4">
                            <div className="p-4 rounded-xl bg-card border shadow-sm">
                                <h3 className="font-bold text-lg mb-4 px-2">Table of Contents</h3>
                                <nav className="flex flex-col space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeSection === section.id
                                                ? "bg-[#f6c804]/10 text-[#f6c804]"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                }`}
                                        >
                                            <section.icon className="h-4 w-4" />
                                            {section.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Quick Apply Card in Sidebar */}
                            <Card className="bg-gradient-to-br from-[#f6c804]/20 to-transparent border-[#f6c804]/50">
                                <CardContent className="p-4 space-y-3">
                                    <h4 className="font-bold">Ready to Apply?</h4>
                                    <p className="text-xs text-muted-foreground">Don't miss the deadline. Start your application now.</p>
                                    <a href={exam.applicationLink} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full bg-[#f6c804] text-black hover:bg-[#e5b703] font-bold">Apply Now</Button>
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-10">

                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card border rounded-3xl p-6 md:p-8 shadow-sm"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="h-24 w-24 bg-white rounded-2xl p-2 border shadow-sm flex-shrink-0 flex items-center justify-center">
                                    <img src={exam.logoUrl} alt={exam.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div>
                                        <Badge className="bg-[#f6c804] text-black hover:bg-[#e5b703] mb-2">Entrance Exam</Badge>
                                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{exam.name}</h1>
                                    </div>
                                    <p className="text-lg text-muted-foreground font-medium">{exam.fullName}</p>
                                    <p className="text-sm text-foreground/80 leading-relaxed">{exam.description}</p>

                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <a href={exam.applicationLink} target="_blank" rel="noopener noreferrer">
                                            <Button className="rounded-full bg-black text-white hover:bg-black/80">
                                                Official Website <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </a>
                                        <a href="/contact">
                                            <Button variant="outline" className="rounded-full">Talk to Counselor</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Sections */}
                        <div className="space-y-10">

                            {/* Introduction */}
                            <section id="introduction" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <Info className="h-6 w-6 text-[#f6c804]" /> Introduction
                                </h2>
                                <div className="bg-gradient-to-br from-[#f6c804]/5 to-transparent border border-[#f6c804]/20 rounded-2xl p-6 text-foreground leading-relaxed">
                                    {exam.introduction}
                                </div>
                            </section>

                            {/* Overview */}
                            <section id="overview" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <BookOpen className="h-6 w-6 text-[#f6c804]" /> Overview
                                </h2>
                                <div className="bg-card border rounded-2xl p-6 text-muted-foreground leading-relaxed">
                                    {exam.overview}
                                </div>
                            </section>

                            {/* Important Dates */}
                            <section id="dates" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <Calendar className="h-6 w-6 text-[#f6c804]" /> Important Dates
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {exam.importantDates.map((item, idx) => (
                                        <div key={idx} className="bg-card border rounded-xl p-4 flex items-center gap-4 hover:border-[#f6c804]/50 transition-colors">
                                            <div className="bg-[#f6c804]/10 p-3 rounded-lg text-[#f6c804] font-bold text-center min-w-[60px]">
                                                {item.date.split(" ")[0].substring(0, 3)}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">{item.event}</h4>
                                                <p className="text-sm text-muted-foreground">{item.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Application Process */}
                            <section id="process" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <FileText className="h-6 w-6 text-[#f6c804]" /> Application Process
                                </h2>
                                <div className="bg-card border rounded-2xl p-6 relative overflow-hidden">
                                    <div className="space-y-6 relative z-10">
                                        {exam.applicationProcess.map((step, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f6c804] text-black font-bold flex items-center justify-center">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-lg">{step.step}</h4>
                                                    <p className="text-muted-foreground">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Decorative line */}
                                    <div className="absolute left-9 top-8 bottom-8 w-px bg-[#f6c804]/20 -z-0" />
                                </div>
                            </section>

                            {/* Documents Required */}
                            <section id="documents" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <FileText className="h-6 w-6 text-[#f6c804]" /> Documents Required
                                </h2>
                                <div className="bg-card border rounded-2xl p-6">
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {exam.documents.map((doc, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                <CheckCircle2 className="h-5 w-5 text-[#f6c804] flex-shrink-0 mt-0.5" />
                                                <span>{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Eligibility */}
                            <section id="eligibility" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-6 w-6 text-[#f6c804]" /> Eligibility Criteria
                                </h2>
                                <div className="bg-card border rounded-2xl p-6">
                                    <ul className="space-y-3">
                                        {exam.eligibility.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                <ChevronRight className="h-5 w-5 text-[#f6c804] flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* About Exam */}
                            <section id="about" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <GraduationCap className="h-6 w-6 text-[#f6c804]" /> About {exam.name}
                                </h2>
                                <div className="bg-gradient-to-br from-[#f6c804]/5 to-transparent border border-[#f6c804]/20 rounded-2xl p-6">
                                    <p className="text-foreground leading-relaxed">{exam.aboutExam}</p>
                                </div>
                            </section>

                            {/* Exam Pattern */}
                            <section id="pattern" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <AlertCircle className="h-6 w-6 text-[#f6c804]" /> Exam Pattern
                                </h2>
                                <div className="bg-card border rounded-2xl p-6">
                                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                                        <div className="text-center p-4 bg-background rounded-xl border border-border">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mode</p>
                                            <p className="font-bold">{exam.examPattern.mode}</p>
                                        </div>
                                        <div className="text-center p-4 bg-background rounded-xl border border-border">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                                            <p className="font-bold">{exam.examPattern.duration}</p>
                                        </div>
                                        <div className="text-center p-4 bg-background rounded-xl border border-border">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Marks</p>
                                            <p className="font-bold">{exam.examPattern.totalMarks}</p>
                                        </div>
                                        <div className="text-center p-4 bg-background rounded-xl border border-border">
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Scheme</p>
                                            <p className="font-bold text-sm">{exam.examPattern.markingScheme}</p>
                                        </div>
                                    </div>

                                    <h4 className="font-semibold mb-3">Subjects Breakdown:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exam.examPattern.subjects.map((sub, idx) => (
                                            <Badge key={idx} variant="secondary" className="px-3 py-1 text-base font-normal">
                                                {sub}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Counselling */}
                            <section id="counselling" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <Users className="h-6 w-6 text-[#f6c804]" /> Counselling Process
                                </h2>
                                <div className="bg-card border rounded-2xl p-6">
                                    <p className="text-muted-foreground leading-relaxed">{exam.counselling}</p>
                                    <div className="mt-6 pt-6 border-t">
                                        <p className="text-sm text-muted-foreground mb-3">Need help with counselling and seat allotment?</p>
                                        <a href="/contact">
                                            <Button className="bg-[#f6c804] text-black hover:bg-[#e5b703]">
                                                Get Expert Counselling Support
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section id="faqs" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <HelpCircle className="h-6 w-6 text-[#f6c804]" /> Frequently Asked Questions
                                </h2>
                                <div className="grid gap-4">
                                    {exam.faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-card border rounded-xl p-5">
                                            <h4 className="font-bold text-lg mb-2 flex gap-3">
                                                <span className="text-[#f6c804]">Q.</span> {faq.question}
                                            </h4>
                                            <p className="text-muted-foreground pl-7 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
}

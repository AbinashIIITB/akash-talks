import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Calendar, CheckCircle2, BookOpen, AlertCircle,
    FileText, GraduationCap, MapPin, Globe
} from "lucide-react";
import examsData from "@/data/exams.json";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ExamDetailPage(props: PageProps) {
    const params = await props.params;
    // Basic finding logic - In a real app we'd need slug in JSON
    // For now we assume the slug in URL maps to an ID or we add slugs to JSON
    // Let's match by link since link contains the slug in the JSON we saw
    const exam = examsData.find((e) => e.link.endsWith(params.slug));

    if (!exam) {
        notFound();
    }

    const sections = [
        { id: "overview", label: "Overview", icon: Globe },
        { id: "dates", label: "Important Dates", icon: Calendar },
        { id: "eligibility", label: "Eligibility", icon: CheckCircle2 },
        { id: "syllabus", label: "Syllabus", icon: BookOpen },
        { id: "pattern", label: "Exam Pattern", icon: FileText },
        { id: "centers", label: "Exam Centers", icon: MapPin },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative bg-[#020617] text-white py-20 px-4 md:px-8">
                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <Badge className="bg-[#f6c804] text-black hover:bg-[#e5b703] border-none mb-4">
                            Entrance Exam 2026
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            {exam.title}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            {exam.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-1">
                            {sections.map(({ id, label, icon: Icon }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-[#f6c804] hover:bg-[#f6c804]/5 transition-all border border-transparent hover:border-[#f6c804]/20"
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6 space-y-16">

                        <section id="overview">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Globe className="h-6 w-6 text-[#f6c804]" /> About {exam.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {exam.title} is a national/state level entrance examination conducted for admission to engineering and technology programs.
                                It serves as a gateway for students aspiring to join top-tier institutions. The exam tests candidates on Physics, Chemistry, and Mathematics/Biology.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="p-4 border rounded-xl bg-card">
                                    <p className="text-xs text-muted-foreground uppercase">Mode</p>
                                    <p className="font-semibold">Online (CBT)</p>
                                </div>
                                <div className="p-4 border rounded-xl bg-card">
                                    <p className="text-xs text-muted-foreground uppercase">Duration</p>
                                    <p className="font-semibold">3 Hours</p>
                                </div>
                            </div>
                        </section>

                        <div className="h-px w-full bg-border" />

                        <section id="dates">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-[#f6c804]" /> Key Dates (Tentative)
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { event: "Application Start", date: "Jan 2026" },
                                    { event: "Last Date to Apply", date: "April 2026" },
                                    { event: "Admit Card Release", date: "May 2026" },
                                    { event: "Exam Date", date: "June 2026" },
                                    { event: "Result Declaration", date: "July 2026" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg bg-card/50">
                                        <span className="font-medium">{item.event}</span>
                                        <Badge variant="secondary">{item.date}</Badge>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="h-px w-full bg-border" />

                        <section id="eligibility">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6 text-[#f6c804]" /> Eligibility Criteria
                            </h2>
                            <ul className="space-y-3 mt-4">
                                {[
                                    "Candidate must have passed Class 12 or equivalent.",
                                    "Minimum 60% aggregate marks in Physics, Chemistry, and Mathematics.",
                                    "Candidates appearing for Class 12 in 2026 are also eligible.",
                                    "Maximum age limit is usually 25 years (check specific rule)."
                                ].map((rule, i) => (
                                    <li key={i} className="flex gap-3 text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#f6c804] mt-2 shrink-0" />
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="h-px w-full bg-border" />

                        <section id="pattern">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-[#f6c804]" /> Exam Pattern
                            </h2>
                            <div className="p-6 border rounded-xl bg-muted/20">
                                <p className="text-sm text-muted-foreground mb-4">
                                    The paper will consist of objective type multiple choice questions (MCQs).
                                </p>
                                <div className="space-y-2">
                                    <div className="flex justify-between py-2 border-b">
                                        <span>Physics</span>
                                        <span className="font-bold">30 Q</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span>Chemistry</span>
                                        <span className="font-bold">30 Q</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span>Mathematics</span>
                                        <span className="font-bold">40 Q</span>
                                    </div>
                                    <div className="flex justify-between py-2 pt-4">
                                        <span className="font-bold">Total</span>
                                        <span className="font-bold text-[#f6c804]">100 Questions</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Right Sidebar: Notification Form */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-[#f6c804]/10 border border-[#f6c804]/20 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5 text-[#f6c804]" /> Exam Alerts
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Get instant notifications on your WhatsApp/Email when Application forms release.
                                </p>
                                <Button className="w-full bg-[#fae8b4] text-yellow-900 border border-yellow-500/20 hover:bg-[#f6c804] font-semibold">
                                    Subscribe to Alerts
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Generate static params if possible or use dynamic rendering
export async function generateStaticParams() {
    return examsData.map((exam) => ({
        slug: exam.link.split('/').pop() || '',
    }));
}

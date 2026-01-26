import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Calendar, CheckCircle2, BookOpen, AlertCircle,
    FileText, GraduationCap, MapPin, Globe,
    ClipboardList, HelpCircle, Info
} from "lucide-react";
import { exams } from "@/lib/examData";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ExamDetailPage(props: PageProps) {
    const params = await props.params;
    const exam = exams.find((e) => e.slug === params.slug);

    if (!exam) {
        notFound();
    }

    const { sections } = exam;

    // Define the 10 specific sections requested
    const sectionList = [
        { id: "intro", label: "Introduction", icon: Info, data: sections.introduction },
        { id: "overview", label: "Overview", icon: Globe, data: sections.overview },
        { id: "dates", label: "Important Dates", icon: Calendar, data: sections.importantDates },
        { id: "application", label: "Application Process", icon: ClipboardList, data: sections.applicationProcess },
        { id: "documents", label: "Documents", icon: FileText, data: sections.documents },
        { id: "eligibility", label: "Eligibility", icon: CheckCircle2, data: sections.eligibility },
        { id: "about", label: "About Exam", icon: BookOpen, data: sections.about },
        { id: "pattern", label: "Exam Pattern", icon: FileText, data: sections.pattern },
        { id: "counselling", label: "Counselling", icon: GraduationCap, data: sections.counselling },
        { id: "faq", label: "FAQ", icon: HelpCircle, data: null } // Handled separately
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
                        <div className="sticky top-24 space-y-1 border rounded-xl p-4 bg-card">
                            <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Table of Contents</p>
                            {sectionList.map(({ id, label, icon: Icon }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-[#f6c804] hover:bg-[#f6c804]/5 transition-all"
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6 space-y-12">

                        {sectionList.map(({ id, label, icon: Icon, data }) => {
                            if (id === "faq") return null; // Render FAQ last separately
                            if (!data) return null;

                            return (
                                <section key={id} id={id} className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Icon className="h-6 w-6 text-[#f6c804]" /> {label}
                                    </h2>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                                        <p>{data.content}</p>

                                        {/* Render Table if exists */}
                                        {data.table && (
                                            <div className="mt-4 border rounded-xl overflow-hidden">
                                                {data.table.map((row, idx) => (
                                                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between p-3 border-b last:border-0 bg-card/50 hover:bg-card transition-colors">
                                                        <span className="font-medium text-foreground">{row.label}</span>
                                                        <span>{row.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Render List if exists */}
                                        {data.list && (
                                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                                {data.list.map((item, idx) => (
                                                    <li key={idx} className="pl-1">{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="h-px w-full bg-border mt-8" />
                                </section>
                            );
                        })}

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <HelpCircle className="h-6 w-6 text-[#f6c804]" /> Follow Up Questions (FAQ)
                            </h2>
                            <div className="space-y-4">
                                {sections.faq.map((faq, i) => (
                                    <div key={i} className="border rounded-xl p-4 bg-card">
                                        <h3 className="font-semibold text-lg mb-2 text-foreground">{faq.question}</h3>
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Sidebar: Notification Form */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-[#f6c804]/10 border border-[#f6c804]/20 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5 text-[#f6c804]" /> {exam.title} Alerts
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Get instant notifications on your WhatsApp when Application forms release.
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

// Generate static params 
export async function generateStaticParams() {
    return exams.map((exam) => ({
        slug: exam.slug,
    }));
}

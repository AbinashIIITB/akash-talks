"use client";

import { notFound } from "next/navigation";
import { exams, companyInfo } from "@/lib/data";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle2, Phone, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Helper for static generation
// export async function generateStaticParams() {
//   return exams.map((exam) => ({
//     slug: exam.slug,
//   }));
// }

export default function ExamDetailPage({ params }: { params: { slug: string } }) {
    const exam = exams.find((e) => e.slug === params.slug);

    if (!exam) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <LayoutContainer>
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card border rounded-3xl p-8 space-y-6"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <Badge className="bg-[#f6c804] text-black hover:bg-[#e5b703] mb-4">Entrance Exam</Badge>
                                    <h1 className="text-3xl md:text-4xl font-bold">{exam.name}</h1>
                                    <p className="text-xl text-muted-foreground mt-2">{exam.fullName}</p>
                                </div>
                                <div className="h-24 w-24 bg-white rounded-xl p-2 border shadow-sm flex-shrink-0">
                                    <img src={exam.logoUrl} alt={exam.name} className="w-full h-full object-contain" />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-lg font-medium border-y py-4 border-border/50">
                                <Calendar className="h-5 w-5 text-[#f6c804]" />
                                <span>Exam Date: <span className="text-foreground">{exam.date}</span></span>
                            </div>

                            <div className="prose dark:prose-invert max-w-none">
                                <h3>About the Exam</h3>
                                <p className="text-muted-foreground leading-relaxed">{exam.description}</p>
                                <p className="text-muted-foreground">
                                    {exam.name} is one of the most important engineering entrance exams for students aspiring to join top-tier institutions.
                                    Preparation for this exam requires a strategic approach and understanding of the syllabus and pattern.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href={exam.applicationLink} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="rounded-full bg-[#f6c804] text-black hover:bg-[#e5b703]">
                                        Official Application <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <h3 className="text-xl font-bold">Need Guidance?</h3>
                                <p className="text-sm text-muted-foreground">
                                    Confused about exam patterns, syllabus, or college selection? Our experts are here to help.
                                </p>
                                <Link href="/contact" className="block">
                                    <Button className="w-full gap-2" variant="outline">
                                        <Phone className="h-4 w-4" /> Talk to Counselor
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#f6c804] text-black border-none">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">Office Timing</h3>
                                <p className="font-medium text-2xl">10:00 am</p>
                                <p className="text-black/80">to 6:00 pm</p>
                                <p className="text-sm mt-4 opacity-80">Visit us or call during office hours for immediate assistance.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
}

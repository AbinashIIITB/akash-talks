"use client";

import { motion } from "framer-motion";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { exams } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function ExamsPageClient() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <LayoutContainer>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h1 className="text-4xl font-bold tracking-tight">Entrance Exams <span className="text-[#f6c804]">2026</span></h1>
                        <p className="text-muted-foreground text-lg">
                            Stay updated with the latest entrance exam dates, syllabus, and application details for top engineering colleges.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {exams.map((exam, index) => (
                            <motion.div
                                key={exam.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col hover:border-[#f6c804]/50 transition-colors group">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="relative h-16 w-16 bg-white rounded-lg p-2 border shadow-sm">
                                            {/* Using img for external URLs to avoid config issues */}
                                            <img
                                                src={exam.logoUrl}
                                                alt={exam.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl group-hover:text-[#f6c804] transition-colors">{exam.name}</CardTitle>
                                            <CardDescription className="line-clamp-1">{exam.fullName}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 space-y-4">
                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {exam.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <Calendar className="h-4 w-4 text-[#f6c804]" />
                                            {exam.date}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="grid grid-cols-2 gap-3">
                                        <Link href={`/exams/${exam.slug}`} className="w-full">
                                            <Button variant="outline" className="w-full hover:bg-[#f6c804] hover:text-black">
                                                <GraduationCap className="mr-2 h-4 w-4" /> Details
                                            </Button>
                                        </Link>
                                        <a href={exam.applicationLink} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button className="w-full bg-black text-white hover:bg-black/80">
                                                Apply <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </LayoutContainer>
        </div>
    );
}

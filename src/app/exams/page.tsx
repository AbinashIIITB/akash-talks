"use client"

import { motion } from "framer-motion"
import { Calendar, FileText, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import examsData from "../../data/exams.json"

export default function ExamsPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Entrance <span className="text-yellow-500">Exams</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stay updated with the latest entrance exam notifications, dates,
                        syllabus, and application details.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
                >
                    {examsData.map((exam) => (
                        <motion.div
                            key={exam.id}
                            variants={item}
                            className="group relative bg-card rounded-xl border border-border p-6 hover:border-yellow-500/50 transition-colors duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted">
                                    <Image
                                        src={exam.logoUrl}
                                        alt={exam.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="h-8 w-8 rounded-full bg-yellow-400/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="h-4 w-4 text-yellow-600" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-yellow-500 transition-colors">
                                {exam.title}
                            </h3>

                            <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                {exam.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                    <FileText className="h-4 w-4 mr-2" />
                                    Syllabus
                                </button>
                                <div className="h-4 w-px bg-border" />
                                <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Dates
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

"use client"

import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import collegesData from "../../data/colleges.json"

export default function CollegesPage() {
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
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Top <span className="text-yellow-500">Colleges</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover premier institutions for your higher education journey.
                        Get direct admission insights and expert guidance.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
                >
                    {collegesData.map((college) => (
                        <motion.div
                            key={college.id}
                            variants={item}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={college.imageUrl}
                                    alt={college.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-card-foreground line-clamp-1 group-hover:text-yellow-500 transition-colors">
                                        {college.name}
                                    </h3>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4 mr-1 text-yellow-500" />
                                        {college.location}
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {college.description}
                                </p>

                                <div className="pt-2">
                                    <button className="w-full inline-flex items-center justify-center rounded-lg bg-yellow-400/10 hover:bg-yellow-400 text-yellow-700 hover:text-black px-4 py-2.5 text-sm font-medium transition-colors duration-300 group/btn">
                                        See Details
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

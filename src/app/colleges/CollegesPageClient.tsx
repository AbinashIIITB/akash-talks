"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { colleges as collegesData } from "@/lib/data"

export default function CollegesPageClient() {
    const [selectedState, setSelectedState] = useState("All");

    // Extract unique states from the data
    const states = useMemo(() => {
        const uniqueStates = new Set(collegesData.map(college => college.state));
        return ["All", ...Array.from(uniqueStates).sort()];
    }, []);

    // Filter colleges based on selection
    const filteredColleges = useMemo(() => {
        if (selectedState === "All") return collegesData;
        return collegesData.filter(college => college.state === selectedState);
    }, [selectedState]);

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

                {/* Filter Section */}
                <div className="flex flex-wrap justify-center gap-2 pt-4 pb-4">
                    {states.map((state) => (
                        <button
                            key={state}
                            onClick={() => setSelectedState(state)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedState === state
                                ? "bg-[#f6c804] text-black shadow-md scale-105"
                                : "bg-card border border-border text-muted-foreground hover:bg-[#f6c804]/10 hover:text-[#f6c804]"
                                }`}
                        >
                            {state}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedState} // Re-trigger animations on filter change
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, y: 20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
                    >
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college) => (
                                <motion.div
                                    key={college.id}
                                    variants={item}
                                    className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={college.imageUrl || "/college.jpg"}
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
                                            <Link href={`/colleges/${college.slug}`} className="w-full inline-flex items-center justify-center rounded-lg bg-yellow-400/10 hover:bg-yellow-400 text-yellow-700 hover:text-black px-4 py-2.5 text-sm font-medium transition-colors duration-300 group/btn">
                                                See Details
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20 text-muted-foreground"
                            >
                                No colleges found for this filter.
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

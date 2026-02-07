"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ArrowRight, GraduationCap, Stethoscope, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { colleges as engineeringColleges, medicalColleges } from "@/lib/data"

type CollegeType = "Engineering" | "Medical" | "All";

export default function CollegesPageClient() {
    const searchParams = useSearchParams();
    const initialType = (searchParams.get("type") as CollegeType) || "Engineering";
    const initialState = searchParams.get("state") || "All";

    const [collegeType, setCollegeType] = useState<CollegeType>(initialType);
    const [selectedState, setSelectedState] = useState(initialState);

    // Get current data based on type
    const currentData = useMemo(() => {
        if (collegeType === "All") {
            return [
                ...engineeringColleges.map((c: any) => ({ ...c, _category: "Engineering" as const })),
                ...medicalColleges.map((c: any) => ({ ...c, _category: "Medical" as const }))
            ];
        }
        return collegeType === "Engineering"
            ? engineeringColleges.map((c: any) => ({ ...c, _category: "Engineering" as const }))
            : medicalColleges.map((c: any) => ({ ...c, _category: "Medical" as const }));
    }, [collegeType]);

    // Extract unique states from the current data
    const states = useMemo(() => {
        const uniqueStates = new Set(currentData.map((college: any) => college.state));
        return ["All", ...Array.from(uniqueStates).sort()];
    }, [currentData]);

    // Filter colleges based on state selection
    const filteredColleges = useMemo(() => {
        if (selectedState === "All") return currentData;
        return currentData.filter((college: any) => college.state === selectedState);
    }, [selectedState, currentData]);

    // Reset state filter when changing college type
    const handleTypeChange = (type: CollegeType) => {
        setCollegeType(type);
        setSelectedState("All");
    };

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

                {/* College Type Toggle */}
                <div className="flex justify-center flex-wrap gap-4 pt-4">
                    <button
                        onClick={() => handleTypeChange("All")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${collegeType === "All"
                            ? "bg-purple-600 text-white shadow-lg scale-105"
                            : "bg-card border-2 border-border text-muted-foreground hover:bg-purple-600/10 hover:border-purple-600"
                            }`}
                    >
                        <Building2 className="h-5 w-5" />
                        All Colleges
                    </button>
                    <button
                        onClick={() => handleTypeChange("Engineering")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${collegeType === "Engineering"
                            ? "bg-[#f6c804] text-black shadow-lg scale-105"
                            : "bg-card border-2 border-border text-muted-foreground hover:bg-[#f6c804]/10 hover:border-[#f6c804]"
                            }`}
                    >
                        <GraduationCap className="h-5 w-5" />
                        Engineering
                    </button>
                    <button
                        onClick={() => handleTypeChange("Medical")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${collegeType === "Medical"
                            ? "bg-blue-600 text-white shadow-lg scale-105"
                            : "bg-card border-2 border-border text-muted-foreground hover:bg-blue-600/10 hover:border-blue-600"
                            }`}
                    >
                        <Stethoscope className="h-5 w-5" />
                        Medical
                    </button>
                </div>

                {/* State Filter Section */}
                <div className="flex flex-wrap justify-center gap-2 pt-2 pb-4">
                    {states.map((state) => (
                        <button
                            key={state}
                            onClick={() => setSelectedState(state)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedState === state
                                ? collegeType === "Engineering"
                                    ? "bg-[#f6c804] text-black shadow-md scale-105"
                                    : "bg-blue-600 text-white shadow-md scale-105"
                                : "bg-card border border-border text-muted-foreground hover:bg-[#f6c804]/10 hover:text-[#f6c804]"
                                }`}
                        >
                            {state}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${collegeType}-${selectedState}`}
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, y: 20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
                    >
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college: any) => (
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
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            quality={75}
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                        {/* Type Badge */}
                                        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${(college as any)._category === "Engineering"
                                            ? "bg-[#f6c804] text-black"
                                            : "bg-blue-600 text-white"
                                            }`}>
                                            {(college as any)._category === "Engineering" ? "B.Tech" : "MBBS"}
                                        </div>
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

                                        {/* Show MQ Fees for Medical Colleges */}
                                        {collegeType === "Medical" && "mqFees" in college && (
                                            <div className="text-sm">
                                                <span className="text-muted-foreground">MQ Fees: </span>
                                                <span className="font-semibold text-blue-600">{college.mqFees.total}</span>
                                            </div>
                                        )}

                                        <div className="pt-2">
                                            <Link
                                                href={(college as any)._category === "Engineering"
                                                    ? `/colleges/${college.slug}`
                                                    : `/medical-colleges/${college.slug}`
                                                }
                                                className={`w-full inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-300 group/btn ${(college as any)._category === "Engineering"
                                                    ? "bg-yellow-400/10 hover:bg-yellow-400 text-yellow-700 hover:text-black"
                                                    : "bg-blue-600/10 hover:bg-blue-600 text-blue-700 hover:text-white"
                                                    }`}
                                            >
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

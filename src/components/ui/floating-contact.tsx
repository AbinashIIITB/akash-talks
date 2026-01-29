"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="pointer-events-auto relative w-[320px] rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:bg-zinc-900 dark:border-zinc-800 p-6 pt-8 pr-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute left-4 top-4 z-20 text-muted-foreground/50 hover:text-foreground transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* Pop-out Image */}
                        <div className="absolute -top-10 -right-4 w-28 h-28 rounded-full border-4 border-background bg-zinc-100 overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                                alt="Counselor"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-3 mt-4">
                            <div className="pr-16">
                                <h3 className="text-lg font-bold leading-tight text-foreground">
                                    Get a Free <span className="text-[#f6c804]">Consultation</span>
                                </h3>
                                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                    Connect with our counselors for guidance on colleges & exams.
                                </p>
                            </div>

                            <Link href="/contact" className="w-full mt-2">
                                <Button className="w-full h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all group">
                                    Request a Call
                                    <div className="ml-2 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                        <ArrowRight className="h-3 w-3" />
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="pointer-events-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f6c804] text-black shadow-lg hover:scale-110 active:scale-95 transition-transform"
                    >
                        <Phone className="h-6 w-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

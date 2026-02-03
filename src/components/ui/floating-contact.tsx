"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCounsellingDialog } from "@/components/providers/CounsellingDialogProvider";

export function FloatingContact() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { openDialog } = useCounsellingDialog();

    // Listen for menu open state
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsMenuOpen(document.body.hasAttribute('data-menu-open'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['data-menu-open'] });
        return () => observer.disconnect();
    }, []);

    // Don't show on contact page
    if (pathname === '/contact') return null;

    return (
        <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none transition-opacity duration-200 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Pulse Ring Animation - Ultra Smooth */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="absolute h-14 w-14 rounded-full bg-[#f6c804]/25"
                    animate={{
                        scale: [1, 1.4, 1.8, 2.2],
                        opacity: [0, 0.4, 0.2, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.2, 0.6, 1],
                    }}
                />
                <motion.div
                    className="absolute h-14 w-14 rounded-full bg-[#f6c804]/15"
                    animate={{
                        scale: [1, 1.3, 1.6, 2],
                        opacity: [0, 0.3, 0.15, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.2, 0.6, 1],
                        delay: 1,
                    }}
                />
            </div>

            {/* Toggle Button - Opens Dialog Directly */}
            <AnimatePresence>
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                        scale: 1,
                        y: [0, -3, 0],
                    }}
                    transition={{
                        scale: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 3,
                        }
                    }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openDialog}
                    className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6c804] text-black shadow-lg"
                >
                    <Phone className="h-6 w-6" />
                </motion.button>
            </AnimatePresence>
        </div>
    );
}


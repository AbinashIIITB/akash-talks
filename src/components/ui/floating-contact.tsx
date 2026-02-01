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
            {/* Toggle Button - Opens Dialog Directly */}
            <AnimatePresence>
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={openDialog}
                    className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6c804] text-black shadow-lg hover:scale-110 active:scale-95 transition-transform"
                >
                    <Phone className="h-6 w-6" />
                </motion.button>
            </AnimatePresence>
        </div>
    );
}


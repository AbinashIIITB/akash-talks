"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MorphingMenuButtonProps {
    isOpen: boolean
    onClick: () => void
    className?: string
}

export function MorphingMenuButton({ isOpen, onClick, className }: MorphingMenuButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            className={cn(
                "relative h-10 w-10 flex items-center justify-center rounded-xl transition-colors",
                isOpen
                    ? "bg-indigo-100 dark:bg-indigo-900/30"
                    : "bg-[#f6c804]/10 hover:bg-[#f6c804]/20",
                className
            )}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                    "transition-colors duration-200",
                    isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-[#f6c804]"
                )}
            >
                {/* Top line - morphs to X diagonal */}
                <motion.line
                    x1="4"
                    y1="6"
                    x2="20"
                    y2="6"
                    animate={{
                        x1: isOpen ? 6 : 4,
                        y1: isOpen ? 6 : 6,
                        x2: isOpen ? 18 : 20,
                        y2: isOpen ? 18 : 6,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                {/* Middle line - fades out */}
                <motion.line
                    x1="4"
                    y1="12"
                    x2="20"
                    y2="12"
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        x1: isOpen ? 12 : 4,
                        x2: isOpen ? 12 : 20,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                {/* Bottom line - morphs to X diagonal */}
                <motion.line
                    x1="4"
                    y1="18"
                    x2="20"
                    y2="18"
                    animate={{
                        x1: isOpen ? 6 : 4,
                        y1: isOpen ? 18 : 18,
                        x2: isOpen ? 18 : 20,
                        y2: isOpen ? 6 : 18,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
            </svg>
        </motion.button>
    )
}

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useThemeTransition } from "@/components/providers/theme-transition-provider"

export function AnimatedThemeToggle() {
    const { toggleTheme } = useThemeTransition()
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-16 h-8 rounded-full bg-muted animate-pulse" />
        )
    }

    const isDark = resolvedTheme === "dark"

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6c804] focus-visible:ring-offset-2 ${isDark
                ? "bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700"
                : "bg-[#f9f4e9] border-amber-200"
                }`}
            aria-label="Toggle theme"
        >
            {/* Track background glow */}
            <div className={`absolute inset-0 rounded-full transition-opacity duration-300 blur-sm ${isDark ? "bg-[#f6c804]/10 opacity-100" : "bg-yellow-400/20 opacity-0"
                }`} />

            {/* Sliding knob */}
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
                className={`relative w-6 h-6 rounded-full shadow-md flex items-center justify-center overflow-hidden ${isDark ? "ml-auto bg-slate-800 text-yellow-400" : "ml-0 bg-white text-yellow-500"
                    }`}
            >
                {/* Icons with Sun/Moon Rise/Set animation */}
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isDark ? "moon" : "sun"}
                        initial={{ y: 20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isDark ? (
                            <Moon className="h-4 w-4" />
                        ) : (
                            <Sun className="h-4 w-4" />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </button>
    )
}

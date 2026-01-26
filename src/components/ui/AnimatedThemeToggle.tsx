"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function AnimatedThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
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
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-16 h-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6c804] focus-visible:ring-offset-2"
            aria-label="Toggle theme"
        >
            {/* Track background glow */}
            <div className="absolute inset-0 rounded-full bg-[#f6c804]/20 dark:bg-[#f6c804]/10 blur-sm" />

            {/* Sliding knob */}
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
                className={`relative w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center ${isDark ? "ml-auto" : "ml-0"
                    }`}
            >
                {/* Icons with smooth transition */}
                <motion.div
                    initial={false}
                    animate={{
                        rotate: isDark ? 0 : 180,
                        scale: 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {isDark ? (
                        <Moon className="h-4 w-4 text-[#f6c804]" />
                    ) : (
                        <Sun className="h-4 w-4 text-[#f6c804]" />
                    )}
                </motion.div>
            </motion.div>
        </button>
    )
}

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
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6c804] focus-visible:ring-offset-2 ${isDark
                    ? "bg-slate-900 border border-slate-700"
                    : "bg-gray-100 border border-gray-300"
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
                className={`relative w-6 h-6 rounded-full shadow-md flex items-center justify-center ${isDark ? "ml-auto bg-slate-800 text-yellow-400" : "ml-0 bg-white text-yellow-500"
                    }`}
            >
                {/* Icons with smooth transition */}
                <motion.div
                    initial={false}
                    animate={{
                        rotate: isDark ? 0 : 0,
                        scale: 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {isDark ? (
                        <Moon className="h-4 w-4" />
                    ) : (
                        <Sun className="h-4 w-4" />
                    )}
                </motion.div>
            </motion.div>
        </button>
    )
}

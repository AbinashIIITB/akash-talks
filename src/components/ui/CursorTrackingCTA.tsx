"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCounsellingDialog } from "@/components/providers/CounsellingDialogProvider"

export function CursorTrackingCTA() {
    const { openDialog } = useCounsellingDialog()
    const containerRef = React.useRef<HTMLDivElement>(null)

    // Mouse position
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 150 }
    const smoothX = useSpring(mouseX, springConfig)
    const smoothY = useSpring(mouseY, springConfig)

    // Transform for spotlight/glow effect
    const spotlightX = useTransform(smoothX, (val) => `${val}px`)
    const spotlightY = useTransform(smoothY, (val) => `${val}px`)

    // Secondary orb with offset
    const orb2X = useTransform(smoothX, (val) => val * 0.5)
    const orb2Y = useTransform(smoothY, (val) => val * 0.5)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        // Reset to center when mouse leaves
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(rect.width / 2)
        mouseY.set(rect.height / 2)
    }

    return (
        <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden mb-16">
            {/* Side Margin Overlays */}
            <div className="absolute inset-y-0 left-0 w-[5%] bg-background z-20" />
            <div className="absolute inset-y-0 right-0 w-[5%] bg-background z-20" />

            {/* Background Container with cursor tracking */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="absolute inset-y-0 left-[5%] right-[5%] z-0 rounded-[2rem] overflow-hidden"
            >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />

                {/* Animated Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(246, 200, 4, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 200, 4, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Cursor-tracking main spotlight */}
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{
                        left: spotlightX,
                        top: spotlightY,
                        x: '-50%',
                        y: '-50%',
                        background: 'radial-gradient(circle, rgba(246, 200, 4, 0.15) 0%, rgba(246, 200, 4, 0.05) 40%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />

                {/* Secondary trailing orb */}
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                    style={{
                        left: orb2X,
                        top: orb2Y,
                        background: 'radial-gradient(circle, rgba(246, 200, 4, 0.1) 0%, transparent 60%)',
                        filter: 'blur(60px)',
                    }}
                />

                {/* Static ambient orbs */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#f6c804]/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f6c804]/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 w-[90%] max-w-4xl mx-auto text-white">
                <div className="text-center space-y-6 py-12 md:py-16">
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Ready to Start Your{" "}
                        <span className="gradient-text-yellow">Journey?</span>
                    </motion.h2>

                    <motion.p
                        className="max-w-2xl mx-auto text-white/70 text-base md:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Get personalized guidance from our expert counselors and take the first step towards your dream college.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            size="lg"
                            onClick={openDialog}
                            className="group h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-semibold bg-[#f6c804] text-black hover:bg-[#e5b703] rounded-full transition-all duration-300 shadow-lg shadow-[#f6c804]/25 hover:shadow-[#f6c804]/40 hover:scale-105"
                        >
                            Book Free Consultation
                        </Button>
                        <Link href="/colleges">
                            <Button size="lg" variant="outline" className="group h-12 md:h-14 px-8 text-base md:text-lg font-semibold rounded-full border-white/20 text-white hover:bg-white/10 hover:border-[#f6c804]/50 transition-all duration-300">
                                Explore Colleges
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

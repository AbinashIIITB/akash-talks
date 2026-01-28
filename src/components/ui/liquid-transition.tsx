"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LiquidTransitionProps {
    isAnimating: boolean;
}

const LiquidTransition = ({ isAnimating }: LiquidTransitionProps) => {
    // With mix-blend-mode: difference, we always want a WHITE overlay.
    // White overlay over dark content -> inverts to light.
    // White overlay over light content -> inverts to dark.
    // This creates the perfect text-color-swap effect automatically.

    // Viewport dimensions to calculate path
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <AnimatePresence>
            {isAnimating && (
                <motion.div
                    className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <svg className="w-full h-full" preserveAspectRatio="none">
                        <motion.path
                            fill="#ffffff" // Always white for difference blend mode
                            initial={{ d: `M0,0 L${dimensions.width},0 L${dimensions.width},0 C${dimensions.width / 2},0 ${dimensions.width / 2},0 0,0 Z` }}
                            animate={{
                                d: [
                                    // Start flat
                                    `M0,0 L${dimensions.width},0 L${dimensions.width},0 C${dimensions.width * 0.5},0 ${dimensions.width * 0.5},0 0,0 Z`,
                                    // Mid-way: Large droplet/wave hanging down
                                    `M0,0 L${dimensions.width},0 L${dimensions.width},${dimensions.height * 0.5} C${dimensions.width * 0.5},${dimensions.height * 1.5} ${dimensions.width * 0.5},${dimensions.height * 1.5} 0,${dimensions.height * 0.5} Z`,
                                    // End: Fill screen completely
                                    `M0,0 L${dimensions.width},0 L${dimensions.width},${dimensions.height * 1.5} C${dimensions.width * 0.5},${dimensions.height * 1.5} ${dimensions.width * 0.5},${dimensions.height * 1.5} 0,${dimensions.height * 1.5} Z`
                                ]
                            }}
                            transition={{
                                duration: 2.0, // Slower, smoother
                                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "heavy liquid" feel
                                times: [0, 0.5, 1]
                            }}
                        />
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LiquidTransition;

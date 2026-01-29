"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LiquidTransitionProps {
    isAnimating: boolean;
}

const LiquidTransition = ({ isAnimating }: LiquidTransitionProps) => {
    return (
        <AnimatePresence>
            {isAnimating && (
                <>
                    {/* Radial blur/fade transition */}
                    <motion.div
                        className="fixed inset-0 pointer-events-none z-[9999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: 1.2,
                            times: [0, 0.3, 0.7, 1],
                            ease: "easeInOut"
                        }}
                    >
                        {/* Soft radial gradient overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#f6c804]/30 via-transparent to-[#f6c804]/30"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 2.5, 2.5, 0],
                                opacity: [0, 0.6, 0.6, 0]
                            }}
                            transition={{
                                duration: 1.2,
                                times: [0, 0.4, 0.6, 1],
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            style={{ transformOrigin: 'center center' }}
                        />

                        {/* Subtle blur backdrop */}
                        <motion.div
                            className="absolute inset-0 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 1.2,
                                times: [0, 0.25, 0.75, 1],
                                ease: "easeInOut"
                            }}
                        />

                        {/* Animated circles ripple effect */}
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute left-1/2 top-1/2 rounded-full border border-[#f6c804]/40"
                                initial={{
                                    width: 0,
                                    height: 0,
                                    x: '-50%',
                                    y: '-50%',
                                    opacity: 0
                                }}
                                animate={{
                                    width: ['0vw', '200vw'],
                                    height: ['0vw', '200vw'],
                                    opacity: [0.8, 0]
                                }}
                                transition={{
                                    duration: 1.0,
                                    delay: i * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LiquidTransition;

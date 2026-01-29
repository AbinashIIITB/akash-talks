"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, useState } from "react";

interface MagneticWrapperProps {
    children: React.ReactNode;
    strength?: number; // How strong the pull is (higher = moves further)
    range?: number;    // Distance in pixels to trigger the effect
    className?: string;
}

export const MagneticWrapper = ({
    children,
    strength = 0.5,
    range = 100,
    className = "",
}: MagneticWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for x and y position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth movement and return
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate center of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        // If within range, move towards cursor
        if (distance < range || isHovered) {
            x.set(distanceX * strength);
            y.set(distanceY * strength);
        } else {
            // Create a smooth snap back if we just left the range
            x.set(0);
            y.set(0);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

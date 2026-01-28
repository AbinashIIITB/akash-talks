"use client";

import React, { createContext, useContext, useState } from "react";
import { useTheme } from "next-themes";
import LiquidTransition from "@/components/ui/liquid-transition";

interface ThemeTransitionContextType {
    toggleTheme: () => void;
    isAnimating: boolean;
}

const ThemeTransitionContext = createContext<ThemeTransitionContextType | undefined>(undefined);

export function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleTheme = () => {
        if (isAnimating) return;

        const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
        setIsAnimating(true);

        // Slowed down logic for viscous liquid feel:
        // Duration: 2000ms total
        // Switch point: ~900ms (when wave covers significant portion)

        setTimeout(() => {
            setTheme(nextTheme);
        }, 900); // Switch theme when screen is consistently covered

        setTimeout(() => {
            setIsAnimating(false);
        }, 2100); // Total animation duration (2.0s) + buffer
    };

    return (
        <ThemeTransitionContext.Provider value={{ toggleTheme, isAnimating }}>
            <LiquidTransition isAnimating={isAnimating} />
            {children}
        </ThemeTransitionContext.Provider>
    );
}

export const useThemeTransition = () => {
    const context = useContext(ThemeTransitionContext);
    if (!context) {
        throw new Error("useThemeTransition must be used within a ThemeTransitionProvider");
    }
    return context;
};

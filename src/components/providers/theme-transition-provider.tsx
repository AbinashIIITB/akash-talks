"use client";

import React, { createContext, useContext } from "react";
import { useTheme } from "next-themes";

interface ThemeTransitionContextType {
    toggleTheme: () => void;
    isAnimating: boolean;
}

const ThemeTransitionContext = createContext<ThemeTransitionContextType | undefined>(undefined);

export function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
    const { setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
        const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    };

    return (
        <ThemeTransitionContext.Provider value={{ toggleTheme, isAnimating: false }}>
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

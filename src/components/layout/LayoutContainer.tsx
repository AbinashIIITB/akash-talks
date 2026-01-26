"use client"

import { ReactNode } from "react"

interface LayoutContainerProps {
    children: ReactNode
    className?: string
    as?: "div" | "section" | "main" | "header" | "footer" | "nav"
}

/**
 * LayoutContainer - Enforces the 15% margin rule (70% width centered content)
 * Use this wrapper to maintain consistent alignment across all sections.
 */
export function LayoutContainer({
    children,
    className = "",
    as: Component = "div"
}: LayoutContainerProps) {
    return (
        <Component
            className={`w-[90%] md:w-[80%] lg:w-[70%] max-w-[1400px] mx-auto ${className}`}
        >
            {children}
        </Component>
    )
}

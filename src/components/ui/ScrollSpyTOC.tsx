"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
    Building2, BookOpen, DollarSign, Briefcase, Calendar,
    Users, Award, TrendingUp, Scale, ClipboardList, HelpCircle,
    Lightbulb, Images
} from "lucide-react"

// Map icon names to components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building2,
    BookOpen,
    DollarSign,
    Briefcase,
    Calendar,
    Users,
    Award,
    TrendingUp,
    Scale,
    ClipboardList,
    HelpCircle,
    Lightbulb,
    Images,
}

interface Section {
    id: string
    label: string
    iconName: string
}

interface ScrollSpyTOCProps {
    sections: Section[]
    className?: string
}

export function ScrollSpyTOC({ sections, className = "" }: ScrollSpyTOCProps) {
    const [activeSection, setActiveSection] = React.useState<string>(sections[0]?.id || "")

    React.useEffect(() => {
        const observers: IntersectionObserver[] = []
        const sectionElements: Element[] = []

        sections.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) {
                sectionElements.push(element)
            }
        })

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        }

        sectionElements.forEach((element) => {
            const observer = new IntersectionObserver(observerCallback, observerOptions)
            observer.observe(element)
            observers.push(observer)
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [sections])

    return (
        <div className={`sticky top-24 space-y-1 bg-card border rounded-2xl p-4 shadow-sm max-h-[80vh] overflow-y-auto ${className}`}>
            <p className="font-semibold text-muted-foreground px-4 mb-2 text-sm uppercase tracking-wider">
                Table of Contents
            </p>
            <nav className="relative">
                {sections.map(({ id, label, iconName }) => {
                    const isActive = activeSection === id
                    const Icon = iconMap[iconName] || Building2
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all z-10"
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="activeTOC"
                                    className="absolute inset-0 bg-[#f6c804]/10 rounded-lg border border-[#f6c804]/30"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <Icon className={`h-4 w-4 relative z-10 transition-colors ${isActive ? "text-[#f6c804]" : "text-muted-foreground"}`} />
                            <span className={`relative z-10 transition-colors ${isActive ? "text-[#f6c804]" : "text-muted-foreground hover:text-foreground"}`}>
                                {label}
                            </span>
                        </a>
                    )
                })}
            </nav>
        </div>
    )
}

// Mobile horizontal scrolling version
interface MobileScrollSpyTOCProps {
    sections: Section[]
    className?: string
}

export function MobileScrollSpyTOC({ sections, className = "" }: MobileScrollSpyTOCProps) {
    const [activeSection, setActiveSection] = React.useState<string>(sections[0]?.id || "")
    const scrollContainerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const observers: IntersectionObserver[] = []
        const sectionElements: Element[] = []

        sections.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) {
                sectionElements.push(element)
            }
        })

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        }

        sectionElements.forEach((element) => {
            const observer = new IntersectionObserver(observerCallback, observerOptions)
            observer.observe(element)
            observers.push(observer)
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [sections])

    // Auto-scroll active item into view
    React.useEffect(() => {
        const activeElement = scrollContainerRef.current?.querySelector(`[data-section="${activeSection}"]`)
        if (activeElement) {
            activeElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
        }
    }, [activeSection])

    return (
        <div className={className}>
            <p className="font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-3">
                Jump to Section
            </p>
            <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
            >
                {sections.map(({ id, label, iconName }) => {
                    const isActive = activeSection === id
                    const Icon = iconMap[iconName] || Building2
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            data-section={id}
                            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-all ${isActive
                                    ? "bg-[#f6c804]/10 text-[#f6c804] border border-[#f6c804]/50"
                                    : "bg-card border border-border text-muted-foreground hover:text-[#f6c804] hover:border-[#f6c804]/50"
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                            {label}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

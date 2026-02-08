"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
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

// Floating Mobile TOC with Drawer - replaces horizontal scroll
interface FloatingMobileTOCProps {
    sections: Section[]
    className?: string
}

export function FloatingMobileTOC({ sections, className = "" }: FloatingMobileTOCProps) {
    const [isOpen, setIsOpen] = React.useState(false)
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

    // Prevent body scroll when drawer is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const handleSectionClick = (id: string) => {
        setIsOpen(false)
        // Small delay to let drawer close before scrolling
        setTimeout(() => {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }, 150)
    }

    return (
        <div className={className}>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-20 right-4 z-40 h-12 w-12 rounded-full bg-[#f6c804] text-black shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <BookOpen className="h-5 w-5" />
            </motion.button>

            {/* Drawer Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-2xl max-h-[70vh] overflow-hidden"
                        >
                            {/* Handle bar */}
                            <div className="flex justify-center py-3">
                                <div className="w-12 h-1.5 rounded-full bg-muted-foreground/30" />
                            </div>

                            {/* Header */}
                            <div className="px-6 pb-4 border-b border-border">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-[#f6c804]" />
                                    Table of Contents
                                </h3>
                            </div>

                            {/* Sections List */}
                            <div className="overflow-y-auto max-h-[calc(70vh-100px)] pb-8">
                                <nav className="p-4 space-y-1">
                                    {sections.map(({ id, label, iconName }) => {
                                        const isActive = activeSection === id
                                        const Icon = iconMap[iconName] || Building2
                                        return (
                                            <button
                                                key={id}
                                                onClick={() => handleSectionClick(id)}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${isActive
                                                    ? "bg-[#f6c804]/10 text-[#f6c804] border border-[#f6c804]/30"
                                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                                    }`}
                                            >
                                                <Icon className={`h-5 w-5 ${isActive ? "text-[#f6c804]" : ""}`} />
                                                <span className="font-medium">{label}</span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

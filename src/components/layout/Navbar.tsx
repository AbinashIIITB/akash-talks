"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { ChevronRight, Search as SearchIcon, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Search } from "@/components/ui/Search"
import { AnimatedThemeToggle } from "@/components/ui/AnimatedThemeToggle"
import { LayoutContainer } from "@/components/layout/LayoutContainer"
import { MorphingMenuButton } from "@/components/ui/MorphingMenuButton"
import { cn } from "@/lib/utils"

export function Navbar() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Close menu on route change
    React.useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Colleges", href: "/colleges" },
        { name: "Exams", href: "/exams" },
        { name: "About Us", href: "/about" },
    ]

    const bgColor = mounted ? (resolvedTheme === 'dark' ? '#0f172b' : '#f8fafc') : '#f8fafc'

    return (
        <>
            <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: bgColor }}>
                <LayoutContainer className="relative flex h-16 items-center justify-between">
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center z-10">
                        <div className="relative h-10 w-10 overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt="Akash Talks"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Center: Nav Links (Desktop) - Absolutely centered */}
                    <nav className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-full px-1 py-1 border border-border/50">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "relative text-sm font-medium px-5 py-2 rounded-full transition-colors",
                                            isActive
                                                ? "text-black"
                                                : "text-foreground/70 hover:text-foreground"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-[#f6c804] rounded-full z-[-1]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>


                    {/* Right: Actions */}
                    <div className="flex items-center space-x-4">
                        {/* WhatsApp Button (Desktop) */}
                        <Link href="https://wa.me/917815052090" target="_blank" className="hidden md:block">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 hover:bg-green-100 hover:text-green-600 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 fill-current text-green-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </Button>
                        </Link>



                        {/* Search Component */}
                        <div className="hidden sm:block">
                            <Search />
                        </div>

                        {/* Search Button (Mobile Only) */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="md:hidden h-8 w-8 flex items-center justify-center rounded-lg transition-colors bg-[#f6c804]/10 hover:bg-[#f6c804]/20"
                            aria-label="Search"
                        >
                            <SearchIcon className="h-4 w-4 text-[#f6c804]" />
                        </button>

                        {/* Animated Theme Toggle (Desktop Only) */}
                        <div className="hidden md:block">
                            <AnimatedThemeToggle />
                        </div>

                        {/* Morphing Mobile Menu Button */}
                        <div className="md:hidden">
                            <MorphingMenuButton
                                isOpen={isMenuOpen}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        </div>
                    </div>
                </LayoutContainer>
            </header>

            {/* Mobile Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 left-0 right-0 z-50 md:hidden h-16 flex items-center px-4 gap-2"
                        style={{ backgroundColor: bgColor }}
                    >
                        <input
                            type="text"
                            placeholder="Search colleges, exams..."
                            autoFocus
                            className="flex-1 h-10 px-4 rounded-lg bg-[#f6c804]/10 border-none outline-none text-foreground placeholder:text-muted-foreground"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                                    setIsSearchOpen(false)
                                    window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`
                                }
                                if (e.key === 'Escape') {
                                    setIsSearchOpen(false)
                                }
                            }}
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="h-8 w-8 flex items-center justify-center rounded-lg transition-colors bg-[#f6c804]/10 hover:bg-[#f6c804]/20"
                            aria-label="Close Search"
                        >
                            <X className="h-4 w-4 text-[#f6c804]" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                        style={{ backgroundColor: bgColor }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="h-full flex flex-col pt-16"
                        >
                            {/* Header with close button in same position */}
                            <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-4 gap-3" style={{ backgroundColor: bgColor }}>
                                {/* Logo - Always visible */}
                                <Link href="/" className="flex items-center shrink-0" onClick={() => setIsMenuOpen(false)}>
                                    <span className="font-bold text-xl text-[#f6c804]">Akash Talks</span>
                                </Link>

                                {/* Search Bar - Animated */}
                                <AnimatePresence mode="wait">
                                    {isSearchOpen ? (
                                        <motion.div
                                            key="search-input"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex-1 flex items-center relative"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                autoFocus
                                                className="w-full h-9 pl-3 pr-8 rounded-lg bg-[#f6c804]/10 border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                                                        setIsMenuOpen(false)
                                                        setIsSearchOpen(false)
                                                        window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`
                                                    }
                                                    if (e.key === 'Escape') {
                                                        setIsSearchOpen(false)
                                                    }
                                                }}
                                            />
                                            <button
                                                onClick={() => setIsSearchOpen(false)}
                                                className="absolute right-2 h-5 w-5 flex items-center justify-center rounded-full hover:bg-[#f6c804]/20 transition-colors"
                                                aria-label="Close Search"
                                            >
                                                <X className="h-3 w-3 text-[#f6c804]" />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.button
                                            key="search-button"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => setIsSearchOpen(true)}
                                            className="h-8 w-8 flex items-center justify-center rounded-lg transition-colors bg-[#f6c804]/10 hover:bg-[#f6c804]/20 shrink-0"
                                            aria-label="Open Search"
                                        >
                                            <SearchIcon className="h-4 w-4 text-[#f6c804]" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>

                                {/* Menu Close Button - Always visible */}
                                <div className="shrink-0">
                                    <MorphingMenuButton
                                        isOpen={isMenuOpen}
                                        onClick={() => setIsMenuOpen(false)}
                                    />
                                </div>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-1 overflow-y-auto py-4">
                                <div className="flex flex-col">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center justify-between px-6 py-5 border-b border-dashed border-border/50 group"
                                            >
                                                <span className={cn(
                                                    "text-lg font-medium transition-colors",
                                                    pathname === link.href ? "text-[#f6c804]" : "text-foreground group-hover:text-[#f6c804]"
                                                )}>
                                                    {link.name}
                                                </span>
                                                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-[#f6c804] transition-colors" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="p-6 pb-8 mt-auto"
                                style={{ backgroundColor: bgColor }}
                            >
                                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full">
                                    <Button className="w-full h-12 bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold rounded-full text-base flex justify-between items-center px-6">
                                        Book Free Consultation
                                        <ChevronRight className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

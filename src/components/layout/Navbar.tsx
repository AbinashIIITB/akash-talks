"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { AnimatedThemeToggle } from "@/components/ui/AnimatedThemeToggle"
import { LayoutContainer } from "@/components/layout/LayoutContainer"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
            <LayoutContainer className="flex h-16 items-center justify-between">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative h-10 w-10 overflow-hidden">
                        <Image
                            src="/logo.png"
                            alt="Akash Talks"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        Akash Talks
                    </span>
                </Link>

                {/* Center: Nav Links (Desktop) */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-[#f6c804] text-foreground/70">
                        Home
                    </Link>
                    <Link href="/colleges" className="transition-colors hover:text-[#f6c804] text-foreground/70">
                        Colleges
                    </Link>
                    <Link href="/exams" className="transition-colors hover:text-[#f6c804] text-foreground/70">
                        Exams
                    </Link>
                </nav>

                {/* Right: Actions */}
                <div className="flex items-center space-x-3">
                    {/* Contact Button (Desktop) */}
                    <Link href="/contact" className="hidden md:block">
                        <Button
                            className="bg-[#f6c804] hover:bg-[#e5b703] text-black font-semibold px-6 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(246,200,4,0.4)] transition-all duration-300"
                        >
                            Contact
                        </Button>
                    </Link>

                    {/* Search Icon */}
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Search"
                        className="rounded-full hover:bg-foreground/10"
                    >
                        <Search className="h-5 w-5" />
                    </Button>

                    {/* Animated Theme Toggle */}
                    <AnimatedThemeToggle />

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0 bg-background/95 backdrop-blur-xl">
                            <Link href="/" className="flex items-center mb-8">
                                <span className="font-bold text-xl">Akash Talks</span>
                            </Link>
                            <div className="flex flex-col space-y-4">
                                <Link href="/" className="text-lg font-medium hover:text-[#f6c804] transition-colors">
                                    Home
                                </Link>
                                <Link href="/colleges" className="text-lg font-medium hover:text-[#f6c804] transition-colors">
                                    Colleges
                                </Link>
                                <Link href="/exams" className="text-lg font-medium hover:text-[#f6c804] transition-colors">
                                    Exams
                                </Link>
                                <Link href="/contact" className="mt-4">
                                    <Button className="w-full bg-[#f6c804] hover:bg-[#e5b703] text-black font-semibold rounded-full">
                                        Contact
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </LayoutContainer>
        </header>
    )
}

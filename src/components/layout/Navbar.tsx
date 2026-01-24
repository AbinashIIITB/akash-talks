"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun, Search } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
    const { setTheme, theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-md">
                        {mounted ? (
                            <Image
                                src={resolvedTheme === "dark" ? "/logo-dark.jpg" : "/logo-light.jpg"}
                                alt="Akash Talks"
                                fill
                                className="object-cover scale-110"
                            />
                        ) : (
                            <div className="h-full w-full bg-muted" />
                        )}
                    </div>
                    <span className="font-bold text-lg">Akash Talks</span>
                </Link>

                {/* Center: Nav Links (Desktop) */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link href="/colleges" className="transition-colors hover:text-primary text-foreground/70">
                        Colleges
                    </Link>
                    <Link href="/exams" className="transition-colors hover:text-primary text-foreground/70">
                        Exams
                    </Link>
                    <Link href="/courses" className="transition-colors hover:text-primary text-foreground/70">
                        Courses
                    </Link>
                </nav>

                {/* Right: Actions */}
                <div className="flex items-center space-x-2">
                    {/* Contact Button (Desktop) */}
                    <Link href="/contact" className="hidden md:block">
                        <Button
                            className="bg-[#f6c804] hover:bg-[#e5b703] text-black font-semibold px-6"
                        >
                            Contact
                        </Button>
                    </Link>

                    {/* Search Icon */}
                    <Button variant="ghost" size="icon" aria-label="Search">
                        <Search className="h-5 w-5" />
                    </Button>

                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle Theme"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <Link href="/" className="flex items-center mb-6">
                                <span className="font-bold text-lg">Akash Talks</span>
                            </Link>
                            <div className="flex flex-col space-y-4">
                                <Link href="/colleges" className="text-lg font-medium">Colleges</Link>
                                <Link href="/exams" className="text-lg font-medium">Exams</Link>
                                <Link href="/courses" className="text-lg font-medium">Courses</Link>
                                <Link href="/contact">
                                    <Button className="w-full bg-[#f6c804] hover:bg-[#e5b703] text-black font-semibold">
                                        Contact
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

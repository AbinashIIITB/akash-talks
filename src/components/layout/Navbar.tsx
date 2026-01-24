"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun, Search } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
    const { setTheme, theme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Link href="/" className="mr-8 flex items-center space-x-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-md bg-black">
                        <Image src="/logo.jpg" alt="Akash Talks" fill className="object-cover scale-110" />
                    </div>
                    <span className="hidden font-bold sm:inline-block">Akash Talks</span>
                </Link>
                <div className="mr-4 hidden md:flex">
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/colleges" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Colleges
                        </Link>
                        <Link href="/exams" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Exams
                        </Link>
                        <Link href="/courses" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Courses
                        </Link>
                        <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search colleges..."
                                className="pl-8 md:w-[300px] lg:w-[300px]"
                            />
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle Theme"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <Link href="/" className="flex items-center">
                                <span className="font-bold">Akash Talks</span>
                            </Link>
                            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                                <div className="flex flex-col space-y-3">
                                    <Link href="/colleges">Colleges</Link>
                                    <Link href="/exams">Exams</Link>
                                    <Link href="/courses">Courses</Link>
                                    <Link href="/contact">Contact</Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

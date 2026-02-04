"use client"

import * as React from "react"
import { Search as SearchIcon, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import {
    useSearch,
    useSearchNavigation,
    filterByType,
    hasResultType,
    SearchResult
} from "@/hooks/useSearch"

export function Search() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const { results } = useSearch(query)
    const { navigateToResult } = useSearchNavigation()

    // Ref for click outside
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSelect = (result: SearchResult) => {
        setIsOpen(false)
        setQuery("")
        navigateToResult(result)
    }

    return (
        <div ref={containerRef} className="relative z-50">
            <div className={cn(
                "relative flex items-center transition-all duration-300",
                isOpen ? "w-64 md:w-80" : "w-10 md:w-10"
            )}>
                {isOpen ? (
                    <div className="relative w-full">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            autoFocus
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search colleges or exams..."
                            className="w-full h-10 pl-9 pr-9 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#f6c804]/50"
                        />
                        <button
                            onClick={() => {
                                setIsOpen(false)
                                setQuery("")
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-muted p-0.5 rounded-full transition-colors"
                        >
                            <X className="h-4 w-4 text-muted-foreground" />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
                        aria-label="Search"
                    >
                        <SearchIcon className="h-4 w-4 text-foreground/70" />
                    </button>
                )}
            </div>

            {/* Results Dropdown */}
            <AnimatePresence>
                {isOpen && query.trim() && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-12 right-0 w-80 bg-zinc-900 rounded-lg shadow-xl overflow-hidden"
                    >
                        <div className="max-h-[60vh] overflow-y-auto py-2">
                            {results.length > 0 ? (
                                <>
                                    {/* Engineering Colleges */}
                                    {hasResultType(results, 'college') && (
                                        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                                            Engineering Colleges
                                        </div>
                                    )}
                                    {filterByType(results, 'college').map((result) => (
                                        <button
                                            key={`college-${result.item.id}`}
                                            onClick={() => handleSelect(result)}
                                            className="w-full text-left px-4 py-3 hover:bg-zinc-800 transition-colors group"
                                        >
                                            <span className="text-sm font-medium text-white group-hover:text-[#f6c804] transition-colors line-clamp-1 block">
                                                {result.item.name}
                                            </span>
                                            <span className="text-xs text-zinc-500 line-clamp-1 block">
                                                {result.item.location}
                                            </span>
                                        </button>
                                    ))}

                                    {/* Medical Colleges */}
                                    {hasResultType(results, 'medical') && (
                                        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider border-t border-zinc-800">
                                            Medical Colleges
                                        </div>
                                    )}
                                    {filterByType(results, 'medical').map((result) => (
                                        <button
                                            key={`medical-${result.item.slug}`}
                                            onClick={() => handleSelect(result)}
                                            className="w-full text-left px-4 py-3 hover:bg-zinc-800 transition-colors group"
                                        >
                                            <span className="text-sm font-medium text-white group-hover:text-[#f6c804] transition-colors line-clamp-1 block">
                                                {result.item.name}
                                            </span>
                                            <span className="text-xs text-zinc-500 line-clamp-1 block">
                                                {result.item.location}
                                            </span>
                                        </button>
                                    ))}

                                    {/* Exams */}
                                    {hasResultType(results, 'exam') && (
                                        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider border-t border-zinc-800">
                                            Exams
                                        </div>
                                    )}
                                    {filterByType(results, 'exam').map((result) => (
                                        <button
                                            key={`exam-${result.item.id}`}
                                            onClick={() => handleSelect(result)}
                                            className="w-full text-left px-4 py-3 hover:bg-zinc-800 transition-colors group"
                                        >
                                            <span className="text-sm font-medium text-white group-hover:text-[#f6c804] transition-colors block">
                                                {result.item.title}
                                            </span>
                                        </button>
                                    ))}
                                </>
                            ) : (
                                <div className="p-4 text-center text-sm text-zinc-500">
                                    No results found
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

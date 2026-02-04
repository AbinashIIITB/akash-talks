"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    useSearch,
    useSearchNavigation,
    filterByType,
    hasResultType,
    SearchResult
} from "@/hooks/useSearch"

interface MobileSearchInputProps {
    placeholder?: string;
    onClose: () => void;
    onNavigate?: () => void;
    className?: string;
}

export function MobileSearchInput({
    placeholder = "Search...",
    onClose,
    onNavigate,
    className = ""
}: MobileSearchInputProps) {
    const [query, setQuery] = React.useState("")
    const { results } = useSearch(query)
    const { navigateToResult } = useSearchNavigation()
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Focus input on mount
    React.useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleSelect = (result: SearchResult) => {
        onClose()
        onNavigate?.()
        setQuery("")
        navigateToResult(result)
    }

    return (
        <div className="relative w-full">
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className={`w-full h-9 pl-3 pr-8 rounded-lg bg-[#f6c804]/10 border-none outline-none text-sm text-foreground placeholder:text-muted-foreground ${className}`}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                        onClose()
                    }
                }}
            />

            {/* Auto-suggestions dropdown */}
            <AnimatePresence>
                {query.trim() && results.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 rounded-lg shadow-xl overflow-hidden z-50"
                    >
                        <div className="max-h-[50vh] overflow-y-auto py-2">
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
                                    className="w-full text-left px-4 py-3 transition-colors hover:bg-zinc-800 group"
                                >
                                    <div className="text-sm font-medium text-white group-hover:text-[#f6c804] transition-colors line-clamp-1">
                                        {result.item.name}
                                    </div>
                                    <div className="text-xs text-zinc-500 line-clamp-1">
                                        {result.item.location}
                                    </div>
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
                                    className="w-full text-left px-4 py-3 transition-colors hover:bg-zinc-800 group"
                                >
                                    <div className="text-sm font-medium text-white group-hover:text-[#f6c804] transition-colors line-clamp-1">
                                        {result.item.name}
                                    </div>
                                    <div className="text-xs text-zinc-500 line-clamp-1">
                                        {result.item.location}
                                    </div>
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
                                    className="w-full text-left px-4 py-3 transition-colors hover:bg-zinc-800 group"
                                >
                                    <div className="text-sm font-medium text-white group-hover:text-[#f6c804] transition-colors">
                                        {result.item.title}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* No results message */}
            <AnimatePresence>
                {query.trim() && results.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 rounded-lg shadow-xl overflow-hidden z-50"
                    >
                        <div className="p-4 text-center text-sm text-zinc-500">
                            No results found
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

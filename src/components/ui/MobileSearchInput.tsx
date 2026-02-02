"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import collegesData from "@/data/colleges.json"
import examsData from "@/data/exams.json"

type CollegeItem = typeof collegesData[number]
type ExamItem = typeof examsData[number]

interface MobileSearchInputProps {
    placeholder?: string;
    onClose: () => void;
    onNavigate?: () => void; // Called after navigation
    className?: string;
}

export function MobileSearchInput({
    placeholder = "Search...",
    onClose,
    onNavigate,
    className = ""
}: MobileSearchInputProps) {
    const router = useRouter()
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState<({ type: 'college', item: CollegeItem } | { type: 'exam', item: ExamItem })[]>([])
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Focus input on mount
    React.useEffect(() => {
        inputRef.current?.focus()
    }, [])

    // Search Logic
    React.useEffect(() => {
        if (!query.trim()) {
            setResults([])
            return
        }

        const lowerQuery = query.toLowerCase()

        const matchedColleges = collegesData
            .filter(c => c.name.toLowerCase().includes(lowerQuery) || c.location.toLowerCase().includes(lowerQuery))
            .slice(0, 4)
            .map(c => ({ type: 'college' as const, item: c }))

        const matchedExams = examsData
            .filter(e => e.title.toLowerCase().includes(lowerQuery))
            .slice(0, 2)
            .map(e => ({ type: 'exam' as const, item: e }))

        setResults([...matchedColleges, ...matchedExams])
    }, [query])

    const handleSelect = (result: { type: 'college', item: CollegeItem } | { type: 'exam', item: ExamItem }) => {
        onClose()
        onNavigate?.()
        setQuery("")
        if (result.type === 'college') {
            const href = result.item.link || `/colleges/${result.item.id}`
            router.push(href)
        } else {
            const href = result.item.link || `/exams/${result.item.id}`
            router.push(href)
        }
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
                            {results.some(r => r.type === 'college') && (
                                <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                                    Colleges
                                </div>
                            )}
                            {results.filter(r => r.type === 'college').map((result) => (
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

                            {results.some(r => r.type === 'exam') && (
                                <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider border-t border-zinc-800">
                                    Exams
                                </div>
                            )}
                            {results.filter(r => r.type === 'exam').map((result) => (
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

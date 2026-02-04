"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

// Import data
import collegesData from "@/data/colleges.json"
import { medicalColleges } from "@/lib/data"
import examsData from "@/data/exams.json"

// Types
export type CollegeItem = typeof collegesData[number]
export type MedicalCollegeItem = typeof medicalColleges[number]
export type ExamItem = typeof examsData[number]

export type SearchResult =
    | { type: 'college', item: CollegeItem }
    | { type: 'medical', item: MedicalCollegeItem }
    | { type: 'exam', item: ExamItem }

export interface UseSearchOptions {
    maxColleges?: number
    maxMedicalColleges?: number
    maxExams?: number
}

export function useSearch(query: string, options: UseSearchOptions = {}) {
    const {
        maxColleges = 4,
        maxMedicalColleges = 4,
        maxExams = 3,
    } = options

    const [results, setResults] = React.useState<SearchResult[]>([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        if (!query.trim()) {
            setResults([])
            return
        }

        setIsLoading(true)
        const lowerQuery = query.toLowerCase()

        // Filter Engineering Colleges
        const matchedColleges = collegesData
            .filter(c => c.name.toLowerCase().includes(lowerQuery) || c.location.toLowerCase().includes(lowerQuery))
            .slice(0, maxColleges)
            .map(c => ({ type: 'college' as const, item: c }))

        // Filter Medical Colleges
        const matchedMedicalColleges = medicalColleges
            .filter((c: MedicalCollegeItem) => c.name.toLowerCase().includes(lowerQuery) || c.location.toLowerCase().includes(lowerQuery))
            .slice(0, maxMedicalColleges)
            .map((c: MedicalCollegeItem) => ({ type: 'medical' as const, item: c }))

        // Filter Exams
        const matchedExams = examsData
            .filter(e => e.title.toLowerCase().includes(lowerQuery))
            .slice(0, maxExams)
            .map(e => ({ type: 'exam' as const, item: e }))

        setResults([...matchedColleges, ...matchedMedicalColleges, ...matchedExams])
        setIsLoading(false)
    }, [query, maxColleges, maxMedicalColleges, maxExams])

    return { results, isLoading }
}

export function useSearchNavigation() {
    const router = useRouter()

    const navigateToResult = React.useCallback((result: SearchResult) => {
        if (result.type === 'college') {
            const href = result.item.link || `/colleges/${result.item.id}`
            router.push(href)
        } else if (result.type === 'medical') {
            router.push(`/medical-colleges/${result.item.slug}`)
        } else {
            const href = result.item.link || `/exams/${result.item.id}`
            router.push(href)
        }
    }, [router])

    return { navigateToResult }
}

// Helper to get display info for results
export function getResultInfo(result: SearchResult): { name: string; subtitle: string } {
    if (result.type === 'college') {
        return { name: result.item.name, subtitle: result.item.location }
    } else if (result.type === 'medical') {
        return { name: result.item.name, subtitle: result.item.location }
    } else {
        return { name: result.item.title, subtitle: '' }
    }
}

// Check if results have items of specific type
export function hasResultType(results: SearchResult[], type: 'college' | 'medical' | 'exam'): boolean {
    return results.some(r => r.type === type)
}

// Filter results by type
export function filterByType<T extends SearchResult['type']>(
    results: SearchResult[],
    type: T
): Extract<SearchResult, { type: T }>[] {
    return results.filter(r => r.type === type) as Extract<SearchResult, { type: T }>[]
}

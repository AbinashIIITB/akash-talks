import { MetadataRoute } from 'next'
import { colleges, medicalColleges } from '@/lib/data'
import { exams } from '@/lib/examData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.akashtalks.in'
    // Use a stable date to avoid confusing Google with constantly changing lastModified
    // Update this date when you make meaningful content changes
    const currentDate = new Date('2026-02-10')

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/colleges`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/exams`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Dynamic engineering college pages
    const collegePages: MetadataRoute.Sitemap = colleges.map((college) => ({
        url: `${baseUrl}/colleges/${college.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic medical college pages
    const medicalCollegePages: MetadataRoute.Sitemap = medicalColleges.map((college) => ({
        url: `${baseUrl}/medical-colleges/${college.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic exam pages
    const examPages: MetadataRoute.Sitemap = exams.map((exam) => ({
        url: `${baseUrl}/exams/${exam.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [...staticPages, ...collegePages, ...medicalCollegePages, ...examPages]
}


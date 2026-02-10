import { notFound } from "next/navigation";
import { Metadata } from "next";
import { exams } from "@/lib/data";
import ExamDetailContent from "./ExamDetailContent";

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const exam = exams.find((e) => e.slug === resolvedParams.slug);

    if (!exam) {
        return {
            title: "Exam Not Found",
            description: "The requested exam page could not be found.",
        };
    }

    const title = `${exam.name} ${new Date().getFullYear() + 1} - Dates, Eligibility, Application Process`;
    const description = `Complete guide to ${exam.fullName}. ${exam.description} Get application dates, eligibility criteria, exam pattern, and counselling process.`;

    const keywords = [
        exam.name,
        exam.fullName,
        `${exam.name} ${new Date().getFullYear() + 1}`,
        `${exam.name} exam date`,
        `${exam.name} eligibility`,
        `${exam.name} application`,
        `${exam.name} syllabus`,
        `${exam.name} counselling`,
        "engineering entrance exam",
        "B.Tech entrance exam",
    ];

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url: `https://www.akashtalks.in/exams/${exam.slug}`,
            siteName: "Akash Talks",
            locale: "en_IN",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: `https://www.akashtalks.in/exams/${exam.slug}`,
        },
    };
}

// SSG: Only allow known slugs, return 404 for others
export const dynamicParams = false;

export function generateStaticParams() {
    return exams.map((exam) => ({
        slug: exam.slug,
    }));
}

// In Next.js 15+, params is a Promise
interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// JSON-LD Structured Data for Exam
function ExamJsonLd({ exam }: { exam: typeof exams[0] }) {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${exam.fullName} - Complete Guide`,
        "description": exam.description,
        "author": {
            "@type": "Organization",
            "name": "Akash Talks"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Akash Talks",
            "url": "https://www.akashtalks.in"
        },
    };

    const faqSchema = exam.faqs && exam.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": exam.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.akashtalks.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Exams",
                "item": "https://www.akashtalks.in/exams"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": exam.name,
                "item": `https://www.akashtalks.in/exams/${exam.slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}

export default async function ExamDetailPage(props: PageProps) {
    const params = await props.params;
    const exam = exams.find((e) => e.slug === params.slug);

    if (!exam) {
        notFound();
    }

    return (
        <>
            <ExamJsonLd exam={exam} />
            <ExamDetailContent exam={exam} />

            {/* Related Exams - Internal linking for SEO */}
            {(() => {
                const relatedExams = exams.filter(e => e.slug !== exam.slug).slice(0, 4);
                if (relatedExams.length === 0) return null;
                return (
                    <div className="w-full px-4 md:px-8 py-12">
                        <h2 className="text-2xl font-bold mb-6">Other Exams You Should Know About</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedExams.map((re) => (
                                <a
                                    key={re.slug}
                                    href={`/exams/${re.slug}`}
                                    className="block p-4 border rounded-xl bg-card hover:border-[#f6c804]/50 hover:shadow-md transition-all"
                                >
                                    <h3 className="font-semibold text-sm mb-1">{re.name}</h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2">{re.fullName}</p>
                                    <p className="text-xs text-[#f6c804] mt-2">View Details →</p>
                                </a>
                            ))}
                        </div>
                    </div>
                );
            })()}
        </>
    );
}


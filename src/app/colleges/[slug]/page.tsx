import { notFound } from "next/navigation";
import { Metadata } from "next";

import { colleges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageGallery } from "@/components/ui/image-gallery";
import { CollegeEnquiryForm } from "@/components/ui/CollegeEnquiryForm";
import { ScrollSpyTOC, MobileScrollSpyTOC } from "@/components/ui/ScrollSpyTOC";
import {
    MapPin, Star, Building2,
    CheckCircle2, Globe, Briefcase,
    Calendar, Users, DollarSign, BookOpen, Award,
    TrendingUp, Scale,
    ClipboardList, HelpCircle, Lightbulb, MessageCircle, Images
} from "lucide-react";

// In Next.js 15, params is a Promise
interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const college = colleges.find((c) => c.slug === resolvedParams.slug);

    if (!college) {
        return {
            title: "College Not Found",
            description: "The requested college page could not be found.",
        };
    }

    const title = `${college.name} - Admission, Fees, Placements, Cutoffs 2026`;
    const description = `Get admission in ${college.name}, ${college.location}. Courses: ${college.courses.join(", ")}. Fees: ${college.fees}. ${college.placements ? `Highest Package: ${college.placements.stats[0]?.value}` : ""} Apply through Akash Talks for expert guidance.`;

    const keywords = [
        college.name,
        `${college.name} admission`,
        `${college.name} fees`,
        `${college.name} placements`,
        `${college.name} cutoff`,
        `${college.name} reviews`,
        ...college.courses.map(c => `${c} in ${college.location}`),
        `engineering colleges in ${college.state}`,
        `B.Tech admission ${college.location}`,
        college.location,
        college.state,
    ];

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url: `https://www.akashtalks.in/colleges/${college.slug}`,
            siteName: "Akash Talks",
            locale: "en_IN",
            type: "website",
            images: college.imageUrl ? [
                {
                    url: college.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: college.name,
                },
            ] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: college.imageUrl ? [college.imageUrl] : undefined,
        },
        alternates: {
            canonical: `https://www.akashtalks.in/colleges/${college.slug}`,
        },
    };
}

// JSON-LD Structured Data Component
function CollegeJsonLd({ college }: { college: typeof colleges[0] }) {
    const educationalOrgSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": college.name,
        "description": college.about || college.description,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": college.location,
            "addressRegion": college.state,
            "addressCountry": "IN"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": college.rating,
            "reviewCount": college.reviews,
            "bestRating": 5,
            "worstRating": 1
        },
        ...(college.established && { "foundingDate": college.established }),
        ...(college.contact?.website && { "url": college.contact.website }),
    };

    const faqSchema = college.faqs && college.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": college.faqs.map(faq => ({
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
                "name": "Colleges",
                "item": "https://www.akashtalks.in/colleges"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": college.name,
                "item": `https://www.akashtalks.in/colleges/${college.slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
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

export default async function CollegeDetailPage(props: PageProps) {
    const params = await props.params;
    const college = colleges.find((c) => c.slug === params.slug);

    if (!college) {
        notFound();
    }

    // Build dynamic sections based on available data - using iconName strings for Client Component
    const allSections = [
        { id: "gallery", label: "Gallery", iconName: "Images", available: !!college.galleryImages && college.galleryImages.length > 0 },
        { id: "about", label: "About", iconName: "Building2", available: true },
        { id: "cutoffs", label: "Cutoffs", iconName: "TrendingUp", available: !!college.cutoffs },
        { id: "courses", label: "Courses", iconName: "BookOpen", available: true },
        { id: "fees", label: "Fees", iconName: "DollarSign", available: true },
        { id: "placements", label: "Placements", iconName: "Briefcase", available: !!college.placements },
        { id: "admission", label: "How to Apply", iconName: "ClipboardList", available: !!college.admissions },
        { id: "keyDates", label: "Key Dates", iconName: "Calendar", available: !!college.keyDates },
        { id: "whyChoose", label: "Why Choose Us", iconName: "Lightbulb", available: !!college.whyChoose },
        { id: "scholarships", label: "Scholarships", iconName: "Award", available: !!college.scholarships },
        { id: "alumni", label: "Alumni", iconName: "Users", available: !!college.alumni },
        { id: "compare", label: "Compare", iconName: "Scale", available: !!college.compare },
        { id: "faqs", label: "FAQs", iconName: "HelpCircle", available: !!college.faqs },
        { id: "akashTalks", label: "Why Akash Talks", iconName: "Award", available: !!college.whyChooseAkashTalks },
    ];

    const sections = allSections.filter(s => s.available).map(({ available, ...rest }) => rest);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* JSON-LD Structured Data */}
            <CollegeJsonLd college={college} />

            {/* Hero Section - Premium Engineering Theme */}
            <div className="relative h-[400px] w-full bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-slate-900/80 to-slate-900/90 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />

                {/* Background Image - Generic Engineering Theme */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
                </div>

                <div className="relative z-30 container h-full flex flex-col justify-end pb-12 px-4 md:px-8">
                    <div className="max-w-4xl space-y-4">
                        {/* College Name - First for better mobile hierarchy */}
                        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight">
                            {college.name}
                        </h1>

                        {/* Badges - Below title for mobile */}
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-[#f6c804] text-black hover:bg-[#e5b703] border-none text-xs md:text-sm px-2 md:px-3 py-1">
                                {college.type}
                            </Badge>
                            {college.tags.map((tag, i) => (
                                <Badge key={i} variant="outline" className="text-white border-white/30 backdrop-blur-sm text-xs md:text-sm">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center text-gray-300 gap-3 md:gap-6 text-sm md:text-lg">
                            <span className="flex items-center gap-1.5 md:gap-2">
                                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#f6c804]" /> {college.location}
                            </span>
                            <span className="flex items-center gap-1.5 md:gap-2">
                                <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#f6c804] text-[#f6c804]" /> {college.rating} ({college.reviews})
                            </span>
                            {college.established && (
                                <span className="hidden md:flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-blue-400" /> Est. {college.established}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 md:px-8 mt-8">
                {/* Mobile Table of Contents - Horizontal scrolling with scroll spy */}
                <MobileScrollSpyTOC sections={sections} className="lg:hidden mb-6" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Sidebar Navigation (Desktop) - with scroll spy */}
                    <div className="hidden lg:block lg:col-span-2">
                        <ScrollSpyTOC sections={sections} />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-7 space-y-10">

                        {/* Image Gallery */}
                        {college.galleryImages && college.galleryImages.length > 0 && (
                            <section id="gallery" className="scroll-mt-24 space-y-4">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Images className="h-6 w-6 text-[#f6c804]" /> Campus Gallery
                                </h2>
                                <ImageGallery images={college.galleryImages} collegeName={college.name} />
                            </section>
                        )}

                        {college.galleryImages && college.galleryImages.length > 0 && <div className="h-px w-full bg-border" />}

                        {/* About */}
                        <section id="about" className="scroll-mt-24 space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <Building2 className="h-6 w-6 text-[#f6c804]" /> About
                            </h2>
                            <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {college.about || college.description || "No description available."}
                            </div>
                            {college.highlights && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {college.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {college.infrastructure && (
                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-3">Infrastructure & Facilities</h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {college.infrastructure.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-[#f6c804] shrink-0 mt-0.5" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        <div className="h-px w-full bg-border" />

                        {/* Cutoffs */}
                        {college.cutoffs && (
                            <>
                                <section id="cutoffs" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <TrendingUp className="h-6 w-6 text-[#f6c804]" /> Cutoffs
                                    </h2>
                                    <div className="space-y-6">
                                        {college.cutoffs.map((cutoff, i) => (
                                            <div key={i} className="border rounded-xl overflow-hidden">
                                                <div className="bg-muted/50 px-4 py-3 border-b">
                                                    <h3 className="font-bold">{cutoff.title}</h3>
                                                </div>
                                                <div className="divide-y">
                                                    {cutoff.table.map((row, j) => (
                                                        <div key={j} className="flex justify-between p-4 hover:bg-muted/30 transition-colors">
                                                            <span className="text-muted-foreground">{row.label}</span>
                                                            <span className="font-medium">{row.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                {cutoff.description && (
                                                    <div className="px-4 py-3 bg-[#f6c804]/5 border-t text-sm text-muted-foreground">
                                                        {cutoff.description}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Courses */}
                        <section id="courses" className="scroll-mt-24 space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <BookOpen className="h-6 w-6 text-[#f6c804]" /> Courses Offered
                            </h2>
                            {college.coursesDetails ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {college.coursesDetails.map((course, idx) => (
                                        <div key={idx} className="p-4 border rounded-xl hover:border-[#f6c804]/50 transition-colors bg-card">
                                            <h3 className="font-bold text-lg">{course.name}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">{course.duration} • {course.type}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {college.courses.map((course, idx) => (
                                        <div key={idx} className="p-4 border rounded-xl hover:border-[#f6c804]/50 transition-colors bg-card">
                                            <h3 className="font-bold text-lg">{course}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">4 Years • Full Time</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <div className="h-px w-full bg-border" />

                        {/* Fees */}
                        <section id="fees" className="scroll-mt-24 space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <DollarSign className="h-6 w-6 text-[#f6c804]" /> Fee Structure
                            </h2>
                            {college.feesDetails ? (
                                <div className="space-y-6">
                                    {college.feesDetails.map((feeSection, i) => (
                                        <div key={i} className="border rounded-xl overflow-hidden">
                                            <div className="bg-muted/50 px-4 py-3 border-b">
                                                <h3 className="font-bold">{feeSection.title}</h3>
                                            </div>
                                            <div className="divide-y">
                                                {feeSection.items.map((item, j) => (
                                                    <div key={j} className="flex justify-between p-4 hover:bg-muted/30 transition-colors">
                                                        <span className="text-muted-foreground">{item.label}</span>
                                                        <span className="font-medium">{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {feeSection.note && (
                                                <div className="px-4 py-3 bg-[#f6c804]/5 border-t text-sm text-muted-foreground">
                                                    {feeSection.note}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-6 bg-muted/30 border rounded-2xl">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-primary">{college.fees}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        *Fees are approximate and subject to change. Valid for 2026-27 session.
                                    </p>
                                </div>
                            )}
                        </section>

                        <div className="h-px w-full bg-border" />

                        {/* Placements */}
                        {college.placements && (
                            <>
                                <section id="placements" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Briefcase className="h-6 w-6 text-[#f6c804]" /> Jobs & Placements
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {college.placements.stats.map((stat, i) => (
                                            <div key={i} className="p-5 border bg-card rounded-xl text-center">
                                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                                                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {college.placements.highlights && (
                                        <div className="space-y-2">
                                            {college.placements.highlights.map((h, i) => (
                                                <div key={i} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {college.placements.topRecruiters && (
                                        <div className="space-y-4 mt-4">
                                            <h3 className="font-semibold text-lg">Top Recruiters</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {college.placements.topRecruiters.map((cat, i) => (
                                                    <div key={i}>
                                                        <h4 className="text-sm font-medium text-[#f6c804] mb-2">{cat.category}</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {cat.companies.map((co, j) => (
                                                                <span key={j} className="px-2 py-1 bg-muted rounded text-sm text-muted-foreground">{co}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* How to Apply */}
                        {college.admissions && (
                            <>
                                <section id="admission" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <ClipboardList className="h-6 w-6 text-[#f6c804]" /> How to Apply
                                    </h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-lg mb-3">Application Process</h3>
                                            <div className="space-y-4">
                                                {college.admissions.process.map((step, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f6c804] text-black font-bold flex items-center justify-center text-sm">
                                                            {i + 1}
                                                        </div>
                                                        <div className="flex-1 pt-1 text-muted-foreground">{step}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="border rounded-xl p-4">
                                            <h3 className="font-semibold text-lg mb-3">Eligibility Criteria</h3>
                                            <ul className="space-y-2">
                                                {college.admissions.eligibility.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="border rounded-xl p-4">
                                            <h3 className="font-semibold text-lg mb-3">Documents Required</h3>
                                            <ul className="space-y-2">
                                                {college.admissions.documents.map((doc, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 text-[#f6c804] shrink-0 mt-0.5" />
                                                        {doc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Key Dates */}
                        {college.keyDates && (
                            <>
                                <section id="keyDates" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Calendar className="h-6 w-6 text-[#f6c804]" /> Key Dates
                                    </h2>
                                    <div className="border rounded-xl overflow-hidden">
                                        <div className="divide-y">
                                            {college.keyDates.map((item, i) => (
                                                <div key={i} className="flex justify-between p-4 hover:bg-muted/30 transition-colors">
                                                    <span className="text-muted-foreground">{item.event}</span>
                                                    <span className="font-medium text-[#f6c804]">{item.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Why Choose Us */}
                        {college.whyChoose && (
                            <>
                                <section id="whyChoose" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Lightbulb className="h-6 w-6 text-[#f6c804]" /> Why Choose {college.name.split(' ')[0]}?
                                    </h2>
                                    <div className="grid grid-cols-1 gap-3">
                                        {college.whyChoose.map((reason, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-muted">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-sm">{reason}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Scholarships */}
                        {college.scholarships && (
                            <>
                                <section id="scholarships" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Award className="h-6 w-6 text-[#f6c804]" /> Scholarships
                                    </h2>
                                    <div className="space-y-4">
                                        {college.scholarships.map((sch, i) => (
                                            <div key={i} className="border rounded-xl overflow-hidden">
                                                <div className="bg-muted/50 px-4 py-3 border-b">
                                                    <h3 className="font-bold">{sch.title}</h3>
                                                </div>
                                                <div className="divide-y">
                                                    {sch.items.map((item, j) => (
                                                        <div key={j} className="flex justify-between p-4 hover:bg-muted/30 transition-colors">
                                                            <span className="text-muted-foreground">{item.label}</span>
                                                            <span className="font-medium text-green-600">{item.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Alumni */}
                        {college.alumni && (
                            <>
                                <section id="alumni" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Users className="h-6 w-6 text-[#f6c804]" /> Alumni Network
                                    </h2>
                                    {college.alumni.description && (
                                        <p className="text-muted-foreground leading-relaxed">{college.alumni.description}</p>
                                    )}
                                    {college.alumni.companies && (
                                        <div>
                                            <h3 className="font-semibold text-lg mb-3">Alumni Working At</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {college.alumni.companies.map((company, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-muted rounded-full text-sm">{company}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {college.alumni.achievements && (
                                        <div>
                                            <h3 className="font-semibold text-lg mb-3">Notable Achievements</h3>
                                            <div className="space-y-2">
                                                {college.alumni.achievements.map((achievement, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="h-4 w-4 text-[#f6c804] shrink-0 mt-0.5" />
                                                        {achievement}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Compare */}
                        {college.compare && (
                            <>
                                <section id="compare" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Scale className="h-6 w-6 text-[#f6c804]" /> Compare
                                    </h2>
                                    <div className="border rounded-xl overflow-hidden overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-muted/50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold">Parameter</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#f6c804]">{college.name.split(' ')[0]}</th>
                                                    {college.compare[0].competitor1 && (
                                                        <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Competitor 1</th>
                                                    )}
                                                    {college.compare[0].competitor2 && (
                                                        <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Competitor 2</th>
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {college.compare.map((row, i) => (
                                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                                        <td className="px-4 py-3 text-sm font-medium">{row.parameter}</td>
                                                        <td className="px-4 py-3 text-sm text-[#f6c804]">{row.thisCollege}</td>
                                                        {row.competitor1 && (
                                                            <td className="px-4 py-3 text-sm text-muted-foreground">{row.competitor1}</td>
                                                        )}
                                                        {row.competitor2 && (
                                                            <td className="px-4 py-3 text-sm text-muted-foreground">{row.competitor2}</td>
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* FAQs */}
                        {college.faqs && (
                            <>
                                <section id="faqs" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <HelpCircle className="h-6 w-6 text-[#f6c804]" /> FAQs
                                    </h2>
                                    <div className="space-y-4">
                                        {college.faqs.map((faq, i) => (
                                            <div key={i} className="border rounded-xl p-4 bg-card">
                                                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                                                <p className="text-muted-foreground">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Why Choose Through Akash Talks */}
                        {college.whyChooseAkashTalks && (
                            <>
                                <section id="akashTalks" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Award className="h-6 w-6 text-[#f6c804]" /> Why Choose {college.name.split('(')[0].trim()} Through Akash Talks?
                                    </h2>
                                    <div className="bg-gradient-to-br from-[#f6c804]/10 to-transparent border-2 border-[#f6c804]/30 rounded-2xl p-6">
                                        <p className="text-muted-foreground mb-4">Akash Talks is your trusted partner for hassle-free admissions. Here's why:</p>
                                        <div className="grid grid-cols-1 gap-3">
                                            {college.whyChooseAkashTalks.map((reason, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                                                    <CheckCircle2 className="h-5 w-5 text-[#f6c804] shrink-0 mt-0.5" />
                                                    <span className="text-sm">{reason}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                            <a href="/contact" className="flex-1">
                                                <Button className="w-full bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold">
                                                    Book Free Counseling
                                                </Button>
                                            </a>
                                            <a href="https://wa.me/919874878782" target="_blank" className="flex-1">
                                                <Button variant="outline" className="w-full border-[#f6c804] text-[#f6c804] hover:bg-[#f6c804]/10">
                                                    <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )}


                    </div>

                    {/* Right Sidebar: Enquiry Form */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="border border-[#f6c804]/20 rounded-2xl p-6 bg-card shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#f6c804]" />
                                <h3 className="text-xl font-bold mb-2">Secure Your Admission Now</h3>
                                <p className="text-sm text-muted-foreground mb-6">Get detailed counseling and fee breakdown for {college.name}.</p>

                                <CollegeEnquiryForm collegeName={college.name} />

                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    800+ students applied last week
                                </p>
                            </div>

                            <a
                                href={college.contact?.whatsapp ? `https://wa.me/${college.contact.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/919874878782"}
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full p-4 rounded-xl border-2 border-dashed border-green-500/20 bg-green-500/5 text-green-600 font-bold hover:bg-green-500/10 transition-colors cursor-pointer"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return colleges.map((college) => ({
        slug: college.slug,
    }));
}

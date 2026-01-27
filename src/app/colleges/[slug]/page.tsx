import { notFound } from "next/navigation";
import Link from "next/link";
import { colleges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    MapPin, Star, Building2, Download, Share2,
    CheckCircle2, Globe, GraduationCap, Briefcase,
    Calendar, Users, DollarSign, BookOpen, Award,
    Phone, Mail, ExternalLink, TrendingUp, Scale,
    ClipboardList, HelpCircle, Lightbulb, MessageCircle
} from "lucide-react";

// In Next.js 15, params is a Promise
interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CollegeDetailPage(props: PageProps) {
    const params = await props.params;
    const college = colleges.find((c) => c.slug === params.slug);

    if (!college) {
        notFound();
    }

    // Build dynamic sections based on available data
    const allSections = [
        { id: "about", label: "About", icon: Building2, available: true },
        { id: "cutoffs", label: "Cutoffs", icon: TrendingUp, available: !!college.cutoffs },
        { id: "courses", label: "Courses", icon: BookOpen, available: true },
        { id: "fees", label: "Fees", icon: DollarSign, available: true },
        { id: "placements", label: "Placements", icon: Briefcase, available: !!college.placements },
        { id: "admission", label: "How to Apply", icon: ClipboardList, available: !!college.admissions },
        { id: "keyDates", label: "Key Dates", icon: Calendar, available: !!college.keyDates },
        { id: "whyChoose", label: "Why Choose Us", icon: Lightbulb, available: !!college.whyChoose },
        { id: "scholarships", label: "Scholarships", icon: Award, available: !!college.scholarships },
        { id: "alumni", label: "Alumni", icon: Users, available: !!college.alumni },
        { id: "compare", label: "Compare", icon: Scale, available: !!college.compare },
        { id: "faqs", label: "FAQs", icon: HelpCircle, available: !!college.faqs },
        { id: "contact", label: "Contact", icon: Phone, available: !!college.contact },
    ];

    const sections = allSections.filter(s => s.available);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />

                {/* Background Pattern/Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                </div>

                <div className="relative z-30 container h-full flex flex-col justify-end pb-12 px-4 md:px-8">
                    <div className="max-w-4xl space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-[#f6c804] text-black hover:bg-[#e5b703] border-none text-sm px-3 py-1">
                                {college.type}
                            </Badge>
                            {college.tags.map((tag, i) => (
                                <Badge key={i} variant="outline" className="text-white border-white/30 backdrop-blur-sm">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            {college.name}
                        </h1>

                        <div className="flex flex-wrap items-center text-gray-300 gap-6 text-lg">
                            <span className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#f6c804]" /> {college.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-[#f6c804] text-[#f6c804]" /> {college.rating} Rating ({college.reviews} reviews)
                            </span>
                            {college.established && (
                                <span className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-blue-400" /> Established {college.established}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar Navigation (Desktop) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-1 bg-card border rounded-2xl p-4 shadow-sm max-h-[80vh] overflow-y-auto">
                            <p className="font-semibold text-muted-foreground px-4 mb-2 text-sm uppercase tracking-wider">Table of Contents</p>
                            {sections.map(({ id, label, icon: Icon }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-[#f6c804] hover:bg-[#f6c804]/5 transition-all"
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6 space-y-12">

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

                        {/* Contact */}
                        {college.contact && (
                            <section id="contact" className="scroll-mt-24 space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Phone className="h-6 w-6 text-[#f6c804]" /> Contact
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {college.contact.phone && (
                                        <a href={`tel:${college.contact.phone}`} className="flex items-center gap-3 p-4 border rounded-xl hover:border-[#f6c804]/50 transition-colors">
                                            <Phone className="h-5 w-5 text-[#f6c804]" />
                                            <span>{college.contact.phone}</span>
                                        </a>
                                    )}
                                    {college.contact.email && (
                                        <a href={`mailto:${college.contact.email}`} className="flex items-center gap-3 p-4 border rounded-xl hover:border-[#f6c804]/50 transition-colors">
                                            <Mail className="h-5 w-5 text-[#f6c804]" />
                                            <span className="truncate">{college.contact.email}</span>
                                        </a>
                                    )}
                                    {college.contact.website && (
                                        <a href={college.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border rounded-xl hover:border-[#f6c804]/50 transition-colors">
                                            <ExternalLink className="h-5 w-5 text-[#f6c804]" />
                                            <span>Official Website</span>
                                        </a>
                                    )}
                                    {college.contact.whatsapp && (
                                        <a href={`https://wa.me/${college.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border rounded-xl hover:border-green-500/50 transition-colors bg-green-500/5">
                                            <MessageCircle className="h-5 w-5 text-green-500" />
                                            <span className="text-green-600">Chat on WhatsApp</span>
                                        </a>
                                    )}
                                </div>
                                {college.contact.address && (
                                    <div className="p-4 border rounded-xl">
                                        <h3 className="font-semibold mb-2">Address</h3>
                                        <p className="text-muted-foreground">{college.contact.address}</p>
                                    </div>
                                )}
                            </section>
                        )}

                    </div>

                    {/* Right Sidebar: Enquiry Form */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="border border-[#f6c804]/20 rounded-2xl p-6 bg-card shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#f6c804]" />
                                <h3 className="text-xl font-bold mb-2">Admissions Open 2026</h3>
                                <p className="text-sm text-muted-foreground mb-6">Get detailed counseling and fee breakdown for {college.name}.</p>

                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Input placeholder="Full Name" className="bg-muted/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input type="tel" placeholder="+91 Phone Number" className="bg-muted/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input type="email" placeholder="Email Address" className="bg-muted/50" />
                                    </div>
                                    <Button className="w-full bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold">
                                        Apply Now
                                    </Button>
                                </form>

                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    800+ students applied last week
                                </p>
                            </div>

                            <a
                                href={college.contact?.whatsapp ? `https://wa.me/${college.contact.whatsapp.replace(/[^0-9]/g, '')}` : "https://wa.me/917815052090"}
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

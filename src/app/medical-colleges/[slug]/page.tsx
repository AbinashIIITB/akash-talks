import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

import { medicalColleges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CollegeEnquiryForm } from "@/components/ui/CollegeEnquiryForm";
import { ScrollSpyTOC, MobileScrollSpyTOC } from "@/components/ui/ScrollSpyTOC";
import {
    MapPin, Star, Building2, CheckCircle2, Briefcase,
    Calendar, Users, DollarSign, BookOpen, Award,
    TrendingUp, Scale, ClipboardList, HelpCircle, Lightbulb,
    Stethoscope, Bed, GraduationCap, Wallet, CreditCard, MessageCircle, Globe
} from "lucide-react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const college = medicalColleges.find((c) => c.slug === resolvedParams.slug);

    if (!college) {
        return { title: "College Not Found" };
    }

    const title = `${college.name} - MBBS Admission, Fees, NEET Cutoff 2026`;
    const description = `Get MBBS admission in ${college.name}, ${college.location}. MQ Fees: ${college.mqFees.total}. NEET Cutoff available. Apply through Akash Talks for expert guidance.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://www.akashtalks.in/medical-colleges/${college.slug}`,
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
        alternates: {
            canonical: `https://www.akashtalks.in/medical-colleges/${college.slug}`,
        },
    };
}

export async function generateStaticParams() {
    return medicalColleges.map((college) => ({
        slug: college.slug,
    }));
}

export default async function MedicalCollegeDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const college = medicalColleges.find((c) => c.slug === resolvedParams.slug);

    if (!college) {
        notFound();
    }

    // Build TOC sections
    const allSections = [
        { id: "about", label: "About", iconName: "Building2", available: !!college.about },
        { id: "neet-cutoffs", label: "NEET Cutoffs", iconName: "TrendingUp", available: college.neetCutoffs?.length > 0 },
        { id: "mq-fees", label: "MQ Fees", iconName: "DollarSign", available: !!college.mqFees },
        { id: "hostel-fees", label: "Hostel Fees", iconName: "Bed", available: college.hostelFees?.length > 0 },
        { id: "misc-fees", label: "Misc. Fees", iconName: "Wallet", available: college.miscFees?.length > 0 },
        { id: "security-deposit", label: "Security Deposit", iconName: "CreditCard", available: !!college.securityDeposit },
        { id: "courses-seats", label: "Courses & Seats", iconName: "BookOpen", available: college.coursesSeats?.length > 0 },
        { id: "hospital", label: "Hospital & Load", iconName: "Stethoscope", available: !!college.hospital },
        { id: "internship", label: "Internship & Stipend", iconName: "GraduationCap", available: !!college.internship },
        { id: "admission", label: "Admission Process", iconName: "ClipboardList", available: college.admissionProcess?.length > 0 },
        { id: "faculty", label: "Faculty & Departments", iconName: "Users", available: college.facultyDepartments?.length > 0 },
        { id: "scholarships", label: "Scholarships", iconName: "Award", available: college.scholarships && college.scholarships.length > 0 },
        { id: "compare", label: "Compare", iconName: "Scale", available: college.compare && college.compare.length > 0 },
        { id: "faqs", label: "FAQs", iconName: "HelpCircle", available: college.faqs?.length > 0 },
        { id: "why-akash-talks", label: "Why Akash Talks", iconName: "Lightbulb", available: college.whyChooseAkashTalks?.length > 0 },
    ];

    const sections = allSections.filter(s => s.available).map(({ available, ...rest }) => rest);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section - Premium Dark Design */}
            <div className="relative h-[400px] w-full bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />

                {/* Background Image */}
                <div className="absolute inset-0">
                    {college.imageUrl && !college.imageUrl.includes('default') ? (
                        <Image
                            src={college.imageUrl}
                            alt={college.name}
                            fill
                            className="object-cover opacity-50"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                    )}
                </div>

                <div className="relative z-30 container h-full flex flex-col justify-end pb-12 px-4 md:px-8">
                    <div className="max-w-4xl space-y-4">
                        {/* College Name */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                            {college.name}
                        </h1>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-[#f6c804] text-black hover:bg-[#e5b703] border-none text-xs md:text-sm px-2 md:px-3 py-1 font-semibold">
                                {college.type} Medical College
                            </Badge>
                            {college.courses.map((course, i) => (
                                <Badge key={i} variant="outline" className="text-white border-white/40 backdrop-blur-sm text-xs md:text-sm">
                                    {course}
                                </Badge>
                            ))}
                        </div>

                        {/* Info Row */}
                        <div className="flex flex-wrap items-center text-gray-200 gap-3 md:gap-6 text-sm md:text-lg">
                            <span className="flex items-center gap-1.5 md:gap-2">
                                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#f6c804]" /> {college.location}
                            </span>
                            <span className="flex items-center gap-1.5 md:gap-2">
                                <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#f6c804] text-[#f6c804]" /> {college.rating} ({college.reviews} reviews)
                            </span>
                            <span className="hidden md:flex items-center gap-2">
                                <Globe className="h-5 w-5 text-green-400" /> Est. {college.established}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 md:px-8 mt-8">
                {/* Mobile TOC */}
                <MobileScrollSpyTOC sections={sections} className="lg:hidden mb-6" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Sidebar TOC (Desktop) */}
                    <div className="hidden lg:block lg:col-span-2">
                        <ScrollSpyTOC sections={sections} />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* About */}
                        {college.about && (
                            <>
                                <section id="about" className="scroll-mt-24 space-y-4">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Building2 className="h-6 w-6 text-[#f6c804]" /> About
                                    </h2>
                                    <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {college.about}
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
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* NEET Cutoffs */}
                        {college.neetCutoffs?.length > 0 && (
                            <>
                                <section id="neet-cutoffs" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <TrendingUp className="h-6 w-6 text-[#f6c804]" /> NEET Cutoffs
                                    </h2>
                                    <div className="border rounded-xl overflow-hidden">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm">
                                                <thead className="bg-muted/50">
                                                    <tr>
                                                        <th className="text-left p-4 font-semibold">Year</th>
                                                        <th className="text-left p-4 font-semibold">State Quota</th>
                                                        <th className="text-left p-4 font-semibold">AIQ</th>
                                                        <th className="text-left p-4 font-semibold">Management Quota</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y">
                                                    {college.neetCutoffs.map((cutoff, i) => (
                                                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                                                            <td className="p-4 font-bold text-[#f6c804]">{cutoff.year}</td>
                                                            <td className="p-4">{cutoff.stateQuota ? `Rank: ${cutoff.stateQuota.rank} (Score: ${cutoff.stateQuota.score})` : "-"}</td>
                                                            <td className="p-4">{cutoff.aiq ? `Rank: ${cutoff.aiq.rank} (Score: ${cutoff.aiq.score})` : "-"}</td>
                                                            <td className="p-4">{cutoff.managementQuota ? `Rank: ${cutoff.managementQuota.rank} (Score: ${cutoff.managementQuota.score})` : "-"}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* MQ Fees */}
                        {college.mqFees && (
                            <>
                                <section id="mq-fees" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <DollarSign className="h-6 w-6 text-[#f6c804]" /> Management Quota Fees
                                    </h2>
                                    <div className="border rounded-xl p-6 bg-card">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div className="bg-[#f6c804]/10 rounded-xl p-5 border border-[#f6c804]/20">
                                                <p className="text-sm text-muted-foreground mb-1">Total Course Fee</p>
                                                <p className="text-3xl font-bold text-[#f6c804]">{college.mqFees.total}</p>
                                            </div>
                                            {college.mqFees.perSemester && (
                                                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                                                    <p className="text-sm text-muted-foreground mb-1">Per Semester</p>
                                                    <p className="text-3xl font-bold text-green-500">{college.mqFees.perSemester}</p>
                                                </div>
                                            )}
                                        </div>
                                        {college.mqFees.admissionFee && (
                                            <p className="text-sm"><strong>Admission Fee:</strong> {college.mqFees.admissionFee}</p>
                                        )}
                                        {college.mqFees.breakdown && (
                                            <p className="text-sm text-muted-foreground mt-2"><strong>Breakdown:</strong> {college.mqFees.breakdown}</p>
                                        )}
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Hostel Fees */}
                        {college.hostelFees?.length > 0 && (
                            <>
                                <section id="hostel-fees" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Bed className="h-6 w-6 text-[#f6c804]" /> Hostel Fees
                                    </h2>
                                    <div className="border rounded-xl overflow-hidden">
                                        <table className="w-full text-sm">
                                            <thead className="bg-muted/50">
                                                <tr>
                                                    <th className="text-left p-4 font-semibold">Room Type</th>
                                                    <th className="text-left p-4 font-semibold">Annual Cost</th>
                                                    <th className="text-left p-4 font-semibold">Deposit</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {college.hostelFees.map((hostel, i) => (
                                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                                        <td className="p-4">{hostel.roomType}</td>
                                                        <td className="p-4 font-bold text-foreground">{hostel.annual}</td>
                                                        <td className="p-4">{hostel.deposit || "-"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Misc Fees */}
                        {college.miscFees?.length > 0 && (
                            <>
                                <section id="misc-fees" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Wallet className="h-6 w-6 text-[#f6c804]" /> Miscellaneous Fees
                                    </h2>
                                    <div className="border rounded-xl overflow-hidden">
                                        <div className="divide-y">
                                            {college.miscFees.map((fee, i) => (
                                                <div key={i} className="flex justify-between p-4 hover:bg-muted/30 transition-colors">
                                                    <span className="text-muted-foreground">{fee.label}</span>
                                                    <span className="font-medium">{fee.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Security Deposit */}
                        {college.securityDeposit && (
                            <>
                                <section id="security-deposit" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <CreditCard className="h-6 w-6 text-[#f6c804]" /> Security Deposit
                                    </h2>
                                    <div className="bg-[#f6c804]/5 rounded-xl border-2 border-[#f6c804]/30 p-6">
                                        <p className="text-2xl font-bold text-[#f6c804]">{college.securityDeposit}</p>
                                        <p className="text-sm text-muted-foreground mt-2">*Refundable at the end of course completion</p>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Courses & Seats */}
                        {college.coursesSeats?.length > 0 && (
                            <>
                                <section id="courses-seats" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <BookOpen className="h-6 w-6 text-[#f6c804]" /> Courses & Seat Matrix
                                    </h2>
                                    <div className="border rounded-xl overflow-hidden">
                                        <table className="w-full text-sm">
                                            <thead className="bg-muted/50">
                                                <tr>
                                                    <th className="text-left p-4 font-semibold">Course</th>
                                                    <th className="text-left p-4 font-semibold">Total Seats</th>
                                                    <th className="text-left p-4 font-semibold">State Quota</th>
                                                    <th className="text-left p-4 font-semibold">MQ Seats</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {college.coursesSeats.map((course, i) => (
                                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                                        <td className="p-4 font-bold">{course.course}</td>
                                                        <td className="p-4 text-[#f6c804] font-semibold">{course.totalSeats}</td>
                                                        <td className="p-4">{course.stateQuota || "-"}</td>
                                                        <td className="p-4">{course.managementQuota || "-"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Hospital Info */}
                        {college.hospital && (
                            <>
                                <section id="hospital" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Stethoscope className="h-6 w-6 text-[#f6c804]" /> Hospital & Patient Load
                                    </h2>
                                    <div className="border rounded-xl p-6 bg-card">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="text-center p-4 bg-muted/30 rounded-lg">
                                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Hospital Name</p>
                                                <p className="font-bold text-lg">{college.hospital.name}</p>
                                            </div>
                                            <div className="text-center p-4 bg-[#f6c804]/10 rounded-lg">
                                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Bed Strength</p>
                                                <p className="font-bold text-2xl text-[#f6c804]">{college.hospital.beds}+</p>
                                            </div>
                                            {college.hospital.patientLoad && (
                                                <div className="text-center p-4 bg-green-500/10 rounded-lg">
                                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Patient Load</p>
                                                    <p className="font-bold text-lg text-green-600">{college.hospital.patientLoad}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Internship */}
                        {college.internship && (
                            <>
                                <section id="internship" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <GraduationCap className="h-6 w-6 text-[#f6c804]" /> Internship & Stipend
                                    </h2>
                                    <div className="border rounded-xl p-6 bg-card">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-5 bg-muted/30 rounded-xl">
                                                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                                                <p className="text-xl font-bold">{college.internship.duration}</p>
                                            </div>
                                            <div className="p-5 bg-green-500/10 rounded-xl border border-green-500/20">
                                                <p className="text-sm text-muted-foreground mb-1">Stipend</p>
                                                <p className="text-xl font-bold text-green-500">{college.internship.stipend}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Admission Process */}
                        {college.admissionProcess?.length > 0 && (
                            <>
                                <section id="admission" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <ClipboardList className="h-6 w-6 text-[#f6c804]" /> Admission Process
                                    </h2>
                                    <div className="space-y-4">
                                        {college.admissionProcess.map((step, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f6c804] text-black font-bold flex items-center justify-center text-sm">
                                                    {i + 1}
                                                </div>
                                                <div className="flex-1 pt-1 text-muted-foreground">{step}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Faculty & Departments */}
                        {college.facultyDepartments?.length > 0 && (
                            <>
                                <section id="faculty" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Users className="h-6 w-6 text-[#f6c804]" /> Faculty & Departments
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {college.facultyDepartments.map((dept, i) => (
                                            <Badge key={i} variant="secondary" className="py-2 px-4 text-sm">
                                                {dept}
                                            </Badge>
                                        ))}
                                    </div>
                                </section>
                                <div className="h-px w-full bg-border" />
                            </>
                        )}

                        {/* Scholarships */}
                        {college.scholarships && college.scholarships.length > 0 && (
                            <>
                                <section id="scholarships" className="scroll-mt-24 space-y-6">
                                    <h2 className="text-3xl font-bold flex items-center gap-2">
                                        <Award className="h-6 w-6 text-[#f6c804]" /> Scholarships
                                    </h2>
                                    <div className="space-y-4">
                                        {college.scholarships.map((scholarship, i) => (
                                            <div key={i} className="border rounded-xl overflow-hidden">
                                                <div className="bg-muted/50 px-4 py-3 border-b">
                                                    <h3 className="font-bold">{scholarship.title}</h3>
                                                </div>
                                                <div className="divide-y">
                                                    {scholarship.items.map((item, j) => (
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

                        {/* Compare */}
                        {college.compare && college.compare.length > 0 && (
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
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Competitor</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {college.compare.map((row, i) => (
                                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                                        <td className="px-4 py-3 text-sm font-medium">{row.parameter}</td>
                                                        <td className="px-4 py-3 text-sm text-[#f6c804] font-medium">{row.thisCollege}</td>
                                                        <td className="px-4 py-3 text-sm text-muted-foreground">{row.competitor1}</td>
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
                        {college.faqs?.length > 0 && (
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

                        {/* Why Akash Talks */}
                        {college.whyChooseAkashTalks?.length > 0 && (
                            <section id="why-akash-talks" className="scroll-mt-24 space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Award className="h-6 w-6 text-[#f6c804]" /> Why Choose {college.name.split('(')[0].trim()} Through Akash Talks?
                                </h2>
                                <div className="bg-gradient-to-br from-[#f6c804]/10 to-transparent border-2 border-[#f6c804]/30 rounded-2xl p-6">
                                    <p className="text-muted-foreground mb-4">Akash Talks is your trusted partner for hassle-free admissions. Here&apos;s why:</p>
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
                        )}
                    </div>

                    {/* Right Sidebar: Enquiry Form */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="border border-[#f6c804]/20 rounded-2xl p-6 bg-card shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#f6c804]" />
                                <h3 className="text-xl font-bold mb-2">Secure Your MBBS Seat</h3>
                                <p className="text-sm text-muted-foreground mb-6">Get detailed counseling and fee breakdown for {college.name}.</p>

                                <CollegeEnquiryForm collegeName={college.name} />

                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    500+ students applied last week
                                </p>
                            </div>

                            <a
                                href="https://wa.me/919330823191"
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

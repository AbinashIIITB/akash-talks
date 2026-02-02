import { notFound } from "next/navigation";
import { Metadata } from "next";

import { medicalColleges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CollegeEnquiryForm } from "@/components/ui/CollegeEnquiryForm";
import { ScrollSpyTOC, MobileScrollSpyTOC } from "@/components/ui/ScrollSpyTOC";
import {
    MapPin, Star, Building2, CheckCircle2, Briefcase,
    Calendar, Users, DollarSign, BookOpen, Award,
    TrendingUp, Scale, ClipboardList, HelpCircle, Lightbulb,
    Stethoscope, Bed, GraduationCap, Building, Wallet, CreditCard
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
        <main className="min-h-screen bg-background pb-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1">
                            <Badge variant="secondary" className="mb-4 bg-blue-700 text-white">
                                {college.type} Medical College
                            </Badge>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{college.name}</h1>
                            <div className="flex flex-wrap items-center gap-4 text-blue-100 mb-4">
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {college.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    {college.rating} ({college.reviews} reviews)
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    Est. {college.established}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {college.courses.map((course) => (
                                    <Badge key={course} variant="outline" className="text-white border-white/50">
                                        {course}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile TOC */}
            <div className="md:hidden sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
                <MobileScrollSpyTOC sections={sections} />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar TOC */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24">
                            <ScrollSpyTOC sections={sections} />
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-6 space-y-12">
                        {/* About */}
                        {college.about && (
                            <section id="about" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Building2 className="h-6 w-6 text-blue-600" />
                                    About {college.name}
                                </h2>
                                <p className="text-muted-foreground mb-4">{college.about}</p>
                                {college.highlights && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {college.highlights.map((h, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                {h}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        )}

                        {/* NEET Cutoffs */}
                        {college.neetCutoffs?.length > 0 && (
                            <section id="neet-cutoffs" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <TrendingUp className="h-6 w-6 text-blue-600" />
                                    NEET Cutoffs (State & AIQ)
                                </h2>
                                <div className="bg-card rounded-lg border overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead className="bg-muted">
                                                <tr>
                                                    <th className="text-left p-3">Year</th>
                                                    <th className="text-left p-3">State Quota</th>
                                                    <th className="text-left p-3">AIQ</th>
                                                    <th className="text-left p-3">Management Quota</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {college.neetCutoffs.map((cutoff, i) => (
                                                    <tr key={i} className="border-b">
                                                        <td className="p-3 font-medium">{cutoff.year}</td>
                                                        <td className="p-3">{cutoff.stateQuota ? `Rank: ${cutoff.stateQuota.rank} (Score: ${cutoff.stateQuota.score})` : "-"}</td>
                                                        <td className="p-3">{cutoff.aiq ? `Rank: ${cutoff.aiq.rank} (Score: ${cutoff.aiq.score})` : "-"}</td>
                                                        <td className="p-3">{cutoff.managementQuota ? `Rank: ${cutoff.managementQuota.rank} (Score: ${cutoff.managementQuota.score})` : "-"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* MQ Fees */}
                        {college.mqFees && (
                            <section id="mq-fees" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <DollarSign className="h-6 w-6 text-blue-600" />
                                    Management Quota (MQ) Fees
                                </h2>
                                <div className="bg-card rounded-lg border p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                                            <p className="text-sm text-muted-foreground">Total Course Fee</p>
                                            <p className="text-2xl font-bold text-blue-600">{college.mqFees.total}</p>
                                        </div>
                                        {college.mqFees.perSemester && (
                                            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4">
                                                <p className="text-sm text-muted-foreground">Per Semester</p>
                                                <p className="text-2xl font-bold text-green-600">{college.mqFees.perSemester}</p>
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
                        )}

                        {/* Hostel Fees */}
                        {college.hostelFees?.length > 0 && (
                            <section id="hostel-fees" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Bed className="h-6 w-6 text-blue-600" />
                                    Hostel Fees
                                </h2>
                                <div className="bg-card rounded-lg border overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted">
                                            <tr>
                                                <th className="text-left p-3">Room Type</th>
                                                <th className="text-left p-3">Annual Cost</th>
                                                <th className="text-left p-3">Deposit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {college.hostelFees.map((hostel, i) => (
                                                <tr key={i} className="border-b">
                                                    <td className="p-3">{hostel.roomType}</td>
                                                    <td className="p-3 font-medium">{hostel.annual}</td>
                                                    <td className="p-3">{hostel.deposit || "-"}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        {/* Misc Fees */}
                        {college.miscFees?.length > 0 && (
                            <section id="misc-fees" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Wallet className="h-6 w-6 text-blue-600" />
                                    Miscellaneous Fees
                                </h2>
                                <div className="bg-card rounded-lg border p-6">
                                    <div className="space-y-2">
                                        {college.miscFees.map((fee, i) => (
                                            <div key={i} className="flex justify-between py-2 border-b last:border-0">
                                                <span className="text-muted-foreground">{fee.label}</span>
                                                <span className="font-medium">{fee.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Security Deposit */}
                        {college.securityDeposit && (
                            <section id="security-deposit" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <CreditCard className="h-6 w-6 text-blue-600" />
                                    Security Deposit
                                </h2>
                                <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800 p-6">
                                    <p className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">{college.securityDeposit}</p>
                                </div>
                            </section>
                        )}

                        {/* Courses & Seats */}
                        {college.coursesSeats?.length > 0 && (
                            <section id="courses-seats" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <BookOpen className="h-6 w-6 text-blue-600" />
                                    Courses & Seat Matrix
                                </h2>
                                <div className="bg-card rounded-lg border overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted">
                                            <tr>
                                                <th className="text-left p-3">Course</th>
                                                <th className="text-left p-3">Total Seats</th>
                                                <th className="text-left p-3">State Quota</th>
                                                <th className="text-left p-3">MQ Seats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {college.coursesSeats.map((course, i) => (
                                                <tr key={i} className="border-b">
                                                    <td className="p-3 font-medium">{course.course}</td>
                                                    <td className="p-3">{course.totalSeats}</td>
                                                    <td className="p-3">{course.stateQuota || "-"}</td>
                                                    <td className="p-3">{course.managementQuota || "-"}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        {/* Hospital Info */}
                        {college.hospital && (
                            <section id="hospital" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Stethoscope className="h-6 w-6 text-blue-600" />
                                    Hospital & Patient Load
                                </h2>
                                <div className="bg-card rounded-lg border p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Hospital Name</p>
                                            <p className="font-semibold">{college.hospital.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Bed Strength</p>
                                            <p className="font-semibold text-blue-600">{college.hospital.beds} Beds</p>
                                        </div>
                                        {college.hospital.patientLoad && (
                                            <div>
                                                <p className="text-sm text-muted-foreground">Patient Load</p>
                                                <p className="font-semibold">{college.hospital.patientLoad}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Internship */}
                        {college.internship && (
                            <section id="internship" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <GraduationCap className="h-6 w-6 text-blue-600" />
                                    Internship & Stipend
                                </h2>
                                <div className="bg-card rounded-lg border p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Duration</p>
                                            <p className="font-semibold">{college.internship.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Stipend</p>
                                            <p className="font-semibold text-green-600">{college.internship.stipend}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Admission Process */}
                        {college.admissionProcess?.length > 0 && (
                            <section id="admission" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <ClipboardList className="h-6 w-6 text-blue-600" />
                                    Admission Process
                                </h2>
                                <div className="space-y-3">
                                    {college.admissionProcess.map((step, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center font-bold text-sm">
                                                {i + 1}
                                            </span>
                                            <p className="mt-1">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Faculty & Departments */}
                        {college.facultyDepartments?.length > 0 && (
                            <section id="faculty" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Users className="h-6 w-6 text-blue-600" />
                                    Faculty & Departments
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {college.facultyDepartments.map((dept, i) => (
                                        <Badge key={i} variant="secondary" className="py-2 px-3">
                                            {dept}
                                        </Badge>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Scholarships */}
                        {college.scholarships && college.scholarships.length > 0 && (
                            <section id="scholarships" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Award className="h-6 w-6 text-blue-600" />
                                    Scholarships
                                </h2>
                                <div className="space-y-4">
                                    {college.scholarships.map((scholarship, i) => (
                                        <div key={i} className="bg-card rounded-lg border p-4">
                                            <h3 className="font-semibold mb-2">{scholarship.title}</h3>
                                            {scholarship.items.map((item, j) => (
                                                <p key={j} className="text-sm text-muted-foreground">
                                                    <strong>{item.label}:</strong> {item.value}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Compare */}
                        {college.compare && college.compare.length > 0 && (
                            <section id="compare" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Scale className="h-6 w-6 text-blue-600" />
                                    Compare with Other Colleges
                                </h2>
                                <div className="bg-card rounded-lg border overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted">
                                            <tr>
                                                <th className="text-left p-3">Parameter</th>
                                                <th className="text-left p-3">This College</th>
                                                <th className="text-left p-3">Competitor 1</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {college.compare.map((row, i) => (
                                                <tr key={i} className="border-b">
                                                    <td className="p-3 font-medium">{row.parameter}</td>
                                                    <td className="p-3 text-blue-600">{row.thisCollege}</td>
                                                    <td className="p-3">{row.competitor1}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        {/* FAQs */}
                        {college.faqs?.length > 0 && (
                            <section id="faqs" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <HelpCircle className="h-6 w-6 text-blue-600" />
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {college.faqs.map((faq, i) => (
                                        <div key={i} className="bg-card rounded-lg border p-4">
                                            <h3 className="font-semibold mb-2">{faq.question}</h3>
                                            <p className="text-muted-foreground">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Why Akash Talks */}
                        {college.whyChooseAkashTalks?.length > 0 && (
                            <section id="why-akash-talks" className="scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Lightbulb className="h-6 w-6 text-[#f6c804]" />
                                    Why Choose Akash Talks?
                                </h2>
                                <div className="bg-gradient-to-r from-[#f6c804]/10 to-[#f6c804]/5 rounded-lg border border-[#f6c804]/20 p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {college.whyChooseAkashTalks.map((reason, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-[#f6c804]" />
                                                <span>{reason}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar - Enquiry Form */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <CollegeEnquiryForm collegeName={college.name} />
                            <div className="bg-card rounded-lg border p-4">
                                <h3 className="font-semibold mb-2">Quick Contact</h3>
                                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                                    <a href="https://wa.me/919330823191" target="_blank" rel="noopener noreferrer">
                                        WhatsApp Us
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { colleges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
    MapPin,
    Star,
    CheckCircle2,
    Building2,
    Download,
    Share2,
} from "lucide-react";

interface PageProps {
    params: {
        slug: string;
    };
}

// In Next.js 15+, params is async, but for 14 it's usually standard. 
// Safest way is to treat it as possibly async or synchronous depending on exact version, 
// but standard Access works for staticParams usually.
// For this scratchpad environment, we will assume standard access.

export default function CollegeDetailPage({ params }: PageProps) {
    const college = colleges.find((c) => c.slug === params.slug);

    if (!college) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-10">
            {/* Hero Section */}
            <div className="relative h-[300px] w-full bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* Placeholder Cover */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <Building2 className="h-32 w-32 text-white opacity-20" />
                </div>

                <div className="relative z-20 container h-full flex flex-col justify-center px-4 md:px-6">
                    <div className="flex flex-col gap-2">
                        <Badge className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                            {college.type}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                            {college.name}
                        </h1>
                        <div className="flex items-center text-gray-200 gap-4 mt-2">
                            <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" /> {college.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" /> {college.rating} Rating
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <section id="overview" className="bg-card border rounded-xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {college.name} is a premier institution located in {college.location}.
                                Known for its academic excellence and state-of-the-art infrastructure,
                                it has consistently ranked among the top {college.type} colleges in the region.
                                The college offers a diverse range of courses including {college.courses.join(", ")}.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="p-4 bg-secondary rounded-lg">
                                    <h4 className="font-semibold text-sm">Established</h4>
                                    <p className="text-xl font-bold">19XX</p>
                                </div>
                                <div className="p-4 bg-secondary rounded-lg">
                                    <h4 className="font-semibold text-sm">Campus Size</h4>
                                    <p className="text-xl font-bold">50+ Acres</p>
                                </div>
                            </div>
                        </section>

                        {/* Courses & Fees */}
                        <section id="courses" className="bg-card border rounded-xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Courses & Fees</h2>
                            <div className="space-y-4">
                                {college.courses.map((course, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:border-primary/50 transition-colors">
                                        <div>
                                            <h3 className="font-bold text-lg">{course}</h3>
                                            <p className="text-sm text-muted-foreground">Full Time • 4 Years</p>
                                        </div>
                                        <div className="mt-2 sm:mt-0 text-right">
                                            <p className="text-lg font-bold text-primary">{college.fees}</p>
                                            <p className="text-xs text-muted-foreground">First Year Fees</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Placements */}
                        <section id="placements" className="bg-card border rounded-xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Placements</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 border rounded-lg">
                                    <p className="text-muted-foreground text-sm">Highest Package</p>
                                    <p className="text-2xl font-bold text-green-600">₹ 45 LPA</p>
                                </div>
                                <div className="text-center p-4 border rounded-lg">
                                    <p className="text-muted-foreground text-sm">Average Package</p>
                                    <p className="text-2xl font-bold">₹ 12 LPA</p>
                                </div>
                                <div className="text-center p-4 border rounded-lg">
                                    <p className="text-muted-foreground text-sm">Placement Rate</p>
                                    <p className="text-2xl font-bold">98%</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Top recruiters include Google, Microsoft, Amazon, Deloitte, and more.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar / Enquiry Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="border rounded-xl p-6 bg-card shadow-lg ring-1 ring-primary/20">
                                <h3 className="text-xl font-bold mb-2">Interested in Admission?</h3>
                                <p className="text-sm text-muted-foreground mb-6">Fill out the form below and our counseling experts will contact you shortly.</p>

                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message (Optional)</Label>
                                        <Textarea id="message" placeholder="I am interested in B.Tech CSE..." />
                                    </div>
                                    <Button className="w-full font-bold text-md h-12" size="lg">Request Callback</Button>
                                </form>
                            </div>

                            <div className="border rounded-xl p-6 bg-card">
                                <h3 className="font-semibold mb-4">Contact Information</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary shrink-0" />
                                        <p className="text-muted-foreground">{college.location}, India</p>
                                    </div>
                                    <Separator />
                                    <div className="flex gap-2">
                                        <Button variant="outline" className="w-full"><Share2 className="mr-2 h-4 w-4" /> Share</Button>
                                        <Button variant="outline" className="w-full"><Download className="mr-2 h-4 w-4" /> Brochure</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Generate static params for the exported colleges
export async function generateStaticParams() {
    return colleges.map((college) => ({
        slug: college.slug,
    }));
}

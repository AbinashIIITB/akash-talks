import Link from "next/link";
import { collegesByState, companyInfo, colleges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Building2, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CollegesPage() {
    return (
        <div className="container px-4 py-8 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Top B.Tech Colleges</h1>
                    <p className="text-muted-foreground">
                        Explore {colleges.length}+ partner institutions across {companyInfo.states.length} states for direct B.Tech admissions.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="rating">Rating: High to Low</SelectItem>
                            <SelectItem value="fees-low">Fees: Low to High</SelectItem>
                            <SelectItem value="fees-high">Fees: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {/* Sidebar Filters */}
                <aside className="hidden md:block">
                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Filters</h3>
                            <Separator className="mb-4" />
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-medium">State</h4>
                            <div className="space-y-2">
                                {companyInfo.states.map((state) => (
                                    <div key={state} className="flex items-center space-x-2">
                                        <Checkbox id={`state-${state}`} />
                                        <label
                                            htmlFor={`state-${state}`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {state}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Separator />
                        <div className="space-y-3">
                            <h4 className="font-medium">Course</h4>
                            <div className="space-y-2">
                                {["B.Tech", "M.Tech", "MBA", "MCA", "BBA"].map((course) => (
                                    <div key={course} className="flex items-center space-x-2">
                                        <Checkbox id={`course-${course}`} />
                                        <label
                                            htmlFor={`course-${course}`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {course}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Separator />
                        <div className="space-y-3">
                            <h4 className="font-medium">Type</h4>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="type-private" />
                                    <label htmlFor="type-private" className="text-sm font-medium">Private</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="type-govt" />
                                    <label htmlFor="type-govt" className="text-sm font-medium">Government</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Results - Grouped by State */}
                <div className="col-span-1 md:col-span-3 space-y-10">
                    {Object.entries(collegesByState).map(([state, stateColleges]) => (
                        <div key={state}>
                            <div className="flex items-center gap-2 mb-4">
                                <MapPin className="h-5 w-5 text-primary" />
                                <h2 className="text-2xl font-bold">{state}</h2>
                                <span className="text-sm text-muted-foreground">({stateColleges.length} colleges)</span>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                                {stateColleges.map((college) => (
                                    <div
                                        key={college.id}
                                        className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:border-primary hover:shadow-md"
                                    >
                                        <div className="aspect-video w-full overflow-hidden bg-muted relative">
                                            <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                                                <Building2 className="h-10 w-10 text-muted-foreground opacity-50" />
                                            </div>
                                            <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 text-xs font-bold rounded shadow-sm">
                                                {college.rating} ★
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <div>
                                                <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                                                    {college.name}
                                                </h3>
                                                <div className="flex items-center text-sm text-muted-foreground mt-1">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    {college.location}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-1">
                                                {college.courses.slice(0, 3).map(c => (
                                                    <span key={c} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                        {c}
                                                    </span>
                                                ))}
                                                {college.courses.length > 3 && (
                                                    <span className="text-xs text-muted-foreground self-center">+{college.courses.length - 3} more</span>
                                                )}
                                            </div>

                                            <Separator />

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">{college.type}</span>
                                                <Link href={`/colleges/${college.slug}`}>
                                                    <Button variant="default" size="sm">View Details</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

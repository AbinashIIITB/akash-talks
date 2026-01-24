import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Building2, GraduationCap, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[600px] w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background border-b">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Unlock Your Future with <span className="text-primary">Akash Talks</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Your premium guide to top colleges, career paths, and admission strategies.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/colleges">
              <Button size="lg" className="h-12 px-8 text-lg font-semibold">
                Find Colleges <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Us?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We bridge the gap between students and their dream institutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center p-6 border rounded-xl bg-card hover:border-primary transition-colors">
              <div className="p-3 bg-primary/10 rounded-full">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Top Colleges</h3>
              <p className="text-muted-foreground">Access curated lists of the best institutions across Engineering, Management, and Medical streams.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center p-6 border rounded-xl bg-card hover:border-primary transition-colors">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Expert Guidance</h3>
              <p className="text-muted-foreground">Get personalized counseling from industry experts to make informed career decisions.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center p-6 border rounded-xl bg-card hover:border-primary transition-colors">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Student Community</h3>
              <p className="text-muted-foreground">Join thousands of students who have successfully navigated their admission journey with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Colleges Preview (Static for now) */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Institutions</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Explore some of the top-ranked colleges partnering with us.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-muted relative">
                  {/* Placeholder for college image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary">
                    <Building2 className="h-12 w-12 opacity-50" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:underline">Institute of Technology {i}</h3>
                  <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">NIRF: 1{i}</span>
                    <Button size="sm" variant="secondary">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/colleges">
              <Button variant="outline" size="lg">View All Colleges</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

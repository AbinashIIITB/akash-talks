import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, Users, Phone, Youtube, ExternalLink } from "lucide-react";
import { colleges, companyInfo } from "@/lib/data";

export default function Home() {
  const featuredColleges = colleges.slice(0, 6);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[600px] w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background border-b">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary mb-4">
            {companyInfo.tagline}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Unlock Your Future with <span className="text-primary">{companyInfo.name}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Your trusted partner for direct B.Tech admissions in top colleges across {companyInfo.states.length} states.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/colleges">
              <Button size="lg" className="h-12 px-8 text-lg font-semibold">
                Explore Colleges <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            {companyInfo.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> {phone}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-8 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">{colleges.length}+</p>
              <p className="text-sm opacity-90">Partner Colleges</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">{companyInfo.states.length}</p>
              <p className="text-sm opacity-90">States Covered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">5000+</p>
              <p className="text-sm opacity-90">Students Placed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
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

      {/* Featured Colleges Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Institutions</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Explore some of the top-ranked colleges partnering with us across India.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredColleges.map((college) => (
              <Link key={college.id} href={`/colleges/${college.slug}`}>
                <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:border-primary">
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary">
                      <Building2 className="h-12 w-12 opacity-50" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{college.name}</h3>
                    <p className="text-sm text-muted-foreground">{college.location}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {college.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium">{college.fees}</span>
                      <span className="text-sm text-primary">⭐ {college.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/colleges">
              <Button variant="outline" size="lg">View All {colleges.length} Colleges</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Feed Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-red-500/10 text-red-600 dark:text-red-400">
              <Youtube className="mr-2 h-4 w-4" /> Watch Our Latest Videos
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Akash Talks YouTube Channel</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Get expert guidance, college reviews, and admission tips on our YouTube channel.
              </p>
            </div>
          </div>
          
          {/* YouTube Channel Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden border shadow-lg bg-muted">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=UU&si=akash_talks"
                title="Akash Talks YouTube Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Categories */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mt-8">
            <div className="p-4 border rounded-xl bg-card text-center hover:border-red-500 transition-colors">
              <Youtube className="h-6 w-6 mx-auto mb-2 text-red-500" />
              <h3 className="font-semibold text-sm">College Reviews</h3>
            </div>
            <div className="p-4 border rounded-xl bg-card text-center hover:border-red-500 transition-colors">
              <Youtube className="h-6 w-6 mx-auto mb-2 text-red-500" />
              <h3 className="font-semibold text-sm">Admission Tips</h3>
            </div>
            <div className="p-4 border rounded-xl bg-card text-center hover:border-red-500 transition-colors">
              <Youtube className="h-6 w-6 mx-auto mb-2 text-red-500" />
              <h3 className="font-semibold text-sm">Campus Tours</h3>
            </div>
            <div className="p-4 border rounded-xl bg-card text-center hover:border-red-500 transition-colors">
              <Youtube className="h-6 w-6 mx-auto mb-2 text-red-500" />
              <h3 className="font-semibold text-sm">Student Stories</h3>
            </div>
          </div>

          {/* Channel Subscribe CTA */}
          <div className="mt-10 flex flex-col items-center space-y-4">
            <a 
              href="https://www.youtube.com/@akash_talks" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-12 px-8">
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe to Our Channel
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              Join thousands of students getting free admission guidance!
            </p>
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="w-full py-12 md:py-24 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">States We Cover</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Direct B.Tech admissions available in top colleges across these states.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto">
            {companyInfo.states.map((state) => (
              <div key={state} className="p-4 border rounded-xl bg-card text-center hover:border-primary transition-colors">
                <h3 className="font-semibold">{state}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="max-w-[600px] mx-auto mb-8 opacity-90">
            Get in touch with our expert counselors for personalized guidance on B.Tech admissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="h-12 px-8 text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Now
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm opacity-90">
            {companyInfo.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4" /> {phone}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, Users, Phone, Youtube, ExternalLink, Shield, Award, MapPin } from "lucide-react";
import { colleges, companyInfo } from "@/lib/data";

export default function Home() {
  const featuredColleges = colleges.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Anti-Gravity Design */}
      <section className="relative w-full py-6 md:py-10 bg-black">
        {/* Hero Card Container */}
        <div className="container px-4 md:px-6">
          <div className="relative mx-auto w-[95%] max-w-[1400px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-800">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-[url('/globe.svg')] bg-no-repeat bg-right-bottom opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

            {/* Hero Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 lg:py-32">
              <div className="max-w-2xl">
                {/* Tagline Badge */}
                <div className="inline-flex items-center rounded-full border border-[#f6c804]/30 bg-[#f6c804]/10 px-4 py-1.5 text-sm font-medium text-[#f6c804] mb-6">
                  {companyInfo.tagline}
                </div>

                {/* Headline */}
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                  Unlock Your Future with{" "}
                  <span className="text-[#f6c804]">{companyInfo.name}</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl md:text-2xl text-[#f6c804] font-medium mb-4">
                  Direct Admission in B.Tech, MBA & More
                </p>

                {/* Body Text */}
                <p className="text-gray-300 text-lg max-w-xl mb-8">
                  Your trusted partner for direct admissions in top colleges across {companyInfo.states.length} states. Expert guidance, guaranteed results.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/colleges">
                    <Button
                      size="lg"
                      className="h-14 px-8 text-lg font-semibold bg-[#f6c804] hover:bg-[#e5b703] text-black"
                    >
                      Explore Colleges <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Free Consultation
                    </Button>
                  </Link>
                </div>

                {/* Phone Numbers */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  {companyInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:text-[#f6c804] transition-colors">
                      <Phone className="h-4 w-4" /> {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Floating Pills - Bottom Right */}
              <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-3 items-end">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
                  <Shield className="h-4 w-4 text-[#f6c804]" /> Trusted
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
                  <Award className="h-4 w-4 text-[#f6c804]" /> 10+ Years Experience
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
                  <MapPin className="h-4 w-4 text-[#f6c804]" /> Nationwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Outside Hero Card */}
      <section className="w-full py-10 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#f6c804]">{colleges.length}+</p>
              <p className="text-sm text-gray-400 mt-1">Partner Colleges</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#f6c804]">{companyInfo.states.length}</p>
              <p className="text-sm text-gray-400 mt-1">States Covered</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#f6c804]">5000+</p>
              <p className="text-sm text-gray-400 mt-1">Students Placed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#f6c804]">10+</p>
              <p className="text-sm text-gray-400 mt-1">Years Experience</p>
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
      <section className="w-full py-12 md:py-24 bg-[#f6c804]">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4 text-black">Ready to Start Your Journey?</h2>
          <p className="max-w-[600px] mx-auto mb-8 text-black/80">
            Get in touch with our expert counselors for personalized guidance on B.Tech admissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="h-12 px-8 text-lg font-semibold bg-black text-white hover:bg-black/90">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Now
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-black/70">
            {companyInfo.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:text-black transition-opacity">
                <Phone className="h-4 w-4" /> {phone}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

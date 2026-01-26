"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { ArrowRight, Building2, GraduationCap, Users, Phone, Youtube, ExternalLink, Shield, Award, MapPin } from "lucide-react";
import { colleges, companyInfo } from "@/lib/data";
import testimonials from "@/data/testimonials.json";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const featuredColleges = colleges.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - SaaS Anti-Gravity Design */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-background overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f6c804]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#f6c804]/5 rounded-full blur-[80px] pointer-events-none" />

        <LayoutContainer className="relative z-10 py-20 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center rounded-full border border-[#f6c804]/30 bg-[#f6c804]/10 px-6 py-2 text-sm font-medium text-[#f6c804]">
                {companyInfo.tagline}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Unlock Your{" "}
              <span className="gradient-text-yellow">Future</span>
              <br />
              with <span className="gradient-text-yellow">{companyInfo.name}</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[#f6c804] font-medium"
            >
              Direct Admission in B.Tech, MBA & More
            </motion.p>

            {/* Body Text */}
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            >
              Your trusted partner for direct admissions in top colleges across {companyInfo.states.length} states.
              Expert guidance, guaranteed results.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/colleges">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg font-semibold bg-[#f6c804] hover:bg-[#e5b703] text-black rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(246,200,4,0.5)] transition-all duration-300"
                >
                  Explore Colleges <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 text-lg rounded-full border-foreground/20 hover:bg-foreground/5 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Phone Numbers */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4"
            >
              {companyInfo.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[#f6c804] transition-colors">
                  <Phone className="h-4 w-4" /> {phone}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Trust Pills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            <div className="animate-float flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-5 py-2.5 text-sm font-medium">
              <Shield className="h-4 w-4 text-[#f6c804]" /> Trusted
            </div>
            <div className="animate-float-delayed flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-5 py-2.5 text-sm font-medium">
              <Award className="h-4 w-4 text-[#f6c804]" /> 5+ Years Experience
            </div>
            <div className="animate-float-delayed-2 flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-5 py-2.5 text-sm font-medium">
              <MapPin className="h-4 w-4 text-[#f6c804]" /> Nationwide
            </div>
          </motion.div>
        </LayoutContainer>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-card/30 border-y border-border/50">
        <LayoutContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-12 md:gap-20 text-center"
          >
            {[
              { value: `${colleges.length}+`, label: "Partner Colleges" },
              { value: companyInfo.states.length, label: "States Covered" },
              { value: "5000+", label: "Students Placed" },
              { value: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <p className="text-4xl md:text-5xl font-bold gradient-text-yellow">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </LayoutContainer>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32">
        <LayoutContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center space-y-4 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Why Choose <span className="gradient-text-yellow">Us?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We bridge the gap between students and their dream institutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              { icon: Building2, title: "Top Colleges", desc: "Access curated lists of the best institutions across Engineering, Management, and Medical streams." },
              { icon: GraduationCap, title: "Expert Guidance", desc: "Get personalized counseling from industry experts to make informed career decisions." },
              { icon: Users, title: "Student Community", desc: "Join thousands of students who have successfully navigated their admission journey with us." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-border/50 bg-card/30 hover:border-[#f6c804]/50 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="p-4 bg-[#f6c804]/10 rounded-2xl mb-6 group-hover:bg-[#f6c804]/20 transition-colors">
                  <feature.icon className="h-10 w-10 text-[#f6c804]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </LayoutContainer>
      </section>

      {/* Featured Colleges */}
      <section className="w-full py-20 md:py-32 bg-card/20">
        <LayoutContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center space-y-4 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text-yellow">Institutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore some of the top-ranked colleges partnering with us across India.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredColleges.map((college, index) => (
              <motion.div key={college.id} variants={fadeInUp}>
                <Link href={`/colleges/${college.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-3 transition-all duration-300 hover:border-[#f6c804]/50 hover:shadow-lg">
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-br from-secondary to-secondary/50">
                        <Building2 className="h-12 w-12 opacity-50" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg group-hover:text-[#f6c804] transition-colors">{college.name}</h3>
                      <p className="text-sm text-muted-foreground">{college.location}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {college.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-[#f6c804]/10 text-[#f6c804] rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium">{college.fees}</span>
                        <span className="text-sm text-[#f6c804]">⭐ {college.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <Link href="/colleges">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View All {colleges.length} Colleges
              </Button>
            </Link>
          </motion.div>
        </LayoutContainer>
      </section>

      {/* Testimonials Section - Verified Students Feedback */}
      <section className="w-full py-20 md:py-32 overflow-hidden bg-muted/30">
        <LayoutContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center space-y-4 mb-16"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600">
                <Users className="mr-2 h-4 w-4" /> Verified Students Feedback
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Stories of <span className="gradient-text-yellow">Success</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the students we've guided to their dream colleges.
            </motion.p>
          </motion.div>

          {/* Marquee Animation Container */}
          <div className="relative w-full overflow-hidden mask-linear-fade">
            <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] w-max">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-[350px] md:w-[400px] flex-shrink-0 p-6 rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:border-[#f6c804]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#f6c804]/20">
                      {/* Using a simple img here since next/image needs width/height or fill, creating structure issues in marquee */}
                      <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-none">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.message}"</p>
                  <div className="mt-4 flex text-[#f6c804]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* States Section */}
      <section className="w-full py-20 md:py-32 bg-card/20">
        <LayoutContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center space-y-4 mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              States We <span className="gradient-text-yellow">Cover</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Direct B.Tech admissions available in top colleges across these states.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >
            {companyInfo.states.map((state, index) => (
              <motion.div
                key={state}
                variants={fadeInUp}
                className="p-4 border border-border/50 rounded-xl bg-card/30 text-center hover:border-[#f6c804]/50 hover:bg-card/50 transition-all duration-300"
              >
                <h3 className="font-semibold">{state}</h3>
              </motion.div>
            ))}
          </motion.div>
        </LayoutContainer>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-[#f6c804] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6c804] via-[#ffd700] to-[#f6c804] opacity-50" />

        <LayoutContainer className="relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-xl mx-auto text-black/80 text-lg">
              Get in touch with our expert counselors for personalized guidance on B.Tech admissions.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg font-semibold bg-black text-white hover:bg-black/90 rounded-full hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-black/70">
              {companyInfo.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-black transition-colors">
                  <Phone className="h-4 w-4" /> {phone}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </LayoutContainer>
      </section>
    </div>
  );
}

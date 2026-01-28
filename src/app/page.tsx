"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { ArrowRight, Building2, GraduationCap, Users, Phone, ChevronDown, Shield, Award, MapPin } from "lucide-react";
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export default function Home() {
  const featuredColleges = colleges.slice(0, 6);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - Full Viewport Height with Background Image */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900">
        {/* Side Margin Overlays - blend with navbar */}
        <div className="absolute inset-y-0 left-0 w-[5%] bg-white dark:bg-slate-900 z-20" />
        <div className="absolute inset-y-0 right-0 w-[5%] bg-white dark:bg-slate-900 z-20" />

        {/* Background Image Container - centered with margins */}
        <div className="absolute inset-y-0 left-[5%] right-[5%] z-0 rounded-[2rem] overflow-hidden">
          <Image
            src="/college.jpg"
            alt="College Campus"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Main Content Container - Floating Rounded Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[90%] max-w-7xl mx-auto text-white"
        >
          <div className="relative bg-transparent rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative Large Typography Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-[20vw] font-black tracking-tighter text-white select-none whitespace-nowrap"
              >
                AKASH
              </motion.span>
            </div>

            {/* Inner Content */}
            <div className="relative z-10 px-6 md:px-12 lg:px-16 py-8 md:py-12">
              {/* Integrated Navigation */}
              <motion.nav
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-between mb-12 md:mb-16"
              >
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                  <div className="relative h-10 w-10 overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Akash Talks"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg hidden sm:block text-white">Akash Talks</span>
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                  <Link href="/" className="px-4 py-2 rounded-full bg-[#f6c804] text-black font-semibold">
                    Home
                  </Link>
                  <Link href="/colleges" className="transition-colors hover:text-[#f6c804] text-white/80 hover:text-white">
                    Colleges
                  </Link>
                  <Link href="/exams" className="transition-colors hover:text-[#f6c804] text-white/80 hover:text-white">
                    Exams
                  </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-3">
                  <Link href="/contact">
                    <Button className="bg-[#f6c804] hover:bg-[#e5b703] text-black font-semibold px-6 rounded-full">
                      Contact
                    </Button>
                  </Link>
                </div>
              </motion.nav>

              {/* Hero Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-center space-y-4 md:space-y-6 py-6 md:py-12"
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
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Unlock Your{" "}
                  <span className="gradient-text-yellow">Future</span>
                  <br />
                  with <span className="gradient-text-yellow">{companyInfo.name}</span>
                </motion.h1>

                {/* Body Text */}
                <motion.p
                  variants={fadeInUp}
                  className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
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
                  className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-2"
                >
                  {companyInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[#f6c804] transition-colors">
                      <Phone className="h-4 w-4" /> {phone}
                    </a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Floating Trust Pills - Inside Container Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 pb-4"
              >
                <div className="animate-float flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-5 py-2.5 text-sm font-medium">
                  <Shield className="h-4 w-4 text-[#f6c804]" /> Trusted
                </div>
                <div className="animate-float-delayed flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-5 py-2.5 text-sm font-medium">
                  <Award className="h-4 w-4 text-[#f6c804]" /> 5+ Years Experience
                </div>
                <div className="animate-float-delayed-2 flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-5 py-2.5 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-[#f6c804]" /> Nationwide
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Down Arrow - Outside Container */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          onClick={() => scrollToSection('stats-section')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="w-full py-16 bg-card/30 border-y border-border/50">
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
      <section id="features-section" className="w-full py-20 md:py-32">
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
                className="flex flex-col items-center text-center p-8 rounded-3xl border border-border/50 bg-card/30 hover:border-[#f6c804]/50 hover:bg-card/50 hover:scale-105 transition-all duration-300 group"
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
      <section id="colleges-section" className="w-full py-20 md:py-32 bg-card/20">
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
                  <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-3 transition-all duration-300 hover:border-[#f6c804]/50 hover:shadow-lg hover:scale-[1.02]">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted relative">
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
              <Button variant="outline" size="lg" className="rounded-full px-8 hover:scale-105 transition-all duration-300">
                View All {colleges.length} Colleges
              </Button>
            </Link>
          </motion.div>
        </LayoutContainer>
      </section>

      {/* Testimonials Section - Verified Students Feedback */}
      <section id="testimonials-section" className="w-full py-20 md:py-32 overflow-hidden bg-muted/30">
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
                  className="w-[350px] md:w-[400px] flex-shrink-0 p-6 rounded-3xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:border-[#f6c804]/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#f6c804]/20">
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
      <section id="states-section" className="w-full py-20 md:py-32 bg-card/20">
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
                className="p-4 border border-border/50 rounded-2xl bg-card/30 text-center hover:border-[#f6c804]/50 hover:bg-card/50 hover:scale-105 transition-all duration-300"
              >
                <h3 className="font-semibold">{state}</h3>
              </motion.div>
            ))}
          </motion.div>
        </LayoutContainer>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="w-full py-20 md:py-32 bg-[#f6c804] relative overflow-hidden">
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

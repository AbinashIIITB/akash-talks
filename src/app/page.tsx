"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { LayoutContainer } from "@/components/layout/LayoutContainer";
import { ArrowRight, Building2, GraduationCap, Users, Phone, ChevronDown, Shield, Award, MapPin } from "lucide-react";
import { colleges, companyInfo } from "@/lib/data";
import testimonials from "@/data/testimonials.json";
import { useCounsellingDialog } from "@/components/providers/CounsellingDialogProvider";

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { openDialog } = useCounsellingDialog();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - Full Viewport Height with Background Image */}
      <section className="relative w-full min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Side Margin Overlays - blend with navbar */}
        <div className="absolute inset-y-0 left-0 w-[5%] bg-background z-20" />
        <div className="absolute inset-y-0 right-0 w-[5%] bg-background z-20" />

        {/* Background Image Container - centered with margins */}
        <div className="absolute inset-y-0 left-[5%] right-[5%] z-0 rounded-[2rem] overflow-hidden">
          <Image
            src="/college.jpg"
            alt="College Campus"
            fill
            className={`object-cover transition-all duration-1000 ease-out md:object-center object-[center_30%] ${imageLoaded ? 'blur-0 scale-100' : 'blur-xl scale-105 brightness-50'}`}
            priority
            onLoad={() => setImageLoaded(true)}
          />
          {/* Base Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Static Gradient Overlay - Subtle Pulse */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-black/80 opacity-80 animate-pulse-slow"
          />
        </div>

        {/* Main Content Container - Floating Rounded Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[90%] max-w-7xl mx-auto text-white"
        >
          <div className="relative bg-transparent rounded-[2.5rem] shadow-2xl overflow-hidden">
            {/* Inner Content */}
            <div className="relative z-10 px-5 md:px-12 lg:px-16 py-6 md:py-12">

              {/* Hero Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-center space-y-4 md:space-y-6 py-6 md:py-12"
              >
                {/* Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-7xl"
                >
                  Unlock Your{" "}
                  <span className="gradient-text-yellow">Future</span>
                  <br />
                  with <span className="gradient-text-yellow">{companyInfo.name}</span>
                </motion.h1>

                {/* Specific Description Text */}
                <motion.p
                  variants={fadeInUp}
                  className="text-white/80 text-base md:text-xl max-w-3xl mx-auto pt-3 md:pt-4"
                >
                  Get admission in top colleges of West Bengal, Maharastra, Karnataka, Tamil Nadu, Uttarakhand & Odisha
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 md:gap-4 justify-center pt-4 md:pt-4 items-center"
                >
                  <Link href="/colleges">
                    <Button
                      size="lg"
                      className="h-14 md:h-14 px-10 md:px-10 text-lg md:text-lg font-semibold bg-[#f6c804] hover:bg-[#e5b703] text-black rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(246,200,4,0.5)] transition-all duration-300"
                    >
                      Explore Colleges <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </Link>

                  <MagneticWrapper strength={0.4} range={150}>
                    <Button
                      onClick={() => openDialog()}
                      variant="outline"
                      size="lg"
                      className="h-14 md:h-14 px-10 md:px-10 text-lg md:text-lg rounded-full bg-secondary/50 backdrop-blur-sm border-white/40 dark:border-white hover:bg-white/10 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Free Consultation
                    </Button>
                  </MagneticWrapper>
                </motion.div>

                {/* Phone Numbers */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap justify-center gap-5 md:gap-6 text-sm md:text-sm text-muted-foreground mt-4"
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
                className="flex flex-wrap justify-center gap-3 md:gap-4 pb-4 md:pb-4 mt-4 md:mt-0"
              >
                <div className="animate-float flex items-center gap-2 md:gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 dark:border-white rounded-full px-5 md:px-5 py-2.5 md:py-2.5 text-sm md:text-sm font-medium">
                  <Shield className="h-4 w-4 md:h-4 md:w-4 text-[#f6c804]" /> Trusted
                </div>
                <div className="animate-float-delayed flex items-center gap-2 md:gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 dark:border-white rounded-full px-5 md:px-5 py-2.5 md:py-2.5 text-sm md:text-sm font-medium">
                  <Award className="h-4 w-4 md:h-4 md:w-4 text-[#f6c804]" /> 5+ Years
                </div>
                <div className="animate-float-delayed-2 flex items-center gap-2 md:gap-2 bg-secondary/50 backdrop-blur-sm border border-border/50 dark:border-white rounded-full px-5 md:px-5 py-2.5 md:py-2.5 text-sm md:text-sm font-medium">
                  <MapPin className="h-4 w-4 md:h-4 md:w-4 text-[#f6c804]" /> Nationwide
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
          onClick={() => scrollToSection('features-section')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </section>

      {/* Stats Section - REMOVED */}

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
                      {college.imageUrl ? (
                        <Image
                          src={college.imageUrl}
                          alt={college.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={75}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-br from-secondary to-secondary/50">
                          <Building2 className="h-12 w-12 opacity-50" />
                        </div>
                      )}
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              Don&apos;t just take our word for it. Hear from the students we&apos;ve guided to their dream colleges.
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
                  <p className="text-muted-foreground italic">&quot;{testimonial.message}&quot;</p>
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

      {/* CTA Section - Hero Style with Cursor Tracking */}
      <section
        id="cta-section"
        className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        {/* Side Margin Overlays */}
        <div className="absolute inset-y-0 left-0 w-[5%] bg-background z-20" />
        <div className="absolute inset-y-0 right-0 w-[5%] bg-background z-20" />

        {/* Background Container */}
        <div className="absolute inset-y-0 left-[5%] right-[5%] z-0 rounded-[2rem] overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />

          {/* Animated Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(246, 200, 4, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 200, 4, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Cursor Tracking Glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(246, 200, 4, 0.15) 0%, transparent 70%)',
              left: 'var(--mouse-x, 50%)',
              top: 'var(--mouse-y, 50%)',
              transform: 'translate(-50%, -50%)'
            }}
          />

          {/* Static Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#f6c804]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f6c804]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[90%] max-w-4xl mx-auto text-white"
        >
          <div className="text-center space-y-6 py-12 md:py-16 px-4 md:px-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Ready to Start Your{" "}
              <span className="gradient-text-yellow">Journey?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto text-white/70 text-base md:text-xl px-2"
            >
              Get in touch with our expert counselors for personalized guidance on B.Tech admissions across top colleges in India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            >
              <Button
                onClick={() => openDialog()}
                size="lg"
                className="group h-14 px-10 text-lg font-semibold bg-[#f6c804] text-black hover:bg-[#e5b703] rounded-full transition-all duration-300 shadow-lg shadow-[#f6c804]/25 hover:shadow-[#f6c804]/40 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Book Free Consultation
              </Button>
              <Link href="https://wa.me/919874878782" target="_blank">
                <Button size="lg" variant="outline" className="group h-14 px-8 text-lg font-semibold rounded-full border-green-500/50 bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:border-green-500 transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-white/50"
            >
              {companyInfo.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[#f6c804] transition-colors duration-300">
                  <Phone className="h-4 w-4" /> {phone}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <div className="w-full py-12 flex justify-center bg-background">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [0, -10, 0] }}
          whileHover={{
            scale: 1.1,
            y: -15,   // Move slightly higher on hover
            backgroundColor: "#f6c804",
            color: "#000000",
            borderColor: "#f6c804",
            boxShadow: "0px 10px 20px rgba(246, 200, 4, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, // Keep the bounce
            default: { duration: 0.2 } // Fast transition for hover properties
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg border"
          style={{
            backgroundColor: mounted && resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)',
            borderColor: mounted && resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : '#e2e8f0',
            color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0f172b'
          }}
          aria-label="Scroll to top"
        >
          <ArrowRight className="h-6 w-6 rotate-[-90deg]" />
        </motion.button>
      </div>
    </div>
  );
}

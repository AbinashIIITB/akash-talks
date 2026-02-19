import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteConfig = {
  name: "Akash Talks",
  url: "https://www.akashtalks.in",
  description: "Get direct B.Tech, MBA & Medical admission guidance in top colleges of West Bengal, Karnataka, Maharashtra, Tamil Nadu, Uttarakhand & Odisha. Expert counseling for WBJEE, COMEDK, MHT-CET, NEET with 28+ partner colleges.",
  keywords: [
    // High-intent commercial keywords
    "direct admission in engineering colleges",
    "management quota admission 2026",
    "B.Tech admission consultant Kolkata",
    "MBBS admission guidance",
    "college admission consultant India",
    // Location + Course intent
    "direct B.Tech admission West Bengal",
    "engineering colleges in Kolkata",
    "private engineering colleges Karnataka",
    "management quota fees Maharashtra",
    // Exam-specific
    "WBJEE counseling 2026",
    "COMEDK admission guidance",
    "MHT-CET college admission",
    "NEET counseling West Bengal",
    // College-specific (money keywords)
    "IEM Kolkata admission",
    "Heritage Institute of Technology fees",
    "Techno India Salt Lake admission",
    "Haldia Institute of Technology placement",
    "VIT Vellore management quota",
    "RV College Bangalore admission",
    "MIT Pune fees structure",
    // Generic support
    "career counseling India",
    "education consultant Kolkata",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - B.Tech & MBA Admission Guidance | Engineering College Admissions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Akash Talks" }],
  creator: "Akash Talks",
  publisher: "Akash Talks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - B.Tech & MBA Admission Guidance`,
    description: siteConfig.description,
    images: [
      {
        url: "/college.jpg",
        width: 1200,
        height: 630,
        alt: "Akash Talks - College Admission Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - B.Tech & MBA Admission Guidance`,
    description: siteConfig.description,
    images: ["/college.jpg"],
  },
  verification: {
    // Already verified via DNS/domain registrar — no HTML tag needed
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Education",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/floating-contact";
import { ThemeTransitionProvider } from "@/components/providers/theme-transition-provider";
import { CounsellingDialogProvider } from "@/components/providers/CounsellingDialogProvider";
import { CounsellingDialog } from "@/components/ui/CounsellingDialog";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Organization and WebSite
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "name": "Akash Talks",
    "url": "https://www.akashtalks.in",
    "logo": "https://www.akashtalks.in/logo.png",
    "description": "Premier educational guidance and college admission consulting service in India. Expert counseling for B.Tech, MBA, and Medical admissions across West Bengal, Karnataka, Maharashtra, Tamil Nadu, Uttarakhand & Odisha.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GN-34/1, Aurora Water Front, Street Number 311, Sector V, Bidhannagar",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700091",
      "addressCountry": "IN"
    },
    "telephone": ["+91 78150 52090", "+91 98748 78782"],
    "email": "akashtalks.in@gmail.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-78150-52090",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Bengali"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-98748-78782",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Bengali"]
      }
    ],
    "areaServed": ["West Bengal", "Karnataka", "Maharashtra", "Tamil Nadu", "Uttarakhand", "Odisha"],
    "serviceType": ["College Admission Counseling", "B.Tech Admission Guidance", "MBA Admission Guidance", "Medical Admission Guidance"],
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Akash Talks",
    "url": "https://www.akashtalks.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.akashtalks.in/colleges?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-FF19WBVKF0" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeTransitionProvider>
            <CounsellingDialogProvider>
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <FloatingContact />
                <CounsellingDialog />
                <Analytics />
              </div>
            </CounsellingDialogProvider>
          </ThemeTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

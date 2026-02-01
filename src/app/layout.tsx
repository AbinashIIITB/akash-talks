import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  name: "Akash Talks",
  url: "https://www.akashtalks.in",
  description: "Get direct B.Tech, MBA & Engineering admission guidance in top colleges of West Bengal, Karnataka, Maharashtra, Tamil Nadu, Uttarakhand & Odisha. Expert counseling for WBJEE, COMEDK, MHT-CET with 28+ partner colleges.",
  keywords: [
    "B.Tech admission",
    "MBA admission",
    "engineering college admission",
    "direct admission",
    "WBJEE counseling",
    "COMEDK admission",
    "MHT-CET admission",
    "West Bengal colleges",
    "Kolkata engineering colleges",
    "IEM Kolkata",
    "Heritage Institute of Technology",
    "Techno India",
    "VIT Vellore",
    "RV College Bangalore",
    "MIT Pune",
    "college admission consultant",
    "education consultant India",
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
    // Add your Google Search Console verification code here after setup
    // google: "your-verification-code",
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

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Organization and WebSite
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Akash Talks",
    "url": "https://www.akashtalks.in",
    "logo": "https://www.akashtalks.in/logo.png",
    "description": "Premier educational guidance and college admission consulting service in India",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Bengali"]
    },
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
              </div>
            </CounsellingDialogProvider>
          </ThemeTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us - Akash Talks | B.Tech Admission Guidance",
    description: "Contact Akash Talks for expert counseling on B.Tech, MBA & Medical admissions. Visit our office in Kolkata or call us for direct admission guidance.",
    keywords: [
        "contact Akash Talks",
        "admission counseling contact",
        "education consultancy Kolkata address",
        "Akash Talks phone number",
        "B.Tech admission help",
    ],
    openGraph: {
        title: "Contact Us - Akash Talks",
        description: "Get in touch with our expert counselors for personalized guidance.",
        url: "https://www.akashtalks.in/contact",
        siteName: "Akash Talks",
        locale: "en_IN",
        type: "website",
    },
    alternates: {
        canonical: "https://www.akashtalks.in/contact",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}

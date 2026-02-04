import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getRecentVideos, getPopularVideos } from "@/lib/youtube";

export const metadata: Metadata = {
    title: "Akash Talks - B.Tech Admission Consultancy | Direct Admission in Top Colleges",
    description: "Get admission in top engineering colleges of West Bengal, Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh, Uttarakhand & Odisha. Expert counseling for B.Tech, MBA & Medical admissions.",
    keywords: [
        "B.Tech admission",
        "engineering colleges West Bengal",
        "direct admission",
        "college counseling",
        "admission consultancy",
        "Akash Talks",
        "top engineering colleges India",
    ],
    openGraph: {
        title: "Akash Talks - Your Gateway to Top Engineering Colleges",
        description: "Expert admission guidance for B.Tech, MBA & Medical courses across India.",
        url: "https://www.akashtalks.in",
        siteName: "Akash Talks",
        locale: "en_IN",
        type: "website",
    },
};

export default async function Home() {
    // Fetch YouTube data on the server
    const [recentVideos, popularVideos] = await Promise.all([
        getRecentVideos(6),
        getPopularVideos(6),
    ]);

    return (
        <HomeClient
            recentVideos={recentVideos}
            popularVideos={popularVideos}
        />
    );
}

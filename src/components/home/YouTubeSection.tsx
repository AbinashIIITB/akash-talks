"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Play, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/ui/VideoCard";
import { VideoModal } from "@/components/ui/VideoModal";
import { YouTubeVideo } from "@/lib/youtube";
import { LayoutContainer } from "@/components/layout/LayoutContainer";

interface YouTubeSectionProps {
    recentVideos: YouTubeVideo[];
    popularVideos: YouTubeVideo[];
}

// Animation variants matching other sections
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

export function YouTubeSection({ recentVideos, popularVideos }: YouTubeSectionProps) {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<"recent" | "popular">("recent");

    const displayVideos = activeTab === "recent" ? recentVideos : popularVideos;

    // Don't render if no videos
    if (recentVideos.length === 0 && popularVideos.length === 0) {
        return null;
    }

    return (
        <>
            <section id="youtube-section" className="w-full py-20 md:py-32">
                <LayoutContainer>
                    {/* Header - matching other sections (no logo icon) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center space-y-4 mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Latest from <span className="gradient-text-yellow">YouTube</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Watch our latest videos for college reviews, exam tips, and admission guidance.
                        </motion.p>
                    </motion.div>

                    {/* Tabs - styled to match site theme */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-4 mb-12"
                    >
                        <button
                            onClick={() => setActiveTab("recent")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border ${activeTab === "recent"
                                ? "bg-[#f6c804] text-black border-[#f6c804] shadow-lg shadow-[#f6c804]/25"
                                : "bg-card/50 text-muted-foreground border-border/50 hover:border-[#f6c804]/50 hover:text-foreground"
                                }`}
                        >
                            <Play className="h-4 w-4" />
                            Fresh Content
                        </button>
                        <button
                            onClick={() => setActiveTab("popular")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border ${activeTab === "popular"
                                ? "bg-[#f6c804] text-black border-[#f6c804] shadow-lg shadow-[#f6c804]/25"
                                : "bg-card/50 text-muted-foreground border-border/50 hover:border-[#f6c804]/50 hover:text-foreground"
                                }`}
                        >
                            <TrendingUp className="h-4 w-4" />
                            Most Watched
                        </button>
                    </motion.div>

                    {/* Video Grid - matching other sections */}
                    {/* Video Grid - matching other sections */}
                    <motion.div
                        key={activeTab}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 min-h-[300px]"
                    >
                        {displayVideos.length > 0 ? (
                            displayVideos.slice(0, 6).map((video, index) => (
                                <motion.div key={video.id} variants={fadeInUp}>
                                    <VideoCard
                                        video={video}
                                        index={index}
                                        onClick={() => setSelectedVideoId(video.id)}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div variants={fadeInUp} className="col-span-full flex flex-col items-center justify-center text-center py-12 text-muted-foreground">
                                <p className="text-lg">No videos found for this section.</p>
                                <Button
                                    variant="link"
                                    onClick={() => window.open("https://www.youtube.com/@akash_talks", "_blank")}
                                    className="mt-2 text-[#f6c804]"
                                >
                                    Check our YouTube Channel
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Buttons - Visit Channel + Subscribe */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <a
                            href="https://www.youtube.com/@akash_talks"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full px-8 hover:scale-105 transition-all duration-300"
                            >
                                <ExternalLink className="h-5 w-5 mr-2" />
                                Visit Channel
                            </Button>
                        </a>
                        <a
                            href="https://www.youtube.com/@akash_talks?sub_confirmation=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="rounded-full px-8 bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FF0000]/25"
                            >
                                <Youtube className="h-5 w-5 mr-2" />
                                Subscribe to Channel
                            </Button>
                        </a>
                    </motion.div>
                </LayoutContainer>
            </section>

            {/* Video Modal */}
            <VideoModal
                videoId={selectedVideoId}
                onClose={() => setSelectedVideoId(null)}
            />
        </>
    );
}

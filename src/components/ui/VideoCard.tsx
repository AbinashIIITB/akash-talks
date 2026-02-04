"use client";

import { useState, useRef } from "react";
import { Play, Eye } from "lucide-react";
import Image from "next/image";
import { YouTubeVideo } from "@/lib/youtube";

interface VideoCardProps {
    video: YouTubeVideo;
    onClick: () => void;
    index?: number;
}

export function VideoCard({ video, onClick, index = 0 }: VideoCardProps) {
    const [isHovering, setIsHovering] = useState(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        // Start playing preview after a short delay to avoid accidental triggers
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovering(true);
        }, 800);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setIsHovering(false);
    };

    return (
        <div
            className="group cursor-pointer"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Card Container - matching college cards */}
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-3 transition-all duration-300 hover:border-[#f6c804]/50 hover:shadow-lg hover:scale-[1.02]">
                {/* Thumbnail Container */}
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted relative">
                    {/* Show thumbnail when not hovering, show iframe when hovering */}
                    {!isHovering ? (
                        <>
                            <Image
                                src={video.thumbnail || "https://placehold.co/600x400?text=No+Thumbnail"}
                                alt={video.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />

                            {/* Overlay gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 rounded-full bg-[#f6c804] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-[#f6c804]/50">
                                    <Play className="h-7 w-7 text-black ml-1" fill="black" />
                                </div>
                            </div>

                            {/* Duration Badge */}
                            {video.duration && (
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded-lg">
                                    {video.duration}
                                </div>
                            )}
                        </>
                    ) : (
                        /* Hover Preview - Muted, Autoplay Embed */
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${video.id}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 'none' }}
                        />
                    )}
                </div>

                {/* Video Info */}
                <div className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-[#f6c804] transition-colors line-clamp-2 mb-2">
                        {video.title}
                    </h3>

                    {video.viewCount && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Eye className="h-4 w-4" />
                            <span>{video.viewCount}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

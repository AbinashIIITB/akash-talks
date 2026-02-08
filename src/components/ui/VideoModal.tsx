"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
    videoId: string | null;
    onClose: () => void;
}

export function VideoModal({ videoId, onClose }: VideoModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (videoId) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [videoId, onClose]);

    return (
        <AnimatePresence>
            {videoId && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[101] flex flex-col items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="relative w-full max-w-5xl aspect-video pointer-events-auto">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute -top-12 right-0 md:right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* YouTube Embed */}
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                title="YouTube Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            />
                        </div>

                        {/* Watch on YouTube Button */}
                        <a
                            href={`https://www.youtube.com/watch?v=${videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 pointer-events-auto"
                        >
                            <Button
                                variant="destructive"
                                className="bg-[#FF0000] hover:bg-[#CC0000] text-white gap-2"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Watch on YouTube
                            </Button>
                        </a>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

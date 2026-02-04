import { unstable_cache } from 'next/cache';

export interface YouTubeVideo {
    id: string;
    title: string;
    thumbnail: string;
    viewCount: string;
    publishedAt: string;
    duration?: string;
}

interface YouTubeApiResponse {
    items: Array<{
        id: { videoId?: string } | string;
        snippet: {
            title: string;
            thumbnails: {
                high: { url: string };
                medium: { url: string };
            };
            publishedAt: string;
            resourceId?: { videoId: string };
        };
        statistics?: {
            viewCount: string;
        };
        contentDetails?: {
            duration: string;
        };
    }>;
}

interface PlaylistResponse {
    items: Array<{
        contentDetails: {
            relatedPlaylists: {
                uploads: string;
            };
        };
    }>;
}

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

function formatViewCount(count: string): string {
    const num = parseInt(count);
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M views';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K views';
    }
    return num + ' views';
}

function formatDuration(duration: string): string {
    // Parse ISO 8601 duration (e.g., PT1H2M30S)
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

async function getUploadsPlaylistId(): Promise<string | null> {
    if (!API_KEY || !CHANNEL_ID) {
        console.error('Missing YouTube API credentials');
        return null;
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
            { next: { revalidate: 86400 } } // Cache for 24 hours
        );

        if (!response.ok) {
            console.error('Failed to fetch channel data:', response.status);
            return null;
        }

        const data: PlaylistResponse = await response.json();
        return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null;
    } catch (error) {
        console.error('Error fetching uploads playlist:', error);
        return null;
    }
}

async function fetchVideoDetails(videoIds: string[]): Promise<Map<string, { viewCount: string; duration: string }>> {
    if (!API_KEY || videoIds.length === 0) return new Map();

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`,
            { next: { revalidate: 3600 } }
        );

        if (!response.ok) return new Map();

        const data: YouTubeApiResponse = await response.json();
        const map = new Map<string, { viewCount: string; duration: string }>();

        data.items.forEach((item) => {
            const id = typeof item.id === 'string' ? item.id : item.id.videoId;
            if (id && item.statistics && item.contentDetails) {
                map.set(id, {
                    viewCount: item.statistics.viewCount,
                    duration: item.contentDetails.duration,
                });
            }
        });

        return map;
    } catch (error) {
        console.error('Error fetching video details:', error);
        return new Map();
    }
}

// Fetch recent uploads from channel
export const getRecentVideos = unstable_cache(
    async (maxResults: number = 6): Promise<YouTubeVideo[]> => {
        const playlistId = await getUploadsPlaylistId();
        if (!playlistId || !API_KEY) return [];

        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${API_KEY}`,
                { next: { revalidate: 3600 } }
            );

            if (!response.ok) {
                console.error('Failed to fetch playlist items:', response.status);
                return [];
            }

            const data: YouTubeApiResponse = await response.json();
            const videoIds = data.items
                .map(item => item.snippet.resourceId?.videoId)
                .filter((id): id is string => !!id);

            const details = await fetchVideoDetails(videoIds);

            return data.items.map((item) => {
                const videoId = item.snippet.resourceId?.videoId || '';
                const videoDetails = details.get(videoId);

                return {
                    id: videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || '',
                    viewCount: videoDetails ? formatViewCount(videoDetails.viewCount) : '',
                    publishedAt: item.snippet.publishedAt,
                    duration: videoDetails ? formatDuration(videoDetails.duration) : '',
                };
            });
        } catch (error) {
            console.error('Error fetching recent videos:', error);
            return [];
        }
    },
    ['youtube-recent-videos'],
    { revalidate: 3600 } // Cache for 1 hour
);

// Fetch popular videos from channel (most viewed)
export const getPopularVideos = unstable_cache(
    async (maxResults: number = 6): Promise<YouTubeVideo[]> => {
        if (!API_KEY || !CHANNEL_ID) {
            console.warn('YouTube API credentials missing');
            return [];
        }

        try {
            console.log('Fetching popular videos from YouTube API...');
            // Search for videos from the channel, ordered by view count
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=viewCount&type=video&maxResults=${maxResults}&key=${API_KEY}`,
                { next: { revalidate: 3600 } }
            );

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Failed to fetch popular videos:', response.status, errorText);
                return [];
            }

            const data: YouTubeApiResponse = await response.json();

            if (!data.items || data.items.length === 0) {
                console.warn('No popular videos found in API response');
                return [];
            }

            const videoIds = data.items
                .map(item => typeof item.id === 'object' ? item.id.videoId : item.id)
                .filter((id): id is string => !!id);

            const details = await fetchVideoDetails(videoIds);

            const videos = data.items.map((item) => {
                const videoId = typeof item.id === 'object' ? item.id.videoId || '' : item.id as string;
                const videoDetails = details.get(videoId);

                return {
                    id: videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || '',
                    viewCount: videoDetails ? formatViewCount(videoDetails.viewCount) : '',
                    publishedAt: item.snippet.publishedAt,
                    duration: videoDetails ? formatDuration(videoDetails.duration) : '',
                };
            });

            console.log(`Successfully fetched ${videos.length} popular videos`);
            return videos;
        } catch (error) {
            console.error('Error fetching popular videos:', error);
            return [];
        }
    },
    ['youtube-popular-videos-v2'], // Bumped cache key version
    { revalidate: 3600 } // Cache for 1 hour
);

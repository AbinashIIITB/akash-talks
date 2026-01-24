export interface College {
    id: string;
    slug: string;
    name: string;
    location: string;
    rating: number; // NIRF or proprietary
    reviews: number;
    fees: string;
    courses: string[];
    type: "Private" | "Government";
    logoUrl?: string; // Placeholder for now
    coverUrl?: string;
    tags: string[];
}

export const colleges: College[] = [
    {
        id: "1",
        slug: "pes-university-bangalore",
        name: "PES University",
        location: "Bangalore, Karnataka",
        rating: 4.5,
        reviews: 1240,
        fees: "₹ 4.5L - 6L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "BBA"],
        type: "Private",
        tags: ["Top Ranked", "Best Placements"],
    },
    {
        id: "2",
        slug: "rv-college-of-engineering",
        name: "RV College of Engineering",
        location: "Bangalore, Karnataka",
        rating: 4.8,
        reviews: 2100,
        fees: "₹ 3.5L per year",
        courses: ["B.Tech", "M.Tech", "MCA"],
        type: "Private",
        tags: ["Top Ranked", "Legacy"],
    },
    {
        id: "3",
        slug: "ms-ramaiah-institute-of-technology",
        name: "M.S. Ramaiah Institute of Technology",
        location: "Bangalore, Karnataka",
        rating: 4.4,
        reviews: 1800,
        fees: "₹ 3L - 4L per year",
        courses: ["B.Tech", "MBA", "Architecture"],
        type: "Private",
        tags: ["Research Focused"],
    },
    {
        id: "4",
        slug: "iit-bombay",
        name: "IIT Bombay",
        location: "Mumbai, Maharashtra",
        rating: 5.0,
        reviews: 5000,
        fees: "₹ 2.5L per year",
        courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
        type: "Government",
        tags: ["Institute of National Importance"],
    },
    {
        id: "5",
        slug: "bits-pilani",
        name: "BITS Pilani",
        location: "Pilani, Rajasthan",
        rating: 4.9,
        reviews: 3200,
        fees: "₹ 5L - 6L per year",
        courses: ["B.E.", "M.Sc", "MBA", "PhD"],
        type: "Private",
        tags: ["Premium", "No Reservation"],
    },
    {
        id: "6",
        slug: "christ-university",
        name: "Christ University",
        location: "Bangalore, Karnataka",
        rating: 4.3,
        reviews: 4500,
        fees: "₹ 2L - 4L per year",
        courses: ["BBA", "MBA", "B.Com", "Psychology"],
        type: "Private",
        tags: ["Holistic Development", "Strict Discipline"],
    },
];

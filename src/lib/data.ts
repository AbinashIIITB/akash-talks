export interface College {
    id: string;
    slug: string;
    name: string;
    location: string;
    state: string;
    rating: number;
    reviews: number;
    fees: string;
    courses: string[];
    type: "Private" | "Government" | "Deemed";
    logoUrl?: string;
    coverUrl?: string;
    tags: string[];
    // Rich content fields
    about?: string;
    highlights?: string[];
    infrastructure?: string[];
    cutoffs?: {
        title: string;
        table: { label: string; value: string }[];
        description?: string;
    }[];
    placements?: {
        highlights: string[];
        topRecruiters: { category: string; companies: string[] }[];
        stats: { label: string; value: string }[];
    };
    scholarships?: {
        title: string;
        items: { label: string; value: string }[];
    }[];
    faqs?: { question: string; answer: string }[];
    admissions?: {
        process: string[];
        eligibility: string[];
        documents: string[];
    };
}

export const colleges: College[] = [
    // BITS Pilani Dubai (New Entry)
    {
        id: "bits-dubai",
        slug: "bits-pilani-dubai-campus",
        name: "BITS Pilani Dubai Campus",
        location: "Dubai, UAE",
        state: "Dubai",
        rating: 4.8,
        reviews: 3500,
        fees: "AED 52,840 (₹12.30 L) per year",
        courses: ["B.E. CSE", "B.E. ECE", "B.E. Mechanical", "B.E. EEE", "B.E. Chemical", "B.E. Civil", "B.E. Biotechnology"],
        type: "Private",
        tags: ["International Campus", "Direct Admission", "No BITSAT Required"],
        logoUrl: "/footer-logo.jpg", // Using placeholder/brand logo for now
        about: "BITS Pilani Dubai Campus (BPDC), established in 2000, is the first international campus of Birla Institute of Technology & Science, Pilani. Located in Dubai International Academic City, BPDC represents a pioneering milestone as India's first internationally deemed university campus, delivering world-class engineering education to the Middle East. It follows the same academic standards, curriculum, and examination system as Pilani, Goa, and Hyderabad campuses.",
        highlights: [
            "KHDA 5-Star Rating (2022)",
            "Best Engineering University in UAE Award (2022)",
            "QS Top 300 in Graduate Employability",
            "Direct Admission based on Class 12 marks (No BITSAT required)",
            "SAME BITS PILANI Degree globally recognized"
        ],
        infrastructure: [
            "Modern Academic Building in Dubai International Academic City",
            "40+ Specialized Laboratories with international-standard equipment",
            "Central Library with 25,000+ books and IEEE/Springer access",
            "Research Labs for AI, ML, Robotics, IoT, VLSI",
            "Single-Room Hostels (AC, attached bath) for 700+ students",
            "Sports facilities: Badminton, TT, Gym, and more"
        ],
        cutoffs: [
            {
                title: "Direct Admission Eligibility (Class 12)",
                table: [
                    { label: "Aggregate (PCM)", value: "Minimum 60%" },
                    { label: "Physics", value: "Minimum 50%" },
                    { label: "Mathematics", value: "Minimum 50%" },
                    { label: "English Proficiency", value: "IELTS 6.0 / TOEFL 61+" }
                ],
                description: "Unlike India campuses requiring BITSAT 300+, Dubai campus offers direct admission."
            }
        ],
        placements: {
            stats: [
                { label: "Highest Package", value: "AED 300,000 (₹70 LPA)" },
                { label: "Median Package", value: "AED 90,000 (₹21 LPA)" },
                { label: "Placement Rate", value: "95% (UAE Based)" }
            ],
            highlights: [
                "100% Core Engineering Placement",
                "Tax-Free Salaries in UAE",
                "Practice School program (7.5 months internship)"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Microsoft", "Google", "Amazon", "Dell"] },
                { category: "UAE Based", companies: ["Landmark Group", "Noon.com", "Emaar", "Careem"] },
                { category: "Engineering", companies: ["Siemens", "Schindler", "ABB", "Schneider Electric"] }
            ]
        },
        scholarships: [
            {
                title: "Merit Scholarship (Board Marks)",
                items: [
                    { label: "> 95% PCM", value: "40% Tuition Waiver" },
                    { label: "90% - 94.99%", value: "20% Tuition Waiver" },
                    { label: "Top 3 in Board", value: "100% Tuition Waiver" }
                ]
            },
            {
                title: "BITSAT Score Scholarship",
                items: [
                    { label: "Score > 300", value: "25% - 75% Tuition Waiver" }
                ]
            }
        ],
        admissions: {
            process: ["Consultation & Eligibility Check", "Branch Selection & Seat Booking", "Admission Letter", "Visa Process"],
            eligibility: ["Min 60% in Class 12 PCM", "Valid Passport"],
            documents: ["Class 10/12 Marksheets", "Passport Copy", "Passport Photos"]
        },
        faqs: [
            { question: "Is the degree valid in India?", answer: "Yes, it is the exact same BITS Pilani degree awarded at Pilani/Goa/Hyderabad campuses." },
            { question: "Is BITSAT mandatory?", answer: "No, admission is primarily based on Class 12 merit. BITSAT is optional for scholarships." },
            { question: "What is the Practice School?", answer: "It is a unique 7.5-month internship program included in the curriculum, offering industry exposure before graduation." }
        ]
    },
    // West Bengal
    {
        id: "1",
        slug: "institute-of-engineering-management-kolkata",
        name: "Institute of Engineering & Management (IEM)",
        location: "Salt Lake, Kolkata",
        state: "West Bengal",
        rating: 4.5,
        reviews: 1850,
        fees: "₹ 2.5L - 3.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "BCA", "MCA"],
        type: "Private",
        tags: ["Top Ranked", "Best Placements"],
    },
    {
        id: "2",
        slug: "techno-india-salt-lake",
        name: "Techno India Main Salt Lake",
        location: "Salt Lake, Kolkata",
        state: "West Bengal",
        rating: 4.2,
        reviews: 1420,
        fees: "₹ 2L - 3L per year",
        courses: ["B.Tech", "M.Tech", "BBA", "MBA"],
        type: "Private",
        tags: ["Industry Connect"],
    },
    {
        id: "3",
        slug: "haldia-institute-of-technology",
        name: "Haldia Institute of Technology",
        location: "Haldia, West Bengal",
        state: "West Bengal",
        rating: 4.0,
        reviews: 980,
        fees: "₹ 1.8L - 2.5L per year",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Research Focused"],
    },
    {
        id: "4",
        slug: "rcc-institute-of-information-technology",
        name: "RCC Institute of Information Technology",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.1,
        reviews: 760,
        fees: "₹ 2L - 2.8L per year",
        courses: ["B.Tech", "M.Tech", "MCA"],
        type: "Private",
        tags: ["IT Focused"],
    },
    {
        id: "5",
        slug: "jis-college-of-engineering",
        name: "JIS College of Engineering",
        location: "Kalyani, West Bengal",
        state: "West Bengal",
        rating: 4.0,
        reviews: 890,
        fees: "₹ 1.5L - 2.5L per year",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Affordable"],
    },
    {
        id: "6",
        slug: "heritage-institute-of-technology",
        name: "Heritage Institute of Technology",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.3,
        reviews: 1150,
        fees: "₹ 2.2L - 3L per year",
        courses: ["B.Tech", "M.Tech", "MBA"],
        type: "Private",
        tags: ["Legacy Institution"],
    },
    {
        id: "7",
        slug: "techno-international-new-town",
        name: "Techno International New Town (TINT)",
        location: "New Town, Kolkata",
        state: "West Bengal",
        rating: 4.1,
        reviews: 680,
        fees: "₹ 2L - 2.8L per year",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Modern Campus"],
    },
    {
        id: "8",
        slug: "netaji-subhash-engineering-college",
        name: "Netaji Subhash Engineering College",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.2,
        reviews: 1320,
        fees: "₹ 2L - 3L per year",
        courses: ["B.Tech", "M.Tech", "MBA"],
        type: "Private",
        tags: ["Top Ranked"],
    },
    {
        id: "9",
        slug: "meghnad-saha-institute-of-technology",
        name: "Meghnad Saha Institute of Technology (MSIT)",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.4,
        reviews: 1580,
        fees: "₹ 2.5L - 3.2L per year",
        courses: ["B.Tech", "M.Tech", "MCA"],
        type: "Private",
        tags: ["Best Placements", "Top Ranked"],
    },
    {
        id: "10",
        slug: "academy-of-technology",
        name: "Academy of Technology (AOT)",
        location: "Hooghly, West Bengal",
        state: "West Bengal",
        rating: 4.0,
        reviews: 720,
        fees: "₹ 1.8L - 2.5L per year",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Affordable"],
    },

    // Karnataka
    {
        id: "11",
        slug: "rv-college-of-engineering-bangalore",
        name: "RV College of Engineering",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.8,
        reviews: 2850,
        fees: "₹ 3.5L - 4.5L per year",
        courses: ["B.Tech", "M.Tech", "MCA"],
        type: "Private",
        tags: ["Top Ranked", "NIRF Top 100"],
    },
    {
        id: "12",
        slug: "dayananda-sagar-university",
        name: "Dayananda Sagar University",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.3,
        reviews: 1920,
        fees: "₹ 3L - 4L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "BBA"],
        type: "Private",
        tags: ["Multi-disciplinary"],
    },
    {
        id: "13",
        slug: "bms-college-of-engineering",
        name: "B.M.S. College of Engineering",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.7,
        reviews: 2650,
        fees: "₹ 2.5L - 3.5L per year",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Heritage", "Top Ranked"],
    },
    {
        id: "14",
        slug: "ramaiah-university-of-applied-sciences",
        name: "Ramaiah University of Applied Sciences",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.4,
        reviews: 1780,
        fees: "₹ 3L - 4L per year",
        courses: ["B.Tech", "M.Tech", "MBA"],
        type: "Private",
        tags: ["Research Focused"],
    },
    {
        id: "15",
        slug: "pes-university-bangalore",
        name: "PES University",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.6,
        reviews: 2340,
        fees: "₹ 4.5L - 6L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "BBA"],
        type: "Private",
        tags: ["Top Ranked", "Best Placements"],
    },
    {
        id: "16",
        slug: "acharya-institute-of-technology",
        name: "Acharya Institute of Technology",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.2,
        reviews: 1450,
        fees: "₹ 2.5L - 3.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA"],
        type: "Private",
        tags: ["Industry Connect"],
    },

    // Maharashtra
    {
        id: "17",
        slug: "dr-dy-patil-vidyapeeth-pune",
        name: "Dr. D. Y. Patil Vidyapeeth",
        location: "Pune, Maharashtra",
        state: "Maharashtra",
        rating: 4.5,
        reviews: 2100,
        fees: "₹ 3.5L - 5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "Medical"],
        type: "Deemed",
        tags: ["Deemed University", "Multi-disciplinary"],
    },
    {
        id: "18",
        slug: "maharashtra-institute-of-technology",
        name: "Maharashtra Institute of Technology",
        location: "Pune, Maharashtra",
        state: "Maharashtra",
        rating: 4.6,
        reviews: 2450,
        fees: "₹ 3L - 4L per year",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Top Ranked", "NIRF Top 100"],
    },
    {
        id: "19",
        slug: "symbiosis-international-university",
        name: "Symbiosis International (Deemed University)",
        location: "Pune, Maharashtra",
        state: "Maharashtra",
        rating: 4.7,
        reviews: 3200,
        fees: "₹ 4L - 6L per year",
        courses: ["B.Tech", "MBA", "Law", "Design"],
        type: "Deemed",
        tags: ["Premium", "Top Ranked"],
    },
    {
        id: "20",
        slug: "dy-patil-university-mumbai",
        name: "D.Y. Patil University",
        location: "Mumbai, Maharashtra",
        state: "Maharashtra",
        rating: 4.4,
        reviews: 1890,
        fees: "₹ 3.5L - 5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "Medical"],
        type: "Deemed",
        tags: ["Multi-disciplinary"],
    },

    // Tamil Nadu
    {
        id: "21",
        slug: "vellore-institute-of-technology",
        name: "Vellore Institute of Technology (VIT)",
        location: "Vellore, Tamil Nadu",
        state: "Tamil Nadu",
        rating: 4.8,
        reviews: 5200,
        fees: "₹ 4L - 5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
        type: "Deemed",
        tags: ["Top Ranked", "NIRF Top 20", "Best Placements"],
    },
    {
        id: "22",
        slug: "srm-institute-of-science-technology",
        name: "SRM Institute of Science and Technology",
        location: "Chennai, Tamil Nadu",
        state: "Tamil Nadu",
        rating: 4.7,
        reviews: 4800,
        fees: "₹ 3.5L - 5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "Medical"],
        type: "Deemed",
        tags: ["Top Ranked", "NIRF Top 50"],
    },

    // Uttarakhand
    {
        id: "23",
        slug: "upes-dehradun",
        name: "University of Petroleum and Energy Studies (UPES)",
        location: "Dehradun, Uttarakhand",
        state: "Uttarakhand",
        rating: 4.5,
        reviews: 2650,
        fees: "₹ 4L - 6L per year",
        courses: ["B.Tech", "MBA", "Law", "Design"],
        type: "Private",
        tags: ["Energy Sector Focus", "Top Placements"],
    },
    {
        id: "24",
        slug: "doon-university",
        name: "Doon University",
        location: "Dehradun, Uttarakhand",
        state: "Uttarakhand",
        rating: 4.1,
        reviews: 980,
        fees: "₹ 1L - 2L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "Arts"],
        type: "Government",
        tags: ["Government", "Affordable"],
    },

    // Odisha
    {
        id: "25",
        slug: "kiit-university-bhubaneswar",
        name: "Kalinga Institute of Industrial Technology (KIIT)",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.6,
        reviews: 3800,
        fees: "₹ 3.5L - 4.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "Law", "Medical"],
        type: "Deemed",
        tags: ["Top Ranked", "NIRF Top 50", "Best Campus"],
    },
    {
        id: "26",
        slug: "soa-university-bhubaneswar",
        name: "Siksha 'O' Anusandhan (SOA) University",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.5,
        reviews: 2450,
        fees: "₹ 3L - 4L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "Medical", "Dental"],
        type: "Deemed",
        tags: ["Multi-disciplinary", "Research Focused"],
    },
    {
        id: "27",
        slug: "cv-raman-global-university",
        name: "C. V. Raman Global University",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.2,
        reviews: 1320,
        fees: "₹ 2.5L - 3.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA"],
        type: "Private",
        tags: ["Growing Institution"],
    },
    {
        id: "28",
        slug: "silicon-university-bhubaneswar",
        name: "Silicon University",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.3,
        reviews: 1680,
        fees: "₹ 2.5L - 3.5L per year",
        courses: ["B.Tech", "M.Tech", "MCA"],
        type: "Private",
        tags: ["IT Focused", "Good Placements"],
    },
];

// Group colleges by state
export const collegesByState = colleges.reduce((acc, college) => {
    if (!acc[college.state]) {
        acc[college.state] = [];
    }
    acc[college.state].push(college);
    return acc;
}, {} as Record<string, College[]>);

// Company contact information
export const companyInfo = {
    name: "Akash Talks",
    tagline: "Direct Admission in B.Tech",
    phones: ["+91 9874878782", "+91 8825352628"],
    email: "admissions@akashtalks.com",
    youtube: "https://www.youtube.com/@akash_talks",
    address: {
        line1: "GN-34/1, Aurora Water Front, Unit 21",
        line2: "11th Floor, Sector V",
        city: "Salt Lake, Kolkata",
        state: "West Bengal",
        pincode: "700091",
        full: "GN-34/1, Aurora Water Front, Unit 21, 11th Floor, Sector V, Salt Lake, Kolkata - 700091"
    },
    services: [
        "Direct B.Tech Admissions",
        "College Selection Guidance",
        "Career Counseling",
        "Application Support",
        "Scholarship Assistance"
    ],
    states: ["West Bengal", "Karnataka", "Maharashtra", "Tamil Nadu", "Uttarakhand", "Odisha"]
};

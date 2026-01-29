
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
    description?: string;
    imageUrl?: string;
    logoUrl?: string;
    coverUrl?: string;
    tags: string[];
    established?: string;
    about?: string;
    highlights?: string[];
    infrastructure?: string[];
    cutoffs?: {
        title: string;
        table: { label: string; value: string }[];
        description?: string;
    }[];
    coursesDetails?: {
        name: string;
        duration: string;
        type: string;
    }[];
    feesDetails?: {
        title: string;
        items: { label: string; value: string }[];
        note?: string;
    }[];
    placements?: {
        highlights?: string[];
        topRecruiters?: { category: string; companies: string[] }[];
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
    keyDates?: {
        event: string;
        date: string;
    }[];
    whyChoose?: string[];
    alumni?: {
        description?: string;
        companies?: string[];
        achievements?: string[];
    };
    compare?: {
        parameter: string;
        thisCollege: string;
        competitor1?: string;
        competitor2?: string;
    }[];
    contact?: {
        phone?: string;
        email?: string;
        website?: string;
        address?: string;
        whatsapp?: string;
    };
    galleryImages?: { url: string; alt: string }[];
}

export interface Exam {
    id: string;
    slug: string;
    name: string;
    fullName: string;
    logoUrl: string;
    description: string;
    date: string;
    applicationLink: string;
}

export const colleges: College[] = [
    // --- West Bengal ---
    {
        id: "1",
        slug: "institute-of-engineering-management-kolkata",
        name: "Institute of Engineering & Management (Salt Lake)",
        location: "Salt Lake, Kolkata",
        state: "West Bengal",
        rating: 4.5,
        reviews: 1850,
        fees: "₹ 2.1L - 2.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "BCA", "MCA"],
        type: "Private",
        tags: ["Top Ranked", "Best Placements", "NAAC A Grade"],
        logoUrl: "/footer-logo.jpg",
        established: "1989",
        description: "Premier private engineering college in Kolkata known for strict academic discipline and excellent placements.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
        about: "Institute of Engineering & Management (IEM) is a premier private engineering college in Kolkata, established in 1989. It is one of the oldest and most reputed private engineering colleges in West Bengal, known for its strict academic discipline, excellent placement records, and strong alumni network.",
        highlights: ["NAAC 'A' Grade Accredited", "NIRF Ranked Institution", "Oldest Private Engineering College in West Bengal (Est. 1989)", "Located in Salt Lake IT Hub", "1054+ Students Placed in 2024", "₹32 LPA Highest Package"],
        infrastructure: ["3 Campuses located in the IT Hub of Salt Lake", "State-of-the-art Innovation & IoT Labs", "AI/ML Research Center", "Digital Library with IEEE/ACM/Springer Access"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 3287 - 6398" }, { label: "IT", value: "Rank 4000 - 7500" }], description: "Primary admission through WBJEE counseling." }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹8.4 - 8.65 Lakhs" }], note: "Excludes hostel and mess charges" }],
        placements: { stats: [{ label: "Highest Package", value: "₹32 LPA" }, { label: "Median Package", value: "₹6 LPA" }, { label: "Placement Rate", value: "95%+" }], highlights: ["Consistent placement record for over 35 years", "Multiple offers for top performers"], topRecruiters: [{ category: "Tech Giants", companies: ["Amazon", "TCS", "Cognizant", "Wipro", "Infosys"] }] }
    },
    {
        id: "2",
        slug: "techno-india-salt-lake",
        name: "Techno India Main Salt Lake",
        location: "Salt Lake, Kolkata",
        state: "West Bengal",
        rating: 4.2,
        reviews: 1420,
        fees: "₹ 1L - 1.3L per year",
        courses: ["B.Tech", "M.Tech", "BBA", "MBA", "MCA"],
        type: "Private",
        tags: ["Industry Connect", "NAAC Accredited"],
        logoUrl: "/footer-logo.jpg",
        established: "2001",
        description: "Leading private engineering college in Salt Lake with strong industry connections and placement record.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
    },
    { id: "wb-3", slug: "haldia-institute-of-technology", name: "Haldia Institute of Technology", location: "Haldia, West Bengal", state: "West Bengal", rating: 4.0, reviews: 1200, fees: "₹ 4L - 5L Total", courses: ["B.Tech", "MBA"], type: "Private", tags: ["Oldest Private College", "Core Placements"], description: "First private engineering college in West Bengal with massive campus and strong core placements." },
    { id: "wb-4", slug: "rcc-institute-of-information-technology", name: "RCC Institute of Information Technology", location: "Kolkata, West Bengal", state: "West Bengal", rating: 3.9, reviews: 800, fees: "₹ 3.5L - 4.5L Total", courses: ["B.Tech", "MCA"], type: "Government", tags: ["Semi-Government", "Affordable"], description: "A semi-government engineering college known for specialized IT education." },
    { id: "wb-5", slug: "jis-college-of-engineering", name: "JIS College of Engineering", location: "Kalyani, West Bengal", state: "West Bengal", rating: 4.1, reviews: 1500, fees: "₹ 4L - 5.5L Total", courses: ["B.Tech", "M.Tech"], type: "Private", tags: ["Autonomous", "Research Focus"], description: "Autonomous institute with excellent research facilities and diverse courses." },
    { id: "wb-6", slug: "heritage-institute-of-technology", name: "Heritage Institute of Technology", location: "Kolkata, West Bengal", state: "West Bengal", rating: 4.4, reviews: 1600, fees: "₹ 4L - 5L Total", courses: ["B.Tech", "M.Tech"], type: "Private", tags: ["Autonomous", "Top Ranked"], description: "One of the top autonomous engineering colleges in Kolkata with excellent infrastructure." },
    { id: "wb-7", slug: "techno-international-new-town", name: "Techno International New Town (TINT)", location: "New Town, Kolkata", state: "West Bengal", rating: 4.0, reviews: 900, fees: "₹ 4L - 6L Total", courses: ["B.Tech", "BCA"], type: "Private", tags: ["Modern Campus", "Tech Fests"], description: "Modern engineering college in New Town with focus on innovation and startups." },
    { id: "wb-8", slug: "netaji-subhash-engineering-college", name: "Netaji Subhash Engineering College", location: "Garia, Kolkata", state: "West Bengal", rating: 3.8, reviews: 1100, fees: "₹ 4L - 5L Total", courses: ["B.Tech", "MCA"], type: "Private", tags: ["Legacy Institute"], description: "Established institute in South Kolkata with consistent academic performance." },
    { id: "wb-9", slug: "meghnad-saha-institute-of-technology", name: "Meghnad Saha Institute of Technology (MSIT)", location: "Kolkata, West Bengal", state: "West Bengal", rating: 3.9, reviews: 850, fees: "₹ 3.8L - 4.8L Total", courses: ["B.Tech", "MBA"], type: "Private", tags: ["Techno India Group"], description: "Reputed college under Techno India Group offering quality technical education." },
    { id: "wb-10", slug: "academy-of-technology", name: "Academy of Technology (AOT)", location: "Hooghly, West Bengal", state: "West Bengal", rating: 4.1, reviews: 1300, fees: "₹ 3.5L - 4.5L Total", courses: ["B.Tech", "MCA"], type: "Private", tags: ["Strict Discipline", "Placement Focus"], description: "Known for high placement rates specifically in major IT service companies." },

    // --- Karnataka ---
    { id: "ka-1", slug: "rv-college-of-engineering", name: "RV College of Engineering Bengaluru", location: "Bengaluru, Karnataka", state: "Karnataka", rating: 4.8, reviews: 3000, fees: "₹ 10L+ Total", courses: ["B.E.", "M.Tech"], type: "Private", tags: ["Top Rated", "COMEDK"], description: "One of the most prestigious private engineering colleges in India." },
    { id: "ka-2", slug: "dayananda-sagar-university", name: "Dayananda Sagar University", location: "Bengaluru, Karnataka", state: "Karnataka", rating: 4.3, reviews: 1200, fees: "₹ 8L+ Total", courses: ["B.Tech", "MBA"], type: "Private", tags: ["University", "Innovation"], description: "Leading university with focus on innovation and entrepreneurship." },
    { id: "ka-3", slug: "bms-college-of-engineering", name: "B.M.S. College of Engineering", location: "Bengaluru, Karnataka", state: "Karnataka", rating: 4.7, reviews: 2500, fees: "₹ 9L+ Total", courses: ["B.E.", "M.Tech"], type: "Private", tags: ["Historic", "Autonomous"], description: "India's first private engineering college with rich legacy." },
    { id: "ka-4", slug: "ramaiah-university-of-applied-sciences", name: "Ramaiah University of Applied Sciences", location: "Bengaluru, Karnataka", state: "Karnataka", rating: 4.5, reviews: 1800, fees: "₹ 8L+ Total", courses: ["B.Tech", "M.Des"], type: "Private", tags: ["Applied Sciences", "Research"], description: "Multidisciplinary university focused on applied research." },
    { id: "ka-5", slug: "pes-university", name: "PES University", location: "Bengaluru, Karnataka", state: "Karnataka", rating: 4.6, reviews: 2200, fees: "₹ 12L+ Total", courses: ["B.Tech", "BBA"], type: "Private", tags: ["Entrance Exam", "Placements"], description: "Top-tier university known for rigorous academics and high placements." },
    { id: "ka-6", slug: "acharya-institute-of-technology", name: "Acharya Institute of Technology", location: "Bengaluru, Karnataka", state: "Karnataka", rating: 4.0, reviews: 1500, fees: "₹ 6L+ Total", courses: ["B.E.", "MBA"], type: "Private", tags: ["Large Campus", "International"], description: "Known for its massive campus and international student community." },

    // --- Maharashtra ---
    { id: "mh-1", slug: "dr-d-y-patil-vidyapeeth", name: "Dr. D. Y. Patil Vidyapeeth", location: "Pune, Maharashtra", state: "Maharashtra", rating: 4.2, reviews: 1400, fees: "₹ 8L+ Total", courses: ["B.Tech", "MBBS"], type: "Deemed", tags: ["Deemed University", "Medical & Engg"], description: "Renowned deemed university offering quality education in Pune." },
    { id: "mh-2", slug: "maharashtra-institute-of-technology", name: "Maharashtra Institute Of Technology", location: "Pune, Maharashtra", state: "Maharashtra", rating: 4.4, reviews: 2000, fees: "₹ 10L+ Total", courses: ["B.Tech"], type: "Private", tags: ["MIT Pune", "Legacy"], description: "Pioneer in private engineering education in Maharashtra." },
    { id: "mh-3", slug: "symbiosis-international", name: "Symbiosis International (Deemed University)", location: "Pune, Maharashtra", state: "Maharashtra", rating: 4.5, reviews: 1800, fees: "₹ 12L+ Total", courses: ["B.Tech", "MBA"], type: "Deemed", tags: ["SIT", "International"], description: "Part of the prestigious Symbiosis family with world-class facilities." },
    { id: "mh-4", slug: "d-y-patil-university", name: "D.Y. Patil University", location: "Navi Mumbai, Maharashtra", state: "Maharashtra", rating: 4.1, reviews: 1100, fees: "₹ 9L+ Total", courses: ["B.Tech"], type: "Private", tags: ["Navi Mumbai", "Sports"], description: "Known for its modern stadium and sports infrastructure along with academics." },

    // --- Tamil Nadu ---
    { id: "tn-1", slug: "vellore-institute-of-technology", name: "Vellore Institute of Technology (VIT)", location: "Vellore, Tamil Nadu", state: "Tamil Nadu", rating: 4.8, reviews: 5000, fees: "₹ 12L+ Total", courses: ["B.Tech"], type: "Deemed", tags: ["VITEEE", "No. 1 Private"], description: "Highest ranked private engineering institution in India with massive placement records." },
    { id: "tn-2", slug: "srm-institute-of-science-and-technology", name: "SRM Institute of Science and Technology", location: "Chennai, Tamil Nadu", state: "Tamil Nadu", rating: 4.6, reviews: 4000, fees: "₹ 10L+ Total", courses: ["B.Tech"], type: "Deemed", tags: ["SRMJEEE", "Diverse"], description: "Multidisciplinary university with huge campus and global connections." },

    // --- Uttarakhand ---
    { id: "uk-1", slug: "university-of-petroleum-and-energy-studies", name: "University of Petroleum and Energy Studies (UPES)", location: "Dehradun, Uttarakhand", state: "Uttarakhand", rating: 4.3, reviews: 1500, fees: "₹ 14L+ Total", courses: ["B.Tech", "MBA"], type: "Private", tags: ["Domain Specific", "Energy"], description: "Specialized university known for Energy, Cloud, and AI domain programs." },
    { id: "uk-2", slug: "doon-university", name: "Doon University", location: "Dehradun, Uttarakhand", state: "Uttarakhand", rating: 3.9, reviews: 500, fees: "₹ 3L - 4L Total", courses: ["B.Tech"], type: "Government", tags: ["State University", "Scenic"], description: "State university offering quality education in the scenic Doon valley." },

    // --- Odisha ---
    { id: "od-1", slug: "kalinga-institute-of-industrial-technology", name: "Kalinga Institute of Industrial Technology", location: "Bhubaneswar, Odisha", state: "Odisha", rating: 4.7, reviews: 2800, fees: "₹ 14L+ Total", courses: ["B.Tech"], type: "Deemed", tags: ["KIITEE", "Massive Campus"], description: "World-class university with 100% placement and tribal school initiative (KISS)." },
    { id: "od-2", slug: "siksha-o-anusandhan-university", name: "Siksha 'O' Anusandhan (SOA) University", location: "Bhubaneswar, Odisha", state: "Odisha", rating: 4.5, reviews: 1600, fees: "₹ 10L+ Total", courses: ["B.Tech", "MBBS"], type: "Deemed", tags: ["SAAT", "Research"], description: "Top-ranked deemed university with focus on medical and engineering research." },
    { id: "od-3", slug: "c-v-raman-global-university", name: "C. V. Raman Global University", location: "Bhubaneswar, Odisha", state: "Odisha", rating: 4.2, reviews: 1000, fees: "₹ 6L - 8L Total", courses: ["B.Tech"], type: "Private", tags: ["Skills", "Global"], description: "Focused on skill development and global exposure for students." },
    { id: "od-4", slug: "silicon-university", name: "Silicon University", location: "Bhubaneswar, Odisha", state: "Odisha", rating: 4.1, reviews: 900, fees: "₹ 5L - 6L Total", courses: ["B.Tech"], type: "Private", tags: ["Strict Academics"], description: "Known for rigorous academic curriculum and discipline." }
];

export const exams: Exam[] = [
    {
        id: "bitsat",
        slug: "bitsat-2026",
        name: "BITSAT 2026",
        fullName: "Birla Institute of Technology and Science Admission Test",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Birla_Institute_of_Technology_and_Science_Pilani_Logo.svg/1200px-Birla_Institute_of_Technology_and_Science_Pilani_Logo.svg.png",
        description: "BITSAT is a computer-based online test for admission to Integrated First Degree Programmes of BITS Pilani Campuses in Pilani, Goa, and Hyderabad.",
        date: "Session 1: May 2026 | Session 2: June 2026",
        applicationLink: "https://www.bitsadmission.com/"
    },
    {
        id: "wbjee",
        slug: "wbjee-2026",
        name: "WBJEE 2026",
        fullName: "West Bengal Joint Entrance Examination",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/West_Bengal_Joint_Entrance_Examinations_Board_Logo.png",
        description: "State-level entrance exam for admission to undergraduate engineering and pharmacy courses in West Bengal.",
        date: "April 2026",
        applicationLink: "https://wbjeeb.nic.in/"
    },
    {
        id: "srmjeee",
        slug: "srmjeee-2026",
        name: "SRMJEEE 2026",
        fullName: "SRM Joint Engineering Entrance Examination",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png",
        description: "Common entrance examination for admission to B.Tech programs at all SRM Group campuses.",
        date: "Phase 1: April 2026 | Phase 2: June 2026",
        applicationLink: "https://applications.srmist.edu.in/"
    },
    {
        id: "iemcet",
        slug: "iemcet-entrance-exam",
        name: "IEM CET 2026",
        fullName: "IEM Common Entrance Test",
        logoUrl: "https://iem.edu.in/wp-content/themes/iem/images/logo.png",
        description: "Entrance test for admission to various undergraduate and postgraduate courses at IEM Kolkata and UEM.",
        date: "Various Phases in 2026",
        applicationLink: "https://iem.edu.in/"
    },
    {
        id: "iemjee",
        slug: "iemjee",
        name: "IEMJEE 2026",
        fullName: "Institute of Engineering & Management Joint Entrance Exam",
        logoUrl: "https://iem.edu.in/wp-content/themes/iem/images/logo.png",
        description: "Exam for admission to B.Tech, BCA, BBA, M.Tech, MCA, MBA courses of IEM Group.",
        date: "Online Modes Available",
        applicationLink: "https://iemjee.iem.edu.in/"
    }
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
    officeTiming: "10:00 am to 6:00 pm",
    services: [
        "Direct B.Tech Admissions",
        "College Selection Guidance",
        "Career Counseling",
        "Application Support",
        "Scholarship Assistance"
    ],
    states: ["West Bengal", "Karnataka", "Maharashtra", "Tamil Nadu", "Uttarakhand", "Odisha"]
};

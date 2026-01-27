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
    description?: string; // Brief description for cards
    imageUrl?: string;    // Cover image for cards
    logoUrl?: string;
    coverUrl?: string;
    tags: string[];
    established?: string; // Year established
    // Rich content fields
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
}

export const colleges: College[] = [
    // BITS Pilani Dubai (Reference Implementation with ALL sections)
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
        tags: ["International Campus", "Direct Admission", "No BITSAT Required", "KHDA 5-Star"],
        established: "2000",
        description: "India's first internationally deemed university campus delivering world-class engineering education in Dubai. Part of BITS Pilani (QS World Rank #668).",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
        logoUrl: "/footer-logo.jpg",

        // ABOUT SECTION
        about: `BITS Pilani Dubai Campus (BPDC), established in 2000, is the first international campus of Birla Institute of Technology & Science, Pilani — India's Institution of Eminence. Located in Dubai International Academic City, BPDC represents a pioneering milestone as India's first internationally deemed university campus, delivering world-class engineering education to the Middle East.

As a constituent campus of BITS Pilani (QS World Rank #668), BPDC follows the same academic standards, curriculum, and examination system as Pilani, Goa, and Hyderabad campuses.

With 25 years of excellence in the UAE, BITS Dubai has earned:
• KHDA 5-Star Rating (2022)
• Best Engineering University in UAE Award (2022)
• QS Top 300 in Graduate Employability

The campus hosts 1,700+ international students from 20+ countries. Its strategic Dubai location offers strong industry exposure with 400+ companies participating in the Practice School program — a mandatory 7.5-month internship, unique in UAE engineering institutions.

BITS Dubai stands out with 80% campus placement, 95% UAE-based placements, a median package of AED 90,000 (₹21 LPA), and a highest package of AED 300,000 (₹70 LPA).

Unlike India campuses that require BITSAT scores of 300+, the Dubai campus offers direct admission based on Class 12 marks (60% in PCM) while granting the same globally recognized BITS degree.`,

        highlights: [
            "KHDA 5-Star Rating (2022)",
            "Best Engineering University in UAE Award (2022)",
            "QS Top 300 in Graduate Employability",
            "Direct Admission based on Class 12 marks (No BITSAT required)",
            "SAME BITS PILANI Degree globally recognized",
            "1,700+ international students from 20+ countries",
            "400+ Practice School partner companies"
        ],

        // INFRASTRUCTURE
        infrastructure: [
            "Modern Academic Building in Dubai International Academic City",
            "40+ Specialized Laboratories with international-standard equipment",
            "Computer Labs: 500+ systems (MATLAB, AutoCAD, Python, Cloud Tools)",
            "Central Library: 25,000+ books, 3,000+ e-journals, IEEE/Springer/ACM/Elsevier access",
            "Smart Classrooms: 60+ AC classrooms with projectors & AV systems",
            "Seminar Halls: 10+ halls with 50–300 capacity",
            "Auditorium: 500+ seating capacity",
            "Research Labs: AI, ML, Robotics, IoT, VLSI, Embedded Systems",
            "Innovation Center (CIIED): Startups, incubation, entrepreneurship",
            "Practice School Office: Coordinates 400+ company collaborations",
            "Language Lab: Communication and professional skills enhancement",
            "High-Speed Wi-Fi (200 Mbps)",
            "Single-Room Hostels: AC, attached bathrooms (Boys 400+, Girls 300+)",
            "Hostel Amenities: Mess, Wi-Fi, gym, laundry, common rooms, 24/7 security",
            "Sports: Badminton, TT, chess, carrom, fitness center",
            "15+ Student Clubs: Microsoft, Robotics, Music, Dance, Photography, Astronomy"
        ],

        // CUTOFFS
        cutoffs: [
            {
                title: "Direct Admission Eligibility (Primary Path – BITSAT NOT Mandatory)",
                table: [
                    { label: "Class 12 Aggregate (PCM)", value: "Minimum 60%" },
                    { label: "Physics", value: "Minimum 50%" },
                    { label: "Mathematics", value: "Minimum 50%" },
                    { label: "English Proficiency", value: "IELTS 6.0–6.5 or TOEFL iBT 61–80" },
                    { label: "Age Limit", value: "No upper age limit" },
                    { label: "Acceptance Rate", value: "60–70% (moderately competitive)" }
                ],
                description: "Unlike India campuses requiring BITSAT 300+, Dubai campus offers direct admission based on Class 12 marks."
            },
            {
                title: "BITSAT Score-Based Scholarship (Optional – Only if Exam Taken)",
                table: [
                    { label: "360–390 (98+ percentile)", value: "75% waiver (AED 19,815 = ₹4.61L)" },
                    { label: "330–359 (95–98 percentile)", value: "50% waiver (AED 13,210 = ₹3.07L)" },
                    { label: "300–329 (90–95 percentile)", value: "25% waiver (AED 6,605 = ₹1.54L)" }
                ]
            },
            {
                title: "Class 12 Board Marks-Based Scholarship (Automatic)",
                table: [
                    { label: "95%+ in PCM", value: "40% tuition waiver (AED 10,568 = ₹2.46L)" },
                    { label: "90–94.9%", value: "20% tuition waiver (AED 5,284 = ₹1.23L)" },
                    { label: "Top 3 in Board", value: "100% tuition waiver (AED 26,420 = ₹6.15L)" }
                ]
            }
        ],

        // COURSES DETAILS
        coursesDetails: [
            { name: "Computer Science and Engineering (CSE)", duration: "4 Years", type: "B.E." },
            { name: "Electronics and Communication Engineering (ECE)", duration: "4 Years", type: "B.E." },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Electrical and Electronics Engineering (EEE)", duration: "4 Years", type: "B.E." },
            { name: "Chemical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Civil Engineering", duration: "4 Years", type: "B.E." },
            { name: "Biotechnology", duration: "4 Years", type: "B.E." }
        ],

        // FEES DETAILS
        feesDetails: [
            {
                title: "Regular B.E Fee Structure",
                items: [
                    { label: "Tuition Fee (Per Year)", value: "AED 52,840 (₹12.30 L)" },
                    { label: "Total Tuition (4 Years)", value: "AED 211,360 (₹49.21 L)" },
                    { label: "Activity Fee (One-time)", value: "AED 1,250 (₹29,100)" }
                ],
                note: "Total Tuition (4 Years): ₹49.49 Lakhs"
            },
            {
                title: "Additional Mandatory Costs",
                items: [
                    { label: "Application Fee", value: "AED 200 (₹4,650)" },
                    { label: "Admission Fee (One-time)", value: "AED 2,000 (₹46,520)" },
                    { label: "Visa – Year 1 (incl. insurance)", value: "AED 5,000 (₹1.16 L)" },
                    { label: "Visa Renewal (Years 2–4)", value: "AED 3,000/year (₹69,780/year)" },
                    { label: "Total Visa (4 Years)", value: "AED 14,000 (₹3.26 L)" }
                ],
                note: "Grand Total (4 Years): ₹53.22 Lakhs | Conversion: 1 AED ≈ ₹23.26"
            },
            {
                title: "Hostel Fees (Optional)",
                items: [
                    { label: "Single Room (Per Year)", value: "AED 30,000 (₹6,97,800)" },
                    { label: "Total for 4 Years", value: "AED 120,000 (₹27.91 Lakhs)" }
                ],
                note: "Includes: Room, 4 meals daily, Wi-Fi, Laundry, Gym, 24/7 security"
            },
            {
                title: "Management Quota Fee Structure",
                items: [
                    { label: "CSE", value: "₹55–58 Lakhs total" },
                    { label: "Other Branches", value: "₹53–56 Lakhs total" }
                ],
                note: "Includes ₹2–5 Lakhs facilitation fee + regular fees"
            }
        ],

        // PLACEMENTS
        placements: {
            stats: [
                { label: "Placement Rate", value: "80% (95% UAE-based)" },
                { label: "Highest Package", value: "AED 300,000 (₹70 LPA)" },
                { label: "Median Package", value: "AED 90,000 (₹21 LPA)" },
                { label: "Average Package", value: "AED 90,000–120,000 (₹21–28 LPA)" },
                { label: "Core Engineering Placement", value: "100% (Mech, Elec, Chem – 2024)" },
                { label: "Practice School PPOs", value: "50%+ students" }
            ],
            highlights: [
                "Tax-Free Salaries in UAE",
                "100% Core Engineering Placement (2024)",
                "Practice School program (7.5 months paid internship)",
                "400+ partner companies for internships",
                "Stipend: AED 3,000–8,000 per month"
            ],
            topRecruiters: [
                { category: "UAE-Based Companies", companies: ["Landmark Group (AED 60K–100K)", "Noon.com (AED 80K–150K)", "Emaar Properties (AED 70K–120K)", "Emirates NBD (AED 70K–120K)", "Siemens Middle East (AED 80K–140K)", "Bosch UAE", "Careem (Uber)"] },
                { category: "Tech Giants", companies: ["Microsoft UAE (AED 100K–300K)", "Amazon UAE (AED 90K–250K)", "Google (via PS) (AED 150K–300K)", "Dell"] },
                { category: "Consulting", companies: ["PwC Middle East (AED 80K–140K)", "Deloitte UAE", "EY UAE", "KPMG Dubai"] },
                { category: "Engineering", companies: ["Schindler UAE", "Schneider Electric", "ABB UAE"] },
                { category: "Others", companies: ["Dabur Middle East", "Zomato UAE", "Sobha Construction", "Dubai Properties", "Dubizzle", "Asian Paints"] }
            ]
        },

        // SCHOLARSHIPS
        scholarships: [
            {
                title: "Automatic Scholarships (Based on Class 12 Marks)",
                items: [
                    { label: "95%+ in PCM", value: "40% first semester waiver (₹2.46L savings)" },
                    { label: "90–94.9%", value: "20% first semester waiver (₹1.23L savings)" },
                    { label: "Top 3 in Board", value: "100% first semester waiver (₹6.15L savings)" }
                ]
            },
            {
                title: "BITSAT-Based Scholarships (Optional)",
                items: [
                    { label: "360–390 (98+ percentile)", value: "75% waiver (₹4.61L)" },
                    { label: "330–359 (95–98 percentile)", value: "50% waiver (₹3.07L)" },
                    { label: "300–329 (90–95 percentile)", value: "25% waiver (₹1.54L)" }
                ]
            },
            {
                title: "Continuation Scholarships (Based on CGPA)",
                items: [
                    { label: "CGPA 9.5–10", value: "50% tuition waiver for next semester" },
                    { label: "CGPA 9.0–9.49", value: "25% next semester" },
                    { label: "CGPA 8.5–8.99", value: "10% next semester" }
                ]
            },
            {
                title: "Special Scholarships",
                items: [
                    { label: "Sports Excellence", value: "25–100% depending on performance level" },
                    { label: "Sibling Discount", value: "10% if sibling studies at any BITS campus" },
                    { label: "Children of Alumni", value: "15% tuition discount" }
                ]
            }
        ],

        // ADMISSIONS (How to Apply)
        admissions: {
            process: [
                "Consultation & Eligibility Check – Contact GetIntoCampus, share Class 12 marks, get immediate eligibility verification along with branch guidance and scholarship estimation.",
                "Branch Selection & Seat Booking – Choose your preferred branch (CSE, ECE, Mechanical, Civil, etc.). Pay the seat booking amount (₹2–3 Lakhs) to reserve your seat.",
                "Admission Letter & Scholarship Confirmation – Receive the official admission letter, fee structure, scholarship details, and BITS Pilani Dubai student ID within 24–48 hours.",
                "Visa Process & Final Documentation – GetIntoCampus assists with: Student visa processing, Emirates ID, Medical tests, Submission of final documents, On-arrival support in Dubai."
            ],
            eligibility: [
                "Minimum 60% aggregate in PCM (Class 12)",
                "Minimum 50% in Physics & Math/Technical subjects individually",
                "Class 12 must be from a recognized board",
                "IELTS 6.0+ or TOEFL 61+ or English medium certificate",
                "No upper age limit"
            ],
            documents: [
                "Class 10 mark sheet & certificate",
                "Class 12 mark sheet & certificate",
                "English proficiency proof (IELTS/TOEFL/English medium certificate)",
                "Passport with minimum 2+ years validity",
                "Aadhaar card (optional but recommended for records)",
                "Passport-size photographs",
                "Parents' passport copies (for NRI category if applicable)",
                "Medical fitness certificate (required for UAE visa)"
            ]
        },

        // KEY DATES
        keyDates: [
            { event: "Direct Admission Opens", date: "January 2026" },
            { event: "Management Quota Opens", date: "March 2026" },
            { event: "BITSAT 2026 (Optional)", date: "May–June 2026" },
            { event: "Application Deadline", date: "June 25, 2026" },
            { event: "Visa Processing", date: "June–August 2026" },
            { event: "Orientation", date: "Last week August 2026" },
            { event: "Classes Commence", date: "First week September 2026" }
        ],

        // WHY CHOOSE US
        whyChoose: [
            "Same BITS Degree – Identical to Pilani/Goa/Hyderabad with global recognition",
            "No BITSAT Required – Direct admission (unlike India campuses requiring 300+ score)",
            "KHDA 5-Star Rating – Highest educational rating in UAE (2022)",
            "Tax-Free Salaries – AED 90K (₹21L) equals ₹28L India equivalent",
            "95% UAE Placements – Strong job market with excellent employer connections",
            "Practice School Program – 7.5-month paid internship with 400+ top companies",
            "AED 300K Highest Package (₹70L) – Record-breaking placement",
            "International Exposure – Students from 20+ nationalities",
            "Dubai Advantage – Access to Middle East tech, finance, construction & engineering hubs",
            "100% Core Placement – Mechanical, Electrical & Chemical branches (2024)",
            "QS Global Rank #668 – Strong international academic standing",
            "No Reservation System – 100% merit-based admission",
            "Powerful Alumni Network – Graduates placed in Google, Microsoft, Amazon globally",
            "Lower Competition – Easier entry compared to Pilani/Goa/Hyderabad",
            "UAE Career Pathway – Gateway to Middle East engineering & tech jobs"
        ],

        // ALUMNI
        alumni: {
            description: "BITS Dubai has a strong and growing alumni network of 5,000+ graduates (2000–2024) working across 50+ countries, especially in the Middle East, USA, Europe, and India.",
            companies: [
                "Microsoft", "Google", "Amazon", "Apple", "Meta", "Dell",
                "Landmark Group", "Noon.com", "Careem", "Emaar", "Emirates NBD",
                "McKinsey", "BCG", "Deloitte", "PwC", "EY",
                "Goldman Sachs", "JP Morgan",
                "Siemens", "Bosch", "Schneider Electric"
            ],
            achievements: [
                "500+ alumni across USA, UAE, India in Tech Giants",
                "400+ alumni working in UAE-based companies",
                "200+ alumni in Consulting (Middle East, USA, India)",
                "100+ startup founders in UAE, India, USA",
                "200+ alumni pursuing MS/PhD at MIT, Stanford, CMU, UC Berkeley",
                "Packages above AED 200,000 (₹46 LPA) in FAANG & top global companies",
                "Successful UAE startup exits valued at $10M+",
                "Alumni in CXO roles across major Middle East conglomerates",
                "Patent holders in AI, IoT, semiconductor technologies"
            ]
        },

        // COMPARE
        compare: [
            { parameter: "Established", thisCollege: "2000", competitor1: "1964 (BITS Pilani)", competitor2: "2000 (Manipal Dubai)" },
            { parameter: "Location", thisCollege: "Dubai, UAE", competitor1: "Pilani, India", competitor2: "Dubai, UAE" },
            { parameter: "Admission", thisCollege: "Direct / BITSAT", competitor1: "BITSAT 300+", competitor2: "Direct" },
            { parameter: "Total Fees (4 Years)", thisCollege: "₹53.22 L", competitor1: "₹23 L", competitor2: "₹45 L" },
            { parameter: "Median Package", thisCollege: "AED 90K (₹21L)", competitor1: "₹12 LPA", competitor2: "AED 55K (₹13L)" },
            { parameter: "Highest Package", thisCollege: "AED 300K (₹70L)", competitor1: "₹60.75 LPA", competitor2: "AED 150K (₹35L)" },
            { parameter: "Placement %", thisCollege: "80% (95% UAE)", competitor1: "85%", competitor2: "75%" },
            { parameter: "Practice School (7.5 months)", thisCollege: "Yes", competitor1: "Yes", competitor2: "No" },
            { parameter: "Tax-Free Salary", thisCollege: "Yes", competitor1: "No", competitor2: "Yes" }
        ],

        // CONTACT
        contact: {
            phone: "+971-4-4200700",
            email: "admissions@bfreedubai.ac.ae",
            website: "https://www.bits-pilani.ac.in/dubai",
            address: "Dubai International Academic City, Dubai, UAE",
            whatsapp: "+917815052090"
        },

        // FAQS
        faqs: [
            { question: "Is the degree valid in India?", answer: "Yes, it is the exact same BITS Pilani degree awarded at Pilani/Goa/Hyderabad campuses. It is globally recognized and holds the same value." },
            { question: "Is BITSAT mandatory for admission?", answer: "No, admission is primarily based on Class 12 merit. BITSAT is only optional for scholarships." },
            { question: "What is the Practice School program?", answer: "It is a unique 7.5-month mandatory internship program included in the curriculum, offering industry exposure with 400+ companies before graduation." },
            { question: "What are the living costs in Dubai?", answer: "Hostel costs approximately AED 30,000 (₹7 Lakhs) per year including meals. Living off-campus can vary." },
            { question: "Can I work part-time while studying?", answer: "UAE student visa allows part-time work. Many students intern at Practice School partner companies." },
            { question: "What is the language of instruction?", answer: "All courses are taught in English. IELTS 6.0 or equivalent is required for admission." }
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
        logoUrl: "/footer-logo.jpg",
        about: "Institute of Engineering & Management (IEM) is a premier private engineering college in Kolkata. Established in 1989, it is known for its strict academic discipline, excellent placement records, and strong alumni network. IEM has consistently been ranked among the top private engineering colleges in West Bengal.",
        highlights: [
            "NAAC 'A' Grade Accredited",
            "NIRF Ranked Institution",
            "Oldest Private Engineering College in West Bengal",
            "Strong Industry Connections in Salt Lake Tech Hub"
        ],
        infrastructure: [
            "3 Campuses located in the IT Hub of Salt Lake",
            "State-of-the-art Innovation & IoT Labs",
            "Techno-Management Fest Halls",
            "Digital Library with International Journal Access"
        ],
        cutoffs: [
            {
                title: "WBJEE / JEE Main Cutoff (General)",
                table: [
                    { label: "CSE", value: "WBJEE Ranks 2000 - 4000" },
                    { label: "ECE", value: "WBJEE Ranks 4000 - 8000" },
                    { label: "IT", value: "WBJEE Ranks 3000 - 5000" }
                ],
                description: "Admission is primarily through WBJEE counseling and JEE Main quota."
            }
        ],
        placements: {
            stats: [
                { label: "Highest Package", value: "₹ 72 LPA (Off-campus)" },
                { label: "Average Package", value: "₹ 6.5 LPA" },
                { label: "Placement Rate", value: "95%+" }
            ],
            highlights: [
                "Consistent placement record for over 30 years",
                "Multiple offers for top students"
            ],
            topRecruiters: [
                { category: "IT Services", companies: ["TCS", "Cognizant", "Wipro", "Infosys"] },
                { category: "Product", companies: ["Adobe", "SAP", "Oracle"] }
            ]
        },
        faqs: [
            { question: "Is there a management quota?", answer: "Yes, a limited number of seats are available under the management quota." },
            { question: "Is uniform mandatory?", answer: "Yes, IEM follows a strict dress code and uniform policy." }
        ]
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
        description: "Government-aided engineering college affiliated with MAKAUT, focused on IT and related fields.",
        imageUrl: "https://images.unsplash.com/photo-1592280771190-3e2cb5038c36?q=80&w=1000&auto=format&fit=crop",
        about: "RCC Institute of Information Technology is a government-aided engineering college in Kolkata. It specializes in IT and Computer Science education and is known for its affordable fee structure and quality faculty.",
        highlights: ["Govt Aided", "Low Fess", "Strong Coding Culture"],
        placements: {
            stats: [{ label: "Highest Package", value: "₹ 14 LPA" }, { label: "Average Package", value: "₹ 5.5 LPA" }, { label: "Placement Rate", value: "92%" }],
            highlights: ["Excellent ROI", "Specialized in IT placements"],
            topRecruiters: [{ category: "IT", companies: ["TCS", "Cognizant", "IBM"] }]
        }
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
        description: "Renowned for its lush green campus and rigorous academic curriculum.",
        imageUrl: "https://images.unsplash.com/photo-1626084605969-90d0b0b8c282?q=80&w=1000&auto=format&fit=crop",
        about: "Heritage Institute of Technology (HIT-K) is one of the top private engineering colleges in Kolkata. Known for its rigorous academic curriculum and excellent faculty, it is a preferred choice for WBJEE rank holders.",
        highlights: ["Autonomous", "Excellent Faculty", "Premium Infrastructure"],
        placements: {
            stats: [{ label: "Highest Package", value: "₹ 16 LPA" }, { label: "Average Package", value: "₹ 6 LPA" }],
            highlights: ["Consistently High Placements"],
            topRecruiters: [{ category: "IT", companies: ["TCS", "Infosys"] }]
        }
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
        description: "Modern engineering college focused on emerging technologies and holistic development.",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
        about: "Techno International New Town (TINT) is a modern engineering college under the Techno India Group. Located in New Town, it focuses on emerging technologies like AI, ML, and IoT.",
        highlights: ["Modern Campus", "Focus on Emerging Tech"],
        placements: {
            stats: [{ label: "Highest Package", value: "₹ 8 LPA" }, { label: "Average Package", value: "₹ 4 LPA" }],
            highlights: ["Growing Placement Record"],
            topRecruiters: [{ category: "IT", companies: ["Capgemini", "LTI"] }]
        }
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
        description: "One of the oldest and most reputed private engineering colleges in West Bengal.",
        imageUrl: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=1000&auto=format&fit=crop",
        about: "Netaji Subhash Engineering College (NSEC) is one of the best and oldest private engineering colleges in West Bengal. It has a legacy of producing successful engineers.",
        highlights: ["Oldest Private College", "Strong Alumni Base"],
        placements: {
            stats: [{ label: "Highest Package", value: "₹ 15 LPA" }, { label: "Average Package", value: "₹ 5.5 LPA" }],
            highlights: ["Stable Placements"],
            topRecruiters: [{ category: "IT", companies: ["TCS", "Cerner", "Amazon"] }]
        }
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
        description: "Techno India Group college dedicated to high standards of technical education.",
        imageUrl: "https://images.unsplash.com/photo-1551029506-0807df4e2031?q=80&w=1000&auto=format&fit=crop",
        about: "Meghnad Saha Institute of Technology (MSIT) is a prominent college under Techno India Group, known for its strategic location and quality education.",
        highlights: ["Strategic Location", "Techno India Group"],
        placements: {
            stats: [{ label: "Highest Package", value: "₹ 10 LPA" }, { label: "Average Package", value: "₹ 4.5 LPA" }],
            highlights: ["Consistent IT Placements"],
            topRecruiters: [{ category: "IT", companies: ["Wipro", "Cognizant"] }]
        }
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
        logoUrl: "/footer-logo.jpg",
        about: "Rashtreeya Vidyalaya College of Engineering (RVCE) established in 1963, is one of the earliest self-financing engineering colleges in the country. The institution is run by Rashtreeya Sikshana Samithi Trust (RSST). RVCE is widely regarded as one of the best private engineering colleges in India, known for its rigorous academics and outstanding placements.",
        highlights: [
            "Ranked among top 100 in NIRF Engineering",
            "Autonomous Institution affiliated to VTU",
            "Strong Research & Development focus",
            "1000+ Offers in Day 1 Placements"
        ],
        infrastructure: [
            "Sprawling 50+ Acre Green Campus in Bengaluru",
            "Center of Excellence in Macroelectronics",
            "Interdisciplinary Research Centers",
            "Huge Sports Complex and Hostels"
        ],
        cutoffs: [
            {
                title: "KCET / COMEDK Cutoff",
                table: [
                    { label: "CSE (KCET)", value: "Rank < 200" },
                    { label: "CSE (COMEDK)", value: "Rank < 500" },
                    { label: "ECE (COMEDK)", value: "Rank < 1500" }
                ]
            }
        ],
        placements: {
            stats: [
                { label: "Highest Package", value: "₹ 62 LPA" },
                { label: "Average Package", value: "₹ 14 LPA" },
                { label: "Offers", value: "1500+" }
            ],
            highlights: [
                "Top recruiters visit for core profiles",
                "High average package for CSE/ISE branches"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Atlassian", "Microsoft", "Cisco", "Nvidia"] },
                { category: "Auto/Core", companies: ["Mercedes Benz", "Bosch", "Texas Instruments"] }
            ]
        },
        faqs: [
            { question: "How to get admission?", answer: "Admission is through KCET (Karnataka students), COMEDK (All India), and Management Quota." }
        ]
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
        description: "First private engineering college in India, known for its historic legacy and quality education.",
        imageUrl: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=1000&auto=format&fit=crop",
        about: "B.M.S. College of Engineering is an autonomous engineering college in Basavanagudi, Bangalore. Established in 1946, it is the first private sector initiative in engineering education in India.",
        highlights: ["Historic Legacy", "Strong Alumni", "Autonomous"],
        placements: { stats: [{ label: "Highest", value: "₹ 50 LPA" }, { label: "Average", value: "₹ 8 LPA" }] }
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
        description: "Top-ranked university focused on research, innovation, and entrepreneurship.",
        imageUrl: "https://images.unsplash.com/photo-1627556944963-71829e577265?q=80&w=1000&auto=format&fit=crop",
        about: "PES University, located in Bengaluru, is one of the country's leading teaching and research universities. The university is committed to providing 'education for the real world'.",
        highlights: ["Top Ranked", "Excellent Placements"],
        placements: { stats: [{ label: "Highest", value: "₹ 65 LPA" }, { label: "Average", value: "₹ 12 LPA" }] }
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
        description: "Deemed-to-be University known for medical and engineering excellence.",
        imageUrl: "https://images.unsplash.com/photo-1551029506-0807df4e2031?q=80&w=1000&auto=format&fit=crop",
        about: "Dr. D. Y. Patil Vidyapeeth, Pune is a Deemed-to-be University. It offers a wide range of courses in Medicine, Dentistry, Nursing, Physiotherapy, Optometry, Biotechnology, Management, and more.",
        placements: { stats: [{ label: "Highest", value: "₹ 15 LPA" }] }
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
        description: "Prestigious private engineering college dedicated to nation-building.",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
        about: "MIT World Peace University (formerly MIT Pune) is a private university located in Kothrud, Pune. It is part of the MIT Group of Institutions.",
        placements: { stats: [{ label: "Highest", value: "₹ 44 LPA" }] }
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
        description: "Multi-disciplinary university fostering international understanding through quality education.",
        imageUrl: "https://images.unsplash.com/photo-1596522354195-e84e9c0a5d25?q=80&w=1000&auto=format&fit=crop",
        about: "Symbiosis International (Deemed University) is a multi-campus private higher-education institute deemed to be university, headquartered in Pune.",
        placements: { stats: [{ label: "Highest", value: "₹ 24 LPA" }] }
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
        logoUrl: "/footer-logo.jpg",
        about: "Vellore Institute of Technology (VIT) is a private deemed university known for its academic excellence. Founded in 1984 as Vellore Engineering College, it has grown into a major institution with campuses in Vellore, Chennai, Bhopal, and Amravati. It is recognized as an 'Institution of Eminence' by the Govt. of India.",
        highlights: [
            "Ranked #11 in NIRF Engineering 2023",
            "ABET Accredited Engineering Programs",
            "QS World Ranking 800-1000",
            "Limca Book of Records for Campus Recruitments"
        ],
        infrastructure: [
            "370+ Acre Eco-friendly Campus",
            "Smart Classrooms & Modern Labs",
            "Huge Library with RFID technology",
            "Swimming Pools, Gyms, and Stadiums"
        ],
        cutoffs: [
            {
                title: "VITEEE Cutoff (Expected)",
                table: [
                    { label: "CSE (Cat-1)", value: "Rank < 20,000" },
                    { label: "CSE (Cat-2)", value: "Rank < 45,000" },
                    { label: "ECE (Cat-1)", value: "Rank < 50,000" }
                ],
                description: "Admissions are based on VITEEE rank. Fees vary by 'Category' (Cat-1 is lowest fees, Cat-5 is highest)."
            }
        ],
        placements: {
            stats: [
                { label: "Highest Package", value: "₹ 1.02 Cr (Intl)" },
                { label: "Average Package", value: "₹ 9.23 LPA" },
                { label: "Dream Offers", value: "4500+" }
            ],
            highlights: [
                "Record placements with multiple offers per student",
                "Strong presence of Super Dream companies (>10 LPA)"
            ],
            topRecruiters: [
                { category: "Super Dream", companies: ["Microsoft", "Amazon", "PayPal", "De Shaw"] },
                { category: "Mass Recruiters", companies: ["TCS Digital", "Wipro Turbo", "Accenture"] }
            ]
        },
        faqs: [
            { question: "What is the Category system?", answer: "VIT has a differential fee structure. Lower ranks get Category 1 (lower fees), while higher ranks might get seats in Category 2-5 (higher fees)." }
        ]
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
        logoUrl: "/footer-logo.jpg",
        about: "SRM Institute of Science and Technology (formerly SRM University) is a top-ranking private deemed university in Chennai. It has a huge campus with over 50,000 students. SRM is known for its semester abroad program, strong research culture, and diverse student community.",
        highlights: [
            "NAAC A++ Grade Accreditation",
            "Category 1 University by UGC",
            "Semester Abroad Program with MIT, Harvard, etc.",
            "Formidable Placement Record"
        ],
        infrastructure: [
            "250 Acre Kattankulathur Main Campus",
            "SRM Hospital & Medical College within campus",
            "Multi-story Library & auditorium",
            "100+ Buses for transport"
        ],
        cutoffs: [
            {
                title: "SRMJEEE Cutoff",
                table: [
                    { label: "CSE (Main Campus)", value: "Rank < 10,000" },
                    { label: "ECE (Main Campus)", value: "Rank < 25,000" }
                ],
                description: "Admission for B.Tech is strictly through SRMJEEE rank."
            }
        ],
        placements: {
            stats: [
                { label: "Highest Package", value: "₹ 57 LPA" },
                { label: "Average Package", value: "₹ 7.5 LPA" },
                { label: "Companies Visited", value: "1200+" }
            ],
            highlights: [
                "High volume of Job Offers (>10,000)",
                "Good opportunities for Core branches"
            ],
            topRecruiters: [
                { category: "Top Tech", companies: ["Google", "Amazon", "Hitachi", "Human Resocia"] },
                { category: "Consulting", companies: ["Deloitte", "KPMG", "PwC"] }
            ]
        },
        faqs: [
            { question: "Are there other campuses?", answer: "Yes, apart from KTR (Main), there are campuses in Ramapuram, Vadapalani, and NCR." }
        ]
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
        description: "Specialized university known for its energy and allied sector programs.",
        imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000&auto=format&fit=crop",
        about: "UPES is a private university in Dehradun. It is known for its specialized programs in Energy, Petroleum, and Cloud Computing.",
        placements: { stats: [{ label: "Highest", value: "₹ 50 LPA" }] }
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
        description: "State university situated in the foothills of the Himalayas offering quality education.",
        imageUrl: "https://images.unsplash.com/photo-1592280771190-3e2cb5038c36?q=80&w=1000&auto=format&fit=crop",
        about: "Doon University is a state public university located in Dehradun. It offers a scenic campus and residential facilities.",
        placements: { stats: [{ label: "Highest", value: "₹ 10 LPA" }] }
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
        logoUrl: "/footer-logo.jpg",
        about: "Kalinga Institute of Industrial Technology (KIIT) is a prestigious deemded university located in Bhubaneswar, Odisha. It is known for its world-class infrastructure, completely residential campus, and the 'Art of Giving' philosophy. KIIT has been recognized as an Institution of Eminence.",
        highlights: [
            "Ranked #16 in NIRF University Category",
            "Assessment & Accreditation A++ by NAAC",
            "First Indian Univ to get 5 Stars from QS",
            "Host of World University Games"
        ],
        infrastructure: [
            "25 sq. km. Township Campus",
            "20+ Food Courts & 15 Sports Complexes",
            "KIMS Medical Hospital associated",
            "Every Classroom is AC and Smart"
        ],
        cutoffs: [
            {
                title: "KIITEE Cutoff",
                table: [
                    { label: "CSE", value: "Percentile > 90" },
                    { label: "CS - System Engineering", value: "Percentile > 85" }
                ],
                description: "KIITEE is free of cost. Admission is purely merit-based on entrance score."
            }
        ],
        placements: {
            stats: [
                { label: "Highest Package", value: "₹ 63 LPA" },
                { label: "Average Package", value: "₹ 6.5 LPA" },
                { label: "Placement Rate", value: "100%" }
            ],
            highlights: [
                "Guaranteed placement assistance",
                "Zero Day Placement with top MNCs"
            ],
            topRecruiters: [
                { category: "MNCs", companies: ["HighRadius", "Accenture", "Cognizant", "Capgemini"] },
                { category: "Core", companies: ["ArcelorMittal", "JSW", "Tata Power"] }
            ]
        },
        faqs: [
            { question: "Is exam fee required?", answer: "No, KIITEE application and exam are completely free." }
        ]
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
        description: "Deemed university known for its medical and engineering programs.",
        imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1000&auto=format&fit=crop",
        about: "Siksha 'O' Anusandhan (SOA) is a deemed university located in Bhubaneswar. It is known for its medical college and engineering programs (ITER).",
        placements: { stats: [{ label: "Highest", value: "₹ 30 LPA" }] }
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
        description: "Focused on technical education and skill development for global industry needs.",
        imageUrl: "https://images.unsplash.com/photo-1627556944963-71829e577265?q=80&w=1000&auto=format&fit=crop",
        about: "C. V. Raman Global University is a private university in Bhubaneswar. It focuses on skill development and technical education.",
        placements: { stats: [{ label: "Highest", value: "₹ 18 LPA" }] }
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
        description: "Known for its rigorous academics and strong foundation in computer science and electronics.",
        imageUrl: "https://images.unsplash.com/photo-1590579491624-9f8290132649?q=80&w=1000&auto=format&fit=crop",
        about: "Silicon University (formerly Silicon Institute of Technology) is known for its strict academics and excellent placement record in the IT sector.",
        placements: { stats: [{ label: "Highest", value: "₹ 20 LPA" }] }
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

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
    galleryImages?: { url: string; alt: string }[];
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
        fees: "₹ 2.1L - 2.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "BCA", "MCA"],
        type: "Private",
        tags: ["Top Ranked", "Best Placements", "NAAC A Grade"],
        logoUrl: "/footer-logo.jpg",
        established: "1989",
        description: "Premier private engineering college in Kolkata known for strict academic discipline and excellent placements.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Institute of Engineering & Management (IEM) is a premier private engineering college in Kolkata, established in 1989. It is one of the oldest and most reputed private engineering colleges in West Bengal, known for its strict academic discipline, excellent placement records, and strong alumni network.

IEM has consistently been ranked among the top private engineering colleges in West Bengal and holds NAAC 'A' Grade accreditation. The college is strategically located in Salt Lake, Kolkata's IT hub, providing students with excellent industry exposure.

With over 35 years of excellence, IEM has produced thousands of successful engineers working in top companies globally. The institute follows a rigorous academic curriculum and maintains high standards of discipline.`,

        highlights: [
            "NAAC 'A' Grade Accredited",
            "NIRF Ranked Institution",
            "Oldest Private Engineering College in West Bengal (Est. 1989)",
            "Located in Salt Lake IT Hub",
            "1054+ Students Placed in 2024",
            "₹32 LPA Highest Package"
        ],

        infrastructure: [
            "3 Campuses located in the IT Hub of Salt Lake",
            "State-of-the-art Innovation & IoT Labs",
            "AI/ML Research Center",
            "Techno-Management Fest Halls",
            "Digital Library with IEEE/ACM/Springer Access",
            "Modern Computer Labs with 500+ Systems",
            "Separate Hostel Facilities for Boys and Girls",
            "Sports Complex with Indoor Games"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2024 (General Category)",
                table: [
                    { label: "CSE", value: "Rank 3287 - 6398" },
                    { label: "IT", value: "Rank 4000 - 7500" },
                    { label: "ECE", value: "Rank 5000 - 9000" },
                    { label: "EE", value: "Rank 8000 - 12000" },
                    { label: "ME", value: "Rank 10000 - 15000" }
                ],
                description: "Primary admission through WBJEE counseling. JEE Main scores also accepted."
            },
            {
                title: "Expected WBJEE Cutoff 2025",
                table: [
                    { label: "CSE", value: "Rank 6000 - 14000" },
                    { label: "JEE Main (CSE)", value: "Rank 10000 - 15000" }
                ],
                description: "Expected percentile range: 95-97 for top branches."
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Information Technology", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Computer Science (AI/ML)", duration: "4 Years", type: "B.Tech" },
            { name: "Master of Technology", duration: "2 Years", type: "M.Tech" },
            { name: "Master of Business Administration", duration: "2 Years", type: "MBA" },
            { name: "Master of Computer Applications", duration: "2 Years", type: "MCA" },
            { name: "Bachelor of Computer Applications", duration: "3 Years", type: "BCA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure (2025 Batch)",
                items: [
                    { label: "Tuition Fee (Per Semester)", value: "₹1.05 Lakhs" },
                    { label: "Annual Fee", value: "₹2.1 Lakhs" },
                    { label: "Total B.Tech (4 Years)", value: "₹8.4 - 8.65 Lakhs" }
                ],
                note: "Excludes hostel and mess charges"
            },
            {
                title: "Other Programs",
                items: [
                    { label: "MBA (Total)", value: "₹8 Lakhs" },
                    { label: "MCA (Total)", value: "₹3 Lakhs" },
                    { label: "M.Tech (Total)", value: "₹3.02 Lakhs" },
                    { label: "BCA/BBA (Total)", value: "₹3.7 Lakhs" }
                ]
            },
            {
                title: "Hostel Fees (Per Year)",
                items: [
                    { label: "Non-AC Room", value: "₹1 - 1.05 Lakhs" },
                    { label: "AC Room", value: "₹1.66 Lakhs" }
                ],
                note: "Subject to availability"
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹32 LPA" },
                { label: "Median Package (B.Tech)", value: "₹6 LPA" },
                { label: "Median Package (MBA)", value: "₹16.40 LPA" },
                { label: "Students Placed (2024)", value: "1054+" },
                { label: "Placement Rate", value: "95%+" }
            ],
            highlights: [
                "Consistent placement record for over 35 years",
                "774 B.Tech students placed in 2024",
                "257 MBA students placed out of 292 eligible",
                "Multiple offers for top performers"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Amazon", "TCS", "Cognizant", "Wipro", "Infosys"] },
                { category: "Product Companies", companies: ["Adobe", "SAP", "Oracle", "GREYB Analytics"] },
                { category: "Consulting & Finance", companies: ["PwC", "Ernst & Young", "Grant Thornton", "Axis Bank", "IDFC First Bank"] },
                { category: "Others", companies: ["Capgemini", "Byju's", "ITC Limited", "NRI FinTech"] }
            ]
        },

        admissions: {
            process: [
                "Register for WBJEE or JEE Main examination",
                "Obtain valid rank in WBJEE/JEE Main",
                "Participate in WBJEE Counseling through official portal",
                "Select IEM during choice filling based on rank",
                "Complete document verification and fee payment",
                "Report to campus for admission confirmation"
            ],
            eligibility: [
                "Minimum 60% aggregate in Class 12 (PCM)",
                "Valid WBJEE or JEE Main rank",
                "Physics, Chemistry, Mathematics as mandatory subjects",
                "No age limit for admission"
            ],
            documents: [
                "Class 10 Mark Sheet & Certificate",
                "Class 12 Mark Sheet & Certificate",
                "WBJEE/JEE Main Admit Card & Score Card",
                "Category Certificate (if applicable)",
                "Passport-size Photographs",
                "Aadhaar Card",
                "Medical Fitness Certificate (₹1000)"
            ]
        },

        keyDates: [
            { event: "WBJEE 2026 Registration", date: "December 2025 - February 2026" },
            { event: "WBJEE 2026 Exam", date: "April 2026" },
            { event: "WBJEE Results", date: "June 2026" },
            { event: "Counseling Begins", date: "July 2026" },
            { event: "Classes Commence", date: "August 2026" }
        ],

        whyChoose: [
            "35+ Years of Academic Excellence since 1989",
            "NAAC 'A' Grade Accreditation",
            "Located in Salt Lake IT Hub - excellent industry exposure",
            "₹32 LPA Highest Package with ₹6 LPA Median",
            "1054+ students placed in 2024 batch",
            "Strong Alumni Network in Top Companies",
            "State-of-the-art Infrastructure & Labs",
            "Strict Academic Discipline & Professional Environment",
            "Multiple Tech Fests & Industry Interactions"
        ],

        scholarships: [
            {
                title: "Merit-Based Scholarships",
                items: [
                    { label: "Top 10 WBJEE Rank Holders", value: "Up to 100% Tuition Waiver" },
                    { label: "Top 100 WBJEE Rank", value: "50% Tuition Waiver" },
                    { label: "90%+ in Class 12", value: "25% Tuition Waiver" }
                ]
            },
            {
                title: "Need-Based Scholarships",
                items: [
                    { label: "EWS Category", value: "Up to 50% Fee Waiver" },
                    { label: "Single Parent", value: "25% Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "IEM has a strong alumni network of 20,000+ graduates working across the globe in top MNCs, startups, and research institutions.",
            companies: ["Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro", "Adobe", "SAP", "Goldman Sachs", "JP Morgan"],
            achievements: [
                "500+ alumni in Fortune 500 companies",
                "200+ alumni in USA/Europe tech companies",
                "100+ startup founders",
                "50+ alumni pursuing PhD at top universities"
            ]
        },

        compare: [
            { parameter: "Established", thisCollege: "1989", competitor1: "1998 (HIT)", competitor2: "2001 (TINT)" },
            { parameter: "NAAC Grade", thisCollege: "A", competitor1: "B++", competitor2: "B+" },
            { parameter: "Highest Package", thisCollege: "₹32 LPA", competitor1: "₹16 LPA", competitor2: "₹8 LPA" },
            { parameter: "Median Package", thisCollege: "₹6 LPA", competitor1: "₹5 LPA", competitor2: "₹4 LPA" },
            { parameter: "WBJEE Cutoff (CSE)", thisCollege: "3287", competitor1: "5000", competitor2: "8000" },
            { parameter: "Location", thisCollege: "Salt Lake IT Hub", competitor1: "Kolkata", competitor2: "New Town" }
        ],

        contact: {
            phone: "+91-33-2367-0345",
            email: "admission@iem.edu.in",
            website: "https://iem.edu.in",
            address: "Management House, 6, Sector V, Salt Lake, Kolkata - 700091, West Bengal",
            whatsapp: "+919830017809"
        },

        faqs: [
            { question: "Is there a management quota?", answer: "Yes, a limited number of seats are available under the management quota for eligible candidates." },
            { question: "Is uniform mandatory?", answer: "Yes, IEM follows a strict dress code and uniform policy to maintain professional discipline." },
            { question: "What is the hostel facility like?", answer: "IEM provides separate hostel facilities for boys and girls with all modern amenities including Wi-Fi, mess, and security." },
            { question: "Can I get admission through JEE Main?", answer: "Yes, IEM accepts both WBJEE and JEE Main scores for B.Tech admissions." },
            { question: "What is the placement record?", answer: "IEM has 95%+ placement rate with highest package of ₹32 LPA and median package of ₹6 LPA." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "IEM Main Campus Building" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Modern Lecture Halls" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Student Library" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus Grounds" },
            { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1200", alt: "Placement Cell" }
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
        fees: "₹ 1L - 1.3L per year",
        courses: ["B.Tech", "M.Tech", "BBA", "MBA", "MCA"],
        type: "Private",
        tags: ["Industry Connect", "NAAC Accredited"],
        logoUrl: "/footer-logo.jpg",
        established: "2001",
        description: "Leading private engineering college in Salt Lake with strong industry connections and placement record.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Techno Main Salt Lake (formerly Techno India Salt Lake) is one of the leading private engineering colleges in Kolkata, established in 2001. Located in the IT hub of Salt Lake, the college offers excellent industry exposure and placement opportunities.

The college is affiliated to MAKAUT (Maulana Abul Kalam Azad University of Technology) and approved by AICTE. With state-of-the-art infrastructure and experienced faculty, Techno Main has produced thousands of successful engineers working in top IT companies globally.

The college is known for its affordable fee structure, strong placement record, and focus on practical, industry-oriented education.`,

        highlights: [
            "₹29 LPA Highest Package",
            "840+ Students Placed Annually",
            "Located in Salt Lake IT Hub",
            "AICTE Approved & MAKAUT Affiliated",
            "Strong Industry Tie-ups",
            "Affordable Fee Structure"
        ],

        infrastructure: [
            "Modern Campus in Salt Lake Sector V",
            "Advanced Computer Labs",
            "Digital Library",
            "Seminar Halls",
            "Separate Hostels for Boys and Girls",
            "Sports Facilities",
            "Cafeteria"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 8693" },
                    { label: "IT", value: "Rank 5137 - 7214" },
                    { label: "ECE", value: "Rank 15000 - 25000" },
                    { label: "EE", value: "Rank 30000 - 50000" }
                ],
                description: "Primary admission through WBJEE counseling"
            },
            {
                title: "JEE Main Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 5018+" },
                    { label: "IT", value: "Rank 10000+" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Information Technology", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Master of Technology", duration: "2 Years", type: "M.Tech" },
            { name: "Master of Business Administration", duration: "2 Years", type: "MBA" },
            { name: "Master of Computer Applications", duration: "2 Years", type: "MCA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Total B.Tech (4 Years)", value: "₹4.02 Lakhs" },
                    { label: "Annual Fee", value: "₹1 - 1.3 Lakhs" }
                ],
                note: "One of the most affordable private engineering colleges"
            },
            {
                title: "Other Programs",
                items: [
                    { label: "MBA", value: "₹2.5 - 3 Lakhs (Total)" },
                    { label: "MCA", value: "₹2 - 2.5 Lakhs (Total)" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹29 LPA" },
                { label: "Average Package", value: "₹7.5 LPA" },
                { label: "Students Placed", value: "840+" },
                { label: "Placement Rate", value: "69%" },
                { label: "Companies Visited", value: "198" }
            ],
            highlights: [
                "₹32 LPA highest package in 2022",
                "Strong IT/CSE placements (80-95%)",
                "Top recruiters from IT sector",
                "Consistent placement record"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["IBM", "Microsoft", "Google", "Amazon", "ThoughtWorks"] },
                { category: "IT Services", companies: ["TCS", "Cognizant", "Wipro", "Infosys", "Capgemini"] },
                { category: "Core Companies", companies: ["Bosch", "L&T", "Honeywell", "ITC Infotech"] }
            ]
        },

        admissions: {
            process: [
                "Register for WBJEE or JEE Main",
                "Obtain valid rank in entrance exam",
                "Participate in WBJEE counseling or TNJEE",
                "Select Techno Main Salt Lake",
                "Complete document verification and fee payment"
            ],
            eligibility: [
                "Minimum 45% in 10+2 (PCM)",
                "Valid WBJEE or JEE Main rank",
                "30% marks in English in 10+2",
                "Direct admission with 65%+ in 12th (TNJEE)"
            ],
            documents: [
                "Class 10 Mark Sheet & Certificate",
                "Class 12 Mark Sheet & Certificate",
                "WBJEE/JEE Main Score Card",
                "Category Certificate (if applicable)",
                "Passport-size Photographs"
            ]
        },

        keyDates: [
            { event: "WBJEE 2026 Registration", date: "December 2025 - February 2026" },
            { event: "TNJEE 2026 Application", date: "March - April 2026" },
            { event: "WBJEE 2026 Exam", date: "April 2026" },
            { event: "Counseling Begins", date: "July 2026" }
        ],

        whyChoose: [
            "Affordable Fee Structure (₹4 Lakhs for 4 years)",
            "Located in Salt Lake IT Hub",
            "₹29 LPA Highest Package",
            "Strong Industry Connections",
            "840+ Students Placed Annually",
            "Modern Infrastructure",
            "Experienced Faculty"
        ],

        scholarships: [
            {
                title: "Merit Scholarships",
                items: [
                    { label: "WBJEE Top 1000", value: "Up to 50% Fee Waiver" },
                    { label: "85%+ in Class 12", value: "25% Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "Techno Main has a strong alumni network working in top IT companies globally.",
            companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "IBM"],
            achievements: [
                "1000+ alumni in top IT companies",
                "Strong presence in Kolkata IT sector"
            ]
        },

        contact: {
            phone: "+91-33-2357-2706",
            email: "admission@technomainslkolkata.com",
            website: "https://technomainslkolkata.in",
            address: "EM 4/1, Sector V, Salt Lake, Kolkata - 700091"
        },

        faqs: [
            { question: "What is the total B.Tech fee?", answer: "The total B.Tech fee is approximately ₹4.02 Lakhs for 4 years, making it one of the most affordable private colleges." },
            { question: "What is the placement record?", answer: "The highest package is ₹29 LPA with average of ₹7.5 LPA. About 840 students get placed annually." },
            { question: "Is direct admission available?", answer: "Yes, direct admission is available through TNJEE for students with 65%+ in Class 12." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "Techno India Main Building" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Modern Classrooms" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus View" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
    },
    {
        id: "3",
        slug: "haldia-institute-of-technology",
        name: "Haldia Institute of Technology",
        location: "Haldia, West Bengal",
        state: "West Bengal",
        rating: 4.0,
        reviews: 980,
        fees: "₹ 70K - 1.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
        type: "Private",
        tags: ["Research Focused", "NAAC A Grade"],
        logoUrl: "/footer-logo.jpg",
        established: "1996",
        description: "Premier technical institution in industrial town of Haldia with strong placement record and affordable fees.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Haldia Institute of Technology (HIT) is one of the leading technical institutions in West Bengal, established in 1996. Located in the industrial town of Haldia, the college provides excellent industry exposure, particularly in petrochemical and core engineering sectors.

HIT is affiliated to MAKAUT (Maulana Abul Kalam Azad University of Technology) and approved by AICTE. The college has been accredited with 'A' grade by NAAC and is known for its strong placement record, experienced faculty, and industry-oriented curriculum.

With a sprawling 55-acre campus and proximity to major industries, HIT offers unique internship and placement opportunities in core engineering fields.`,

        highlights: [
            "₹33 LPA Highest Package",
            "89% Placement Rate",
            "NAAC 'A' Grade Accredited",
            "55-Acre Green Campus",
            "Located Near Industrial Hub",
            "Affordable Fee Structure"
        ],

        infrastructure: [
            "55-Acre Campus with Lush Greenery",
            "Advanced Labs and Workshops",
            "Central Library with Digital Resources",
            "Separate Hostels for Boys and Girls",
            "Sports Complex and Gymnasium",
            "Seminar Halls and Auditorium",
            "Campus Wi-Fi"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 6668 (Round 1)" },
                    { label: "CSE (AI/ML)", value: "Rank 10025" },
                    { label: "ECE", value: "Rank 15000 - 20000" },
                    { label: "Mechanical", value: "Rank 40000+" }
                ],
                description: "Primary admission through WBJEE counseling"
            },
            {
                title: "JEE Main Cutoff 2025",
                table: [
                    { label: "CSE", value: "Rank 14134" },
                    { label: "Other Branches", value: "Rank up to 1299159" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Chemical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Biotechnology", duration: "4 Years", type: "B.Tech" },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Annual Tuition Fee", value: "₹70,700" },
                    { label: "Total B.Tech (4 Years)", value: "₹5.83 Lakhs" }
                ],
                note: "Very affordable for private engineering college"
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Annual Hostel Fee", value: "₹17,000 - ₹24,000" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹33 LPA" },
                { label: "Median Package (B.Tech)", value: "₹5 LPA" },
                { label: "Average Package", value: "₹5.5 LPA" },
                { label: "Placement Rate", value: "89%" },
                { label: "Students Placed (2025)", value: "1352" }
            ],
            highlights: [
                "100% placement for Civil Engineering in 2024",
                "Strong core engineering placements",
                "Excellent petrochemical and manufacturing recruiters",
                "1352 students placed out of 1511 eligible (2025)"
            ],
            topRecruiters: [
                { category: "Tech Companies", companies: ["Amazon", "HCL", "Tech Mahindra", "Accenture", "Wipro"] },
                { category: "Core Industries", companies: ["Tata Steel", "Synopsys", "Ernst and Young", "Infosys"] },
                { category: "Consulting", companies: ["ThoughtWorks", "Capgemini", "Cognizant"] }
            ]
        },

        admissions: {
            process: [
                "Register for WBJEE or JEE Main",
                "Obtain valid rank in entrance exam",
                "Participate in WBJEE counseling",
                "Select Haldia Institute of Technology",
                "Complete document verification and fee payment"
            ],
            eligibility: [
                "Minimum 45% in 10+2 (PCM)",
                "40% for reserved categories",
                "Valid WBJEE or JEE Main rank"
            ],
            documents: [
                "Class 10 Mark Sheet & Certificate",
                "Class 12 Mark Sheet & Certificate",
                "WBJEE/JEE Main Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "WBJEE 2026 Registration", date: "December 2025 - February 2026" },
            { event: "WBJEE 2026 Exam", date: "April 2026" },
            { event: "Results", date: "June 2026" },
            { event: "Counseling Begins", date: "July 2026" }
        ],

        whyChoose: [
            "Affordable Fee Structure (₹5.83L for 4 years)",
            "89% Placement Rate",
            "Located Near Major Industries",
            "₹33 LPA Highest Package",
            "NAAC 'A' Grade Accredited",
            "Strong Core Engineering Focus",
            "55-Acre Green Campus"
        ],

        scholarships: [
            {
                title: "Merit Scholarships",
                items: [
                    { label: "WBJEE Top 500", value: "Up to 50% Fee Waiver" },
                    { label: "Academic Excellence", value: "Yearly Awards" }
                ]
            }
        ],

        alumni: {
            description: "HIT has produced engineers working in major industries including petrochemical, steel, and IT sectors.",
            companies: ["Tata Steel", "IOCL", "HCL", "Infosys", "TCS"],
            achievements: [
                "Strong presence in core engineering industries",
                "Alumni in leadership positions in manufacturing sector"
            ]
        },

        contact: {
            phone: "+91-3224-252800",
            email: "admission@hithaldia.in",
            website: "https://hithaldia.in",
            address: "ICARE Complex, Hatiberia, Haldia - 721657, West Bengal"
        },

        faqs: [
            { question: "What is the total B.Tech fee?", answer: "The total B.Tech fee is approximately ₹5.83 Lakhs for 4 years with annual fee of ₹70,700." },
            { question: "What is the placement record?", answer: "HIT has 89% placement rate with highest package of ₹33 LPA and average of ₹5.5 LPA." },
            { question: "How is the industrial exposure?", answer: "Being located in Haldia industrial area, students get excellent exposure to petrochemical and manufacturing industries." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "HIT Main Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Academic Block" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus Garden" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
    },
    {
        id: "4",
        slug: "rcc-institute-of-information-technology",
        name: "RCC Institute of Information Technology",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.1,
        reviews: 760,
        fees: "₹ 1.5L per year",
        courses: ["B.Tech", "M.Tech", "MCA"],
        type: "Private",
        tags: ["IT Focused", "Government Aided", "Affordable"],
        logoUrl: "/footer-logo.jpg",
        established: "1998",
        description: "Government-aided engineering college affiliated with MAKAUT, focused on IT and Computer Science.",
        imageUrl: "https://images.unsplash.com/photo-1592280771190-3e2cb5038c36?q=80&w=1000&auto=format&fit=crop",

        about: `RCC Institute of Information Technology (RCCIIT) is a government-aided engineering college in Kolkata, established in 1998. Affiliated to MAKAUT and approved by AICTE, RCCIIT specializes in IT and Computer Science education.

Known for its affordable fee structure, strong coding culture, and quality faculty, RCCIIT is a preferred choice for students seeking IT-focused education at reasonable costs.

The college has consistently produced successful IT professionals working in leading tech companies globally.`,

        highlights: [
            "₹14 LPA Highest Package",
            "Government Aided (Low Fees)",
            "82% Placement Rate",
            "₹6.04L Total B.Tech Fee",
            "Strong Coding Culture",
            "IT Specialization"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 28680 - 49397" },
                    { label: "AI/ML", value: "Rank 40088 - 57594" },
                    { label: "IT", value: "Rank 64113" },
                    { label: "ECE", value: "Rank 70000 - 98370" }
                ],
                description: "Admission through WBJEE counseling"
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "Information Technology", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MCA", duration: "2 Years", type: "MCA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "First Semester Fee", value: "₹99,775" },
                    { label: "Total B.Tech (4 Years)", value: "₹6.04 Lakhs" }
                ],
                note: "Very affordable for government-aided college"
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹14 LPA" },
                { label: "Average Package", value: "₹4.8 - 6 LPA" },
                { label: "Placement Rate (2023)", value: "82.40%" },
                { label: "Students Placed", value: "543" }
            ],
            highlights: [
                "Strong IT sector placements",
                "Good internship programs",
                "Winter and summer internships"
            ],
            topRecruiters: [
                { category: "IT Services", companies: ["TCS", "Tech Mahindra", "Wipro", "Cognizant"] },
                { category: "Consulting", companies: ["PwC", "Ericsson", "Johnson Controls"] },
                { category: "Others", companies: ["BMC Software", "IBM"] }
            ]
        },

        admissions: {
            process: [
                "Register for WBJEE or JEE Main",
                "Obtain valid rank",
                "Participate in WBJEE counseling",
                "Select RCCIIT",
                "Document verification and fee payment"
            ],
            eligibility: [
                "45% in 10+2 (PCM)",
                "Valid WBJEE or JEE Main rank"
            ],
            documents: [
                "Class 10 & 12 Certificates",
                "WBJEE/JEE Main Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "WBJEE 2026 Registration", date: "December 2025 - February 2026" },
            { event: "WBJEE 2026 Exam", date: "April 2026" },
            { event: "Counseling", date: "July 2026" }
        ],

        whyChoose: [
            "Government Aided (Low Fees)",
            "₹6.04L Total for 4 Years",
            "Strong IT Focus",
            "Good Placement Record",
            "Strong Coding Culture",
            "Located in Kolkata"
        ],

        scholarships: [
            {
                title: "Government Scholarships",
                items: [
                    { label: "SC/ST/OBC", value: "Fee Waiver Available" },
                    { label: "TFW Seats", value: "For Economically Weaker" }
                ]
            }
        ],

        alumni: {
            description: "RCCIIT alumni work in IT companies globally.",
            companies: ["TCS", "Cognizant", "IBM", "Wipro", "Tech Mahindra"],
            achievements: [
                "Strong IT sector presence",
                "Software engineers at top companies"
            ]
        },

        contact: {
            phone: "+91-33-2577-0585",
            email: "info@rcciit.org",
            website: "https://rcciit.org",
            address: "Canal South Road, Beliaghata, Kolkata - 700015, West Bengal"
        },

        faqs: [
            { question: "What is the total B.Tech fee?", answer: "Total B.Tech fee is approximately ₹6.04 Lakhs for 4 years." },
            { question: "What is the placement record?", answer: "RCCIIT has 82% placement with ₹14 LPA highest and ₹4.8-6 LPA average package." },
            { question: "Is it government-aided?", answer: "Yes, RCCIIT is a government-aided college, making it very affordable." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "RCCIIT Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus View" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
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
        courses: ["B.Tech", "M.Tech", "MBA"],
        type: "Private",
        tags: ["Affordable", "JIS Group"],
        logoUrl: "/footer-logo.jpg",
        established: "2000",
        description: "Part of JIS Group with affordable fees and good placement support.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `JIS College of Engineering (JISCE) is an engineering college under JIS Group, located in Kalyani, West Bengal. Established in 2000, the college is affiliated to MAKAUT and approved by AICTE.

Known for its affordable fee structure and comprehensive education, JISCE offers various engineering programs with a focus on practical learning and industry exposure.`,

        highlights: [
            "₹12 LPA Highest Package",
            "75%+ Placement Rate",
            "Affordable Fees",
            "JIS Group Institution",
            "MAKAUT Affiliated"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 55000 - 75000" },
                    { label: "ECE", value: "Rank 70000 - 90000" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Annual Fee", value: "₹1.5 - 2.5 Lakhs" },
                    { label: "Total B.Tech (4 Years)", value: "₹6 - 10 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹12 LPA" },
                { label: "Average Package", value: "₹4.5 LPA" },
                { label: "Placement Rate", value: "75%" }
            ],
            topRecruiters: [
                { category: "IT Services", companies: ["TCS", "Wipro", "Cognizant", "Infosys"] }
            ]
        },

        contact: {
            phone: "+91-33-2582-1195",
            email: "info@jiscollege.ac.in",
            website: "https://jiscollege.ac.in",
            address: "Kalyani, Nadia, West Bengal"
        },

        faqs: [
            { question: "What is the fee?", answer: "Annual fee ranges from ₹1.5 - 2.5 Lakhs." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "JISCE Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Lab" }
        ]
    },
    {
        id: "6",
        slug: "heritage-institute-of-technology",
        name: "Heritage Institute of Technology",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.3,
        reviews: 1150,
        fees: "₹ 1.4L - 1.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
        type: "Private",
        tags: ["Legacy Institution", "NIRF Ranked", "NBA Accredited"],
        logoUrl: "/footer-logo.jpg",
        established: "2001",
        description: "One of the top private engineering colleges in Kolkata with excellent faculty and NIRF ranking.",
        imageUrl: "https://images.unsplash.com/photo-1626084605969-90d0b0b8c282?q=80&w=1000&auto=format&fit=crop",

        about: `Heritage Institute of Technology (HIT-K) is one of the top private engineering colleges in Kolkata, established in 2001. Known for its rigorous academic curriculum, excellent faculty, and premium infrastructure, it is a preferred choice for WBJEE rank holders.

The college is affiliated to MAKAUT and approved by AICTE. Heritage IT has been consistently ranked among the top private engineering colleges in West Bengal and has received NBA accreditation for multiple programs.

Located in Chowbaga, Anandapur, Heritage IT offers a serene campus environment with modern facilities and a focus on holistic student development.`,

        highlights: [
            "₹30 LPA Highest Package",
            "855 Students Placed (2024)",
            "NIRF Top 201-300 Engineering",
            "NBA Accredited Programs",
            "Autonomous Status",
            "Premium Infrastructure"
        ],

        infrastructure: [
            "Modern Campus in Anandapur",
            "Advanced Computer Labs",
            "Well-Equipped Workshops",
            "Digital Library",
            "Seminar Halls and Auditorium",
            "Hostel Facilities",
            "Sports Ground",
            "Cafeteria"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 5134 - 5906" },
                    { label: "CSE (AI/ML)", value: "Rank 68380 - 74259" },
                    { label: "IT", value: "Rank 5137 - 7214" },
                    { label: "ECE", value: "Rank 12000 - 20000" }
                ],
                description: "Primary admission through WBJEE counseling"
            },
            {
                title: "JEE Main Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 64575" },
                    { label: "CSE (Data Science)", value: "Rank 88025" },
                    { label: "ECE", value: "Rank 131150" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (Data Science)", duration: "4 Years", type: "B.Tech" },
            { name: "Information Technology", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" },
            { name: "MCA", duration: "2 Years", type: "MCA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Total B.Tech (4 Years)", value: "₹5.89 Lakhs" },
                    { label: "Annual Fee", value: "₹1.4 - 1.5 Lakhs" }
                ]
            },
            {
                title: "PG Programs",
                items: [
                    { label: "M.Tech (Total)", value: "₹2.4 Lakhs" },
                    { label: "MCA (Total)", value: "₹2.8 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹30 LPA" },
                { label: "Median Package (UG)", value: "₹4.78 LPA" },
                { label: "Median Package (PG)", value: "₹5.22 LPA" },
                { label: "Students Placed (2024)", value: "855" }
            ],
            highlights: [
                "Strong IT and CSE placements",
                "Training in aptitude and programming",
                "Mock interviews and workshops",
                "Consistent placement record"
            ],
            topRecruiters: [
                { category: "IT Services", companies: ["TCS", "Infosys", "Wipro", "IBM", "Cognizant"] },
                { category: "Product Companies", companies: ["Amazon", "Persistent Systems", "Accenture"] },
                { category: "Others", companies: ["ITC Infotech", "Tech Mahindra", "Capgemini"] }
            ]
        },

        admissions: {
            process: [
                "Register for WBJEE or JEE Main",
                "Obtain valid rank in entrance exam",
                "Participate in WBJEE counseling",
                "Select Heritage Institute of Technology",
                "Complete document verification and fee payment"
            ],
            eligibility: [
                "Minimum 45% in 10+2 (PCM)",
                "Valid WBJEE or JEE Main rank"
            ],
            documents: [
                "Class 10 Mark Sheet & Certificate",
                "Class 12 Mark Sheet & Certificate",
                "WBJEE/JEE Main Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "WBJEE 2026 Registration", date: "December 2025 - February 2026" },
            { event: "WBJEE 2026 Exam", date: "April 2026" },
            { event: "Results", date: "June 2026" },
            { event: "Counseling", date: "July 2026" }
        ],

        whyChoose: [
            "NIRF Ranked (201-300 Engineering)",
            "₹30 LPA Highest Package",
            "NBA Accredited Programs",
            "Excellent Faculty",
            "Premium Infrastructure",
            "855 Students Placed in 2024",
            "Located in Kolkata"
        ],

        scholarships: [
            {
                title: "Merit Scholarships",
                items: [
                    { label: "WBJEE Top 1000", value: "Up to 50% Fee Waiver" },
                    { label: "Academic Excellence", value: "Annual Awards" }
                ]
            }
        ],

        alumni: {
            description: "Heritage IT has a strong alumni network in IT sector.",
            companies: ["TCS", "Infosys", "Amazon", "IBM", "Cognizant"],
            achievements: [
                "Strong presence in IT services sector",
                "Alumni in product companies"
            ]
        },

        contact: {
            phone: "+91-33-3320-6100",
            email: "admission@heritageit.edu",
            website: "https://heritageit.edu",
            address: "Chowbaga Road, Anandapur, Kolkata - 700107, West Bengal"
        },

        faqs: [
            { question: "What is the total B.Tech fee?", answer: "The total B.Tech fee is approximately ₹5.89 Lakhs for 4 years." },
            { question: "What is the placement record?", answer: "Heritage IT has highest package of ₹30 LPA with 855 students placed in 2024." },
            { question: "Is it autonomous?", answer: "Yes, Heritage Institute of Technology has autonomous status, allowing flexibility in curriculum." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "Heritage IT Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus View" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
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
        courses: ["B.Tech", "M.Tech", "BBA", "MBA"],
        type: "Private",
        tags: ["Modern Campus", "Techno India Group"],
        logoUrl: "/footer-logo.jpg",
        established: "2010",
        description: "Modern engineering college under Techno India Group with focus on emerging technologies.",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",

        about: `Techno International New Town (TINT) is a modern engineering college under the Techno India Group, located in New Town, Kolkata. Established in 2010, it is affiliated to MAKAUT and approved by AICTE.

The college focuses on emerging technologies like AI, ML, IoT, and Cyber Security. With a modern campus and industry-oriented curriculum, TINT prepares students for the tech industry.`,

        highlights: [
            "₹12 LPA Highest Package",
            "Modern New Town Campus",
            "Focus on Emerging Technologies",
            "Techno India Group",
            "Smart Classrooms"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 45000 - 65000" },
                    { label: "ECE", value: "Rank 60000 - 80000" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Annual Fee", value: "₹2 - 2.8 Lakhs" },
                    { label: "Total B.Tech (4 Years)", value: "₹8 - 11 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹12 LPA" },
                { label: "Average Package", value: "₹4.5 LPA" },
                { label: "Placement Rate", value: "75%" }
            ],
            highlights: ["Growing placement record", "Focus on IT placements"],
            topRecruiters: [
                { category: "IT Services", companies: ["Capgemini", "LTIMindtree", "Cognizant", "TCS"] }
            ]
        },

        contact: {
            phone: "+91-33-2324-9900",
            email: "info@tintnt.ac.in",
            website: "https://tintnt.ac.in",
            address: "New Town, Kolkata - 700156, West Bengal"
        },

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "TINT Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Lab" }
        ]
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
        fees: "₹ 3.33L - 4.5L per year",
        courses: ["B.Tech", "M.Tech", "MCA"],
        type: "Private",
        tags: ["Top Ranked", "NIRF Top 100", "Autonomous"],
        logoUrl: "/footer-logo.jpg",
        established: "1963",
        description: "One of the earliest and most prestigious self-financing engineering colleges in India.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Rashtreeya Vidyalaya College of Engineering (RVCE), established in 1963, is one of the earliest self-financing engineering colleges in India. The institution is run by Rashtreeya Sikshana Samithi Trust (RSST) and is widely regarded as one of the best private engineering colleges in India.

RVCE is an autonomous institution affiliated to Visvesvaraya Technological University (VTU), Belagavi. It is ranked in the 101-150 band in NIRF 2025 Engineering Category and is known for its rigorous academics, outstanding placements, and strong research focus.

With over 60 years of excellence, RVCE has produced thousands of successful engineers and entrepreneurs. The sprawling 50+ acre green campus in Bengaluru houses state-of-the-art facilities and research centers.`,

        highlights: [
            "NIRF 2025 Rank: 101-150 Band (Engineering)",
            "Autonomous Institution affiliated to VTU",
            "Established in 1963 - 60+ Years Legacy",
            "₹67 LPA Highest Package (2025)",
            "84% Placement Rate with 1500+ Offers",
            "50+ Acre Green Campus in Bengaluru"
        ],

        infrastructure: [
            "Sprawling 50+ Acre Green Campus in Bengaluru",
            "Center of Excellence in Macroelectronics",
            "Interdisciplinary Research Centers",
            "Advanced Robotics & AI Labs",
            "Huge Sports Complex with Modern Facilities",
            "Separate Hostels for Boys and Girls",
            "Central Library with 1 Lakh+ Books",
            "Incubation Center for Startups"
        ],

        cutoffs: [
            {
                title: "KCET Cutoff 2025 (General AI Category)",
                table: [
                    { label: "CSE", value: "Rank < 692" },
                    { label: "AI & ML", value: "Rank < 742" },
                    { label: "ECE", value: "Rank < 1200" },
                    { label: "EEE", value: "Rank < 2500" },
                    { label: "Mechanical", value: "Rank < 5000" }
                ],
                description: "Expected KCET Cutoff 2025: 200-18000 across branches"
            },
            {
                title: "COMEDK Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 169 - 299" },
                    { label: "ECE", value: "Rank 500 - 800" },
                    { label: "Mechanical", value: "Rank 1500 - 2500" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." },
            { name: "Electronics and Communication Engineering", duration: "4 Years", type: "B.E." },
            { name: "Electrical and Electronics Engineering", duration: "4 Years", type: "B.E." },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Civil Engineering", duration: "4 Years", type: "B.E." },
            { name: "AI & Machine Learning", duration: "4 Years", type: "B.E." },
            { name: "Information Science Engineering", duration: "4 Years", type: "B.E." },
            { name: "Computer Science & Engineering", duration: "2 Years", type: "M.Tech" },
            { name: "Master of Computer Applications", duration: "2 Years", type: "MCA" }
        ],

        feesDetails: [
            {
                title: "KCET Quota Fee Structure",
                items: [
                    { label: "Annual Fee", value: "₹95,000 - ₹1.1 Lakhs" },
                    { label: "Total B.E. (4 Years)", value: "₹4 - 4.4 Lakhs" }
                ],
                note: "For Karnataka domicile students through KCET"
            },
            {
                title: "COMEDK Quota Fee Structure",
                items: [
                    { label: "Annual Fee", value: "₹2 - ₹2.5 Lakhs" },
                    { label: "Total B.E. (4 Years)", value: "₹8 - 10 Lakhs" }
                ]
            },
            {
                title: "Management Quota Fee Structure",
                items: [
                    { label: "CSE", value: "₹40 - 50 Lakhs (4 Years)" },
                    { label: "Other Branches", value: "₹12 - 35 Lakhs (4 Years)" },
                    { label: "Annual Fee Range", value: "₹4 - 10 Lakhs" }
                ],
                note: "Direct admission on first-come, first-served basis"
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Per Year", value: "₹1.5 - 2.5 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2025)", value: "₹67 LPA" },
                { label: "Average Package", value: "₹15.24 LPA" },
                { label: "Placement Rate", value: "84%" },
                { label: "Companies Visited", value: "262" },
                { label: "Total Offers", value: "826" }
            ],
            highlights: [
                "Highest Package of ₹92 LPA (BE + MTech 2024)",
                "262 companies participated in 2025 placements",
                "826 offers extended to 735 BE students",
                "Strong core engineering placements"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Amazon", "Microsoft", "Cisco", "Goldman Sachs", "Morgan Stanley"] },
                { category: "Product Companies", companies: ["Atlassian", "Nvidia", "Deloitte", "Mindtree"] },
                { category: "Core Engineering", companies: ["Mercedes Benz", "Bosch", "Texas Instruments", "Infosys", "Accenture"] }
            ]
        },

        admissions: {
            process: [
                "Register for KCET/COMEDK/JEE Main examination",
                "Obtain valid rank in chosen entrance exam",
                "Participate in counseling (KEA for KCET, COMEDK consortium)",
                "Select RVCE during choice filling",
                "Complete document verification and fee payment",
                "Report to campus for orientation"
            ],
            eligibility: [
                "Minimum 45% in 10+2 (PCM) for General Category",
                "40% for SC/ST/OBC categories",
                "70% in Science and Maths in 10th grade",
                "65% in Maths and Physics in 11th grade",
                "60% in Physics and Maths in 12th grade"
            ],
            documents: [
                "Class 10 Mark Sheet & Certificate",
                "Class 12 Mark Sheet & Certificate",
                "KCET/COMEDK/JEE Score Card",
                "Category Certificate (if applicable)",
                "Passport-size Photographs",
                "Transfer Certificate"
            ]
        },

        keyDates: [
            { event: "KCET 2026 Registration", date: "February - March 2026" },
            { event: "COMEDK 2026 Registration", date: "March - April 2026" },
            { event: "KCET 2026 Exam", date: "April 2026" },
            { event: "COMEDK 2026 Exam", date: "May 2026" },
            { event: "Counseling Begins", date: "June - July 2026" },
            { event: "Management Quota Deadline", date: "July 31, 2026" },
            { event: "Classes Commence", date: "August 2026" }
        ],

        whyChoose: [
            "60+ Years of Academic Excellence (Est. 1963)",
            "NIRF Ranked 101-150 Band in Engineering",
            "Autonomous Institution with Industry-Aligned Curriculum",
            "₹67 LPA Highest Package with ₹15+ LPA Average",
            "Located in Bengaluru - India's Silicon Valley",
            "Strong Research & Development Focus",
            "50+ Acre Green Campus with Modern Infrastructure",
            "Excellent Core Engineering Placements",
            "Strong Alumni Network in Top Companies"
        ],

        scholarships: [
            {
                title: "Merit-Based Scholarships",
                items: [
                    { label: "KCET Top 100 Rank", value: "Up to 100% Tuition Waiver" },
                    { label: "COMEDK Top 50 Rank", value: "75% Tuition Waiver" },
                    { label: "90%+ in Class 12", value: "25% Tuition Waiver" }
                ]
            },
            {
                title: "Government Scholarships",
                items: [
                    { label: "SC/ST Scholarship", value: "Full Fee Reimbursement" },
                    { label: "OBC Scholarship", value: "Partial Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "RVCE has a strong alumni network of 50,000+ graduates working across the globe in top tech companies, research institutions, and successful startups.",
            companies: ["Google", "Microsoft", "Amazon", "Apple", "Meta", "Goldman Sachs", "Morgan Stanley", "Mercedes Benz", "Bosch"],
            achievements: [
                "1000+ alumni in FAANG companies",
                "500+ alumni in Fortune 500 companies",
                "100+ successful startup founders",
                "Alumni in leadership positions at major tech companies"
            ]
        },

        compare: [
            { parameter: "Established", thisCollege: "1963", competitor1: "1946 (BMSCE)", competitor2: "1972 (PESU)" },
            { parameter: "NIRF Rank", thisCollege: "101-150", competitor1: "101-150", competitor2: "51-100" },
            { parameter: "Highest Package", thisCollege: "₹67 LPA", competitor1: "₹50 LPA", competitor2: "₹68 LPA" },
            { parameter: "Average Package", thisCollege: "₹15 LPA", competitor1: "₹8 LPA", competitor2: "₹12 LPA" },
            { parameter: "KCET Cutoff (CSE)", thisCollege: "< 692", competitor1: "< 500", competitor2: "< 600" }
        ],

        contact: {
            phone: "+91-80-2860-1700",
            email: "admission@rvce.edu.in",
            website: "https://rvce.edu.in",
            address: "RV Vidyanikethan Post, Mysore Road, Bengaluru - 560059, Karnataka",
            whatsapp: "+919845012345"
        },

        faqs: [
            { question: "How to get admission?", answer: "Admission is through KCET (Karnataka students), COMEDK (All India), and Management Quota. About 25% seats are under management quota." },
            { question: "What is the fee for management quota?", answer: "Management quota fees range from ₹12-50 Lakhs for 4 years depending on branch, with CSE being the highest." },
            { question: "Is RVCE autonomous?", answer: "Yes, RVCE is an autonomous institution affiliated to VTU, Belagavi." },
            { question: "What is the placement record?", answer: "RVCE has 84% placement rate with highest package of ₹67 LPA and average package of ₹15.24 LPA." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "RVCE Main Building" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Central Library" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Science Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Green Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Auditorium" },
            { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1200", alt: "Placement Cell" }
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
        fees: "₹ 2.8L - 4.5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "BBA", "BCA"],
        type: "Private",
        tags: ["Multi-disciplinary", "Industry Connect"],
        logoUrl: "/footer-logo.jpg",
        established: "2014",
        description: "Multi-disciplinary private university with strong industry connections and placement support.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Dayananda Sagar University (DSU) is a multi-disciplinary private university in Bangalore, established in 2014. Part of the renowned Dayananda Sagar Institutions which has 60+ years of legacy in education.

The university offers a wide range of undergraduate, postgraduate, and doctoral programs across Engineering, Management, Allied Health Sciences, and Design. DSU is known for its strong industry partnerships, modern infrastructure, and focus on practical, skill-based education.

With state-of-the-art research facilities and excellent placement support, DSU has quickly become a preferred choice for students seeking quality technical education in Bangalore.`,

        highlights: [
            "₹56 LPA Highest Package (DSCE 2025)",
            "350+ Recruiting Companies",
            "Multi-disciplinary Programs",
            "Modern Infrastructure",
            "Strong Industry Connect",
            "60+ Years DSI Legacy"
        ],

        cutoffs: [
            {
                title: "KCET Cutoff 2025",
                table: [
                    { label: "CSE", value: "Rank 25000 - 30000" },
                    { label: "ECE", value: "Rank 35000 - 45000" },
                    { label: "Aerospace", value: "Rank 24798" }
                ],
                description: "Admission via KCET, COMEDK, JEE Main, or Uni-GAUGE"
            },
            {
                title: "COMEDK Cutoff 2025 (Expected)",
                table: [
                    { label: "CSE", value: "Rank 8000 - 12000" },
                    { label: "ECE", value: "Rank 14000 - 18000" },
                    { label: "AI/ML", value: "Rank 10000 - 14000" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (Data Science)", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Aerospace Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Annual Fee (KCET)", value: "₹2.8 - 3.5 Lakhs" },
                    { label: "Annual Fee (COMEDK/JEE)", value: "₹3.2 - 4.4 Lakhs" },
                    { label: "Total B.Tech (4 Years)", value: "₹13 - 17 Lakhs" }
                ]
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Male Students", value: "₹2 - 2.3 Lakhs/year" },
                    { label: "Female Students", value: "₹1.6 - 2.4 Lakhs/year" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (DSCE)", value: "₹56 LPA" },
                { label: "Highest Package (DSU Engg)", value: "₹35 LPA" },
                { label: "Average Package", value: "₹5.52 LPA" },
                { label: "Total Offers (Engg)", value: "771" },
                { label: "Companies Visited", value: "300+" }
            ],
            highlights: [
                "1181 students placed at DSCE in 2025",
                "350+ companies participate in recruitment",
                "Pre-placement training provided",
                "Strong tech and core placements"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Google", "Amazon", "IBM", "Oracle", "Dell"] },
                { category: "IT Services", companies: ["Infosys", "Capgemini", "LTIMindtree", "Accenture", "Nokia"] },
                { category: "Core Companies", companies: ["Caterpillar", "Siemens", "Honeywell", "PayPal"] }
            ]
        },

        admissions: {
            process: [
                "Apply for KCET, COMEDK, JEE Main, or Uni-GAUGE",
                "Submit scores through DSU admission portal",
                "Participate in counseling",
                "Document verification and fee payment"
            ],
            eligibility: [
                "45% in 10+2 (PCM) for General Category",
                "40% for SC/ST/OBC",
                "Valid entrance exam score"
            ],
            documents: [
                "Class 10 & 12 Mark Sheets",
                "Entrance Exam Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "KCET 2026 Exam", date: "April 2026" },
            { event: "COMEDK 2026 Exam", date: "May 2026" },
            { event: "Counseling", date: "June - July 2026" },
            { event: "Classes Begin", date: "August 2026" }
        ],

        whyChoose: [
            "₹56 LPA Highest Package",
            "60+ Years DSI Legacy",
            "350+ Recruiting Companies",
            "Multi-disciplinary Programs",
            "Modern Campus in Bangalore",
            "Strong Industry Partnerships"
        ],

        scholarships: [
            {
                title: "Merit Scholarships",
                items: [
                    { label: "KCET Top 5000", value: "Up to 50% Fee Waiver" },
                    { label: "JEE Main 90+ Percentile", value: "25% Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "DSI alumni network spans 60+ years with graduates in leading positions globally.",
            companies: ["Google", "Amazon", "Infosys", "Wipro", "Oracle"],
            achievements: [
                "Strong presence in IT sector",
                "Entrepreneurs and startup founders"
            ]
        },

        contact: {
            phone: "+91-80-4911-2999",
            email: "admissions@dsu.edu.in",
            website: "https://dsu.edu.in",
            address: "Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru - 560078"
        },

        faqs: [
            { question: "What is the fee for B.Tech?", answer: "B.Tech fees range from ₹2.8 - 4.5 Lakhs per year depending on admission quota and branch." },
            { question: "What is the placement record?", answer: "DSCE has ₹56 LPA highest package with 1181 students placed in 2025. DSU engineering has 771 offers." },
            { question: "Is DSU and DSCE the same?", answer: "No, DSU (Dayananda Sagar University) and DSCE (Dayananda Sagar College of Engineering) are different institutions under DSI group." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "DSU Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Academic Block" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Labs" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus View" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
    },
    {
        id: "13",
        slug: "bms-college-of-engineering",
        name: "B.M.S. College of Engineering",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.7,
        reviews: 2650,
        fees: "₹ 59K - 2L per year",
        courses: ["B.E.", "M.Tech", "MBA", "MCA"],
        type: "Private",
        tags: ["Heritage", "Top Ranked", "First Private Engineering College"],
        logoUrl: "/footer-logo.jpg",
        established: "1946",
        description: "First private engineering college in India, established in 1946. Known for historic legacy, strong alumni, and quality placements.",
        imageUrl: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=1000&auto=format&fit=crop",

        about: `B.M.S. College of Engineering (BMSCE) is India's first private sector initiative in engineering education, established in 1946 in Basavanagudi, Bangalore. The college is an autonomous institution affiliated to Visvesvaraya Technological University (VTU).

With over 75 years of legacy, BMSCE has produced thousands of successful engineers, many of whom hold leadership positions in top companies globally. The college is known for its strong fundamentals, experienced faculty, and excellent placement record.

BMSCE offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines. The college has produced notable alumni who have made significant contributions to industry and academia.`,

        highlights: [
            "₹51.5 LPA Highest Package (2025)",
            "1307 Job Offers from 383 Recruiters",
            "India's First Private Engineering College",
            "75+ Years of Excellence",
            "NIRF Ranking in Top 150",
            "Autonomous Institution under VTU"
        ],

        infrastructure: [
            "Historic Campus in Basavanagudi",
            "Modern Labs and Research Centers",
            "Central Library with 100,000+ Books",
            "Sports Complex with Multiple Facilities",
            "Auditorium and Seminar Halls",
            "Separate Hostels for Boys and Girls",
            "Canteen and Recreation Areas"
        ],

        cutoffs: [
            {
                title: "KCET Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 3870" },
                    { label: "ECE", value: "Rank 1850 - 1950" },
                    { label: "EEE", value: "Rank 5247" },
                    { label: "Civil", value: "Rank 25511" }
                ],
                description: "Admission through KCET for Karnataka students"
            },
            {
                title: "COMEDK Cutoff 2025",
                table: [
                    { label: "CSE", value: "Rank 800 - 1200" },
                    { label: "ECE", value: "Rank 1500 - 2000" }
                ]
            },
            {
                title: "Fee Categories",
                table: [
                    { label: "KCET (Government Quota)", value: "₹58,806/year" },
                    { label: "COMEDK (Private Quota)", value: "₹2,01,960/year" },
                    { label: "Management Quota CSE", value: "₹10 LPA" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." },
            { name: "Electronics and Communication", duration: "4 Years", type: "B.E." },
            { name: "Electrical and Electronics", duration: "4 Years", type: "B.E." },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Civil Engineering", duration: "4 Years", type: "B.E." },
            { name: "Information Science", duration: "4 Years", type: "B.E." },
            { name: "Chemical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Industrial Engineering", duration: "4 Years", type: "B.E." },
            { name: "M.Tech (Various Specializations)", duration: "2 Years", type: "M.Tech" },
            { name: "Master of Business Administration", duration: "2 Years", type: "MBA" }
        ],

        feesDetails: [
            {
                title: "B.E. Fee Structure (KCET)",
                items: [
                    { label: "Annual Fee (Government Quota)", value: "₹58,806" },
                    { label: "Total B.E. (4 Years)", value: "₹2.35 Lakhs" }
                ],
                note: "Highly affordable for government quota students"
            },
            {
                title: "COMEDK / Management Quota",
                items: [
                    { label: "COMEDK Annual Fee", value: "₹2,01,960" },
                    { label: "Management Quota (CSE)", value: "₹10 Lakhs/year" },
                    { label: "Management Quota (ECE)", value: "₹6 Lakhs/year" }
                ]
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Annual Hostel + Mess", value: "₹1,20,000" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2025)", value: "₹51.5 LPA" },
                { label: "Average Package", value: "₹11.4 LPA" },
                { label: "Median Package (UG)", value: "₹8.50 LPA" },
                { label: "Total Offers", value: "1307" },
                { label: "Students Placed", value: "968" },
                { label: "Recruiters", value: "383" }
            ],
            highlights: [
                "775 internship offers in 2025",
                "350+ national and multinational companies visit annually",
                "Strong core engineering placements",
                "Excellent alumni network support"
            ],
            topRecruiters: [
                { category: "Tech & Product", companies: ["Amazon", "Dell", "Siemens", "Mercedes Benz", "Paytm"] },
                { category: "IT Services", companies: ["Accenture", "Infosys", "TCS", "Wipro", "Cognizant"] },
                { category: "Core Engineering", companies: ["L&T", "Bosch", "Tata Motors", "ABB", "Caterpillar"] }
            ]
        },

        admissions: {
            process: [
                "Apply for KCET or COMEDK exam",
                "Obtain valid rank in entrance exam",
                "Participate in KEA or COMEDK counseling",
                "Select BMSCE during choice filling",
                "Complete document verification and fee payment"
            ],
            eligibility: [
                "50% in 10+2 (PCM) for General Category",
                "45% for OBC, 40% for SC/ST",
                "Valid KCET or COMEDK score",
                "Karnataka domicile for KCET quota"
            ],
            documents: [
                "Class 10 Mark Sheet & Certificate",
                "Class 12 Mark Sheet & Certificate",
                "KCET/COMEDK Score Card",
                "Category Certificate (if applicable)",
                "Domicile Certificate (for KCET)"
            ]
        },

        keyDates: [
            { event: "KCET 2026 Registration", date: "February - March 2026" },
            { event: "COMEDK 2026 Registration", date: "March - April 2026" },
            { event: "KCET 2026 Exam", date: "April 2026" },
            { event: "COMEDK 2026 Exam", date: "May 2026" },
            { event: "KEA Counseling", date: "June - July 2026" },
            { event: "Classes Commence", date: "August 2026" }
        ],

        whyChoose: [
            "India's First Private Engineering College (1946)",
            "75+ Years of Academic Excellence",
            "₹51.5 LPA Highest Package",
            "Affordable Fee for Government Quota",
            "Strong Alumni Network Globally",
            "NIRF Ranked Among Top 150",
            "Located in Heart of Bangalore",
            "Autonomous Institution with Flexible Curriculum"
        ],

        scholarships: [
            {
                title: "Government Scholarships",
                items: [
                    { label: "SC/ST/OBC Scholarship", value: "Full Tuition Waiver" },
                    { label: "EWS Category", value: "Up to 75% Fee Waiver" }
                ]
            },
            {
                title: "Merit Scholarships",
                items: [
                    { label: "KCET Top 100", value: "Special Recognition" },
                    { label: "Academic Excellence", value: "Annual Merit Awards" }
                ]
            }
        ],

        alumni: {
            description: "BMSCE has a legacy of producing outstanding engineers and industry leaders over 75+ years. Alumni are spread across the globe in leadership positions.",
            companies: ["Google", "Microsoft", "Amazon", "Infosys", "Wipro", "L&T", "Boeing", "GE"],
            achievements: [
                "Multiple startup founders and entrepreneurs",
                "Leaders in Fortune 500 companies",
                "Distinguished professors and researchers",
                "Government officials and policy makers"
            ]
        },

        compare: [
            { parameter: "Established", thisCollege: "1946", competitor1: "1963 (RVCE)", competitor2: "1972 (PESU)" },
            { parameter: "Highest Package", thisCollege: "₹51.5 LPA", competitor1: "₹67 LPA", competitor2: "₹68 LPA" },
            { parameter: "KCET Fee", thisCollege: "₹59K/year", competitor1: "₹66K/year", competitor2: "₹5L/year" },
            { parameter: "Type", thisCollege: "Private Aided", competitor1: "Private Aided", competitor2: "Private" }
        ],

        contact: {
            phone: "+91-80-2662-2130",
            email: "admission@bmsce.ac.in",
            website: "https://bmsce.ac.in",
            address: "Bull Temple Road, Basavanagudi, Bengaluru - 560019, Karnataka"
        },

        faqs: [
            { question: "What is the fee for KCET students?", answer: "For KCET government quota, the annual fee is approximately ₹58,806, making it one of the most affordable options." },
            { question: "What is the placement record?", answer: "BMSCE has 1307 offers from 383 recruiters in 2025, with highest package of ₹51.5 LPA." },
            { question: "Is it better than RVCE?", answer: "Both are excellent colleges. BMSCE has a longer legacy (1946 vs 1963), while RVCE has slightly higher packages. Fee structure is similar for government quota." },
            { question: "What are the management quota fees?", answer: "Management quota fees range from ₹6-10 Lakhs per year depending on the branch." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "BMSCE Historic Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus Grounds" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
    },
    {
        id: "14",
        slug: "ramaiah-institute-of-technology",
        name: "M.S. Ramaiah Institute of Technology",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.5,
        reviews: 2450,
        fees: "₹ 58K - 2.4L per year",
        courses: ["B.E.", "M.Tech", "MBA", "MCA"],
        type: "Private",
        tags: ["Top Ranked", "NIRF Ranked", "Autonomous"],
        logoUrl: "/footer-logo.jpg",
        established: "1962",
        description: "Premier autonomous engineering college in Bangalore with 95% placement rate and strong industry connections.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `M.S. Ramaiah Institute of Technology (MSRIT), established in 1962, is one of the oldest and most prestigious private engineering colleges in Bangalore. The college is an autonomous institution affiliated to VTU.

MSRIT is known for its strong academic traditions, experienced faculty, and excellent placement record. With 60+ years of legacy, the institute has produced thousands of successful engineers and entrepreneurs.

Located in the heart of Bangalore, MSRIT offers excellent industry exposure and placement opportunities with top companies visiting the campus annually.`,

        highlights: [
            "₹58 LPA Highest Package (2025)",
            "95% Placement Rate",
            "1892 Offers from 358 Companies",
            "60+ Years of Excellence",
            "NIRF Ranked",
            "Autonomous Institution"
        ],

        infrastructure: [
            "Sprawling Campus",
            "Modern Labs and Workshops",
            "Central Library",
            "Sports Complex",
            "Auditoriums",
            "Separate Hostels",
            "Cafeteria"
        ],

        cutoffs: [
            {
                title: "KCET Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 1100 - 2076" },
                    { label: "ISE", value: "Rank 1500 - 2500" },
                    { label: "ECE", value: "Rank 3000 - 5000" },
                    { label: "Mechanical", value: "Rank 10000+" }
                ],
                description: "Affordable fee for government quota students"
            },
            {
                title: "COMEDK Cutoff 2025",
                table: [
                    { label: "CSE", value: "Rank 875 - 1341" },
                    { label: "ECE", value: "Rank 2000 - 3000" },
                    { label: "AI & DS", value: "Rank 1500 - 2500" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." },
            { name: "Information Science Engineering", duration: "4 Years", type: "B.E." },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.E." },
            { name: "Artificial Intelligence & Data Science", duration: "4 Years", type: "B.E." },
            { name: "Electrical & Electronics Engineering", duration: "4 Years", type: "B.E." },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Civil Engineering", duration: "4 Years", type: "B.E." },
            { name: "Biotechnology", duration: "4 Years", type: "B.E." },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" }
        ],

        feesDetails: [
            {
                title: "B.E. Fee Structure (KCET)",
                items: [
                    { label: "Annual Fee (Govt Quota)", value: "₹58,000 + ₹28,000 (Total ~₹1.5L)" },
                    { label: "SC/ST Students", value: "₹500/year (with scholarships)" }
                ],
                note: "Very affordable for government quota"
            },
            {
                title: "COMEDK / Management Quota",
                items: [
                    { label: "COMEDK Annual Fee", value: "₹2.4 Lakhs" },
                    { label: "Management Quota (CSE)", value: "₹12+ Lakhs/year" }
                ]
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Annual Hostel Fee", value: "₹1 - 1.45 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2025)", value: "₹58 LPA" },
                { label: "Average Package", value: "₹7.66 LPA" },
                { label: "Placement Rate", value: "95%" },
                { label: "Total Offers", value: "1892" },
                { label: "Companies", value: "358" }
            ],
            highlights: [
                "ISE, CSE, and MBA receive highest offers",
                "Core branches like ECE, EEE, MECH also strong",
                "JP Morgan, Morgan Stanley, HP, Oracle recruit",
                "Strong alumni network support"
            ],
            topRecruiters: [
                { category: "Finance & Consulting", companies: ["JP Morgan", "Morgan Stanley", "Deloitte"] },
                { category: "Tech Companies", companies: ["Hewlett Packard", "Oracle", "Amazon", "Microsoft"] },
                { category: "IT Services", companies: ["Infosys", "TCS", "Wipro", "Accenture"] }
            ]
        },

        admissions: {
            process: [
                "Apply for KCET or COMEDK exam",
                "Obtain valid rank",
                "Participate in KEA or COMEDK counseling",
                "Select MSRIT during choice filling",
                "Document verification and fee payment"
            ],
            eligibility: [
                "50% in 10+2 (PCM) for General",
                "45% for OBC, 40% for SC/ST",
                "Valid KCET or COMEDK score"
            ],
            documents: [
                "Class 10 & 12 Certificates",
                "KCET/COMEDK Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "KCET 2026 Exam", date: "April 2026" },
            { event: "COMEDK 2026 Exam", date: "May 2026" },
            { event: "KEA Counseling", date: "June - July 2026" },
            { event: "Classes Begin", date: "August 2026" }
        ],

        whyChoose: [
            "60+ Years of Excellence",
            "95% Placement Rate",
            "₹58 LPA Highest Package",
            "Affordable KCET Quota Fees",
            "NIRF Ranked",
            "Autonomous Curriculum",
            "Prime Location in Bangalore"
        ],

        scholarships: [
            {
                title: "Government Scholarships",
                items: [
                    { label: "SC/ST Category", value: "Full Tuition Waiver" },
                    { label: "EWS Category", value: "Up to 75% Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "MSRIT has a strong 60+ year alumni network with graduates in leadership positions worldwide.",
            companies: ["Google", "Microsoft", "Amazon", "JP Morgan", "Infosys"],
            achievements: [
                "Tech leaders at Fortune 500 companies",
                "Successful entrepreneurs",
                "Academic researchers"
            ]
        },

        contact: {
            phone: "+91-80-2360-0822",
            email: "admission@msrit.edu",
            website: "https://msrit.edu",
            address: "MSR Nagar, MSRIT Post, Bangalore - 560054, Karnataka"
        },

        faqs: [
            { question: "What is the fee for KCET students?", answer: "For KCET government quota, the total annual fee is around ₹1.5 Lakhs including tuition and amenities." },
            { question: "What is the placement record?", answer: "MSRIT has 95% placement rate with ₹58 LPA highest package and 1892 offers from 358 companies." },
            { question: "Is MSRIT better than RVCE?", answer: "Both are excellent colleges with similar fees for govt quota. MSRIT is slightly older (1962 vs 1963)." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "MSRIT Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Labs" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus View" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
    },
    {
        id: "15",
        slug: "pes-university-bangalore",
        name: "PES University",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.6,
        reviews: 2340,
        fees: "₹ 4.5L - 5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "MCA", "BBA", "LLB"],
        type: "Private",
        tags: ["Top Ranked", "Best Placements", "Research University"],
        logoUrl: "/footer-logo.jpg",
        established: "1972",
        description: "Top-ranked university focused on research, innovation, and entrepreneurship with excellent placements.",
        imageUrl: "https://images.unsplash.com/photo-1627556944963-71829e577265?q=80&w=1000&auto=format&fit=crop",

        about: `PES University, located in Bengaluru, is one of India's leading teaching and research universities. Established in 1972, the university is committed to providing "education for the real world" through industry-aligned curriculum and cutting-edge research facilities.

PES University was granted university status in 2013 and has quickly risen to become one of the top private universities in India. The university is known for its strong placement record, with companies like Amazon, Google, Microsoft, and Netflix recruiting from the campus.

With multiple campuses across Bengaluru, PES University offers a wide range of undergraduate, postgraduate, and doctoral programs in Engineering, Management, Law, Science, and Humanities.`,

        highlights: [
            "₹68 LPA Highest Package (2025)",
            "79% Placement Rate for UG Programs",
            "350+ Recruiters Visiting Campus",
            "1500+ Placement Offers in 2025",
            "PESSAT Discontinued - Admission via JEE/KCET",
            "Strong Research & Innovation Focus"
        ],

        infrastructure: [
            "Multiple Campuses across Bengaluru",
            "State-of-the-art Research Centers",
            "Innovation & Incubation Labs",
            "Modern Sports Facilities",
            "Digital Library with Global Database Access",
            "Separate Hostels with AC/Non-AC Options",
            "Cafeteria and Food Courts",
            "Wi-Fi Enabled Campus"
        ],

        cutoffs: [
            {
                title: "JEE Main / KCET Cutoff (Expected 2025)",
                table: [
                    { label: "CSE (PESU Merit)", value: "JEE 95+ Percentile" },
                    { label: "CSE (AI/ML)", value: "JEE 93+ Percentile" },
                    { label: "ECE", value: "JEE 88+ Percentile" },
                    { label: "Mechanical", value: "JEE 80+ Percentile" }
                ],
                description: "PESSAT discontinued. Admissions via JEE Main, KCET, and COMEDK scores."
            },
            {
                title: "Seat Distribution",
                table: [
                    { label: "KCET Quota", value: "40% of Seats" },
                    { label: "PESU Merit (JEE/KCET)", value: "45% of Seats" },
                    { label: "Management Quota", value: "15% of Seats" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics and Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical and Electronics", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Biotechnology", duration: "4 Years", type: "B.Tech" },
            { name: "Master of Business Administration", duration: "2 Years", type: "MBA" },
            { name: "Master of Computer Applications", duration: "2 Years", type: "MCA" },
            { name: "M.Tech in CSE", duration: "2 Years", type: "M.Tech" },
            { name: "Bachelor of Business Administration", duration: "3 Years", type: "BBA" },
            { name: "Integrated BBA LLB (Hons)", duration: "5 Years", type: "Law" },
            { name: "LLB", duration: "3 Years", type: "Law" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure (PESU Merit)",
                items: [
                    { label: "CSE Annual Fee", value: "₹5,00,000" },
                    { label: "CSE (AI/ML) Annual Fee", value: "₹5,00,000" },
                    { label: "ECE Annual Fee", value: "₹4,50,000" },
                    { label: "Mechanical/EEE Annual Fee", value: "₹4,00,000" },
                    { label: "Total B.Tech (4 Years)", value: "₹16.25 - 20 Lakhs" }
                ],
                note: "One-time admin fee of ₹10,000 additional"
            },
            {
                title: "Other Programs",
                items: [
                    { label: "MBA (Total)", value: "₹15 Lakhs" },
                    { label: "MCA (Total)", value: "₹6 Lakhs" },
                    { label: "BBA (Total)", value: "₹4.8 - 9 Lakhs" },
                    { label: "BBA LLB (Total)", value: "₹11 Lakhs" }
                ]
            },
            {
                title: "Hostel Fees (Per Year)",
                items: [
                    { label: "Single Occupancy", value: "₹40,000" },
                    { label: "Double Occupancy", value: "₹35,000" },
                    { label: "Triple Occupancy", value: "₹30,000" }
                ],
                note: "Mess charges additional"
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2025)", value: "₹68 LPA" },
                { label: "Median Package (UG)", value: "₹12.47 LPA" },
                { label: "Median Package (M.Tech)", value: "₹9.50 LPA" },
                { label: "Placement Rate (UG)", value: "79.4%" },
                { label: "Total Offers (2025)", value: "1500+" }
            ],
            highlights: [
                "1209 out of 1523 UG students placed in 2025",
                "350+ recruiters visited campus",
                "Strong placements in Tech, Finance, and Consulting",
                "Excellent internship conversion rates"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Amazon", "Google", "Microsoft", "Netflix", "Meta", "Apple"] },
                { category: "Product Companies", companies: ["Flipkart", "Mercedes Benz", "HP", "IBM", "Cisco"] },
                { category: "Consulting & Finance", companies: ["Deloitte", "eBay", "Mahindra Rise"] }
            ]
        },

        admissions: {
            process: [
                "Register on PES University official website",
                "Submit JEE Main / KCET / COMEDK scores",
                "Participate in online counseling (starts 4th week of May)",
                "Seat allotment based on merit and preferences",
                "Complete document verification",
                "Pay admission fee to confirm seat"
            ],
            eligibility: [
                "Minimum 50% in 10+2 (PCM) for General Category",
                "45% for General, 42% for OBC, 40% for SC/ST",
                "60% aggregate in Physics + Maths + Chemistry",
                "Valid JEE Main / KCET / COMEDK score"
            ],
            documents: [
                "Class 10 Mark Sheet & Certificate",
                "Class 12 Mark Sheet & Certificate",
                "JEE Main / KCET / COMEDK Score Card",
                "Category Certificate (if applicable)",
                "Passport-size Photographs",
                "Aadhaar Card"
            ]
        },

        keyDates: [
            { event: "JEE Main 2026 Registration", date: "November 2025" },
            { event: "KCET 2026 Registration", date: "February - March 2026" },
            { event: "JEE Main 2026 Exam", date: "January - April 2026" },
            { event: "KCET 2026 Exam", date: "April 2026" },
            { event: "PESU Counseling Begins", date: "4th Week of May 2026" },
            { event: "Classes Commence", date: "August 2026" }
        ],

        whyChoose: [
            "Top Private University in Karnataka",
            "₹68 LPA Highest Package with ₹12+ LPA Median",
            "1500+ Job Offers from 350+ Companies",
            "Strong Research & Innovation Culture",
            "Industry-Aligned Curriculum",
            "Located in Bengaluru - India's Silicon Valley",
            "Multiple Campuses with Modern Infrastructure",
            "Strong Alumni Network in FAANG Companies",
            "Excellent Internship Opportunities"
        ],

        scholarships: [
            {
                title: "Merit-Based Scholarships",
                items: [
                    { label: "JEE Top 1000 Rank", value: "Up to 100% Tuition Waiver" },
                    { label: "KCET Top 500 Rank", value: "75% Tuition Waiver" },
                    { label: "95%+ in Class 12", value: "25% Tuition Waiver" }
                ]
            },
            {
                title: "Need-Based & Special Scholarships",
                items: [
                    { label: "EWS Category", value: "Up to 50% Fee Waiver" },
                    { label: "Sports Scholarship", value: "25-50% Fee Waiver" },
                    { label: "Women in STEM", value: "Special Consideration" }
                ]
            }
        ],

        alumni: {
            description: "PES University has a strong alumni network of 60,000+ graduates working across the globe in top tech companies, research institutions, and successful startups.",
            companies: ["Google", "Amazon", "Microsoft", "Apple", "Meta", "Netflix", "Flipkart", "Goldman Sachs", "Mercedes Benz"],
            achievements: [
                "2000+ alumni in FAANG companies",
                "500+ startup founders",
                "Alumni at leadership positions in Fortune 500",
                "Strong presence in Silicon Valley"
            ]
        },

        compare: [
            { parameter: "Established", thisCollege: "1972", competitor1: "1963 (RVCE)", competitor2: "1946 (BMSCE)" },
            { parameter: "Highest Package", thisCollege: "₹68 LPA", competitor1: "₹67 LPA", competitor2: "₹50 LPA" },
            { parameter: "Median Package", thisCollege: "₹12.47 LPA", competitor1: "₹15 LPA", competitor2: "₹8 LPA" },
            { parameter: "Placement Rate", thisCollege: "79%", competitor1: "84%", competitor2: "75%" },
            { parameter: "Annual Fee (CSE)", thisCollege: "₹5 LPA", competitor1: "₹3.33 LPA", competitor2: "₹2.5 LPA" }
        ],

        contact: {
            phone: "+91-80-2672-1983",
            email: "admission@pes.edu",
            website: "https://pes.edu",
            address: "100 Feet Ring Road, BSK III Stage, Bengaluru - 560085, Karnataka",
            whatsapp: "+919845054321"
        },

        faqs: [
            { question: "Is PESSAT still required?", answer: "No, PESSAT has been discontinued from 2025. Admissions are now through JEE Main, KCET, and COMEDK scores." },
            { question: "What is the fee for B.Tech CSE?", answer: "B.Tech CSE annual fee is ₹5 Lakhs, totaling around ₹20 Lakhs for 4 years." },
            { question: "What is the placement record?", answer: "PES University has 79% placement rate with highest package of ₹68 LPA and median of ₹12.47 LPA." },
            { question: "How many seats are under KCET?", answer: "40% of seats are filled through KCET counseling, 45% through PESU Merit (JEE/KCET), and 15% management quota." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "PES University Main Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Modern Lecture Halls" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Research Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus Grounds" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "University Library" },
            { url: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1200", alt: "Placement Cell" }
        ]
    },
    {
        id: "16",
        slug: "acharya-institute-of-technology",
        name: "Acharya Institute of Technology",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.2,
        reviews: 1450,
        fees: "₹ 1.7L - 2.7L per year",
        courses: ["B.E.", "M.Tech", "MBA", "MCA"],
        type: "Private",
        tags: ["Industry Connect", "VTU Affiliated", "NAAC A+"],
        logoUrl: "/footer-logo.jpg",
        established: "2000",
        description: "VTU affiliated engineering college with 80% placement rate and strong industry connections.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Acharya Institute of Technology (AIT) is a VTU affiliated engineering college established in 2000, located in Bangalore. Part of Acharya Institutes, AIT is known for its quality education and strong industry connections.

The college has received NAAC A+ accreditation and NBA accreditation for multiple programs. With a focus on practical learning and industry exposure, AIT prepares students for successful careers in engineering and technology.

Located in Soladevanahalli with excellent infrastructure, AIT offers a conducive environment for learning with experienced faculty and modern labs.`,

        highlights: [
            "₹21 LPA Highest Package (2024)",
            "80% Placement Rate",
            "NAAC A+ Accredited",
            "NBA Accredited Programs",
            "VTU Affiliated",
            "Strong Industry Connect"
        ],

        cutoffs: [
            {
                title: "KCET Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 24593 - 24598" },
                    { label: "AI/ML", value: "Rank 26494" },
                    { label: "ECE", value: "Rank 35000 - 45000" }
                ],
                description: "Admission via KCET, COMEDK, or Management Quota"
            },
            {
                title: "COMEDK Cutoff 2025 (Expected)",
                table: [
                    { label: "CSE", value: "Rank 11299 - 21299" },
                    { label: "ECE", value: "Rank 18183 - 28183" },
                    { label: "AI/ML", value: "Rank 13743 - 23743" }
                ]
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.E." },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.E." },
            { name: "Electrical & Electronics", duration: "4 Years", type: "B.E." },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Civil Engineering", duration: "4 Years", type: "B.E." },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" },
            { name: "MCA", duration: "2 Years", type: "MCA" }
        ],

        feesDetails: [
            {
                title: "B.E. Fee Structure",
                items: [
                    { label: "CSE (4 Years)", value: "₹10.66 Lakhs" },
                    { label: "Other Branches (4 Years)", value: "₹7.04 Lakhs" },
                    { label: "Annual Fee", value: "₹1.7 - 2.7 Lakhs" }
                ]
            },
            {
                title: "PG Fees",
                items: [
                    { label: "MBA", value: "₹4 Lakhs" },
                    { label: "MCA", value: "₹1.28 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2024)", value: "₹21 LPA" },
                { label: "Average Package", value: "₹7 LPA" },
                { label: "Minimum Package", value: "₹3 LPA" },
                { label: "Placement Rate", value: "80%" }
            ],
            highlights: [
                "Strong IT sector placements",
                "Pre-placement training",
                "Industry-relevant curriculum"
            ],
            topRecruiters: [
                { category: "Tech Companies", companies: ["Amazon", "Microsoft", "Google", "IBM"] },
                { category: "IT Services", companies: ["Infosys", "HCL", "Wipro", "TCS", "Cognizant"] },
                { category: "Consulting", companies: ["Deloitte", "EY", "KPMG", "Accenture"] }
            ]
        },

        admissions: {
            process: [
                "Apply for KCET or COMEDK exam",
                "Obtain valid rank",
                "Participate in KEA or COMEDK counseling",
                "Select AIT during choice filling",
                "Document verification and fee payment"
            ],
            eligibility: [
                "45% in 10+2 (PCM)",
                "Valid KCET or COMEDK score"
            ],
            documents: [
                "Class 10 & 12 Certificates",
                "KCET/COMEDK Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "KCET 2026 Exam", date: "April 2026" },
            { event: "COMEDK 2026 Exam", date: "May 2026" },
            { event: "KEA Counseling", date: "June - July 2026" },
            { event: "Classes Begin", date: "August 2026" }
        ],

        whyChoose: [
            "₹21 LPA Highest Package",
            "80% Placement Rate",
            "NAAC A+ Accredited",
            "Strong Industry Connect",
            "VTU Affiliated",
            "Located in Bangalore"
        ],

        scholarships: [
            {
                title: "Merit Scholarships",
                items: [
                    { label: "KCET Top 5000", value: "Fee Concession Available" },
                    { label: "Academic Merit", value: "Based on Performance" }
                ]
            }
        ],

        alumni: {
            description: "AIT alumni work in leading IT and core companies globally.",
            companies: ["Google", "Amazon", "Microsoft", "Infosys", "TCS"],
            achievements: [
                "Software engineers at top MNCs",
                "Entrepreneurs and startup founders"
            ]
        },

        contact: {
            phone: "+91-80-2839-3145",
            email: "info@acharya.ac.in",
            website: "https://acharya.ac.in/ait",
            address: "Soladevanahalli, Bangalore - 560107, Karnataka"
        },

        faqs: [
            { question: "What is the fee for B.E. CSE?", answer: "Total B.E. CSE fee is approximately ₹10.66 Lakhs for 4 years." },
            { question: "What is the placement record?", answer: "AIT has 80% placement rate with ₹21 LPA highest and ₹7 LPA average package." },
            { question: "Is it NAAC accredited?", answer: "Yes, AIT is NAAC A+ accredited with NBA accreditation for multiple programs." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "AIT Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus View" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
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
        fees: "₹ 3.5L - 5L per year",
        courses: ["B.Tech", "M.Tech", "MBA", "Law", "Medical"],
        type: "Deemed",
        tags: ["Top Ranked", "NIRF Top 50", "Best Campus", "Institution of Eminence"],
        logoUrl: "/footer-logo.jpg",
        established: "1997",
        description: "NAAC A++ university with free entrance exam (KIITEE). 25 sq km campus with 100% placement assistance.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Kalinga Institute of Industrial Technology (KIIT) is a prestigious deemed university in Bhubaneswar, Odisha, established in 1997. Recognized as an Institution of Eminence by the Government of India, KIIT is known for its world-class infrastructure and completely residential campus.

KIIT follows the 'Art of Giving' philosophy and is home to KISS (Kalinga Institute of Social Sciences), providing free education to over 60,000 tribal students. The university has received NAAC A++ accreditation and QS 5-Star rating.

With a sprawling 25 sq km township campus, KIIT offers a unique educational experience with state-of-the-art facilities, diverse programs, and excellent placement opportunities.`,

        highlights: [
            "₹53 LPA Highest Package (2025)",
            "3800+ Job Offers from 451 Companies",
            "NAAC A++ Accredited",
            "NIRF Rank #16 University",
            "FREE KIITEE Exam",
            "25 sq km Township Campus"
        ],

        infrastructure: [
            "25 sq km Township Campus",
            "20+ Food Courts & 15 Sports Complexes",
            "KIMS Medical Hospital",
            "AC Smart Classrooms",
            "Multiple Libraries",
            "Hostels for 30,000+ Students",
            "International Standard Sports Facilities"
        ],

        cutoffs: [
            {
                title: "KIITEE Cutoff 2025",
                table: [
                    { label: "CSE", value: "Score 400+ / Top 1000" },
                    { label: "CSE (AI/ML)", value: "Percentile > 90" },
                    { label: "Other Branches", value: "Percentile > 50 (General)" }
                ],
                description: "KIITEE is completely FREE - no application or exam fee"
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (Data Science)", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" },
            { name: "Law", duration: "5 Years", type: "BA LLB" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure (2025)",
                items: [
                    { label: "CSE/AI/ML/Cyber Security", value: "₹18.51 Lakhs (4 Years)" },
                    { label: "Mech/Civil/Aerospace", value: "₹14.91 Lakhs (4 Years)" },
                    { label: "Annual Fee", value: "₹3.5 - 5 Lakhs" }
                ]
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Annual Hostel + Mess", value: "₹1.2 - 1.5 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2025)", value: "₹53 LPA (Yugabyte)" },
                { label: "Average Package (KSOT)", value: "₹8.50 LPA" },
                { label: "Total Offers (2025)", value: "3800+" },
                { label: "Companies Visited", value: "451" },
                { label: "Dream Offers (10+ LPA)", value: "1500+" }
            ],
            highlights: [
                "100% placement assistance guaranteed",
                "Zero Day placements with top MNCs",
                "Microsoft, Yugabyte offer 50+ LPA packages",
                "Strong alumni network support"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Microsoft", "Amazon", "Oracle", "TCS", "Wipro"] },
                { category: "MNCs", companies: ["HighRadius", "Accenture", "Cognizant", "Capgemini"] },
                { category: "Core Companies", companies: ["ArcelorMittal", "JSW", "Tata Power", "Adani Group"] }
            ]
        },

        admissions: {
            process: [
                "Register for KIITEE (FREE)",
                "Take KIITEE exam (online)",
                "Check merit list and cutoff",
                "Participate in counseling",
                "Document verification and fee payment"
            ],
            eligibility: [
                "50% in 10+2 (PCM) for General",
                "40% for SC/ST/OBC categories",
                "Valid KIITEE score"
            ],
            documents: [
                "Class 10 & 12 Certificates",
                "KIITEE Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "KIITEE 2026 Registration", date: "November 2025 - April 2026" },
            { event: "KIITEE 2026 Exam", date: "April - May 2026" },
            { event: "Counseling", date: "June - July 2026" },
            { event: "Classes Begin", date: "August 2026" }
        ],

        whyChoose: [
            "FREE KIITEE Exam (No Application Fee)",
            "NAAC A++ & NIRF Top 16",
            "₹53 LPA Highest Package",
            "25 sq km Township Campus",
            "100% Placement Assistance",
            "Institution of Eminence"
        ],

        scholarships: [
            {
                title: "Merit Scholarships",
                items: [
                    { label: "KIITEE Top 100", value: "Up to 100% Tuition Waiver" },
                    { label: "JEE Main 90+ Percentile", value: "50% Fee Waiver" }
                ]
            },
            {
                title: "Need-based Scholarships",
                items: [
                    { label: "EWS Category", value: "Up to 75% Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "KIIT alumni work at top MNCs and have founded successful startups.",
            companies: ["Microsoft", "Amazon", "Google", "Goldman Sachs", "McKinsey"],
            achievements: [
                "Tech leaders at Fortune 500 companies",
                "Successful entrepreneurs",
                "Civil servants and government officials"
            ]
        },

        contact: {
            phone: "+91-674-2725-555",
            email: "admission@kiit.ac.in",
            website: "https://kiit.ac.in",
            address: "Campus - 15, Patia, Bhubaneswar - 751024, Odisha"
        },

        faqs: [
            { question: "Is KIITEE exam free?", answer: "Yes, KIITEE application and exam are completely FREE of cost." },
            { question: "What is the fee for B.Tech CSE?", answer: "Total B.Tech CSE fee is approximately ₹18.51 Lakhs for 4 years." },
            { question: "What is the placement record?", answer: "KIIT has 3800+ offers from 451 companies with ₹53 LPA highest package in 2025." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "KIIT Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Academic Block" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Technology Center" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Sports Complex" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
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
        tags: ["Multi-disciplinary", "Research Focused", "NAAC A++"],
        logoUrl: "/footer-logo.jpg",
        established: "2007",
        description: "NAAC A++ deemed university known for its medical college and engineering programs (ITER).",
        imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1000&auto=format&fit=crop",

        about: `Siksha 'O' Anusandhan (SOA) University is a multi-disciplinary deemed university in Bhubaneswar, Odisha. Established in 2007, SOA is known for its Institute of Technical Education and Research (ITER) and IMS & SUM Hospital.

The university has received NAAC A++ accreditation and is ranked among the top universities in India by NIRF. SOA offers a wide range of programs in engineering, medicine, dental, law, and management.`,

        highlights: [
            "₹30 LPA Highest Package",
            "NAAC A++ Accredited",
            "NIRF Ranked University",
            "IMS & SUM Hospital",
            "Multi-disciplinary Programs"
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "MBBS", duration: "5.5 Years", type: "MBBS" },
            { name: "BDS", duration: "5 Years", type: "BDS" },
            { name: "MBA", duration: "2 Years", type: "MBA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Annual Fee", value: "₹3 - 4 Lakhs" },
                    { label: "Total B.Tech (4 Years)", value: "₹12 - 16 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹30 LPA" },
                { label: "Average Package", value: "₹5.5 LPA" },
                { label: "Placement Rate (ITER)", value: "85%" }
            ],
            topRecruiters: [
                { category: "IT Services", companies: ["TCS", "Infosys", "Wipro", "Cognizant"] },
                { category: "Core", companies: ["L&T", "Tata Steel", "Vedanta"] }
            ]
        },

        contact: {
            phone: "+91-674-2350-181",
            email: "admissions@soa.ac.in",
            website: "https://soa.ac.in",
            address: "Khandagiri Square, Bhubaneswar - 751030, Odisha"
        },

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "SOA Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "ITER Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Library" }
        ]
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
        tags: ["Growing Institution", "NAAC A"],
        logoUrl: "/footer-logo.jpg",
        established: "2008",
        description: "Private university focused on skill development and technical education with good placements.",
        imageUrl: "https://images.unsplash.com/photo-1627556944963-71829e577265?q=80&w=1000&auto=format&fit=crop",

        about: `C. V. Raman Global University (CGU) is a private university in Bhubaneswar, Odisha. Established in 2008, the university focuses on skill development and industry-oriented technical education.

The university offers programs in engineering, management, and science with a focus on practical learning and global career opportunities.`,

        highlights: [
            "₹18 LPA Highest Package",
            "NAAC A Accredited",
            "Skill Development Focus",
            "Industry Partnerships",
            "Modern Campus"
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Annual Fee", value: "₹2.5 - 3.5 Lakhs" },
                    { label: "Total B.Tech (4 Years)", value: "₹10 - 14 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹18 LPA" },
                { label: "Average Package", value: "₹4.5 LPA" },
                { label: "Placement Rate", value: "80%" }
            ],
            topRecruiters: [
                { category: "IT Services", companies: ["TCS", "Infosys", "Wipro", "Cognizant"] }
            ]
        },

        contact: {
            phone: "+91-674-2460-010",
            email: "admissions@cvrce.edu.in",
            website: "https://cgu-odisha.ac.in",
            address: "Bidya Nagar, Mahura, Bhubaneswar - 752054, Odisha"
        },

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "CGU Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Lab" }
        ]
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
        tags: ["IT Focused", "Good Placements", "Strict Academics"],
        logoUrl: "/footer-logo.jpg",
        established: "2001",
        description: "Known for rigorous academics and excellent IT placements with strong foundation in CS and electronics.",
        imageUrl: "https://images.unsplash.com/photo-1590579491624-9f8290132649?q=80&w=1000&auto=format&fit=crop",

        about: `Silicon University (formerly Silicon Institute of Technology) is a private university in Bhubaneswar, Odisha. Established in 2001, it is known for its strict academics and excellent placement record in the IT sector.

The university has two campuses in Bhubaneswar and Sambalpur, offering engineering and management programs with a focus on computer science and electronics.`,

        highlights: [
            "₹25 LPA Highest Package",
            "90%+ Placement Rate",
            "Strict Academic Culture",
            "IT Sector Focus",
            "Strong Alumni Network"
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "MCA", duration: "2 Years", type: "MCA" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Annual Fee", value: "₹2.5 - 3.5 Lakhs" },
                    { label: "Total B.Tech (4 Years)", value: "₹10 - 14 Lakhs" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package", value: "₹25 LPA" },
                { label: "Average Package", value: "₹5.5 LPA" },
                { label: "Placement Rate", value: "90%" }
            ],
            highlights: ["Strong IT sector placements", "Strict academic culture helps in placements"],
            topRecruiters: [
                { category: "IT Services", companies: ["TCS", "Infosys", "Wipro", "Cognizant", "IBM"] }
            ]
        },

        contact: {
            phone: "+91-674-2725-100",
            email: "admission@silicon.ac.in",
            website: "https://silicon.ac.in",
            address: "Patia, Chandrasekharpur, Bhubaneswar - 751024, Odisha"
        },

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "Silicon Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Main Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Lab" }
        ]
    },
    {
        id: "29",
        slug: "jadavpur-university-kolkata",
        name: "Jadavpur University",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.8,
        reviews: 4500,
        fees: "₹ 10K - 30K per year",
        courses: ["B.E.", "M.Tech", "MBA", "MCA", "Ph.D."],
        type: "Government",
        tags: ["Top Government College", "Best in WB", "Historic Legacy"],
        logoUrl: "/footer-logo.jpg",
        established: "1905",
        description: "India's top government engineering university with ₹1.4 Crore international package and extremely low fees.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Jadavpur University (JU) is a premier public state university located in Kolkata, West Bengal. Founded in 1905, it is one of India's finest institutions for engineering and science education.

JU's Faculty of Engineering and Technology is consistently ranked among the top engineering colleges in India. The university is known for its extremely affordable fees, world-class research, and exceptional placement record with packages reaching ₹1.4 Crore internationally.

With over 115 years of legacy, Jadavpur University has produced some of the finest engineers, scientists, and leaders in India and abroad.`,

        highlights: [
            "₹1.4 Crore International Package (2024)",
            "₹57 LPA Highest Domestic Package",
            "90% Overall Placement Rate",
            "Extremely Low Fees (₹10K-30K/year)",
            "NIRF Top 20 University",
            "115+ Years of Excellence"
        ],

        infrastructure: [
            "Historic Campus in South Kolkata",
            "Advanced Research Labs",
            "Central Library with 500,000+ Books",
            "Multiple Hostels",
            "Sports Complex",
            "Modern Auditoriums"
        ],

        cutoffs: [
            {
                title: "WBJEE Cutoff 2025 (General)",
                table: [
                    { label: "CSE", value: "Rank 89 - 238" },
                    { label: "IT", value: "Rank 197" },
                    { label: "Electronics & Telecom", value: "Rank 407" },
                    { label: "Electrical", value: "Rank 300 - 518" },
                    { label: "Mechanical", value: "Rank 761 - 836" }
                ],
                description: "One of the most competitive cutoffs in WBJEE"
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." },
            { name: "Information Technology", duration: "4 Years", type: "B.E." },
            { name: "Electronics & Telecom Engineering", duration: "4 Years", type: "B.E." },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Civil Engineering", duration: "4 Years", type: "B.E." },
            { name: "Chemical Engineering", duration: "4 Years", type: "B.E." },
            { name: "Construction Engineering", duration: "4 Years", type: "B.E." },
            { name: "Instrumentation Engineering", duration: "4 Years", type: "B.E." },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" }
        ],

        feesDetails: [
            {
                title: "B.E. Fee Structure",
                items: [
                    { label: "Annual Tuition Fee", value: "₹2,500" },
                    { label: "Total Annual (with other charges)", value: "₹20,000 - 32,000" },
                    { label: "Total B.E. (4 Years)", value: "₹40,000 - 1.2 Lakhs" }
                ],
                note: "One of the most affordable engineering educations in India"
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Monthly Hostel + Mess", value: "₹900 - 1,200" }
                ]
            }
        ],

        placements: {
            stats: [
                { label: "Highest International", value: "₹1.4 Crore" },
                { label: "Highest Domestic", value: "₹57 LPA" },
                { label: "Average Package", value: "₹11 LPA" },
                { label: "Placement Rate", value: "90%" },
                { label: "Students Placed (2024)", value: "830" }
            ],
            highlights: [
                "100% placement in Instrumentation, Mechanical, Construction",
                "97% placement in CSE and Civil",
                "96% placement in IT and Electrical",
                "Top recruiters from global tech giants"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Google", "Microsoft", "Amazon", "Adobe", "Oracle"] },
                { category: "Finance", companies: ["Deutsche Bank", "Wells Fargo", "Goldman Sachs"] },
                { category: "IT Services", companies: ["TCS", "Infosys", "Wipro", "Cognizant"] }
            ]
        },

        admissions: {
            process: [
                "Register for WBJEE exam",
                "Score within top 1000 rank for CSE/IT",
                "Participate in WBJEE counseling",
                "Document verification and enrollment"
            ],
            eligibility: [
                "75% in 10+2 (PCM) recommended",
                "West Bengal domicile preference",
                "Valid WBJEE rank"
            ],
            documents: [
                "Class 10 & 12 Certificates",
                "WBJEE Score Card",
                "Domicile Certificate"
            ]
        },

        keyDates: [
            { event: "WBJEE 2026 Registration", date: "December 2025 - February 2026" },
            { event: "WBJEE 2026 Exam", date: "April 2026" },
            { event: "Results", date: "June 2026" },
            { event: "Counseling", date: "July 2026" }
        ],

        whyChoose: [
            "₹1.4 Crore International Package",
            "Extremely Affordable (₹40K for 4 years)",
            "NIRF Top 20 University",
            "115+ Years of Legacy",
            "90% Placement Rate",
            "World-class Research Facilities",
            "Best Government College in WB"
        ],

        scholarships: [
            {
                title: "Government Scholarships",
                items: [
                    { label: "SC/ST/OBC", value: "Full Fee Waiver" },
                    { label: "Merit (75%+ in academics)", value: "Tuition Fee Relaxation" }
                ]
            }
        ],

        alumni: {
            description: "JU has a prestigious alumni network including tech leaders, entrepreneurs, and acclaimed researchers worldwide.",
            companies: ["Google", "Microsoft", "Amazon", "Adobe", "Goldman Sachs"],
            achievements: [
                "Nobel Prize nominees",
                "Founders of major tech companies",
                "Leaders in academia and research"
            ]
        },

        contact: {
            phone: "+91-33-2414-6666",
            email: "registrar@jadavpuruniversity.in",
            website: "https://jadavpuruniversity.in",
            address: "188, Raja S.C. Mallick Road, Kolkata - 700032, West Bengal"
        },

        faqs: [
            { question: "What is the fee at JU?", answer: "JU has extremely low fees - only ₹40K - 1.2 Lakhs for the entire 4-year B.E. program." },
            { question: "What is the placement record?", answer: "JU has 90% placement with ₹1.4 Crore international package and ₹57 LPA domestic highest." },
            { question: "What WBJEE rank is needed for CSE?", answer: "For CSE, you typically need WBJEE rank within 89-238 for general category." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "JU Main Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Historic Building" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Lab" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Campus View" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
    },
    {
        id: "30",
        slug: "nit-silchar",
        name: "National Institute of Technology Silchar",
        location: "Silchar, Assam",
        state: "Assam",
        rating: 4.5,
        reviews: 2100,
        fees: "₹ 62K - 1.25L per semester",
        courses: ["B.Tech", "M.Tech", "MBA", "Ph.D."],
        type: "Government",
        tags: ["NIT", "Government", "JEE Main"],
        logoUrl: "/footer-logo.jpg",
        established: "1967",
        description: "One of the premier NITs in India with excellent placements and affordable fees through JEE Main.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `National Institute of Technology Silchar (NITS) is one of the 31 NITs in India, established in 1967. Located in Silchar, Assam, it is an Institute of National Importance under the Ministry of Education.

NIT Silchar offers excellent technical education at affordable fees with outstanding placement opportunities. The institute is known for its strong academics, research facilities, and consistent placement record with top companies.

With a beautiful campus in the North-East, NIT Silchar provides a unique educational experience with exposure to diverse cultures and excellent industry connections.`,

        highlights: [
            "₹60 LPA Highest Package (2025)",
            "100% CSE/ECE Placement",
            "Institute of National Importance",
            "JEE Main Based Admission",
            "Affordable NIT Fees",
            "Strong Research Focus"
        ],

        cutoffs: [
            {
                title: "JEE Main Cutoff 2025 (General - Other State)",
                table: [
                    { label: "CSE", value: "Rank 5040 - 12665" },
                    { label: "ECE", value: "Rank 11795 - 18068" },
                    { label: "Electrical", value: "Rank 13839 - 24355" },
                    { label: "Mechanical", value: "Rank 34130" },
                    { label: "Civil", value: "Rank 48062" }
                ],
                description: "Home state quota has relaxed cutoffs"
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" },
            { name: "MBA", duration: "2 Years", type: "MBA" },
            { name: "Ph.D.", duration: "3-5 Years", type: "Ph.D." }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure",
                items: [
                    { label: "Tuition Fee (General)", value: "₹62,500/semester" },
                    { label: "Tuition Fee (Income 1L-5L)", value: "₹20,833/semester" },
                    { label: "Total B.Tech (4 Years)", value: "₹5 - 5.44 Lakhs" }
                ],
                note: "Fee waivers available based on income"
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2025)", value: "₹60 LPA" },
                { label: "Average Package", value: "₹12.25 LPA" },
                { label: "CSE Average", value: "₹12 LPA" },
                { label: "CSE Placement Rate", value: "100%" },
                { label: "ECE Placement Rate", value: "95-100%" }
            ],
            highlights: [
                "100% placement for CSE consistently",
                "95-100% for ECE",
                "Strong IT sector placements",
                "Good core engineering opportunities"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Google", "Microsoft", "Amazon", "Cisco"] },
                { category: "Finance", companies: ["Deutsche Bank", "Optum", "ZS Associates"] },
                { category: "IT Services", companies: ["Accenture", "Deloitte", "Infosys", "TCS"] }
            ]
        },

        admissions: {
            process: [
                "Clear JEE Main exam",
                "Register for JoSAA counseling",
                "Fill choices including NIT Silchar",
                "Accept seat allotment",
                "Document verification and enrollment"
            ],
            eligibility: [
                "75% in Class 12 (or top 20 percentile)",
                "Valid JEE Main score",
                "No age limit for admission"
            ],
            documents: [
                "Class 10 & 12 Certificates",
                "JEE Main Score Card",
                "Category Certificate (if applicable)"
            ]
        },

        keyDates: [
            { event: "JEE Main 2026 Session 1", date: "January 2026" },
            { event: "JEE Main 2026 Session 2", date: "April 2026" },
            { event: "JoSAA Counseling", date: "June - July 2026" },
            { event: "Classes Begin", date: "August 2026" }
        ],

        whyChoose: [
            "₹60 LPA Highest Package",
            "100% CSE Placement",
            "Affordable NIT Fees",
            "Institute of National Importance",
            "Strong Alumni Network",
            "Beautiful North-East Campus"
        ],

        scholarships: [
            {
                title: "Government Scholarships",
                items: [
                    { label: "SC/ST/PwD", value: "Full Tuition Waiver" },
                    { label: "Income < 5L", value: "Partial Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "NIT Silchar alumni are placed in top companies globally in tech and core sectors.",
            companies: ["Google", "Microsoft", "Amazon", "ISRO", "IITs"],
            achievements: [
                "Tech leaders at multinational companies",
                "Scientists at ISRO and DRDO",
                "Faculty at IITs and NITs"
            ]
        },

        contact: {
            phone: "+91-3842-242274",
            email: "admission@nits.ac.in",
            website: "https://nits.ac.in",
            address: "NIT Silchar, Cachar - 788010, Assam"
        },

        faqs: [
            { question: "What is the total B.Tech fee?", answer: "Total B.Tech fee at NIT Silchar is approximately ₹5 - 5.44 Lakhs for 4 years." },
            { question: "What JEE Main rank is needed?", answer: "For CSE, you need JEE Main rank within 5000-12000 for other state general category." },
            { question: "What is the placement record?", answer: "NIT Silchar has 100% CSE placement with ₹60 LPA highest and ₹12.25 LPA average package." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "NIT Silchar Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Academic Block" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Computer Center" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Hostel" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Library" }
        ]
    },
    {
        id: "31",
        slug: "mit-manipal",
        name: "Manipal Institute of Technology",
        location: "Manipal, Karnataka",
        state: "Karnataka",
        rating: 4.7,
        reviews: 5200,
        fees: "₹ 3.8L - 6L per year",
        courses: ["B.Tech", "M.Tech", "Ph.D."],
        type: "Private",
        tags: ["Top Private", "MET Exam", "Best Placements"],
        logoUrl: "/footer-logo.jpg",
        established: "1957",
        description: "India's premier private engineering institute with ₹69.25 LPA highest package and world-class facilities.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",

        about: `Manipal Institute of Technology (MIT Manipal) is one of India's most prestigious private engineering colleges, established in 1957. Part of Manipal Academy of Higher Education (MAHE), a deemed university.

MIT Manipal is known for its world-class infrastructure, international collaborations, and exceptional placement record. The institute offers a unique learning experience with state-of-the-art labs, research facilities, and a vibrant campus life.

With over 65 years of legacy, MIT Manipal has produced some of India's finest engineers and entrepreneurs, making it a top choice for engineering aspirants.`,

        highlights: [
            "₹69.25 LPA Highest Package (2025)",
            "80% Placement Rate",
            "300+ Recruiting Companies",
            "50+ Fortune 500 Recruiters",
            "65+ Years of Excellence",
            "International Collaborations"
        ],

        cutoffs: [
            {
                title: "MET 2025 Cutoff",
                table: [
                    { label: "CSE", value: "Rank 3479 - 5129" },
                    { label: "CS & Fintech", value: "Rank 3786 - 5521" },
                    { label: "ECE", value: "Rank 6000 - 12986" },
                    { label: "Mechanical", value: "Rank 17037 - 22824" }
                ],
                description: "Admission through MET (Manipal Entrance Test)"
            }
        ],

        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (AI & Machine Learning)", duration: "4 Years", type: "B.Tech" },
            { name: "CSE (Data Science)", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical & Electronics", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Biotechnology", duration: "4 Years", type: "B.Tech" },
            { name: "M.Tech (Various)", duration: "2 Years", type: "M.Tech" }
        ],

        feesDetails: [
            {
                title: "B.Tech Fee Structure (2026-27)",
                items: [
                    { label: "CSE & Specializations", value: "₹15.17 Lakhs (Total)" },
                    { label: "Other Branches", value: "₹12.61 Lakhs (Total)" },
                    { label: "Annual Fee Range", value: "₹3.2 - 6L per year" }
                ]
            },
            {
                title: "Hostel Fees",
                items: [
                    { label: "Non-AC Double/Triple", value: "₹1.1 Lakhs/year" },
                    { label: "AC Single", value: "₹2 Lakhs/year" }
                ],
                note: "Includes ₹50,000 mess charges"
            }
        ],

        placements: {
            stats: [
                { label: "Highest Package (2025)", value: "₹69.25 LPA" },
                { label: "Average Package", value: "₹12.31 LPA" },
                { label: "Median Package", value: "₹10.05 LPA" },
                { label: "Placement Rate", value: "80.10%" },
                { label: "Companies", value: "300+" }
            ],
            highlights: [
                "50+ Fortune 500 companies recruit",
                "Strong tech and consulting placements",
                "Internship opportunities at top firms",
                "International placement offers"
            ],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Amazon", "Adobe", "Oracle", "Intel", "Samsung"] },
                { category: "Consulting", companies: ["KPMG", "Accenture", "Deloitte"] },
                { category: "Manufacturing", companies: ["Bosch", "Cipla", "Tata Motors"] }
            ]
        },

        admissions: {
            process: [
                "Register for MET exam",
                "Take MET exam (online/offline)",
                "Participate in counseling based on MET rank",
                "Document verification and fee payment"
            ],
            eligibility: [
                "50% in 10+2 (PCM/PCB)",
                "Valid MET score",
                "Age limit: Born after July 1, 2004 for 2026"
            ],
            documents: [
                "Class 10 & 12 Certificates",
                "MET Score Card",
                "Passport size photos"
            ]
        },

        keyDates: [
            { event: "MET 2026 Registration", date: "October 2025 - April 2026" },
            { event: "MET 2026 Exam", date: "April - May 2026" },
            { event: "Counseling", date: "June - July 2026" },
            { event: "Classes Begin", date: "August 2026" }
        ],

        whyChoose: [
            "₹69.25 LPA Highest Package",
            "65+ Years of Excellence",
            "300+ Recruiting Companies",
            "World-class Infrastructure",
            "International Collaborations",
            "Beautiful Coastal Campus"
        ],

        scholarships: [
            {
                title: "Merit Scholarships",
                items: [
                    { label: "MET Top 100", value: "Up to 100% Fee Waiver" },
                    { label: "MET Top 500", value: "Up to 50% Fee Waiver" }
                ]
            }
        ],

        alumni: {
            description: "MIT Manipal alumni are leaders in tech, healthcare, and business globally.",
            companies: ["Google", "Microsoft", "Amazon", "Apple", "Goldman Sachs"],
            achievements: [
                "CEOs and founders of major companies",
                "Tech leaders at FAANG companies",
                "Renowned researchers and academics"
            ]
        },

        contact: {
            phone: "+91-820-2923433",
            email: "admissions@manipal.edu",
            website: "https://manipal.edu/mit",
            address: "Manipal, Udupi - 576104, Karnataka"
        },

        faqs: [
            { question: "What is the fee for B.Tech CSE?", answer: "Total B.Tech CSE fee at MIT Manipal is approximately ₹15.17 Lakhs for 4 years (2026-27)." },
            { question: "What MET rank is needed for CSE?", answer: "For CSE, you typically need MET rank within 3479-5129." },
            { question: "What is the placement record?", answer: "MIT Manipal has 80% placement with ₹69.25 LPA highest and ₹12.31 LPA average package." }
        ],

        galleryImages: [
            { url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200", alt: "MIT Manipal Campus" },
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", alt: "Academic Block" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", alt: "Innovation Center" },
            { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200", alt: "Library" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", alt: "Sports Complex" }
        ]
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

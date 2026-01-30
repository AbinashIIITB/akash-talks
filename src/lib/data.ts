
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
    whyChooseAkashTalks?: string[];
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
    // Expanded Fields
    introduction: string; // Brief intro for the exam
    overview: string;
    aboutExam: string; // Detailed about the exam and conducting body
    importantDates: { event: string; date: string }[];
    applicationProcess: { step: string; description: string }[];
    documents: string[];
    eligibility: string[];
    examPattern: {
        mode: string;
        duration: string;
        totalMarks: string;
        markingScheme: string;
        subjects: string[];
    };
    counselling: string;
    faqs: { question: string; answer: string }[];
}


// --- Colleges Data (Preserved 28 items) ---
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
        imageUrl: "/images/colleges/iem-salt-lake.jpg",
        about: "Institute of Engineering & Management (IEM) is a premier private engineering college in Kolkata, established in 1989. It is one of the oldest and most reputed private engineering colleges in West Bengal, known for its strict academic discipline, excellent placement records, and strong alumni network. The institute is affiliated to MAKAUT (Maulana Abul Kalam Azad University of Technology) and approved by AICTE.",
        highlights: ["NAAC 'A' Grade Accredited", "NIRF Ranked Institution", "Oldest Private Engineering College in West Bengal (Est. 1989)", "Located in Salt Lake IT Hub", "1054+ Students Placed in 2024", "₹32 LPA Highest Package"],
        infrastructure: ["3 Campuses located in the IT Hub of Salt Lake", "State-of-the-art Innovation & IoT Labs", "AI/ML Research Center", "Digital Library with IEEE/ACM/Springer Access", "Smart Classrooms with Projectors", "Separate Boys and Girls Hostels", "Cafeteria and Food Court", "Sports Facilities including Cricket, Football, Basketball"],
        cutoffs: [
            { title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 3287 - 6398" }, { label: "IT", value: "Rank 4000 - 7500" }, { label: "ECE", value: "Rank 5500 - 9000" }, { label: "EE", value: "Rank 8000 - 15000" }], description: "Primary admission through WBJEE counseling." },
            { title: "JEE Main Cutoff 2024", table: [{ label: "CSE", value: "Percentile 85-92" }, { label: "IT", value: "Percentile 80-88" }], description: "Limited seats available through JEE Main." }
        ],
        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Information Technology", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Computer Science and Engineering", duration: "2 Years", type: "M.Tech" },
            { name: "Master of Business Administration", duration: "2 Years", type: "MBA" },
            { name: "Bachelor of Computer Applications", duration: "3 Years", type: "BCA" },
            { name: "Master of Computer Applications", duration: "2 Years", type: "MCA" }
        ],
        feesDetails: [
            { title: "B.Tech Fee Structure (2024-25)", items: [{ label: "1st Year Fees", value: "₹2.1 - 2.5 Lakhs" }, { label: "Total B.Tech (4 Years)", value: "₹8.4 - 8.65 Lakhs" }], note: "Excludes hostel and mess charges. Fees vary by branch." },
            { title: "Hostel Fees", items: [{ label: "Annual Hostel Fee", value: "₹70,000 - 90,000" }, { label: "Mess Charges (Annual)", value: "₹48,000 - 55,000" }], note: "Separate hostels for boys and girls." }
        ],
        placements: {
            stats: [{ label: "Highest Package", value: "₹32 LPA" }, { label: "Average Package", value: "₹6.5 LPA" }, { label: "Median Package", value: "₹5.2 LPA" }, { label: "Placement Rate", value: "95%+" }],
            highlights: ["Consistent placement record for over 35 years", "Multiple offers for top performers", "Pre-placement offers from internships", "Strong alumni referral network"],
            topRecruiters: [
                { category: "Tech Giants", companies: ["Amazon", "Microsoft", "Google", "Flipkart"] },
                { category: "IT Services", companies: ["TCS", "Cognizant", "Wipro", "Infosys", "Capgemini", "Accenture"] },
                { category: "Product Companies", companies: ["Zoho", "Freshworks", "Thoughtworks", "Mindtree"] }
            ]
        },
        admissions: {
            process: [
                "Appear for WBJEE / JEE Main entrance exam",
                "Check cutoff ranks and eligibility on official website",
                "Register for WBJEE Counseling or apply through JEE Main quota",
                "Fill college preference order during counseling",
                "Attend document verification upon seat allotment",
                "Pay admission fees and confirm seat"
            ],
            eligibility: [
                "Passed 10+2 with Physics, Chemistry and Mathematics",
                "Minimum 60% aggregate marks in PCM (55% for reserved categories)",
                "Valid WBJEE or JEE Main score",
                "Age requirement: 17 years as of December 31st of admission year"
            ],
            documents: [
                "10th and 12th Marksheets and Certificates",
                "WBJEE/JEE Main Scorecard and Rank Card",
                "Domicile Certificate (for WB candidates)",
                "Category Certificate (if applicable)",
                "Transfer Certificate from previous institution",
                "Passport size photographs (8-10 copies)",
                "Aadhaar Card"
            ]
        },
        keyDates: [
            { event: "WBJEE Registration", date: "December 2025" },
            { event: "WBJEE Exam", date: "April 2026" },
            { event: "WBJEE Result", date: "June 2026" },
            { event: "Counseling Starts", date: "July 2026" },
            { event: "Classes Begin", date: "August 2026" }
        ],
        whyChoose: [
            "35+ years of academic excellence and industry reputation",
            "Located in the heart of Salt Lake IT Hub with proximity to major IT companies",
            "Strong placement record with 95%+ placement rate consistently",
            "NAAC 'A' Grade accreditation ensuring quality education",
            "Modern infrastructure with AI/ML labs, IoT center, and digital library",
            "Active alumni network spanning across global tech companies",
            "Industry partnerships for internships and live projects"
        ],
        scholarships: [
            { title: "Merit Scholarships", items: [{ label: "WBJEE Rank < 1000", value: "50% Tuition Fee Waiver" }, { label: "WBJEE Rank < 3000", value: "25% Tuition Fee Waiver" }] },
            { title: "TFW Scheme", items: [{ label: "Tuition Fee Waiver", value: "Full Tuition Fee Waived" }] }
        ],
        alumni: {
            description: "IEM boasts a strong alumni network of 20,000+ graduates working in leading companies worldwide. Alumni actively participate in campus recruitment, mentorship, and guest lectures.",
            companies: ["Google", "Amazon", "Microsoft", "Goldman Sachs", "JP Morgan", "TCS", "Infosys", "Wipro"],
            achievements: ["Multiple IEM alumni in leadership positions at Fortune 500 companies", "Several successful startup founders from IEM", "Active IEM Alumni Association with annual meets"]
        },
        compare: [
            { parameter: "NIRF Rank Band", thisCollege: "101-150", competitor1: "76-100 (Heritage)", competitor2: "151-200 (TINT)" },
            { parameter: "Highest Package", thisCollege: "₹32 LPA", competitor1: "₹28 LPA", competitor2: "₹20 LPA" },
            { parameter: "Average Package", thisCollege: "₹6.5 LPA", competitor1: "₹5.8 LPA", competitor2: "₹5.0 LPA" },
            { parameter: "Total Fees (4 Years)", thisCollege: "₹8.5 Lakhs", competitor1: "₹9 Lakhs", competitor2: "₹7 Lakhs" }
        ],
        faqs: [
            { question: "Is IEM Kolkata a good college?", answer: "Yes, IEM is one of the top private engineering colleges in West Bengal with NAAC 'A' grade accreditation, strong placements (95%+), and a legacy of 35+ years." },
            { question: "What is the fee structure of IEM?", answer: "The total B.Tech fee at IEM is approximately ₹8.4 - 8.65 Lakhs for 4 years, excluding hostel and mess charges." },
            { question: "What is the WBJEE cutoff for IEM CSE?", answer: "The WBJEE cutoff for CSE at IEM typically ranges from Rank 3287 to 6398 depending on the year and category." },
            { question: "Does IEM have hostels?", answer: "Yes, IEM has separate hostels for boys and girls with modern facilities. Hostel fees are around ₹70,000 - 90,000 per year." },
            { question: "What companies visit IEM for placements?", answer: "Top recruiters include Amazon, Microsoft, TCS, Cognizant, Wipro, Infosys, Capgemini, Accenture, Zoho, and many more." }
        ],
        whyChooseAkashTalks: [
            "Direct admission assistance without any hidden charges",
            "Expert guidance on WBJEE counseling and seat allocation",
            "Transparent fee structure information and scholarship guidance",
            "Personalized career counseling to choose the right branch",
            "End-to-end support from application to admission confirmation",
            "Access to exclusive student reviews and insider tips",
            "Post-admission support for hostel and documentation"
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
        tags: ["Industry Connect", "NAAC Accredited", "Affordable"],
        logoUrl: "/footer-logo.jpg",
        established: "2001",
        description: "Leading private engineering college in Salt Lake with strong industry connections and excellent placement record.",
        imageUrl: "/images/colleges/techno-india-salt-lake.png",
        about: "Techno India Salt Lake is one of the flagship institutes of the Techno India Group, established in 2001. Located in the heart of Salt Lake City, it offers a wide range of undergraduate and postgraduate programs in engineering, management, and computer applications. The college is known for its affordable fee structure and strong industry connections.",
        highlights: ["NAAC Accredited", "Part of Techno India Group", "Affordable Fee Structure", "Strong Industry Connections", "Modern Campus in Salt Lake"],
        infrastructure: ["Modern Campus with IT Labs", "Well-equipped Libraries", "Seminar Halls", "Sports Facilities", "Cafeteria"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 8000 - 15000" }, { label: "IT", value: "Rank 10000 - 18000" }, { label: "ECE", value: "Rank 12000 - 20000" }], description: "Admission through WBJEE counseling." }],
        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Information Technology", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Master of Business Administration", duration: "2 Years", type: "MBA" }
        ],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Annual Fee", value: "₹1 - 1.3 Lakhs" }, { label: "Total B.Tech (4 Years)", value: "₹4 - 5.2 Lakhs" }], note: "One of the most affordable options in Kolkata" }],
        placements: {
            stats: [{ label: "Highest Package", value: "₹18 LPA" }, { label: "Average Package", value: "₹4.5 LPA" }, { label: "Placement Rate", value: "85%+" }],
            highlights: ["Strong IT sector placements", "Regular campus drives"],
            topRecruiters: [{ category: "IT Companies", companies: ["TCS", "Wipro", "Infosys", "Cognizant", "Capgemini"] }]
        },
        admissions: {
            process: ["Appear for WBJEE", "Participate in counseling", "Document verification", "Fee payment"],
            eligibility: ["10+2 with PCM", "Valid WBJEE score"],
            documents: ["10th & 12th Marksheets", "WBJEE Rank Card", "Category Certificate"]
        },
        keyDates: [{ event: "WBJEE Counseling", date: "July 2026" }, { event: "Classes Begin", date: "August 2026" }],
        whyChoose: ["Affordable fee structure", "Salt Lake location with IT hub proximity", "Part of established Techno India Group", "Good placement support"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top Rankers", value: "Up to 50% fee waiver" }] }],
        faqs: [
            { question: "Is Techno India Salt Lake good for CSE?", answer: "Yes, it offers quality CSE education at an affordable price with decent placements in IT companies." },
            { question: "What is the fee at Techno India?", answer: "The annual fee is around ₹1-1.3 Lakhs, making it one of the most affordable options." }
        ],
        whyChooseAkashTalks: ["Expert counseling for WBJEE admissions", "Transparent fee guidance", "Scholarship assistance", "Complete admission support", "Post-admission hostel help"]
    },
    {
        id: "wb-3",
        slug: "haldia-institute-of-technology",
        name: "Haldia Institute of Technology",
        location: "Haldia, West Bengal",
        state: "West Bengal",
        rating: 4.0,
        reviews: 1200,
        fees: "₹ 4L - 5L Total",
        courses: ["B.Tech", "MBA"],
        type: "Private",
        tags: ["Oldest Private College", "Core Placements", "Large Campus"],
        established: "1996",
        description: "First private engineering college in West Bengal with massive campus and strong core engineering placements.",
        about: "Haldia Institute of Technology (HIT) was established in 1996 and is the first self-financing engineering college in West Bengal. Located in the industrial hub of Haldia, it offers excellent exposure to core industries like petrochemicals, refineries, and manufacturing. The institute has a sprawling 60-acre campus.",
        highlights: ["First Private Engineering College in WB (1996)", "60-acre Campus", "Strong Core Engineering Focus", "Industrial Location in Haldia", "Good for Mechanical, Chemical, Civil Engineering"],
        infrastructure: ["60-acre Campus", "Central Library", "Hostels for Boys and Girls", "Workshops and Labs", "Sports Ground"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 15000 - 25000" }, { label: "Mechanical", value: "Rank 20000 - 35000" }], description: "Lower cutoffs due to location." }],
        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Chemical Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" }
        ],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹4 - 5 Lakhs" }], note: "Very affordable for quality education" }],
        placements: {
            stats: [{ label: "Highest Package", value: "₹12 LPA" }, { label: "Average Package", value: "₹4 LPA" }, { label: "Placement Rate", value: "75%+" }],
            highlights: ["Strong core sector placements", "Good for petrochemical and manufacturing jobs"],
            topRecruiters: [{ category: "Core Companies", companies: ["IOCL", "HPCL", "L&T", "Tata Steel", "Jindal"] }]
        },
        admissions: { process: ["WBJEE counseling", "Document verification", "Fee payment"], eligibility: ["10+2 with PCM", "Valid WBJEE score"], documents: ["Marksheets", "WBJEE Rank Card"] },
        keyDates: [{ event: "Counseling", date: "July 2026" }],
        whyChoose: ["Affordable fees", "Industrial location", "Strong core placements", "Large campus"],
        faqs: [{ question: "Is HIT good for core branches?", answer: "Yes, HIT is excellent for Mechanical, Chemical, and Civil Engineering with good industrial exposure." }],
        whyChooseAkashTalks: ["Guidance for core branch selection", "Industrial placement insights", "Hostel and location guidance", "Complete admission assistance"]
    },
    {
        id: "wb-4",
        slug: "rcc-institute-of-information-technology",
        name: "RCC Institute of Information Technology",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 3.9,
        reviews: 800,
        fees: "₹ 3.5L - 4.5L Total",
        courses: ["B.Tech", "MCA"],
        type: "Government",
        tags: ["Semi-Government", "Affordable", "IT Focused"],
        established: "2000",
        description: "A semi-government engineering college in Kolkata known for specialized IT education and affordable fees.",
        about: "RCC Institute of Information Technology (RCCIIT) is a semi-government engineering college established in 2000. It is approved by AICTE and affiliated to MAKAUT. The institute focuses on Information Technology and Computer Science education.",
        highlights: ["Semi-Government Status", "Affordable Fees", "IT and CSE Focus", "Good Faculty"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 12000 - 20000" }, { label: "IT", value: "Rank 15000 - 25000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹3.5 - 4.5 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹15 LPA" }, { label: "Average Package", value: "₹4 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Wipro", "Infosys"] }] },
        admissions: { process: ["WBJEE counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "WBJEE Rank Card"] },
        faqs: [{ question: "Is RCCIIT a government college?", answer: "It's a semi-government college with government-aided status, making it affordable." }],
        whyChooseAkashTalks: ["Affordable college guidance", "IT career counseling", "Admission support"]
    },
    {
        id: "wb-5",
        slug: "jis-college-of-engineering",
        name: "JIS College of Engineering",
        location: "Kalyani, West Bengal",
        state: "West Bengal",
        rating: 4.1,
        reviews: 1500,
        fees: "₹ 4L - 5.5L Total",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Autonomous", "Research Focus", "Good Infrastructure"],
        established: "2000",
        description: "Autonomous institute with excellent research facilities, diverse courses, and growing reputation.",
        about: "JIS College of Engineering (JISCE) is an autonomous engineering college located in Kalyani, West Bengal. It is part of the JIS Group and has gained Autonomous status, allowing it to design its own curriculum. The college is known for its research focus and modern infrastructure.",
        highlights: ["Autonomous Status", "Research Focus", "Good Infrastructure", "Part of JIS Group", "NAAC Accredited"],
        infrastructure: ["Modern Labs", "Central Library", "Hostels", "Sports Complex", "Auditorium"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 8000 - 15000" }, { label: "ECE", value: "Rank 12000 - 20000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹4 - 5.5 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹20 LPA" }, { label: "Average Package", value: "₹5 LPA" }, { label: "Placement Rate", value: "85%+" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Wipro", "Cognizant", "Capgemini"] }] },
        admissions: { process: ["WBJEE counseling", "Document verification"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "WBJEE Rank Card"] },
        whyChoose: ["Autonomous curriculum", "Research opportunities", "Good placements", "Modern campus"],
        faqs: [{ question: "Is JISCE autonomous?", answer: "Yes, JISCE has autonomous status which allows it to design industry-relevant curriculum." }],
        whyChooseAkashTalks: ["Autonomous college guidance", "Research program information", "Complete admission support"]
    },
    {
        id: "wb-6",
        slug: "heritage-institute-of-technology",
        name: "Heritage Institute of Technology",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 4.4,
        reviews: 1600,
        fees: "₹ 4L - 5L Total",
        courses: ["B.Tech", "M.Tech"],
        type: "Private",
        tags: ["Autonomous", "Top Ranked", "Excellent Placements"],
        established: "2001",
        description: "One of the top autonomous engineering colleges in Kolkata with excellent infrastructure and placements.",
        about: "Heritage Institute of Technology (HITK) is a premier autonomous engineering college in Kolkata, established in 2001. It is consistently ranked among the top private engineering colleges in West Bengal. The institute has achieved autonomous status and is known for its excellent placements and modern infrastructure.",
        highlights: ["Autonomous Status", "NIRF Ranked", "Excellent Placements", "Modern Infrastructure", "Strong Alumni Network"],
        infrastructure: ["State-of-the-art Labs", "Digital Library", "Smart Classrooms", "Hostels", "Sports Facilities", "Auditorium"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 4000 - 8000" }, { label: "IT", value: "Rank 6000 - 10000" }, { label: "ECE", value: "Rank 8000 - 12000" }], description: "One of the most sought-after colleges." }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electrical Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹8 - 9 Lakhs" }], note: "Slightly higher but worth the quality" }],
        placements: { stats: [{ label: "Highest Package", value: "₹28 LPA" }, { label: "Average Package", value: "₹5.8 LPA" }, { label: "Placement Rate", value: "92%+" }], highlights: ["Top placements in West Bengal private colleges"], topRecruiters: [{ category: "Tech", companies: ["Amazon", "Microsoft", "TCS", "Cognizant", "Wipro", "Capgemini"] }] },
        admissions: { process: ["WBJEE counseling", "JEE Main quota available", "Document verification"], eligibility: ["10+2 with PCM", "Valid WBJEE/JEE Main score"], documents: ["Marksheets", "Rank Card", "Certificates"] },
        keyDates: [{ event: "WBJEE Counseling", date: "July 2026" }],
        whyChoose: ["Top ranked in West Bengal", "Autonomous curriculum", "Excellent placements", "Modern infrastructure", "Strong alumni network"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top WBJEE Rankers", value: "Up to 50% fee waiver" }] }],
        alumni: { description: "Strong alumni network with graduates in top companies.", companies: ["Google", "Amazon", "Microsoft", "Goldman Sachs"] },
        compare: [{ parameter: "Average Package", thisCollege: "₹5.8 LPA", competitor1: "₹6.5 LPA (IEM)" }],
        faqs: [{ question: "Is Heritage better than IEM?", answer: "Both are top colleges. Heritage has slightly better NIRF rank, while IEM has older legacy and higher packages in some years." }],
        whyChooseAkashTalks: ["Top college admission guidance", "WBJEE counseling support", "Scholarship information", "Complete documentation help"]
    },
    {
        id: "wb-7",
        slug: "techno-international-new-town",
        name: "Techno International New Town (TINT)",
        location: "New Town, Kolkata",
        state: "West Bengal",
        rating: 4.0,
        reviews: 900,
        fees: "₹ 4L - 6L Total",
        courses: ["B.Tech", "BCA"],
        type: "Private",
        tags: ["Modern Campus", "Tech Fests", "Innovation Hub"],
        established: "2010",
        description: "Modern engineering college in New Town with focus on innovation, startups, and excellent infrastructure.",
        about: "Techno International New Town (TINT) is a modern engineering college located in Kolkata's rapidly developing New Town area. Part of the Techno India Group, TINT is known for its contemporary campus, focus on innovation, and vibrant tech fest culture.",
        highlights: ["Modern Campus in New Town", "Innovation & Startup Focus", "Active Tech Fests", "Good Infrastructure", "Growing Placement Record"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 12000 - 22000" }, { label: "IT", value: "Rank 15000 - 25000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹5 - 6 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹20 LPA" }, { label: "Average Package", value: "₹5 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Wipro", "Cognizant"] }] },
        admissions: { process: ["WBJEE counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "WBJEE Rank Card"] },
        whyChoose: ["Modern New Town location", "Innovation focus", "Good infrastructure", "Growing reputation"],
        faqs: [{ question: "Is TINT a good college?", answer: "TINT is a good option for students looking for modern infrastructure and innovation-focused education in New Town area." }],
        whyChooseAkashTalks: ["New Town college guidance", "Innovation program information", "Admission assistance"]
    },
    {
        id: "wb-8",
        slug: "netaji-subhash-engineering-college",
        name: "Netaji Subhash Engineering College",
        location: "Garia, Kolkata",
        state: "West Bengal",
        rating: 3.8,
        reviews: 1100,
        fees: "₹ 4L - 5L Total",
        courses: ["B.Tech", "MCA"],
        type: "Private",
        tags: ["Legacy Institute", "South Kolkata"],
        established: "1998",
        description: "Established institute in South Kolkata with consistent academic performance and decent placements.",
        about: "Netaji Subhash Engineering College (NSEC) is one of the established private engineering colleges in South Kolkata, founded in 1998. Located in Garia, it offers undergraduate and postgraduate programs in engineering and computer applications.",
        highlights: ["Established in 1998", "South Kolkata Location", "Consistent Academic Record", "Easy Metro Connectivity"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 15000 - 28000" }, { label: "IT", value: "Rank 18000 - 32000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹4 - 5 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹12 LPA" }, { label: "Average Package", value: "₹3.8 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Wipro", "Infosys"] }] },
        admissions: { process: ["WBJEE counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "WBJEE Rank Card"] },
        faqs: [{ question: "Where is NSEC located?", answer: "NSEC is located in Garia, South Kolkata, with easy metro connectivity." }],
        whyChooseAkashTalks: ["South Kolkata college guidance", "Affordable option counseling", "Admission support"]
    },
    {
        id: "wb-9",
        slug: "meghnad-saha-institute-of-technology",
        name: "Meghnad Saha Institute of Technology (MSIT)",
        location: "Kolkata, West Bengal",
        state: "West Bengal",
        rating: 3.9,
        reviews: 850,
        fees: "₹ 3.8L - 4.8L Total",
        courses: ["B.Tech", "MBA"],
        type: "Private",
        tags: ["Techno India Group", "Good Faculty"],
        established: "2001",
        description: "Reputed college under Techno India Group offering quality technical education with experienced faculty.",
        about: "Meghnad Saha Institute of Technology (MSIT) is a private engineering college under the Techno India Group, named after the renowned physicist Meghnad Saha. Established in 2001, it is known for its quality faculty and consistent academic performance.",
        highlights: ["Part of Techno India Group", "Named after Physicist Meghnad Saha", "Good Faculty", "Decent Placements"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 12000 - 22000" }, { label: "ECE", value: "Rank 15000 - 28000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹3.8 - 4.8 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹15 LPA" }, { label: "Average Package", value: "₹4.2 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Wipro", "Cognizant", "Infosys"] }] },
        admissions: { process: ["WBJEE counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "WBJEE Rank Card"] },
        faqs: [{ question: "Is MSIT part of Techno India Group?", answer: "Yes, MSIT is one of the colleges under the Techno India Group." }],
        whyChooseAkashTalks: ["Techno India Group guidance", "Fee comparison support", "Admission assistance"]
    },
    {
        id: "wb-10",
        slug: "academy-of-technology",
        name: "Academy of Technology (AOT)",
        location: "Hooghly, West Bengal",
        state: "West Bengal",
        rating: 4.1,
        reviews: 1300,
        fees: "₹ 3.5L - 4.5L Total",
        courses: ["B.Tech", "MCA"],
        type: "Private",
        tags: ["Strict Discipline", "Placement Focus", "Good Results"],
        established: "2004",
        description: "Known for high placement rates specifically in major IT service companies with strict academic discipline.",
        about: "Academy of Technology (AOT) is a private engineering college located in Hooghly district, West Bengal. Established in 2004, AOT is known for its strict academic discipline and focus on placements, particularly in IT service companies. The college has consistently achieved high placement rates.",
        highlights: ["High Placement Rate", "Strict Academic Discipline", "IT Service Company Focus", "Affordable Fees", "Residential Campus"],
        infrastructure: ["Residential Campus", "Labs", "Library", "Hostels", "Sports Ground"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 10000 - 18000" }, { label: "IT", value: "Rank 12000 - 22000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹3.5 - 4.5 Lakhs" }], note: "Affordable with good ROI" }],
        placements: { stats: [{ label: "Highest Package", value: "₹18 LPA" }, { label: "Average Package", value: "₹4.8 LPA" }, { label: "Placement Rate", value: "90%+" }], highlights: ["Strong TCS, Wipro, Cognizant placements"], topRecruiters: [{ category: "IT Services", companies: ["TCS", "Wipro", "Cognizant", "Infosys", "Capgemini", "Tech Mahindra"] }] },
        admissions: { process: ["WBJEE counseling", "Document verification"], eligibility: ["10+2 with PCM", "Valid WBJEE score"], documents: ["Marksheets", "WBJEE Rank Card", "Certificates"] },
        keyDates: [{ event: "WBJEE Counseling", date: "July 2026" }],
        whyChoose: ["High placement rate (90%+)", "Strict discipline ensures focus", "Affordable fees", "Good for IT service placements", "Residential campus"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top Performers", value: "Fee concession available" }] }],
        faqs: [
            { question: "Is AOT good for placements?", answer: "Yes, AOT has a 90%+ placement rate with strong recruitments from TCS, Wipro, Cognizant, and other IT service companies." },
            { question: "Is AOT strict?", answer: "Yes, AOT is known for strict academic discipline which helps students focus on studies and placements." }
        ],
        whyChooseAkashTalks: ["Placement-focused college guidance", "Discipline and culture insights", "Fee and scholarship support", "Complete admission assistance", "Hostel guidance for residential campus"]
    },

    // --- Karnataka ---
    {
        id: "ka-1",
        slug: "rv-college-of-engineering",
        name: "RV College of Engineering Bengaluru",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.8,
        reviews: 3000,
        fees: "₹ 10L+ Total",
        courses: ["B.E.", "M.Tech"],
        type: "Private",
        tags: ["Top Rated", "COMEDK", "Autonomous"],
        established: "1963",
        description: "One of the most prestigious private engineering colleges in India with exceptional placements and legacy.",
        about: "RV College of Engineering (RVCE) is one of the earliest self-financing engineering colleges in India, established in 1963. Located in Bengaluru, it is affiliated to VTU and has Autonomous status. RVCE is consistently ranked among the top engineering colleges in Karnataka and India.",
        highlights: ["Established in 1963", "Autonomous Status", "NAAC A++ Grade", "Top 50 in NIRF", "Excellent Placements", "Strong Alumni Network"],
        infrastructure: ["Modern Labs", "Central Library", "Innovation Center", "Sports Complex", "Hostels", "Auditorium"],
        cutoffs: [{ title: "COMEDK Cutoff 2024", table: [{ label: "CSE", value: "Rank < 500" }, { label: "ECE", value: "Rank 500 - 1500" }, { label: "Mechanical", value: "Rank 2000 - 4000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." }, { name: "Electronics & Communication", duration: "4 Years", type: "B.E." }, { name: "Mechanical Engineering", duration: "4 Years", type: "B.E." }],
        feesDetails: [{ title: "B.E. Fee Structure", items: [{ label: "Total B.E. (4 Years)", value: "₹10 - 12 Lakhs" }], note: "COMEDK and Management quota fees differ" }],
        placements: { stats: [{ label: "Highest Package", value: "₹62 LPA" }, { label: "Average Package", value: "₹12 LPA" }, { label: "Placement Rate", value: "95%+" }], highlights: ["Top placements in Karnataka", "Multiple international offers"], topRecruiters: [{ category: "Tech Giants", companies: ["Google", "Microsoft", "Amazon", "Oracle", "Adobe", "Goldman Sachs"] }] },
        admissions: { process: ["Appear for COMEDK/KCET", "Participate in counseling", "Document verification"], eligibility: ["10+2 with PCM", "COMEDK/KCET score"], documents: ["Marksheets", "Rank Card", "Domicile"] },
        keyDates: [{ event: "COMEDK Exam", date: "May 2026" }, { event: "Counseling", date: "June-July 2026" }],
        whyChoose: ["Top 50 in India", "Exceptional placements", "Legacy of 60+ years", "Strong industry connections", "Bangalore IT hub location"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top COMEDK Rankers", value: "Up to 100% fee waiver" }] }],
        alumni: { description: "Strong global alumni network.", companies: ["Google", "Microsoft", "Amazon", "Facebook", "Apple"] },
        faqs: [{ question: "Is RVCE the best college in Karnataka?", answer: "RVCE is among the top 3 private engineering colleges in Karnataka with excellent placements." }],
        whyChooseAkashTalks: ["Top college admission guidance", "COMEDK counseling support", "Management quota assistance", "Complete documentation help", "Hostel and accommodation guidance"]
    },
    {
        id: "ka-2",
        slug: "dayananda-sagar-university",
        name: "Dayananda Sagar University",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.3,
        reviews: 1200,
        fees: "₹ 8L+ Total",
        courses: ["B.Tech", "MBA"],
        type: "Private",
        tags: ["University", "Innovation", "Modern Campus"],
        established: "2014",
        description: "Leading university with focus on innovation, entrepreneurship, and industry-ready education.",
        about: "Dayananda Sagar University (DSU) is a private university established in 2014 in Bengaluru. It is part of the Dayananda Sagar Institutions group which has over 5 decades of educational excellence. The university focuses on innovation, entrepreneurship, and practical skill development.",
        highlights: ["Private University Status", "Modern Infrastructure", "Innovation Focus", "Industry Partnerships", "Incubation Center"],
        cutoffs: [{ title: "DSU Entrance 2024", table: [{ label: "CSE", value: "Merit-based admission" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Artificial Intelligence & ML", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹8 - 10 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹25 LPA" }, { label: "Average Package", value: "₹6 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Infosys", "Wipro", "Cognizant"] }] },
        admissions: { process: ["Apply online", "Merit-based selection", "Counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "ID Proof"] },
        whyChoose: ["University status", "Modern campus", "Innovation focus", "Bangalore location"],
        faqs: [{ question: "Is DSU a good university?", answer: "Yes, DSU is a reputed private university with modern facilities and decent placements." }],
        whyChooseAkashTalks: ["Direct admission assistance", "Fee negotiation support", "Complete counseling", "Hostel guidance"]
    },
    {
        id: "ka-3",
        slug: "bms-college-of-engineering",
        name: "B.M.S. College of Engineering",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.7,
        reviews: 2500,
        fees: "₹ 9L+ Total",
        courses: ["B.E.", "M.Tech"],
        type: "Private",
        tags: ["Historic", "Autonomous", "First Private Engineering College in India"],
        established: "1946",
        description: "India's first private engineering college with rich legacy of 75+ years and exceptional academic standards.",
        about: "B.M.S. College of Engineering (BMSCE) was established in 1946 and holds the distinction of being the first private engineering college in India. Located in the heart of Bengaluru, BMSCE has Autonomous status and is known for its academic excellence, strong alumni network, and consistent placements.",
        highlights: ["First Private Engineering College in India (1946)", "Autonomous Status", "NAAC A++ Grade", "75+ Years of Excellence", "Strong Alumni Network"],
        infrastructure: ["Heritage Campus", "Modern Labs", "Central Library", "Sports Complex", "Hostels"],
        cutoffs: [{ title: "COMEDK Cutoff 2024", table: [{ label: "CSE", value: "Rank < 800" }, { label: "ECE", value: "Rank 800 - 2000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." }, { name: "Electronics & Communication", duration: "4 Years", type: "B.E." }],
        feesDetails: [{ title: "B.E. Fee Structure", items: [{ label: "Total B.E. (4 Years)", value: "₹9 - 11 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹50 LPA" }, { label: "Average Package", value: "₹10 LPA" }, { label: "Placement Rate", value: "92%+" }], topRecruiters: [{ category: "Tech", companies: ["Google", "Microsoft", "Amazon", "Samsung", "Qualcomm"] }] },
        admissions: { process: ["COMEDK/KCET", "Counseling", "Document verification"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "Rank Card"] },
        whyChoose: ["Historic institution", "Strong legacy", "Excellent placements", "Central Bangalore location", "Strong alumni"],
        alumni: { companies: ["Google", "Microsoft", "Amazon", "Apple", "Intel"] },
        faqs: [{ question: "Is BMSCE the oldest private engineering college?", answer: "Yes, BMSCE established in 1946 is India's first private engineering college." }],
        whyChooseAkashTalks: ["Legacy institution guidance", "COMEDK support", "Management quota help", "Complete assistance"]
    },
    {
        id: "ka-4",
        slug: "ramaiah-university-of-applied-sciences",
        name: "Ramaiah University of Applied Sciences",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.5,
        reviews: 1800,
        fees: "₹ 8L+ Total",
        courses: ["B.Tech", "M.Des"],
        type: "Private",
        tags: ["Applied Sciences", "Research", "Industry Focused"],
        established: "2013",
        description: "Multidisciplinary university focused on applied research and industry-relevant education.",
        about: "Ramaiah University of Applied Sciences (RUAS) is a private university established in 2013. Part of the Gokula Education Foundation, it focuses on applied sciences, research, and industry-oriented education. The university offers unique interdisciplinary programs.",
        highlights: ["University Status", "Applied Sciences Focus", "Industry Partnerships", "Research Oriented", "Modern Infrastructure"],
        cutoffs: [{ title: "RUAS Entrance 2024", table: [{ label: "CSE", value: "Merit-based" }] }],
        coursesDetails: [{ name: "Computer Science", duration: "4 Years", type: "B.Tech" }, { name: "Product Design", duration: "4 Years", type: "B.Des" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹8 - 10 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹24 LPA" }, { label: "Average Package", value: "₹7 LPA" }], topRecruiters: [{ category: "Tech", companies: ["Bosch", "Infosys", "TCS", "Wipro"] }] },
        admissions: { process: ["Apply online", "Entrance test", "Interview"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "ID Proof"] },
        whyChoose: ["Applied research focus", "Industry projects", "Modern labs", "Bangalore location"],
        faqs: [{ question: "Is RUAS good for engineering?", answer: "Yes, RUAS offers quality engineering education with focus on applied sciences and research." }],
        whyChooseAkashTalks: ["Direct admission support", "Program guidance", "Complete counseling"]
    },
    {
        id: "ka-5",
        slug: "pes-university",
        name: "PES University",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.6,
        reviews: 2200,
        fees: "₹ 12L+ Total",
        courses: ["B.Tech", "BBA"],
        type: "Private",
        tags: ["Entrance Exam", "PESSAT", "Top Placements"],
        established: "2013",
        description: "Top-tier university known for rigorous academics, PESSAT entrance exam, and exceptional placements.",
        about: "PES University is one of the top private universities in India, established in 2013. It conducts its own entrance exam PESSAT and is known for rigorous academics, excellent placements, and modern infrastructure. PES has campuses in Electronic City and Hanumanthanagar.",
        highlights: ["Top 50 in NIRF", "PESSAT Entrance Exam", "Excellent Placements", "Modern Campuses", "Strong Industry Ties"],
        infrastructure: ["Multiple Campuses", "State-of-the-art Labs", "Innovation Center", "Sports Complex", "Hostels"],
        cutoffs: [{ title: "PESSAT Cutoff 2024", table: [{ label: "CSE", value: "Top 5000 Rank" }, { label: "ECE", value: "Top 8000 Rank" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" }, { name: "Data Science", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹12 - 15 Lakhs" }], note: "Premium fees but excellent ROI" }],
        placements: { stats: [{ label: "Highest Package", value: "₹55 LPA" }, { label: "Average Package", value: "₹14 LPA" }, { label: "Placement Rate", value: "97%+" }], highlights: ["Among highest placements in South India"], topRecruiters: [{ category: "Tech Giants", companies: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Oracle", "Adobe"] }] },
        admissions: { process: ["Register for PESSAT", "Take PESSAT exam", "Counseling based on rank"], eligibility: ["10+2 with PCM", "PESSAT score"], documents: ["Marksheets", "PESSAT Rank Card"] },
        keyDates: [{ event: "PESSAT Exam", date: "April-May 2026" }, { event: "Counseling", date: "June 2026" }],
        whyChoose: ["Top placements in South India", "PESSAT ensures quality intake", "Modern infrastructure", "Strong alumni network", "Bangalore tech hub location"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top PESSAT Rankers", value: "Up to 100% fee waiver" }] }],
        alumni: { companies: ["Google", "Microsoft", "Amazon", "Facebook", "Uber"] },
        faqs: [
            { question: "Is PES University good?", answer: "Yes, PES is among the top 5 private universities in South India with exceptional placements." },
            { question: "What is PESSAT?", answer: "PESSAT is PES University's own entrance exam conducted for admissions." }
        ],
        whyChooseAkashTalks: ["PESSAT preparation guidance", "Admission counseling", "Scholarship assistance", "Complete documentation", "Hostel guidance"]
    },
    {
        id: "ka-6",
        slug: "acharya-institute-of-technology",
        name: "Acharya Institute of Technology",
        location: "Bengaluru, Karnataka",
        state: "Karnataka",
        rating: 4.0,
        reviews: 1500,
        fees: "₹ 6L+ Total",
        courses: ["B.E.", "MBA"],
        type: "Private",
        tags: ["Large Campus", "International", "Affordable"],
        established: "2000",
        description: "Known for its massive 100+ acre campus, international student community, and affordable quality education.",
        about: "Acharya Institute of Technology (AIT) is part of the Acharya Group of Institutions, established in 2000. Located on a sprawling 100+ acre campus on the outskirts of Bengaluru, AIT is known for its green campus, affordable fees, and diverse student community including international students.",
        highlights: ["100+ Acre Green Campus", "International Students", "NAAC A+ Grade", "Affordable Fees", "Sports Facilities"],
        infrastructure: ["Massive Green Campus", "Modern Labs", "Olympic-size Pool", "Sports Complex", "Hostels", "Auditorium"],
        cutoffs: [{ title: "COMEDK Cutoff 2024", table: [{ label: "CSE", value: "Rank 5000 - 12000" }, { label: "ECE", value: "Rank 8000 - 15000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.E." }, { name: "Electronics & Communication", duration: "4 Years", type: "B.E." }],
        feesDetails: [{ title: "B.E. Fee Structure", items: [{ label: "Total B.E. (4 Years)", value: "₹6 - 8 Lakhs" }], note: "Affordable for quality education" }],
        placements: { stats: [{ label: "Highest Package", value: "₹20 LPA" }, { label: "Average Package", value: "₹5.5 LPA" }, { label: "Placement Rate", value: "85%+" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Capgemini"] }] },
        admissions: { process: ["COMEDK/KCET", "Direct admission", "Counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "Rank Card"] },
        whyChoose: ["Affordable fees", "Massive green campus", "Good infrastructure", "International exposure"],
        faqs: [{ question: "Is Acharya Institute good?", answer: "Yes, AIT is a good option with affordable fees, large campus, and decent placements." }],
        whyChooseAkashTalks: ["Affordable college guidance", "COMEDK support", "Direct admission help", "Complete assistance"]
    },

    // --- Maharashtra ---
    {
        id: "mh-1",
        slug: "dr-d-y-patil-vidyapeeth",
        name: "Dr. D. Y. Patil Vidyapeeth",
        location: "Pune, Maharashtra",
        state: "Maharashtra",
        rating: 4.2,
        reviews: 1400,
        fees: "₹ 8L+ Total",
        courses: ["B.Tech", "MBBS"],
        type: "Deemed",
        tags: ["Deemed University", "Medical & Engg", "Pune"],
        established: "2003",
        description: "Renowned deemed university offering quality education in engineering and medical sciences in Pune.",
        about: "Dr. D. Y. Patil Vidyapeeth is a Deemed-to-be-University established in 2003 in Pune. It offers programs in Engineering, Medical Sciences, Management, and allied health sciences. The university is NAAC accredited and focuses on research and innovation.",
        highlights: ["Deemed University", "NAAC Accredited", "Medical & Engineering Programs", "Research Focus", "Pune Location"],
        cutoffs: [{ title: "Entrance 2024", table: [{ label: "B.Tech", value: "Merit + Entrance" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹8 - 10 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹18 LPA" }, { label: "Average Package", value: "₹5.5 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Infosys", "Wipro", "Cognizant"] }] },
        admissions: { process: ["Apply online", "Entrance exam", "Counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "ID Proof"] },
        whyChoose: ["Deemed university status", "Multiple programs", "Pune location", "Research opportunities"],
        faqs: [{ question: "Is DY Patil Vidyapeeth good?", answer: "Yes, it's a reputed deemed university with quality education in engineering and medical sciences." }],
        whyChooseAkashTalks: ["Deemed university guidance", "Multiple program counseling", "Complete admission support"]
    },
    {
        id: "mh-2",
        slug: "maharashtra-institute-of-technology",
        name: "Maharashtra Institute Of Technology",
        location: "Pune, Maharashtra",
        state: "Maharashtra",
        rating: 4.4,
        reviews: 2000,
        fees: "₹ 10L+ Total",
        courses: ["B.Tech"],
        type: "Private",
        tags: ["MIT Pune", "Legacy", "Top Ranked"],
        established: "1983",
        description: "Pioneer in private engineering education in Maharashtra with 40+ years of excellence.",
        about: "Maharashtra Institute of Technology (MIT), Pune was established in 1983 by MAEER's MIT Group. It is one of the oldest and most prestigious private engineering colleges in Maharashtra. The college is affiliated to SPPU and offers undergraduate and postgraduate programs in engineering.",
        highlights: ["Established in 1983", "40+ Years of Excellence", "NAAC A+ Grade", "Strong Industry Connections", "Legacy Institution"],
        infrastructure: ["Modern Labs", "Central Library", "Sports Complex", "Hostels", "Auditorium"],
        cutoffs: [{ title: "MHT-CET Cutoff 2024", table: [{ label: "CSE", value: "Top 10000 Rank" }, { label: "ECE", value: "Top 15000 Rank" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹10 - 12 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹30 LPA" }, { label: "Average Package", value: "₹7 LPA" }, { label: "Placement Rate", value: "90%+" }], topRecruiters: [{ category: "Tech", companies: ["Microsoft", "Amazon", "TCS", "Infosys", "Wipro"] }] },
        admissions: { process: ["MHT-CET/JEE Main", "CAP Counseling", "Document verification"], eligibility: ["10+2 with PCM", "Valid MHT-CET/JEE score"], documents: ["Marksheets", "Rank Card", "Domicile"] },
        keyDates: [{ event: "MHT-CET Exam", date: "May 2026" }, { event: "Counseling", date: "July 2026" }],
        whyChoose: ["Legacy of 40+ years", "Top ranked in Maharashtra", "Strong placements", "Pune IT hub location"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top Rankers", value: "Up to 50% fee waiver" }] }],
        faqs: [{ question: "Is MIT Pune good?", answer: "Yes, MIT Pune is one of the top private engineering colleges in Maharashtra with excellent legacy and placements." }],
        whyChooseAkashTalks: ["MHT-CET counseling", "Legacy institution guidance", "Complete admission support", "Hostel assistance"]
    },
    {
        id: "mh-3",
        slug: "symbiosis-international",
        name: "Symbiosis International (Deemed University)",
        location: "Pune, Maharashtra",
        state: "Maharashtra",
        rating: 4.5,
        reviews: 1800,
        fees: "₹ 12L+ Total",
        courses: ["B.Tech", "MBA"],
        type: "Deemed",
        tags: ["SIT", "International", "SET Entrance"],
        established: "2002",
        description: "Part of the prestigious Symbiosis family with world-class facilities and international exposure.",
        about: "Symbiosis International (Deemed University) is one of the most prestigious private universities in India. Symbiosis Institute of Technology (SIT) offers engineering programs with focus on innovation, international exposure, and industry readiness. Admission is through SET (Symbiosis Entrance Test).",
        highlights: ["Prestigious Symbiosis Brand", "International Collaborations", "SET Entrance Exam", "Modern Infrastructure", "Industry Partnerships"],
        infrastructure: ["World-class Campus", "Innovation Labs", "International Hostels", "Sports Complex", "Cafeteria"],
        cutoffs: [{ title: "SET Cutoff 2024", table: [{ label: "CSE", value: "Top 5000 Rank" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Telecommunication", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹12 - 15 Lakhs" }], note: "Premium fees with excellent ROI" }],
        placements: { stats: [{ label: "Highest Package", value: "₹35 LPA" }, { label: "Average Package", value: "₹9 LPA" }, { label: "Placement Rate", value: "95%+" }], topRecruiters: [{ category: "Tech", companies: ["Microsoft", "Amazon", "Goldman Sachs", "TCS", "Infosys"] }] },
        admissions: { process: ["Register for SET", "Take SET exam", "PI (Personal Interview)", "Counseling"], eligibility: ["10+2 with PCM", "SET score"], documents: ["Marksheets", "SET Score Card"] },
        keyDates: [{ event: "SET Exam", date: "May 2026" }, { event: "PI & Counseling", date: "June 2026" }],
        whyChoose: ["Symbiosis brand value", "International exposure", "Excellent placements", "Modern campus", "Strong alumni"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top SET Rankers", value: "Up to 100% scholarship" }] }],
        faqs: [{ question: "Is Symbiosis good for engineering?", answer: "Yes, SIT Pune offers quality engineering education with strong placements and international exposure." }],
        whyChooseAkashTalks: ["SET preparation guidance", "Symbiosis admission support", "Scholarship assistance", "Complete counseling"]
    },
    {
        id: "mh-4",
        slug: "d-y-patil-university",
        name: "D.Y. Patil University",
        location: "Navi Mumbai, Maharashtra",
        state: "Maharashtra",
        rating: 4.1,
        reviews: 1100,
        fees: "₹ 9L+ Total",
        courses: ["B.Tech"],
        type: "Private",
        tags: ["Navi Mumbai", "Sports", "Modern Campus"],
        established: "2007",
        description: "Known for its modern stadium, sports infrastructure, and quality academics in Navi Mumbai.",
        about: "D.Y. Patil University, Navi Mumbai is a private university established in 2007. Famous for hosting IPL matches at its stadium, the university also offers quality engineering education with modern infrastructure and good placement support.",
        highlights: ["Famous DY Patil Stadium", "Modern Campus", "Sports Excellence", "Navi Mumbai Location", "Good Infrastructure"],
        cutoffs: [{ title: "University Entrance 2024", table: [{ label: "CSE", value: "Merit-based" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Mechanical Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹9 - 11 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹18 LPA" }, { label: "Average Package", value: "₹5 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Infosys", "Wipro", "L&T"] }] },
        admissions: { process: ["Apply online", "Merit-based selection"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "ID Proof"] },
        whyChoose: ["Modern campus", "Sports facilities", "Navi Mumbai location", "Good infrastructure"],
        faqs: [{ question: "Is DY Patil Navi Mumbai good?", answer: "Yes, it's a good option with modern infrastructure and decent placements." }],
        whyChooseAkashTalks: ["Direct admission guidance", "Campus and program insights", "Complete support"]
    },

    // --- Tamil Nadu ---
    {
        id: "tn-1",
        slug: "vellore-institute-of-technology",
        name: "Vellore Institute of Technology (VIT)",
        location: "Vellore, Tamil Nadu",
        state: "Tamil Nadu",
        rating: 4.8,
        reviews: 5000,
        fees: "₹ 12L+ Total",
        courses: ["B.Tech"],
        type: "Deemed",
        tags: ["VITEEE", "No. 1 Private", "Top Placements"],
        established: "1984",
        description: "Highest ranked private engineering institution in India with massive placement records and global recognition.",
        about: "Vellore Institute of Technology (VIT) is a deemed-to-be-university established in 1984. It is consistently ranked as India's No. 1 private engineering institution. VIT conducts VITEEE entrance exam for admissions and has campuses in Vellore, Chennai, Bhopal, and AP. Known for exceptional placements and diverse student community.",
        highlights: ["No. 1 Private University in India", "VITEEE Entrance Exam", "40+ Years of Excellence", "4 Campuses Across India", "30,000+ Students", "Exceptional Placements"],
        infrastructure: ["Massive 360-acre Campus", "State-of-the-art Labs", "Central Library", "International Hostels", "Sports Complex", "Innovation Center"],
        cutoffs: [{ title: "VITEEE Cutoff 2024", table: [{ label: "CSE", value: "Rank < 5000" }, { label: "CSE with Spec.", value: "Rank < 8000" }, { label: "ECE", value: "Rank < 10000" }] }],
        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE - Artificial Intelligence", duration: "4 Years", type: "B.Tech" },
            { name: "CSE - Data Science", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" }
        ],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹12 - 16 Lakhs" }], note: "Fees vary by campus and program" }],
        placements: {
            stats: [{ label: "Highest Package", value: "₹85 LPA" }, { label: "Average Package", value: "₹8.5 LPA" }, { label: "Placement Rate", value: "98%+" }],
            highlights: ["Highest placements among private colleges", "10,000+ students placed annually", "500+ recruiting companies"],
            topRecruiters: [{ category: "Tech Giants", companies: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Deloitte", "Oracle", "Adobe"] }]
        },
        admissions: { process: ["Register for VITEEE", "Take VITEEE exam", "Counseling based on rank", "Choose campus and program"], eligibility: ["10+2 with PCM", "VITEEE score"], documents: ["Marksheets", "VITEEE Rank Card", "ID Proof"] },
        keyDates: [{ event: "VITEEE Registration", date: "November 2025" }, { event: "VITEEE Exam", date: "April 2026" }, { event: "Counseling", date: "May-June 2026" }],
        whyChoose: ["No. 1 Private University in India", "Exceptional placements (₹85 LPA highest)", "Global recognition", "Diverse student community", "Multiple campus options", "Strong alumni network"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "VITEEE Top 50", value: "100% Tuition Fee Waiver" }, { label: "VITEEE Top 500", value: "75% Tuition Fee Waiver" }, { label: "VITEEE Top 1000", value: "50% Tuition Fee Waiver" }] }],
        alumni: { description: "Largest private university alumni network in India.", companies: ["Google", "Microsoft", "Amazon", "Facebook", "Apple", "Goldman Sachs", "McKinsey"] },
        faqs: [
            { question: "Is VIT the best private college?", answer: "Yes, VIT is consistently ranked No. 1 private engineering institution in India by NIRF." },
            { question: "What is VITEEE?", answer: "VITEEE is VIT's entrance exam conducted for B.Tech admissions." },
            { question: "What is the highest package at VIT?", answer: "The highest package at VIT is ₹85 LPA (international offers go even higher)." }
        ],
        whyChooseAkashTalks: ["VITEEE preparation guidance", "Campus selection support (Vellore/Chennai/AP/Bhopal)", "Scholarship counseling", "Complete admission assistance", "Hostel and accommodation help"]
    },
    {
        id: "tn-2",
        slug: "srm-institute-of-science-and-technology",
        name: "SRM Institute of Science and Technology",
        location: "Chennai, Tamil Nadu",
        state: "Tamil Nadu",
        rating: 4.6,
        reviews: 4000,
        fees: "₹ 10L+ Total",
        courses: ["B.Tech"],
        type: "Deemed",
        tags: ["SRMJEEE", "Diverse", "Multiple Campuses"],
        established: "1985",
        description: "Multidisciplinary deemed university with huge campus, global connections, and excellent placements.",
        about: "SRM Institute of Science and Technology (SRMIST) is one of the top-ranked deemed universities in India, established in 1985. With campuses in Chennai (Kattankulathur), Ramapuram, Vadapalani, and Delhi NCR, SRM offers diverse engineering programs. Admission is through SRMJEEE entrance exam.",
        highlights: ["Top 15 in NIRF", "SRMJEEE Entrance Exam", "Multiple Campuses", "4000+ Acre Main Campus", "Global Collaborations", "35+ Years of Excellence"],
        infrastructure: ["Massive Main Campus", "State-of-the-art Labs", "Medical Centre", "Sports Complex", "International Hostels", "Research Centers"],
        cutoffs: [{ title: "SRMJEEE Cutoff 2024", table: [{ label: "CSE", value: "Rank < 10000" }, { label: "ECE", value: "Rank < 15000" }] }],
        coursesDetails: [
            { name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "CSE - AI & ML", duration: "4 Years", type: "B.Tech" },
            { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" }
        ],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹10 - 14 Lakhs" }], note: "Fees vary by program and campus" }],
        placements: {
            stats: [{ label: "Highest Package", value: "₹51 LPA" }, { label: "Average Package", value: "₹7 LPA" }, { label: "Placement Rate", value: "95%+" }],
            topRecruiters: [{ category: "Tech", companies: ["Amazon", "Microsoft", "Google", "TCS", "Infosys", "Cognizant"] }]
        },
        admissions: { process: ["Register for SRMJEEE", "Take SRMJEEE exam", "Counseling"], eligibility: ["10+2 with PCM", "SRMJEEE score"], documents: ["Marksheets", "SRMJEEE Rank Card"] },
        keyDates: [{ event: "SRMJEEE Exam", date: "April-June 2026" }, { event: "Counseling", date: "June-July 2026" }],
        whyChoose: ["Top 15 in India", "Multiple campus options", "Strong placements", "Global exposure", "Massive campus"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top Rankers", value: "Up to 100% fee waiver" }] }],
        faqs: [{ question: "Is SRM good for engineering?", answer: "Yes, SRM is among the top 15 engineering institutions in India with excellent infrastructure and placements." }],
        whyChooseAkashTalks: ["SRMJEEE guidance", "Campus selection help", "Scholarship support", "Complete admission assistance"]
    },

    // --- Uttarakhand ---
    {
        id: "uk-1",
        slug: "university-of-petroleum-and-energy-studies",
        name: "University of Petroleum and Energy Studies (UPES)",
        location: "Dehradun, Uttarakhand",
        state: "Uttarakhand",
        rating: 4.3,
        reviews: 1500,
        fees: "₹ 14L+ Total",
        courses: ["B.Tech", "MBA"],
        type: "Private",
        tags: ["Domain Specific", "Energy", "Specializations"],
        established: "2003",
        description: "Specialized university known for unique domain-specific programs in Energy, Cloud, AI, and Aerospace.",
        about: "University of Petroleum and Energy Studies (UPES) is a private university established in 2003 in Dehradun. Unlike traditional engineering colleges, UPES offers highly specialized, industry-focused programs in domains like Petroleum, Energy, Aerospace, Cloud Computing, and AI/ML. Strong industry partnerships ensure excellent placements.",
        highlights: ["Domain-Specific Programs", "Strong Industry Ties", "Unique Specializations", "100% Placement Assistance", "Scenic Dehradun Location", "NAAC A Grade"],
        infrastructure: ["Modern Campus", "Oil Rig Simulation Lab", "Cloud Computing Center", "Aerospace Labs", "Hostels"],
        cutoffs: [{ title: "UPESEAT 2024", table: [{ label: "CSE Specializations", value: "Merit-based" }] }],
        coursesDetails: [
            { name: "CSE - Cloud Computing", duration: "4 Years", type: "B.Tech" },
            { name: "CSE - Artificial Intelligence", duration: "4 Years", type: "B.Tech" },
            { name: "Petroleum Engineering", duration: "4 Years", type: "B.Tech" },
            { name: "Aerospace Engineering", duration: "4 Years", type: "B.Tech" }
        ],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹14 - 18 Lakhs" }], note: "Premium fees for specialized programs" }],
        placements: {
            stats: [{ label: "Highest Package", value: "₹50 LPA" }, { label: "Average Package", value: "₹8 LPA" }, { label: "Placement Rate", value: "95%+" }],
            topRecruiters: [{ category: "Domain Companies", companies: ["ONGC", "IOCL", "Amazon", "Microsoft", "Deloitte", "EY"] }]
        },
        admissions: { process: ["Apply through UPESEAT/JEE/Board Merit", "Counseling", "Program selection"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "ID Proof"] },
        keyDates: [{ event: "UPESEAT Exam", date: "Multiple dates (2026)" }],
        whyChoose: ["Unique specializations", "Industry-focused curriculum", "High placements", "Scenic location", "Strong alumni"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top Board Scores", value: "Up to 100% tuition waiver" }] }],
        faqs: [
            { question: "Is UPES good for engineering?", answer: "Yes, UPES is excellent for domain-specific programs like Energy, Aerospace, Cloud, and AI." },
            { question: "What makes UPES different?", answer: "UPES offers highly specialized programs focused on specific industry domains, unlike general engineering." }
        ],
        whyChooseAkashTalks: ["Specialization guidance", "Domain career counseling", "Complete admission support", "Scholarship assistance"]
    },
    {
        id: "uk-2",
        slug: "doon-university",
        name: "Doon University",
        location: "Dehradun, Uttarakhand",
        state: "Uttarakhand",
        rating: 3.9,
        reviews: 500,
        fees: "₹ 3L - 4L Total",
        courses: ["B.Tech"],
        type: "Government",
        tags: ["State University", "Scenic", "Affordable"],
        established: "2005",
        description: "State university offering quality and affordable education in the scenic Doon valley.",
        about: "Doon University is a state government university established in 2005 in Dehradun. It offers undergraduate and postgraduate programs with a focus on quality education at affordable fees. Located in the scenic Doon valley, it provides a peaceful learning environment.",
        highlights: ["State Government University", "Affordable Fees", "Scenic Location", "Quality Education", "Growing Infrastructure"],
        cutoffs: [{ title: "State Entrance 2024", table: [{ label: "B.Tech", value: "State counseling" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹3 - 4 Lakhs" }], note: "Very affordable" }],
        placements: { stats: [{ label: "Average Package", value: "₹4 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Infosys", "Wipro"] }] },
        admissions: { process: ["State entrance/JEE", "Counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "Domicile"] },
        whyChoose: ["Affordable fees", "Government university", "Scenic location", "Quality education"],
        faqs: [{ question: "Is Doon University good?", answer: "It's a good affordable option for students seeking government university education in a scenic location." }],
        whyChooseAkashTalks: ["Government college guidance", "Affordable option counseling", "Complete admission support"]
    },

    // --- Odisha ---
    {
        id: "od-1",
        slug: "kalinga-institute-of-industrial-technology",
        name: "Kalinga Institute of Industrial Technology",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.7,
        reviews: 2800,
        fees: "₹ 14L+ Total",
        courses: ["B.Tech"],
        type: "Deemed",
        tags: ["KIITEE", "Massive Campus", "100% Placement"],
        established: "1992",
        description: "World-class deemed university with 100% placement assistance, massive campus, and KISS social initiative.",
        about: "Kalinga Institute of Industrial Technology (KIIT) is a deemed-to-be-university established in 1992 in Bhubaneswar. It has grown to become one of the top private universities in India with a 25+ square km campus, 30,000+ students, and 100% placement assistance. KIIT also runs KISS (Kalinga Institute of Social Sciences) for tribal children.",
        highlights: ["Top 20 in NIRF", "KIITEE Entrance Exam", "25+ sq km Campus", "30,000+ Students", "100% Placement Assistance", "KISS Social Initiative"],
        infrastructure: ["Massive Integrated Campus", "World-class Labs", "Stadium", "Medical Centre", "International Hostels", "Multiple Cafeterias"],
        cutoffs: [{ title: "KIITEE Cutoff 2024", table: [{ label: "CSE", value: "Rank < 8000" }, { label: "ECE", value: "Rank < 12000" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" }, { name: "Civil Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹14 - 16 Lakhs" }] }],
        placements: {
            stats: [{ label: "Highest Package", value: "₹52 LPA" }, { label: "Average Package", value: "₹8 LPA" }, { label: "Placement Rate", value: "100% Assistance" }],
            topRecruiters: [{ category: "Tech", companies: ["Amazon", "Microsoft", "Google", "Oracle", "TCS", "Infosys"] }]
        },
        admissions: { process: ["Register for KIITEE", "Take KIITEE exam", "Counseling based on rank"], eligibility: ["10+2 with PCM", "KIITEE score"], documents: ["Marksheets", "KIITEE Rank Card"] },
        keyDates: [{ event: "KIITEE Exam", date: "April-May 2026" }],
        whyChoose: ["Top 20 in India", "Massive world-class campus", "100% placement assistance", "Strong social initiative (KISS)", "Affordable compared to peers"],
        scholarships: [{ title: "Merit Scholarship", items: [{ label: "Top KIITEE Rankers", value: "Up to 100% fee waiver" }] }],
        faqs: [{ question: "Is KIIT good for engineering?", answer: "Yes, KIIT is among the top 20 engineering institutions in India with excellent infrastructure and placements." }],
        whyChooseAkashTalks: ["KIITEE preparation guidance", "Scholarship counseling", "Complete admission support", "Hostel guidance"]
    },
    {
        id: "od-2",
        slug: "siksha-o-anusandhan-university",
        name: "Siksha 'O' Anusandhan (SOA) University",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.5,
        reviews: 1600,
        fees: "₹ 10L+ Total",
        courses: ["B.Tech", "MBBS"],
        type: "Deemed",
        tags: ["SAAT", "Research", "Medical & Engineering"],
        established: "2007",
        description: "Top-ranked deemed university with focus on medical and engineering research excellence.",
        about: "Siksha 'O' Anusandhan (SOA) is a deemed-to-be-university established in 2007 in Bhubaneswar. It offers programs in Engineering, Medical Sciences, and Management. SOA conducts its own entrance exam SAAT and is known for research focus and quality education.",
        highlights: ["NIRF Ranked", "SAAT Entrance Exam", "Medical & Engineering", "Research Focus", "NAAC A++ Grade"],
        cutoffs: [{ title: "SAAT Cutoff 2024", table: [{ label: "CSE", value: "Merit-based" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Electronics & Communication", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹10 - 12 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹25 LPA" }, { label: "Average Package", value: "₹6 LPA" }], topRecruiters: [{ category: "Tech", companies: ["TCS", "Infosys", "Wipro", "Cognizant"] }] },
        admissions: { process: ["Apply for SAAT", "Take SAAT exam", "Counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "SAAT Score Card"] },
        whyChoose: ["NAAC A++ Grade", "Research opportunities", "Medical & Engineering programs", "Good placements"],
        faqs: [{ question: "Is SOA good for engineering?", answer: "Yes, SOA is a reputed deemed university with quality engineering and research programs." }],
        whyChooseAkashTalks: ["SAAT guidance", "Multiple program counseling", "Complete admission support"]
    },
    {
        id: "od-3",
        slug: "c-v-raman-global-university",
        name: "C. V. Raman Global University",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.2,
        reviews: 1000,
        fees: "₹ 6L - 8L Total",
        courses: ["B.Tech"],
        type: "Private",
        tags: ["Skills", "Global", "Industry Focus"],
        established: "2012",
        description: "Focused on skill development, global exposure, and industry-ready education for students.",
        about: "C. V. Raman Global University is a private university in Bhubaneswar established in 2012. Named after Nobel laureate C. V. Raman, the university focuses on skill development, industry partnerships, and global exposure. It offers various engineering and management programs.",
        highlights: ["Skill Development Focus", "Industry Partnerships", "Global Collaborations", "Modern Infrastructure", "Affordable Fees"],
        cutoffs: [{ title: "University Entrance 2024", table: [{ label: "CSE", value: "Merit-based" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹6 - 8 Lakhs" }] }],
        placements: { stats: [{ label: "Highest Package", value: "₹15 LPA" }, { label: "Average Package", value: "₹4.5 LPA" }], topRecruiters: [{ category: "IT", companies: ["TCS", "Wipro", "Infosys"] }] },
        admissions: { process: ["Apply online", "Merit-based selection"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "ID Proof"] },
        whyChoose: ["Skill focus", "Industry connections", "Affordable fees", "Global exposure"],
        faqs: [{ question: "Is CVR good?", answer: "Yes, it's a good option with focus on skills and industry-ready education at affordable fees." }],
        whyChooseAkashTalks: ["Skill-focused college guidance", "Industry partnership insights", "Complete admission support"]
    },
    {
        id: "od-4",
        slug: "silicon-university",
        name: "Silicon University",
        location: "Bhubaneswar, Odisha",
        state: "Odisha",
        rating: 4.1,
        reviews: 900,
        fees: "₹ 5L - 6L Total",
        courses: ["B.Tech"],
        type: "Private",
        tags: ["Strict Academics", "Discipline", "IT Focus"],
        established: "2001",
        description: "Known for rigorous academic curriculum, strict discipline, and strong IT sector placements.",
        about: "Silicon University (formerly Silicon Institute of Technology) is a private university in Bhubaneswar known for its strict academic discipline and focus on IT education. Established in 2001, it has built a reputation for producing industry-ready graduates.",
        highlights: ["Strict Academic Discipline", "IT Sector Focus", "Good Placements", "Affordable Fees", "Structured Curriculum"],
        cutoffs: [{ title: "Entrance 2024", table: [{ label: "CSE", value: "Merit + Entrance" }] }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹5 - 6 Lakhs" }], note: "Affordable with good results" }],
        placements: { stats: [{ label: "Highest Package", value: "₹18 LPA" }, { label: "Average Package", value: "₹5 LPA" }, { label: "Placement Rate", value: "88%+" }], topRecruiters: [{ category: "IT Services", companies: ["TCS", "Wipro", "Cognizant", "Infosys", "Tech Mahindra"] }] },
        admissions: { process: ["Apply online", "Entrance test", "Counseling"], eligibility: ["10+2 with PCM"], documents: ["Marksheets", "ID Proof"] },
        whyChoose: ["Strict discipline ensures focus", "Good IT placements", "Affordable fees", "Structured learning"],
        faqs: [
            { question: "Is Silicon University strict?", answer: "Yes, Silicon is known for strict academic discipline which helps students focus on learning." },
            { question: "Is Silicon good for IT?", answer: "Yes, Silicon has strong IT sector placements with good average packages." }
        ],
        whyChooseAkashTalks: ["Discipline-focused guidance", "IT career counseling", "Affordable option support", "Complete admission assistance"]
    }
];

// --- Comprehensive Exams Data ---
export const exams: Exam[] = [
    {
        id: "bitsat",
        slug: "bitsat-2026",
        name: "BITSAT 2026",
        fullName: "Birla Institute of Technology and Science Admission Test",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Birla_Institute_of_Technology_and_Science_Pilani_Logo.svg/1200px-Birla_Institute_of_Technology_and_Science_Pilani_Logo.svg.png",
        description: "BITSAT is a computer-based online test for admission to Integrated First Degree Programmes of BITS Pilani Campuses in Pilani, Goa, and Hyderabad.",
        date: "Session 1: May 2026 | Session 2: June 2026",
        applicationLink: "https://www.bitsadmission.com/",
        introduction: "BITSAT (Birla Institute of Technology and Science Admission Test) is one of the most prestigious engineering entrance exams in India. Conducted by BITS Pilani, this exam opens doors to world-class education at three campuses - Pilani, Goa, and Hyderabad. With no reservation policy and purely merit-based admissions, BITSAT attracts the best minds from across India.",
        aboutExam: "BITSAT is conducted by Birla Institute of Technology and Science (BITS), Pilani - an all-India Institute for higher education ranked among the top engineering institutions in India. BITS Pilani was established in 1964 by the late Mr. G.D. Birla and is now an Institute of Eminence. BITSAT is unique because it's one of the few exams in India that follows a strict merit-based admission policy with absolutely no reservation based on caste, category, or region. The exam has two sessions giving candidates two attempts, and bonus questions for those who finish early.",
        overview: "Birla Institute of Technology and Science Admission Test (BITSAT) is an entrance exam conducted by BITS Pilani. It is one of the most competitive engineering entrance exams in India. The exam is held for admission to B.E., B.Pharm, and M.Sc. programs at Pilani, Goa, and Hyderabad campuses. BITSAT 2026 will be conducted in two sessions, allowing candidates two attempts to improve their scores. The exam tests candidates on Physics, Chemistry, Mathematics/Biology, English Proficiency, and Logical Reasoning.",
        importantDates: [
            { event: "Application Start Date", date: "January 2026 (Tentative)" },
            { event: "Application End Date", date: "April 2026 (Tentative)" },
            { event: "Slot Booking Session 1", date: "Early May 2026" },
            { event: "BITSAT Session 1 Exam", date: "Late May 2026" },
            { event: "BITSAT Session 2 Application", date: "Late May - June 2026" },
            { event: "BITSAT Session 2 Exam", date: "Mid June 2026" },
            { event: "Counseling (Iteration 1)", date: "July 2026" }
        ],
        applicationProcess: [
            { step: "Registration", description: "Visit the official website (bitsadmission.com) and register with a valid email ID and mobile number." },
            { step: "Fill Application Form", description: "Enter personal, academic, and contact details. Choose your preferred exam centers." },
            { step: "Upload Documents", description: "Upload scanned photograph (4KB to 100KB) and signature (1KB to 50KB) in JPG/JPEG format." },
            { step: "Pay Application Fee", description: "Fee is approx ₹3400 (Male) / ₹2900 (Female) for a single session. For both sessions, it is higher. Pay via Net Banking/Credit Card/Debit Card/UPI." },
            { step: "Slot Booking", description: "Reserve your preferred exam date and time slot through the slot booking system when it opens. It is first-come-first-serve." }
        ],
        documents: [
            "Class 10 Marksheet and Certificate",
            "Class 12 Marksheet (if available)",
            "Scanned Photograph (Recent, color, white background)",
            "Scanned Signature",
            "Credit/Debit Card or Net Banking details for payment",
            "Valid Photo ID Proof (Aadhaar, Passport, etc.) for exam day"
        ],
        eligibility: [
            "Candidates should have passed the 12th class examination of 10+2 system from a recognized Central or State board or its equivalent.",
            "Must have Physics, Chemistry, and Mathematics (PCM) as subjects. (PCB for B.Pharm).",
            "Minimum 75% aggregate marks in PCM/PCB subjects in 12th examination.",
            "Minimum 60% marks in each of Physics, Chemistry, and Mathematics/Biology individually.",
            "Proficiency in English is required.",
            "Students potentially appearing for 12th exams in 2026 are also eligible."
        ],
        examPattern: {
            mode: "Online (Computer Based Test)",
            duration: "3 Hours (180 Minutes). No break between parts.",
            totalMarks: "390",
            markingScheme: "+3 for correct answer, -1 for incorrect answer. Unattempted questions get 0.",
            subjects: [
                "Part I: Physics (30 Questions)",
                "Part II: Chemistry (30 Questions)",
                "Part III: English Proficiency (10 Questions) & Logical Reasoning (20 Questions)",
                "Part IV: Mathematics/Biology (40 Questions)"
            ]
        },
        counselling: "Admission is purely merit-based on the BITSAT score. After the exam, there are multiple rounds of seat allotment called 'Iterations'. Candidates must fill their preference order for Campuses (Pilani, Goa, Hyderabad) and Branches carefully. There is no reservation policy (except for BITS Dubai which has its own process). Direct admission is offered to Board Toppers.",
        faqs: [
            { question: "Can I appear for both sessions?", answer: "Yes, candidates can appear for both Session 1 and Session 2. The best of the two scores will be considered for admission." },
            { question: "Is there any reservation in BITS?", answer: "No, BITS Pilani does not follow any reservation policy based on caste or category. Admissions are strictly based on merit." },
            { question: "What is a good score in BITSAT?", answer: "A score above 300 is generally considered safe for top branches like CSE/ECE in any of the three campuses. For Pilani CSE, 330+ is typically required." },
            { question: "Is there a negative marking?", answer: "Yes, 1 mark is deducted for every incorrect answer." },
            { question: "Are there bonus questions?", answer: "Yes, if a candidate answers all 130 questions, they can attempt 12 bonus questions for extra marks. Once you start bonus questions, you cannot go back to the main paper." }
        ]
    },
    {
        id: "wbjee",
        slug: "wbjee-2026",
        name: "WBJEE 2026",
        fullName: "West Bengal Joint Entrance Examination",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/West_Bengal_Joint_Entrance_Examinations_Board_Logo.png",
        description: "State-level entrance exam for admission to undergraduate engineering, technology, pharmacy, and architecture courses in West Bengal.",
        date: "April 2026 (Expected)",
        applicationLink: "https://wbjeeb.nic.in/",
        introduction: "WBJEE (West Bengal Joint Entrance Examination) is the gateway to top engineering colleges in West Bengal including Jadavpur University, IEM, Heritage, and 200+ other institutions. Known for its challenging mathematics section, WBJEE is one of the most respected state-level engineering entrance exams in India.",
        aboutExam: "WBJEE is conducted by the West Bengal Joint Entrance Examinations Board (WBJEEB), a state government-controlled body established in 1962. The exam provides admission to over 200 engineering, pharmacy, and architecture colleges in West Bengal. WBJEEB has a legacy of conducting fair and transparent examinations. The exam is held in offline (OMR-based) mode and is known for its high-quality questions, especially in Mathematics which often features problems requiring deep conceptual understanding.",
        overview: "The West Bengal Joint Entrance Examination (WBJEE) is a state-government controlled centralized test, conducted by the West Bengal Joint Entrance Examinations Board (WBJEEB). It is the gateway for admission to many private and governmental engineering institutions in West Bengal, including Jadavpur University. It is known for its high standard of questions, especially in Mathematics, and is conducted in offline (OMR) mode.",
        importantDates: [
            { event: "Registration Begins", date: "December 2025" },
            { event: "Registration Ends", date: "February 2026" },
            { event: "Correction Window", date: "February 2026" },
            { event: "Admit Card Download", date: "April 2026" },
            { event: "WBJEE 2026 Exam Date", date: "Last Sunday of April 2026 (Tentative)" },
            { event: "Result Declaration", date: "June 2026" }
        ],
        applicationProcess: [
            { step: "Online Registration", description: "Register on the official website wbjeeb.nic.in using name, mobile number, and email." },
            { step: "Fill Application Form", description: "Enter personal details, domicile (West Bengal or Other), category, and academic details." },
            { step: "Upload Images", description: "Upload scanned recent color photograph and signature as per specified dimensions and size." },
            { step: "Fee Payment", description: "Pay examination fees online (approx ₹500 for General, ₹400 for Reserved categories)." },
            { step: "Confirmation Page", description: "Download and print the potential confirmation page. This is important for future reference." }
        ],
        documents: [
            "Aadhaar Card / Voter ID / Passport / School ID",
            "Class 10 Admit Card/Certificate (for age proof)",
            "Class 12 Marksheet (for counseling)",
            "Scanned Photograph & Signature",
            "Domicile Certificate (mandatory for West Bengal Govt colleges and reservation)",
            "Category Certificate (if applicable for SC/ST/OBC/TFW)"
        ],
        eligibility: [
            "Must be a Citizen of India.",
            "Lower age limit: 17 years as of 31st Dec 2026. No upper age limit for Engineering.",
            "Must have passed 10+2 with Physics and Mathematics along with any one of Chemistry/Biotechnology/Biology/Computer Science/Computer Application.",
            "Minimum 45% aggregate marks in the three compulsory subjects (40% for SC/ST/OBC/Pwd).",
            "Must have passed English in 10+2 with at least 30% marks."
        ],
        examPattern: {
            mode: "Offline (OMR Based)",
            duration: "4 Hours total (Paper I: Mathematics - 2 hours, Paper II: Physics & Chemistry - 2 hours)",
            totalMarks: "200 (Mathematics: 100, Physics: 50, Chemistry: 50)",
            markingScheme: "Category 1 (1 mark): +1/-0.25; Category 2 (2 marks): +2/-0.5; Category 3 (2 marks): +2/0 (Multiple Correct Options, Partial Marking available).",
            subjects: ["Mathematics (75 Questions)", "Physics (40 Questions)", "Chemistry (40 Questions)"]
        },
        counselling: "WBJEEB conducts purely web-based counseling (e-counseling). Candidates who secure a GMR (General Merit Rank) need to register, pay a counseling fee, and fill their choices of colleges and branches. Seats are allotted in multiple rounds based on rank and preference. Separate rounds are held for JEE Main candidates for some seats.",
        faqs: [
            { question: "Is Domicile required for WBJEE?", answer: "Domicile is NOT required to appear for the exam. Students from all over India can appear. However, Domicile is mandatory for claiming seats in Government colleges and for TFW (Tuition Fee Waiver) schemes." },
            { question: "Can outside West Bengal students apply?", answer: "Yes, students from other states can apply. They will be treated as 'General' category candidates and are eligible for seats in Private Universities and colleges, as well as General seats in some Govt Universities (like Jadavpur University)." },
            { question: "Is calculator allowed?", answer: "No, calculators or any electronic gadgets are strictly prohibited inside the examination hall." }
        ]
    },
    {
        id: "srmjeee",
        slug: "srmjeee-2026",
        name: "SRMJEEE 2026",
        fullName: "SRM Joint Engineering Entrance Examination",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png",
        description: "Common entrance examination for admission to B.Tech programs at all SRM Group campuses.",
        date: "Phase 1: April 2026 | Phase 2: June 2026",
        applicationLink: "https://applications.srmist.edu.in/",
        introduction: "SRMJEEE (SRM Joint Engineering Entrance Examination) is your ticket to one of India's largest and most prestigious private university systems. With campuses in Chennai, Ghaziabad, Andhra Pradesh, and more, SRMJEEE offers students multiple location options while maintaining quality education standards.",
        aboutExam: "SRMJEEE is conducted by SRM Institute of Science and Technology (SRMIST), formerly known as SRM University. SRMIST is one of the top-ranked universities in India with NAAC A++ Grade and Top 15 NIRF ranking. The exam can be taken in Remote Proctored Online Mode (RPOM) from the comfort of your home, making it convenient for students across India and abroad. With no negative marking, SRMJEEE is considered one of the most student-friendly entrance exams.",
        overview: "SRM Joint Engineering Entrance Examination (SRMJEEE) is conducted by SRM Institute of Science and Technology for admission to B.Tech programs across its campuses in Kattankulathur (Main Campus), Ramapuram, Vadapalani, Ghaziabad, Tiruchirappalli, and SRM University Sonepat & Andhra Pradesh. It is usually conducted in Remote Proctored Online Mode (RPOM), allowing candidates to take the exam from their homes.",
        importantDates: [
            { event: "Applications Open", date: "November 2025" },
            { event: "Phase 1 Application Deadline", date: "April 2026 (Week 2)" },
            { event: "Phase 1 Exam Slot Booking", date: "April 2026 (Week 3)" },
            { event: "Phase 1 Exam", date: "April 2026 (Last Weekend)" },
            { event: "Phase 2 Application Deadline", date: "June 2026 (Week 2)" },
            { event: "Phase 2 Exam", date: "June 2026 (Weekend)" }
        ],
        applicationProcess: [
            { step: "Register", description: "Sign up on srmist.edu.in using name, email, and mobile number." },
            { step: "Verify Email", description: "Verify your email ID to activate your account." },
            { step: "Fill Application", description: "Complete the form with personal, academic, and address details. Select campus preferences carefully." },
            { step: "Payment", description: "Pay the non-refundable application fee of ₹1200 via online mode." },
            { step: "Upload Photo/Sign", description: "Upload scanned recent photograph and signature as per specifications." }
        ],
        documents: [
            "Class 10 Marksheet (as Date of Birth proof)",
            "Class 12 Marksheet (during counseling)",
            "Scanned Photograph and Signature for application",
            "Aadhaar Card/Passport/Any Govt ID Proof for exam day verification"
        ],
        eligibility: [
            "Nationality: Resident Indian, Non-Resident Indian (NRI), holder of PIO or OCI card issued by Govt. of India.",
            "Age: Should have attained the age of 16 years and 6 months on the 31st July of the calendar year in which the 12th Board examination is to be held.",
            "Passed 10+2 with Physics and Chemistry as compulsory subjects along with one of Mathematics or Biology (Botany and Zoology).",
            "Minimum 60% aggregate in PCM/PCB. (For KTR, Ramapuram, Vadapalani, and Ghaziabad campuses).",
            "Minimum 50% for other campuses (Andhra Pradesh, Sonepat)."
        ],
        examPattern: {
            mode: "Online (Remote Proctored Mode) - Take from Home",
            duration: "2 Hours 30 Minutes",
            totalMarks: "125",
            markingScheme: "+1 per question, No Negative Marking",
            subjects: ["Physics (35 Q)", "Chemistry (35 Q)", "Maths/Biology (40 Q)", "English (5 Q)", "Aptitude (10 Q)"]
        },
        counselling: "Online counseling is held after results. Rank holders have to fill choices of campus and program. Seats are allotted based on SRMJEEE rank. Selected candidates must pay a part of the tuition fee to confirm their seat. Phase 1 counseling happens immediately after Phase 1 results.",
        faqs: [
            { question: "Is there negative marking in SRMJEEE?", answer: "No, SRMJEEE does not have any negative marking." },
            { question: "Can I take the exam from my mobile?", answer: "No, you must use a Laptop or Desktop with a working camera and microphone. Mobile phones are not allowed." },
            { question: "Can I get KTR campus with low rank?", answer: "KTR (Main Campus) CSE usually closes at a rank around 10,000-15,000. Other branches may go up to 45,000+." }
        ]
    },
    {
        id: "iemcet",
        slug: "iemcet-entrance-exam",
        name: "IEM CET 2026",
        fullName: "IEM Common Entrance Test",
        logoUrl: "https://iem.edu.in/wp-content/themes/iem/images/logo.png",
        description: "Entrance test for admission to various undergraduate and postgraduate courses at IEM Kolkata and UEM.",
        date: "Multiple Phases (March-July 2026)",
        applicationLink: "https://iem.edu.in/",
        introduction: "IEMCET (IEM Common Entrance Test) is an entrance exam for students who want to join the prestigious University of Engineering & Management (UEM) and Institute of Engineering & Management (IEM) family. It's an excellent backup option for students who haven't appeared for WBJEE or JEE Main.",
        aboutExam: "IEMCET is conducted by the IEM-UEM Group, one of the leading educational groups in Eastern India. The group runs IEM Kolkata (affiliated to MAKAUT), UEM Kolkata, and UEM Jaipur. The exam is designed to be student-friendly with multiple phases throughout the year, giving students several chances to qualify. The exam is often free of cost and can be taken from home online.",
        overview: "IEMCET is conducted by the IEM-UEM group for admissions into its B.Tech, BCA, BBA, and other courses. It serves as a gateway for students who might not have appeared for WBJEE or want specifically to join the prestigious University of Engineering & Management (UEM) Jaipur/Kolkata and Institute of Engineering & Management (IEM).",
        importantDates: [
            { event: "Registration Starts", date: "January 2026" },
            { event: "Phase 1 Exam", date: "March 2026" },
            { event: "Phase 2 Exam", date: "April 2026" },
            { event: "Phase 3 Exam", date: "May 2026" },
            { event: "Result Declaration", date: "Usually 3-4 days after exam date" }
        ],
        applicationProcess: [
            { step: "Online Application", description: "Visit the IEM/UEM official website and click on the 'Apply Now' button." },
            { step: "Slot Booking", description: "After registration, select your preferred exam date and time slot from the available options." },
            { step: "Admit Card", description: "Receive your admit card/link on your registered email." },
            { step: "Exam", description: "Appear for the online exam from your home using a computer." }
        ],
        documents: [
            "Class 10 & 12 Marksheets (for eligibility check)",
            "Aadhaar Card or PAN Card",
            "Scanned copy of passport size photo"
        ],
        eligibility: [
            "For B.Tech: Passed 10+2 with Physics and Maths as compulsory subjects.",
            "Must have valid score in Class 10 and 12 (min 60% usually recommended).",
            "Must be at least 17 years of age."
        ],
        examPattern: {
            mode: "Online (Home Based available)",
            duration: "2 Hours",
            totalMarks: "Varies (Usually 360 or 100 depending on year)",
            markingScheme: "Generally +4 for correct, -1 for wrong (for B.Tech pattern).",
            subjects: ["Physics", "Chemistry", "Mathematics", "English/Aptitude"]
        },
        counselling: "Counseling is done by the institute based on IEMCET score and Class 12 marks. Students are called for offline/online counseling to select their branch.",
        faqs: [
            { question: "Is IEMCET mandatory?", answer: "If you do not have a valid WBJEE or JEE Main rank, IEMCET is required for admission to UEM Jaipur and UEM Kolkata. For IEM Kolkata, WBJEE/JEE Main is primary." },
            { question: "Is there an exam fee?", answer: "Often, there is no exam fee for IEMCET/IEMJEE, but check the official portal for the specific year." }
        ]
    },
    {
        id: "iemjee",
        slug: "iemjee",
        name: "IEMJEE 2026",
        fullName: "Institute of Engineering & Management Joint Entrance Exam",
        logoUrl: "https://iem.edu.in/wp-content/themes/iem/images/logo.png",
        description: "Exam for admission to B.Tech, BCA, BBA, M.Tech, MCA, MBA courses of IEM Group.",
        date: "Multiple Phases (Online)",
        applicationLink: "https://iemjee.iem.edu.in/",
        introduction: "IEMJEE (Institute of Engineering & Management Joint Entrance Exam) is the most direct route to UEM Jaipur and UEM Kolkata admissions. With multiple phases, free exam fee, and instant results, IEMJEE offers a hassle-free admission experience for aspiring engineers.",
        aboutExam: "IEMJEE is conducted by the IEM-UEM Group for admissions specifically to UEM Jaipur and UEM Kolkata. The exam has a unique feature of instant or near-instant result generation, allowing students to know their status within hours. The exam is completely free of cost in most phases and can be taken online from home. It's an excellent opportunity for students who missed other entrance exams or are specifically interested in the UEM campuses.",
        overview: "IEMJEE is a common entrance examination for admission to B.Tech, BCA, BBA, M.Tech, MCA, M.Sc, and MBA courses of the IEM Group (IEM Kolkata and UEM Jaipur/Kolkata). It offers a seamless admission process for students aiming for these specific campuses. The exam is often conducted in multiple shifts and allows students to take it from home.",
        importantDates: [
            { event: "Phase 1 Application", date: "January - February 2026" },
            { event: "Phase 1 Exam", date: "February 2026" },
            { event: "Phase 2 Application", date: "March - April 2026" },
            { event: "Phase 2 Exam", date: "April 2026" }
        ],
        applicationProcess: [
            { step: "Visit Application Portal", description: "Go to iemjee.iem.edu.in." },
            { step: "Register", description: "Fill the simple registration form with basic details." },
            { step: "Take Exam", description: "In many cases, you can take the exam immediately or book a near slot." },
            { step: "Result", description: "Instant or near-instant result generation." }
        ],
        documents: [
            "Standard academic documents (10th/12th Marksheets).",
            "ID Proof."
        ],
        eligibility: [
            "Passed 10+2 examination with Physics and Mathematics as compulsory subjects.",
            "Minimum 60% marks in Class 10 and 12 is generally required for good branches."
        ],
        examPattern: {
            mode: "Online (Remote)",
            duration: "2 Hours",
            totalMarks: "360",
            markingScheme: "+4 for correct, -1 for incorrect.",
            subjects: ["Physics (30 Q)", "Chemistry (30 Q)", "Mathematics (30 Q)"]
        },
        counselling: "Immediate provisional admission offers are often made based on scores. Students have to pay a registration fee to book their seat.",
        faqs: [
            { question: "Is there an exam fee?", answer: "Currently, there is no examination fee for appearing in IEMJEE." },
            { question: "Can I get admission in IEM Kolkata through IEMJEE?", answer: "IEMJEE is primarily for UEM Jaipur and UEM Kolkata. For IEM Kolkata (MAKAUT affiliated), WBJEE/JEE Main is the main route, but management quota seats *might* consider it. Check with admission cell." }
        ]
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

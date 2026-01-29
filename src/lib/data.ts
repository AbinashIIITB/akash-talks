
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
    // Expanded Fields
    overview: string;
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
    counselling: string; // Brief description
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
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
        about: "Institute of Engineering & Management (IEM) is a premier private engineering college in Kolkata, established in 1989. It is one of the oldest and most reputed private engineering colleges in West Bengal, known for its strict academic discipline, excellent placement records, and strong alumni network.",
        highlights: ["NAAC 'A' Grade Accredited", "NIRF Ranked Institution", "Oldest Private Engineering College in West Bengal (Est. 1989)", "Located in Salt Lake IT Hub", "1054+ Students Placed in 2024", "₹32 LPA Highest Package"],
        infrastructure: ["3 Campuses located in the IT Hub of Salt Lake", "State-of-the-art Innovation & IoT Labs", "AI/ML Research Center", "Digital Library with IEEE/ACM/Springer Access"],
        cutoffs: [{ title: "WBJEE Cutoff 2024", table: [{ label: "CSE", value: "Rank 3287 - 6398" }, { label: "IT", value: "Rank 4000 - 7500" }], description: "Primary admission through WBJEE counseling." }],
        coursesDetails: [{ name: "Computer Science and Engineering", duration: "4 Years", type: "B.Tech" }, { name: "Information Technology", duration: "4 Years", type: "B.Tech" }],
        feesDetails: [{ title: "B.Tech Fee Structure", items: [{ label: "Total B.Tech (4 Years)", value: "₹8.4 - 8.65 Lakhs" }], note: "Excludes hostel and mess charges" }],
        placements: { stats: [{ label: "Highest Package", value: "₹32 LPA" }, { label: "Median Package", value: "₹6 LPA" }, { label: "Placement Rate", value: "95%+" }], highlights: ["Consistent placement record for over 35 years", "Multiple offers for top performers"], topRecruiters: [{ category: "Tech Giants", companies: ["Amazon", "TCS", "Cognizant", "Wipro", "Infosys"] }] }
    },
    { id: "2", slug: "techno-india-salt-lake", name: "Techno India Main Salt Lake", location: "Salt Lake, Kolkata", state: "West Bengal", rating: 4.2, reviews: 1420, fees: "₹ 1L - 1.3L per year", courses: ["B.Tech", "M.Tech", "BBA", "MBA", "MCA"], type: "Private", tags: ["Industry Connect", "NAAC Accredited"], logoUrl: "/footer-logo.jpg", established: "2001", description: "Leading private engineering college in Salt Lake with strong industry connections and placement record.", imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" },
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
        overview: "Birla Institute of Technology and Science Admission Test (BITSAT) is an entrance exam conducted by BITS Pilani. It is one of the most competitive engineering entrance exams in India. The exam is held for admission to B.E., B.Pharm, and M.Sc. programs at Pilani, Goa, and Hyderabad campuses. BITSAT 2026 will be conducted in two sessions, allowing candidates two attempts to improve their scores.",
        importantDates: [
            { event: "Application Start Date", date: "January 2026" },
            { event: "Application End Date", date: "April 2026" },
            { event: "Slot Booking Session 1", date: "early May 2026" },
            { event: "BITSAT Session 1 Exam", date: "Late May 2026" },
            { event: "BITSAT Session 2 application", date: "Late May - June 2026" },
            { event: "BITSAT Session 2 Exam", date: "Mid June 2026" },
            { event: "Counseling (Iteration 1)", date: "July 2026" }
        ],
        applicationProcess: [
            { step: "Registration", description: "Visit bitsadmission.com and register with a valid email and phone number." },
            { step: "Fill Application", description: "Complete the form with personal, academic, and contact details." },
            { step: "Upload Documents", description: "Upload Scanned Photograph (4KB to 100KB) and Signature (1KB to 50KB)." },
            { step: "Pay Fee", description: "Fee is approx ₹5400 (Male) / ₹4400 (Female) for both sessions. Pay via Net Banking/Card/UPI." },
            { step: "Slot Booking", description: "Reserve your preferred exam date and center through the slot booking system when it opens." }
        ],
        documents: [
            "Class 10 and 12 Marks Sheets",
            "Scanned Image of Photograph (JPG/JPEG)",
            "Scanned Image of Signature (JPG/JPEG)",
            "Credit/Debit Card or Net Banking details for payment"
        ],
        eligibility: [
            "Passed Class 12th from a recognized Central or State board.",
            "Must have Physics, Chemistry, and Mathematics (PCM) as subjects.",
            "Minimum 75% aggregate marks in PCM.",
            "Minimum 60% marks in each of Physics, Chemistry, and Mathematics individually.",
            "Proficient in English."
        ],
        examPattern: {
            mode: "Online (Computer Based Test)",
            duration: "3 Hours (180 Minutes)",
            totalMarks: "390",
            markingScheme: "+3 for correct answer, -1 for incorrect answer.",
            subjects: ["Physics (30 Q)", "Chemistry (30 Q)", "English Proficiency (10 Q)", "Logical Reasoning (20 Q)", "Mathematics (40 Q)"]
        },
        counselling: "Admission is purely merit-based on BITSAT score. There are multiple rounds of 'Iterations'. Candidates must fill their preference order for Campuses and Branches carefully. There is no reservation policy (except for BITS Dubai which has its own process).",
        faqs: [
            { question: "Can I appear for both sessions?", answer: "Yes, candidates can appear for both sessions. The best of the two scores will be considered for admission." },
            { question: "Is there any reservation in BITS?", answer: "No, BITS Pilani does not strictly follow a reservation policy like government institutes. Admissions are merit-based." },
            { question: "What is a good score in BITSAT?", answer: "A score above 300 is generally considered safe for top branches like CSE/ECE in any of the three campuses. For Pilani CSE, 330+ is recommended." }
        ]
    },
    {
        id: "wbjee",
        slug: "wbjee-2026",
        name: "WBJEE 2026",
        fullName: "West Bengal Joint Entrance Examination",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/West_Bengal_Joint_Entrance_Examinations_Board_Logo.png",
        description: "State-level entrance exam for admission to undergraduate engineering and pharmacy courses in West Bengal.",
        date: "April 2026",
        applicationLink: "https://wbjeeb.nic.in/",
        overview: "The West Bengal Joint Entrance Examination (WBJEE) is a state-government controlled centralized test, conducted by the West Bengal Joint Entrance Examinations Board for admission to many private and governmental engineering institutions in West Bengal. It is known for its high standard of questions, especially in Mathematics.",
        importantDates: [
            { event: "Registration Begins", date: "December 2025" },
            { event: "Registration Ends", date: "February 2026" },
            { event: "Admit Card Download", date: "April 2026" },
            { event: "WBJEE 2026 Exam Date", date: "Last Sunday of April 2026" },
            { event: "Result Declaration", date: "June 2026" }
        ],
        applicationProcess: [
            { step: "Online Registration", description: "Register on wbjeeb.nic.in." },
            { step: "Fill Details", description: "Enter domicile, category, and academic details properly." },
            { step: "Upload Images", description: "Upload Photo and Signature as per specifications." },
            { step: "Fee Payment", description: "Pay examination fees (approx ₹500 for General, ₹400 for Reserved)." },
            { step: "Confirmation Page", description: "Download and print the confirmation page for reference." }
        ],
        documents: [
            "Aadhaar Card / Voter ID",
            "Class 10 Admit Card/Certificate",
            "Scanned Photograph & Signature",
            "Category Certificate (if applicable for SC/ST/OBC/TFW)"
        ],
        eligibility: [
            "Citizen of India.",
            "Must have passed 10+2 with Physics and Mathematics along with Chemistry/Biotechnology/Biology/Computer Science.",
            "Minimum 45% aggregate in 3 compulsory subjects (40% for reserved categories).",
            "Minimum age of 17 years as of 31st Dec 2026. No upper age limit."
        ],
        examPattern: {
            mode: "Offline (OMR Based)",
            duration: "4 Hours (2 papers of 2 hours each)",
            totalMarks: "200",
            markingScheme: "Category 1: +1/-0.25; Category 2: +2/-0.5; Category 3: +2/0 (Multiple correct options)",
            subjects: ["Mathematics (100 Marks)", "Physics (50 Marks)", "Chemistry (50 Marks)"]
        },
        counselling: "WBJEEB conducts purely web-based counseling. Candidates must register, fill, and lock their choices. Seats are allotted based on General Merit Rank (GMR). There are separate rounds for JEE Main candidates.",
        faqs: [
            { question: "Is Domicile required for WBJEE?", answer: "Domicile is NOT required to appear for the exam, but it is mandatory for claiming seats in Government colleges and for TFW (Tuition Fee Waiver) schemes." },
            { question: "Can outside West Bengal students apply?", answer: "Yes, students from all over India can apply. However, they will be treated as General category candidates." }
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
        overview: "SRM Joint Engineering Entrance Examination (SRMJEEE) is conducted by SRM Institute of Science and Technology for admission to B.Tech programs across its campuses in Kattankulathur, Ramapuram, Vadapalani, Ghaziabad, and others. It is remote proctored (online) or center-based depending on the year's policy.",
        importantDates: [
            { event: "Applications Open", date: "November 2025" },
            { event: "Phase 1 Exam", date: "April 2026" },
            { event: "Phase 2 Exam", date: "June 2026" },
            { event: "Phase 3 Exam (if applicable)", date: "July 2026" }
        ],
        applicationProcess: [
            { step: "Register", description: "Sign up on srmist.edu.in." },
            { step: "Verify Email", description: "Verify your email ID to proceed." },
            { step: "Fill Application", description: "Enter personal details and campus preferences." },
            { step: "Payment", description: "Pay the application fee of ₹1200." },
            { step: "Upload Photo/Sign", description: "Upload recent photograph and signature." }
        ],
        documents: [
            "Class 10 Marksheet",
            "Class 12 Marksheet (if available)",
            "Scanned Photo and Signature",
            "ID Proof"
        ],
        eligibility: [
            "Passed 10+2 with Physics, Chemistry, and Mathematics/Biology.",
            "Minimum 60% aggregate in PCM/PCB.",
            "Age should be 16 years and 6 months by July 31 of admission year."
        ],
        examPattern: {
            mode: "Online (Remote Proctored)",
            duration: "2 Hours 30 Minutes",
            totalMarks: "125",
            markingScheme: "+1 per question, No Negative Marking",
            subjects: ["Physics (35)", "Chemistry (35)", "Maths/Biology (40)", "English (5)", "Aptitude (10)"]
        },
        counselling: "Online counseling is held after results. Rank holders have to fill choices of campus and program. Seats are allotted based on SRMJEEE rank.",
        faqs: [
            { question: "Is there negative marking?", answer: "No, SRMJEEE does not have negative marking." },
            { question: "Can I get KTR campus with low rank?", answer: "KTR (Main Campus) CSE usually closes at a rank around 10,000-15,000." }
        ]
    },
    {
        id: "iemcet",
        slug: "iemcet-entrance-exam",
        name: "IEM CET 2026",
        fullName: "IEM Common Entrance Test",
        logoUrl: "https://iem.edu.in/wp-content/themes/iem/images/logo.png",
        description: "Entrance test for admission to various undergraduate and postgraduate courses at IEM Kolkata and UEM.",
        date: "Various Phases in 2026",
        applicationLink: "https://iem.edu.in/",
        overview: "IEMCET is conducted by the IEM-UEM group for admissions into its B.Tech, BCA, BBA, and other courses. It serves as a gateway for students who might not have appeared for WBJEE or want specifically to join the prestigious IEM/UEM group institutions.",
        importantDates: [
            { event: "Registration Starts", date: "January 2026" },
            { event: "Exam Dates", date: "Held in multiple phases from March to July 2026" },
            { event: "Result", date: "7 days after exam phase" }
        ],
        applicationProcess: [
            { step: "Online Application", description: "Visit the IEM/UEM official website." },
            { step: "Slot Booking", description: "Choose your exam date and time slot." },
            { step: "Exam", description: "Appear for the online exam from home or center." }
        ],
        documents: [
            "Class 10 & 12 details",
            "ID Proof (Aadhaar/PAN)",
            "Soft copy of photo"
        ],
        eligibility: [
            "10+2 with Physics and Maths.",
            "Good academic record in Class 10 and 12.",
            "Must be 17 years of age."
        ],
        examPattern: {
            mode: "Online",
            duration: "2 Hours",
            totalMarks: "Variety based on course",
            markingScheme: "No negative marking usually.",
            subjects: ["Physics", "Chemistry", "Mathematics", "General Aptitude"]
        },
        counselling: "Counseling is done by the institute based on IEMCET score and Class 12 marks.",
        faqs: [
            { question: "Is IEMCET mandatory?", answer: "If you do not have a valid WBJEE or JEE Main rank, IEMCET is required for admission to UEM/IEM courses." }
        ]
    },
    {
        id: "iemjee",
        slug: "iemjee",
        name: "IEMJEE 2026",
        fullName: "Institute of Engineering & Management Joint Entrance Exam",
        logoUrl: "https://iem.edu.in/wp-content/themes/iem/images/logo.png",
        description: "Exam for admission to B.Tech, BCA, BBA, M.Tech, MCA, MBA courses of IEM Group.",
        date: "Online Modes Available",
        applicationLink: "https://iemjee.iem.edu.in/",
        overview: "IEMJEE is a common entrance examination for admission to B.Tech, BCA, BBA, M.Tech, MCA, M.Sc, and MBA courses of the IEM Group (IEM Kolkata and UEM Jaipur/Kolkata). It offers a seamless admission process for students aiming for these specific campuses.",
        importantDates: [
            { event: "Rolling Application", date: "Open throughout admission season (Jan-July)" },
            { event: "Exam Mode", date: "Online from Home / Center" }
        ],
        applicationProcess: [
            { step: "Direct Details", description: "Fill the simple form on iemjee.iem.edu.in." },
            { step: "Instant Exam", description: "In some modes, you can take the exam immediately." }
        ],
        documents: [
            "Standard academic documents."
        ],
        eligibility: [
            "60% in Class 10 & 12 ideally.",
            "Physics and Maths compulsory for Engineering."
        ],
        examPattern: {
            mode: "Online",
            duration: "2 Hours",
            totalMarks: "360",
            markingScheme: "+4, -1",
            subjects: ["Physics", "Chemistry", "Maths"]
        },
        counselling: "Immediate provisional admission offers are often made based on scores.",
        faqs: [
            { question: "Is there an exam fee?", answer: "Usually, there is no exam fee for IEMJEE." }
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

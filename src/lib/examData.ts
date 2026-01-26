export interface ExamSection {
    id: string;
    title: string;
    content: string; // Markdown supported
    table?: { label: string; value: string }[];
    list?: string[];
}

export interface Exam {
    id: string;
    slug: string;
    title: string;
    description: string;
    logoUrl?: string; // Optional logo
    sections: {
        introduction: ExamSection;
        overview: ExamSection;
        importantDates: ExamSection;
        applicationProcess: ExamSection;
        documents: ExamSection;
        eligibility: ExamSection;
        about: ExamSection;
        pattern: ExamSection;
        counselling: ExamSection;
        faq: { question: string; answer: string }[];
    }
}

export const exams: Exam[] = [
    {
        id: "bitsat",
        slug: "bitsat-2026",
        title: "BITSAT 2026",
        description: "Birla Institute of Technology and Science Admission Test (BITSAT) is a computer-based online test for admissions to Integrated First Degree Programmes of BITS Pilani Campuses in Pilani, Goa, and Hyderabad.",
        logoUrl: "/bitsat-logo.png",
        sections: {
            introduction: {
                id: "intro",
                title: "Introduction",
                content: "BITSAT 2026 is the entrance exam for admission to B.E., B.Pharm, and M.Sc. programs at BITS Pilani, Goa, and Hyderabad campuses. It is one of the most competitive engineering entrance exams in India, known for testing speed and accuracy."
            },
            overview: {
                id: "overview",
                title: "Overview",
                content: "BITSAT is conducted annually in online mode (Computer Based Test). The exam assesses candidates on Physics, Chemistry, Mathematics/Biology, English Proficiency, and Logical Reasoning.",
                table: [
                    { label: "Exam Name", value: "BITSAT 2026" },
                    { label: "Conducting Body", value: "BITS Pilani" },
                    { label: "Exam Level", value: "University Level" },
                    { label: "Mode", value: "Online (CBT)" },
                    { label: "Duration", value: "3 Hours" }
                ]
            },
            importantDates: {
                id: "dates",
                title: "Important Dates",
                content: "Tentative schedule for BITSAT 2026 based on previous trends.",
                table: [
                    { label: "Application Start", value: "January 2026" },
                    { label: "Last Date to Apply", value: "April 2026" },
                    { label: "Slot Booking", value: "May 2026" },
                    { label: "Session 1 Exam", value: "May 2026" },
                    { label: "Session 2 Exam", value: "June 2026" }
                ]
            },
            applicationProcess: {
                id: "application",
                title: "Application Process",
                content: "Candidates must apply online through the official BITS admission website.",
                list: [
                    "Visit bitsadmission.com",
                    "Register with valid Email and Mobile Number",
                    "Fill the detailed application form",
                    "Upload scanned photograph and signature",
                    "Pay the application fee"
                ]
            },
            documents: {
                id: "documents",
                title: "Documents Required",
                content: "Keep these documents ready before applying:",
                list: [
                    "Class 10 Marksheet/Certificate",
                    "Class 12 Marksheet (if available)",
                    "Scanned Photograph (Recent, passport size)",
                    "Scanned Signature",
                    "Credit/Debit Card or Net Banking details for payment"
                ]
            },
            eligibility: {
                id: "eligibility",
                title: "Eligibility Criteria",
                content: "Strict eligibility criteria apply for BITSAT.",
                list: [
                    "Candidate should have passed Class 12th examination with Physics, Chemistry, and Mathematics.",
                    "Minimum 75% aggregate in PCM/PCB.",
                    "Minimum 60% in each subject (Physics, Chemistry, Math/Bio).",
                    "Proficiency in English."
                ]
            },
            about: {
                id: "about",
                title: "About Exam",
                content: "BITSAT is unique because it allows candidates to improve their score by attempting 'Bonus Questions' if they finish the main paper early. It tests not just knowledge but also time management and decision making."
            },
            pattern: {
                id: "pattern",
                title: "Exam Pattern",
                content: "The paper consists of 130 multiple choice questions. +3 for correct answer, -1 for incorrect.",
                table: [
                    { label: "Physics", value: "30 Questions" },
                    { label: "Chemistry", value: "30 Questions" },
                    { label: "English & Logical Reasoning", value: "10 + 20 Questions" },
                    { label: "Mathematics/Biology", value: "40 Questions" },
                    { label: "Total", value: "130 Questions" }
                ]
            },
            counselling: {
                id: "counselling",
                title: "Counselling Process",
                content: "Admissions are purely merit-based on BITSAT score. There is no reservation policy. Counselling takes place in multiple iterations (usually 4-6 rounds) where seats are allotted based on preference order and score."
            },
            faq: [
                { question: "Is there a reservation policy?", answer: "No, BITS Pilani does not have any reservation policy. Admissions are purely on merit." },
                { question: "Can I apply for both sessions?", answer: "Yes, candidates can appear for Session 1 or Session 2 or both. The best score will be considered." }
            ]
        }
    },
    {
        id: "wbjee",
        slug: "wbjee-2026",
        title: "WBJEE 2026",
        description: "West Bengal Joint Entrance Examination (WBJEE) is the gateway for admission to Engineering and Pharmacy courses in West Bengal.",
        logoUrl: "/footer-logo.jpg",
        sections: {
            introduction: {
                id: "intro",
                title: "Introduction",
                content: "WBJEE is a state-level entrance exam conducted by WBJEEB. It is widely popular for admissions into top colleges like Jadavpur University and Calcutta University."
            },
            overview: {
                id: "overview",
                title: "Overview",
                content: "The exam is conducted in offline (OMR) mode. It relies heavily on Mathematics.",
                table: [
                    { label: "Exam Name", value: "WBJEE 2026" },
                    { label: "Level", value: "State Level" },
                    { label: "Mode", value: "Offline (Pen & Paper)" }
                ]
            },
            importantDates: {
                id: "dates",
                title: "Important Dates",
                content: "Tentative timeline.",
                table: [
                    { label: "Application Start", value: "December 2025" },
                    { label: "Exam Date", value: "April 2026" }
                ]
            },
            applicationProcess: {
                id: "application",
                title: "Application",
                content: "Apply via wbjeeb.nic.in. Registration, Form Fill-up, Image Upload, and Payment."
            },
            documents: {
                id: "docs",
                title: "Documents",
                content: "Photo, Signature, and Left Thumb Impression."
            },
            eligibility: {
                id: "eligibility",
                title: "Eligibility",
                content: "Must be a citizen of India. Minimum 17 years of age. passed 10+2 with Physics and Math."
            },
            about: {
                id: "about",
                title: "About",
                content: "Known for its high standard of Mathematics questions."
            },
            pattern: {
                id: "pattern",
                title: "Pattern",
                content: "Two papers: Paper I (Maths - 100 marks) and Paper II (Physics & Chemistry - 100 marks)."
            },
            counselling: {
                id: "counselling",
                title: "Counselling",
                content: "Centralized counselling (e-Counselling) conducted by WBJEEB."
            },
            faq: [
                { question: "Is Domicile required?", answer: "Domicile is required for admission to Government colleges and Tuition Fee Waiver (TFW) seats." }
            ]
        }
    }
];

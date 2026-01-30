import { notFound } from "next/navigation";
import { exams } from "@/lib/data";
import ExamDetailContent from "./ExamDetailContent";

export function generateStaticParams() {
    return exams.map((exam) => ({
        slug: exam.slug,
    }));
}

// In Next.js 15+, params is a Promise
interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ExamDetailPage(props: PageProps) {
    const params = await props.params;
    const exam = exams.find((e) => e.slug === params.slug);

    if (!exam) {
        notFound();
    }

    return <ExamDetailContent exam={exam} />;
}

import { notFound } from "next/navigation";
import { exams } from "@/lib/data";
import ExamDetailContent from "./ExamDetailContent";

export function generateStaticParams() {
    return exams.map((exam) => ({
        slug: exam.slug,
    }));
}

export default function ExamDetailPage({ params }: { params: { slug: string } }) {
    const exam = exams.find((e) => e.slug === params.slug);

    if (!exam) {
        notFound();
    }

    return <ExamDetailContent exam={exam} />;
}

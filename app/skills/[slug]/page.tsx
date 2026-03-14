import SkillCard from "@/components/SkillCard";
import { getSkillBySlug, skills } from "@/data/skills";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const skill = getSkillBySlug(slug);

    return {
        title: skill
            ? `${skill.name} — GLM Catalog`
            : "Skill Not Found — GLM Catalog",
        description: skill
            ? `${skill.content.substring(0, 160)}...`
            : "Skill not found",
    };
}

export async function generateStaticParams() {
    return skills.map((skill) => ({
        slug: skill.slug,
    }));
}

export default async function SkillDetailPage({
    params,
}: {
    params: Params;
}) {
    const { slug } = await params;
    const skill = getSkillBySlug(slug);

    if (!skill) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                <h1 className="text-2xl font-bold text-white">Skill not found</h1>
                <p className="mt-2 text-[#888]">
                    The skill you are looking for does not exist.
                </p>
                <Link
                    href="/skills"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[#00d4aa] hover:underline"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all skills
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-8">
            <Link
                href="/skills"
                className="fixed top-14 z-10 inline-flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to all skills
            </Link>
            <div className="mt-8">
                <SkillCard skill={skill} isPage={true} />
            </div>
        </div>
    );
}

export const revalidate = 86400;

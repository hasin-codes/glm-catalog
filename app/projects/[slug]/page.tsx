import Link from "next/link";
import { ArrowLeft, ExternalLink, Tag, User, Zap } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import Footer from "@/components/Footer";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    return {
        title: project
            ? `${project.name} — GLM Catalog`
            : "Project Not Found — GLM Catalog",
        description: project
            ? project.description
            : "Project not found",
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Params;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                <h1 className="text-2xl font-bold text-white">Project not found</h1>
                <p className="mt-2 text-[#888]">
                    The project you are looking for does not exist.
                </p>
                <Link
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-teal hover:underline"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all projects
                </Link>
            </div>
        );
    }

    return (
        <>
        <div className="mx-auto max-w-4xl px-6 py-8">
            {/* Back link */}
            <Link
                href="/projects"
                className="mb-8 inline-flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to all projects
            </Link>

            {/* Header */}
            <div>
                <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-2xl font-bold text-white">{project.name}</h1>
                    <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-0.5 text-xs font-medium text-teal">
                        {project.category}
                    </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#888]">
                    {project.description}
                </p>
            </div>

            {/* Author */}
            <div className="mt-6 flex items-center gap-2 text-sm text-[#666]">
                <User className="h-4 w-4" />
                {project.author.url ? (
                    <a
                        href={project.author.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888] transition-colors hover:text-white"
                    >
                        {project.author.name}
                    </a>
                ) : (
                    <span className="text-[#888]">{project.author.name}</span>
                )}
            </div>

            {/* Long Description */}
            <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#555]">
                    About
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#aaa]">
                    {project.longDescription}
                </p>
            </div>

            {/* Badges */}
            <div className="mt-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#555]">
                    Highlights
                </h2>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.badges.map((badge, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#0a0a0a] px-4 py-3"
                        >
                            <Zap className="h-4 w-4 shrink-0 text-[#ff5a00]" />
                            <span className="text-sm text-[#ccc]">{badge}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className="mt-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#555]">
                    Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111] px-3 py-1 text-xs text-[#888]"
                        >
                            <Tag className="h-3 w-3" />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Author Link */}
            {project.author.url && (
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href={project.author.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-card-surface-hover"
                    >
                        <User className="h-4 w-4" />
                        {project.author.name}
                        <ExternalLink className="h-3 w-3 text-[#555]" />
                    </a>
                </div>
            )}
        </div>
        <Footer />
        </>
    );
}

export const revalidate = 86400;

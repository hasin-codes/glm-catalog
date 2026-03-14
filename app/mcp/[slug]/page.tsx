import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Terminal, Tag, Zap, User } from "lucide-react";
import { getMCPBySlug, mcps } from "@/data/mcps";
import CopyButton from "@/components/CopyButton";
import ZreadIcon from "@/components/ZreadIcon";
import ZaiIcon from "@/components/ZaiIcon";
import ZhipuIcon from "@/components/ZhipuIcon";

function MCPIcon({ icon }: { icon: string }) {
    if (icon === "zread") return <ZreadIcon className="w-8 h-8 text-[#00d4aa]" />;
    if (icon === "zai") return <ZaiIcon className="w-8 h-8" />;
    if (icon === "zhipu") return <ZhipuIcon className="w-8 h-8" />;
    return <span className="text-3xl">{icon}</span>;
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const mcp = getMCPBySlug(slug);

    return {
        title: mcp
            ? `${mcp.name} — GLM Catalog`
            : "MCP Not Found — GLM Catalog",
        description: mcp
            ? mcp.description
            : "MCP server not found",
    };
}

export async function generateStaticParams() {
    return mcps.map((mcp) => ({
        slug: mcp.slug,
    }));
}

export default async function MCPDetailPage({
    params,
}: {
    params: Params;
}) {
    const { slug } = await params;
    const mcp = getMCPBySlug(slug);

    if (!mcp) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                <h1 className="text-2xl font-bold text-white">MCP not found</h1>
                <p className="mt-2 text-[#888]">
                    The MCP server you are looking for does not exist.
                </p>
                <Link
                    href="/mcp"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[#00d4aa] hover:underline"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all MCPs
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-4xl px-6 py-8">
            {/* Back link */}
            <Link
                href="/mcp"
                className="mb-8 inline-flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to all MCPs
            </Link>

            {/* Header */}
            <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5">
                    <MCPIcon icon={mcp.icon} />
                </div>
                <h1 className="text-2xl font-bold text-white">{mcp.name}</h1>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#888]">
                {mcp.description}
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-2 text-sm text-[#666]">
                <User className="h-4 w-4" />
                {mcp.author.url ? (
                    <a
                        href={mcp.author.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888] transition-colors hover:text-white"
                    >
                        {mcp.author.name}
                    </a>
                ) : (
                    <span className="text-[#888]">{mcp.author.name}</span>
                )}
            </div>

            {/* Long Description */}
            <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#555]">
                    About
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#aaa]">
                    {mcp.longDescription}
                </p>
            </div>

            {/* Install Command */}
            <div className="mt-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#555]">
                    Install
                </h2>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3">
                    <Terminal className="h-4 w-4 shrink-0 text-[#555]" />
                    <code className="flex-1 overflow-x-auto text-sm text-[#00d4aa] whitespace-nowrap">
                        {mcp.installCommand}
                    </code>
                    <CopyButton content={mcp.installCommand} />
                </div>
            </div>

            {/* Features */}
            <div className="mt-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#555]">
                    Features
                </h2>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {mcp.features.map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#0a0a0a] px-4 py-3"
                        >
                            <Zap className="h-4 w-4 shrink-0 text-[#00d4aa]" />
                            <span className="text-sm text-[#ccc]">{feature}</span>
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
                    {mcp.tags.map((tag) => (
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

            {/* Links */}
            {(mcp.githubUrl || mcp.author.url) && (
                <div className="mt-8 flex flex-wrap gap-3">
                    {mcp.githubUrl && (
                        <a
                            href={mcp.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-[#1a1a1a]"
                        >
                            <Github className="h-4 w-4" />
                            View on GitHub
                            <ExternalLink className="h-3 w-3 text-[#555]" />
                        </a>
                    )}
                    {mcp.author.url && (
                        <a
                            href={mcp.author.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-[#1a1a1a]"
                        >
                            <User className="h-4 w-4" />
                            {mcp.author.name}
                            <ExternalLink className="h-3 w-3 text-[#555]" />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export const revalidate = 86400;

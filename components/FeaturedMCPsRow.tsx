import Link from "next/link";
import { mcps } from "@/data/mcps";
import { skills } from "@/data/skills";
import ZreadIcon from "./ZreadIcon";
import ZaiIcon from "./ZaiIcon";
import ZhipuIcon from "./ZhipuIcon";

function MCPIcon({ icon }: { icon: string }) {
    if (icon === "zread") return <ZreadIcon className="w-4 h-4 text-[#ffffff]" />;
    if (icon === "zai") return <ZaiIcon className="w-4 h-4" />;
    if (icon === "zhipu") return <ZhipuIcon className="w-4 h-4" />;
    return <span className="text-base">{icon}</span>;
}

export default function FeaturedMCPsRow() {
    const featuredMCPs = mcps.filter((m) => m.featured);

    // Pick multiple skills across different categories
    const featuredSkills = [
        skills.find((s) => s.categorySlug === "frontend-dev"),
        skills.find((s) => s.categorySlug === "data-analytics"),
        skills.find((s) => s.categorySlug === "devops-advanced"),
        skills.find((s) => s.categorySlug === "backend-dev"),
        skills.find((s) => s.categorySlug === "api-development"),
        skills.find((s) => s.categorySlug === "aws-skills"),
        skills.find((s) => s.categorySlug === "ml-training"),
        skills.find((s) => s.categorySlug === "visual-content"),
    ].filter(Boolean);

    return (
        <section className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Featured</h2>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Featured MCPs Card */}
                <div className="rounded-xl border border-white/10 bg-[#111] p-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">{"Z.ai's MCP"}</h2>
                        <Link
                            href="/mcp"
                            className="text-sm text-[#888] transition-colors hover:text-white"
                        >
                            View all →
                        </Link>
                    </div>
                    <div className="mt-4 -mr-5 flex gap-2 overflow-x-auto pb-1 pr-5 pill-scroll">
                        {featuredMCPs.map((mcp) => (
                            <Link
                                key={mcp.id}
                                href={`/mcp/${mcp.slug}`}
                                className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[#1a1a1a] px-4 py-2 text-sm text-white transition-colors hover:border-white/20 hover:bg-[#222]"
                            >
                                <MCPIcon icon={mcp.icon} />
                                {mcp.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Featured Skills Card */}
                <div className="rounded-xl border border-white/10 bg-[#111] p-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">Agent Skills</h2>
                        <Link
                            href="/skills"
                            className="text-sm text-[#888] transition-colors hover:text-white"
                        >
                            View all →
                        </Link>
                    </div>
                    <div className="mt-4 -mr-5 flex gap-2 overflow-x-auto pb-1 pr-5 pill-scroll">
                        {featuredSkills.map((skill) => (
                            <Link
                                key={skill!.slug}
                                href={`/skills/${skill!.slug}`}
                                className="shrink-0 rounded-full border border-white/10 bg-[#1a1a1a] px-4 py-2 text-sm text-white transition-colors hover:border-white/20 hover:bg-[#222]"
                            >
                                {skill!.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

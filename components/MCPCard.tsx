import Link from "next/link";
import type { MCP } from "@/data/mcps";
import ZreadIcon from "./ZreadIcon";
import ZaiIcon from "./ZaiIcon";
import ZhipuIcon from "./ZhipuIcon";

interface MCPCardProps {
    mcp: MCP;
}

function MCPIcon({ icon }: { icon: string }) {
    if (icon === "zread") return <ZreadIcon className="w-6 h-6 text-[#ffffff]" />;
    if (icon === "zai") return <ZaiIcon className="w-6 h-6" />;
    if (icon === "zhipu") return <ZhipuIcon className="w-6 h-6" />;
    return <span className="text-xl">{icon}</span>;
}

export default function MCPCard({ mcp }: MCPCardProps) {
    return (
        <Link href={`/mcp/${mcp.slug}`} className="group block">
            <div className="group rounded-xl border border-white/10 bg-[#111] p-6 transition-all hover:border-white/20 hover:bg-[#151515]">
                {/* Icon + Name + Category */}
                <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <MCPIcon icon={mcp.icon} />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold text-white">
                            {mcp.name}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#666]">
                    {mcp.description}
                </p>

                {/* Install command hint */}
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/5 bg-[#0a0a0a] px-3 py-2">
                    <code className="flex-1 truncate text-xs text-[#ffffff]/70">
                        {mcp.installCommand}
                    </code>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {mcp.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] text-[#888]"
                        >
                            {tag}
                        </span>
                    ))}
                    {mcp.tags.length > 3 && (
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] text-[#888]">
                            +{mcp.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}

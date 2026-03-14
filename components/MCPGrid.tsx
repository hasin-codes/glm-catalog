"use client";

import { useState, useMemo } from "react";
import { mcps } from "@/data/mcps";
import MCPCard from "./MCPCard";
import SearchBar from "./SearchBar";

export default function MCPGrid() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMcps = useMemo(() => {
        if (!searchQuery) return mcps;
        const q = searchQuery.toLowerCase();
        return mcps.filter(
            (m) =>
                m.name.toLowerCase().includes(q) ||
                m.description.toLowerCase().includes(q) ||
                m.tags.some((t) => t.toLowerCase().includes(q))
        );
    }, [searchQuery]);

    return (
        <div>
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 pt-12 pb-4">
                <h1 className="text-2xl font-semibold text-white">MCP Servers</h1>
                <p className="mt-2 text-sm text-[#888]">
                    Discover Model Context Protocol servers to extend your AI workflow. Browse, search, and install with a single command.
                </p>
            </section>

            {/* Search */}
            <section className="mx-auto max-w-7xl px-6 pb-6">
                <SearchBar
                    placeholder="Search MCP servers by name or tag..."
                    value={searchQuery}
                    onChange={setSearchQuery}
                    className="max-w-lg"
                />
            </section>

            {/* All / Filtered MCPs */}
            <section className="mx-auto max-w-7xl px-6 pb-16">
                {searchQuery && (
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#555]">
                        Results
                    </h2>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredMcps.map((mcp) => (
                        <MCPCard key={mcp.id} mcp={mcp} />
                    ))}
                </div>

                {filteredMcps.length === 0 && (
                    <div className="py-20 text-center text-[#555]">
                        No MCPs found matching &ldquo;{searchQuery}&rdquo;
                    </div>
                )}
            </section>
        </div>
    );
}

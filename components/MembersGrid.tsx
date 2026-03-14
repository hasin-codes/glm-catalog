"use client";

import { useState } from "react";
import { members } from "@/data/members";
import MemberCard from "./MemberCard";
import SearchBar from "./SearchBar";

export default function MembersGrid() {
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = searchQuery
        ? members.filter((m) =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : members;

    return (
        <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-white">Members</h1>
                    <p className="mt-2 text-sm text-[#888]">
                        Browse {members.length} community members
                    </p>
                </div>
                <button className="rounded-lg border border-[#ffffff]/30 bg-[#ffffff]/10 px-4 py-2 text-sm font-medium text-[#ffffff] transition-colors hover:bg-[#ffffff]/20">
                    Join the community
                </button>
            </div>

            <div className="mt-6">
                <SearchBar
                    placeholder="Search members..."
                    value={searchQuery}
                    onChange={setSearchQuery}
                    className="max-w-sm"
                />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="py-20 text-center text-[#555]">
                    No members found matching &ldquo;{searchQuery}&rdquo;
                </div>
            )}
        </div>
    );
}

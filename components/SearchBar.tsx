"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export default function SearchBar({
    placeholder = "Search for a rule or MCP server...",
    value,
    onChange,
    className = "",
}: SearchBarProps) {
    return (
        <div className={`relative w-full max-w-2xl ${className}`}>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555]" />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 pl-11 text-sm text-white placeholder-[#555] outline-none transition-colors focus:border-[#ffffff]/50 focus:ring-1 focus:ring-[#ffffff]/20"
            />
        </div>
    );
}

"use client";

import { useState, useMemo } from "react";
import { Menu } from "lucide-react";
import RuleCard from "./RuleCard";
import Footer from "./Footer";
import { rules, getSections } from "@/data";
import SearchBar from "./SearchBar";

interface RulesGridProps {
  selectedTags: string[];
  onRemoveTag: (tag: string) => void;
  onClearTags: () => void;
  onAddTag: (tag: string) => void;
  selectingMode: boolean;
  onToggleSelecting: () => void;
  onOpenSidebar: () => void;
}

export default function RulesGrid({ selectedTags, onRemoveTag, onClearTags, selectingMode, onToggleSelecting, onOpenSidebar }: RulesGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRules = useMemo(() => {
    let filtered = rules;

    if (selectedTags.length > 0) {
      filtered = filtered.filter((r) =>
        selectedTags.every((tag) => r.tags.includes(tag))
      );
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.content.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.libs.some((l) => l.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [selectedTags, searchQuery]);

  const groupedRules = useMemo(() => {
    if (selectedTags.length > 0) {
      return [{ tag: selectedTags.join(" + "), rules: filteredRules }];
    }

    const sections = getSections();
    const filteredSections = sections
      .map((section) => ({
        tag: section.tag,
        rules: section.rules.filter((r) =>
          filteredRules.some((fr) => fr.slug === r.slug)
        ),
      }))
      .filter((section) => section.rules.length > 0);

    return filteredSections;
  }, [filteredRules, selectedTags]);

  return (
    <div className="flex flex-col h-full">
      {/* Tab Group + Search — fixed */}
      <div className="shrink-0 mb-6 flex items-center justify-between gap-3">
        {/* Mobile filter button */}
        <button
          onClick={onOpenSidebar}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111] px-3 py-2 text-sm text-[#888] transition-colors hover:border-white/20 hover:text-white lg:hidden"
        >
          <Menu className="h-4 w-4" />
          Filter
        </button>

        {/* Desktop tab group */}
        <div className="hidden lg:inline-flex items-center rounded-lg border border-white/10 bg-[#111] p-0.5 gap-0.5">
          {/* All tab */}
          <button
            onClick={onClearTags}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedTags.length === 0
                ? "bg-[#ffffff] text-black"
                : "text-[#888] hover:text-white"
            }`}
          >
            All
          </button>

          {/* Selected tag tabs */}
          {selectedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onRemoveTag(tag)}
              className="rounded-md px-4 py-1.5 text-sm font-medium bg-[#ffffff] text-black transition-colors hover:bg-[#ffffff]/80"
            >
              {tag}
            </button>
          ))}

          {/* Add + tab */}
          {selectedTags.length < 5 && (
            <button
              onClick={onToggleSelecting}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                selectingMode
                  ? "bg-[#ffffff]/20 text-[#ffffff]"
                  : "text-[#888] hover:text-white"
              }`}
            >
              Add +
            </button>
          )}
        </div>

        {/* Search */}
        <SearchBar
          placeholder="Search rules..."
          value={searchQuery}
          onChange={setSearchQuery}
          className="ml-auto max-w-xs"
          compact
        />
      </div>

      {/* Grouped Rules + Footer — scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 pr-1">
        {groupedRules.map((group) => (
          <div key={group.tag} className="mb-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">{group.tag}</h2>
              <span className="text-sm text-[#888]">
                {group.rules.length} rules
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.rules.map((rule) => (
                <RuleCard key={rule.slug} rule={rule} />
              ))}
            </div>
          </div>
        ))}

        {groupedRules.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-[#888]">
            <p className="text-lg">No rules found</p>
            <p className="text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

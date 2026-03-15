"use client";

import { useState, useMemo } from "react";
import { Menu } from "lucide-react";
import { skills, skillCategories } from "@/data/skills";
import SkillCard from "./SkillCard";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

interface SkillGridProps {
  selectedCategory: string;
  onOpenSidebar?: () => void;
}

export default function SkillGrid({ selectedCategory, onOpenSidebar }: SkillGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    let result = skills;

    if (selectedCategory) {
      result = result.filter((s) => s.categorySlug === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const categoryName = selectedCategory
    ? skillCategories.find((c) => c.slug === selectedCategory)?.name || selectedCategory
    : "";

  return (
    <div className="flex flex-col h-full">
      {/* Header + Search — fixed */}
      <div className="shrink-0 mb-6 flex items-center justify-between gap-3">
        {/* Mobile filter button */}
        <button
          onClick={onOpenSidebar}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111] px-3 py-2 text-sm text-[#888] transition-colors hover:border-white/20 hover:text-white lg:hidden"
        >
          <Menu className="h-4 w-4" />
          Filter
        </button>

        {/* Desktop category title */}
        <h2 className="hidden lg:block text-lg font-semibold text-white">
          {selectedCategory ? categoryName : "All Skills"}
        </h2>

        <SearchBar
          placeholder="Search skills..."
          value={searchQuery}
          onChange={setSearchQuery}
          className="ml-auto max-w-xs"
          compact
        />
      </div>

      {/* Skills Grid — scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 pr-1">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-[#888]">
            <p className="text-lg">No skills found</p>
            <p className="text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

"use client";

import { skillCategories, skills } from "@/data/skills";

interface SkillsSidebarProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export default function SkillsSidebar({ selectedCategory, onSelectCategory }: SkillsSidebarProps) {
  return (
    <aside className="w-52 shrink-0 h-full">
      <div className="sidebar-scroll h-full rounded-xl border border-white/10 bg-[#111]">
        <nav className="p-3 space-y-0.5">
          {/* All */}
          <button
            onClick={() => onSelectCategory("all")}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-sm transition-colors ${
              selectedCategory === ""
                ? "bg-[#ffffff]/10 font-medium text-[#ffffff] cursor-default"
                : "text-[#888] hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>All</span>
            <span className="text-xs text-[#555]">{skills.length}</span>
          </button>

          {skillCategories.map((cat) => {
            const count = skills.filter((s) => s.categorySlug === cat.slug).length;
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => onSelectCategory(cat.slug)}
                disabled={isActive}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-[#ffffff]/10 font-medium text-[#ffffff] cursor-default"
                    : "text-[#888] hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs text-[#555]">{count}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

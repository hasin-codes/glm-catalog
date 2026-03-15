"use client";

import { X } from "lucide-react";
import { skillCategories, skills } from "@/data/skills";

interface SkillsSidebarProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function SkillsSidebar({ selectedCategory, onSelectCategory, isOpen, onClose }: SkillsSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-14 left-0 bottom-0 z-60 w-64 shrink-0 transform bg-[#0a0a0a] p-4 transition-transform duration-300 lg:static lg:z-auto lg:top-0 lg:w-52 lg:translate-x-0 lg:bg-transparent lg:p-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-1.5 text-[#888] transition-colors hover:bg-white/10 hover:text-white lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>

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
    </>
  );
}

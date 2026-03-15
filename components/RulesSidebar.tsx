"use client";

import { getSections } from "@/data";
import { Plus, X } from "lucide-react";

interface RulesSidebarProps {
  selectedTags: string[];
  onAddTag: (tag: string) => void;
  selectingMode: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function RulesSidebar({ selectedTags, onAddTag, selectingMode, isOpen, onClose }: RulesSidebarProps) {
  const sections = getSections();

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

        <div
          className={`sidebar-scroll h-full rounded-xl border bg-[#111] transition-all duration-300 ${
            selectingMode
              ? "border-[#ffffff]/60 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              : "border-white/10"
          }`}
        >
          <nav className="p-3 space-y-0.5">
            {sections.map((section) => {
              const isActive = selectedTags.includes(section.tag);
              const isFull = selectedTags.length >= 5;
              return (
                <button
                  key={section.tag}
                  onClick={() => onAddTag(section.tag)}
                  disabled={isActive || isFull}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[#ffffff]/10 font-medium text-[#ffffff] cursor-default"
                      : isFull
                        ? "text-[#444] cursor-not-allowed"
                        : selectingMode
                          ? "text-[#aaa] hover:bg-[#ffffff]/10 hover:text-[#ffffff]"
                          : "text-[#888] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {!isActive && !isFull && <Plus className="w-3 h-3 opacity-40" />}
                    {section.tag}
                  </span>
                  <span className="text-xs text-[#555]">{section.rules.length}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

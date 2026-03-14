"use client";

import Link from "next/link";
import type { Skill } from "@/data/skills";
import { cn } from "@/lib/utils";
import CopyButton from "./CopyButton";
import SkillShareButton from "./SkillShareButton";

interface SkillCardProps {
  skill: Skill;
  isPage?: boolean;
}

export default function SkillCard({ skill, isPage }: SkillCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border border-white/10 bg-[#111] transition-all hover:border-white/20 overflow-hidden",
        isPage && "max-w-4xl mx-auto"
      )}
    >
      {/* Copy + Share Buttons */}
      <div className={cn(
        "absolute right-3 top-3 z-10 flex gap-2 transition-opacity",
        isPage ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}>
        <SkillShareButton slug={skill.slug} />
        <CopyButton content={skill.content} />
      </div>

      {/* Content */}
      <div className="flex-1 p-5 min-w-0">
        <Link href={`/skills/${skill.slug}`}>
          <pre
            className={cn(
              "whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-[#999] hover:text-[#bbb] transition-colors text-left",
              !isPage ? "line-clamp-5" : "line-clamp-none"
            )}
          >
            {skill.content}
          </pre>
        </Link>
      </div>

      {/* Footer */}
      <div className={cn(
        "border-t border-white/5 px-5 min-w-0 flex items-center gap-3",
        isPage ? "py-3 flex-col !items-start space-y-2" : "py-2.5"
      )}>
        {/* Title + Author row — only on detail page */}
        {isPage && (
          <div className="flex items-center gap-3 min-w-0 w-full">
            <h3 className="text-base font-semibold text-white flex-1 min-w-0">{skill.name}</h3>
            {skill.author && (
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-sm text-[#888]">{skill.author}</span>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex items-center gap-1.5 overflow-hidden min-w-0 flex-1">
          {(() => {
            const visibleCount = isPage ? skill.tags.length : 4;
            const visible = skill.tags.slice(0, visibleCount);
            const remaining = skill.tags.length - visibleCount;
            return (
              <>
                {visible.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap flex-shrink-0 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-[#888]"
                  >
                    {tag}
                  </span>
                ))}
                {remaining > 0 && (
                  <span className="text-[10px] text-[#666] whitespace-nowrap flex-shrink-0">
                    +{remaining}
                  </span>
                )}
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

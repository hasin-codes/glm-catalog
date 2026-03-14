"use client";

import Image from "next/image";
import Link from "next/link";
import type { Rule } from "@/data";
import { cn, isImageUrl } from "@/lib/utils";
import CopyButton from "./CopyButton";
import ShareButton from "./ShareButton";

interface RuleCardProps {
  rule: Rule;
  isPage?: boolean;
}

export default function RuleCard({ rule, isPage }: RuleCardProps) {

  return (
    <div
      className={cn(
        // ✅ Added overflow-hidden to prevent any child from bleeding out
        "group relative flex flex-col rounded-xl border border-white/10 bg-[#111] transition-all hover:border-white/20 overflow-hidden",
        isPage && "max-w-4xl mx-auto"
      )}
    >
      {/* Copy + Share Buttons */}
      <div className="absolute right-3 top-3 z-10 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <ShareButton slug={rule.slug} />
        <CopyButton content={rule.content} />
      </div>

      {/* Content */}
      <div className="flex-1 p-5 min-w-0">
        <Link href={`/rules/${rule.slug}`}>
          <pre
            className={cn(
              "whitespace-pre-wrap wrap-break-word font-mono text-xs leading-relaxed text-[#999] hover:text-[#bbb] transition-colors text-left",
              !isPage ? "line-clamp-5" : "line-clamp-none"
            )}
          >
            {rule.content}
          </pre>
        </Link>
      </div>

      {/* Footer */}
      <div className={cn(
        "border-t border-white/5 px-5 min-w-0 flex items-center gap-3",
        isPage ? "py-3 flex-col items-start! space-y-2" : "py-2.5"
      )}>
        {/* Author row — only on detail page */}
        {isPage && (
          <div className="flex items-center gap-3 min-w-0 w-full">
            <h3 className="text-base font-semibold text-white flex-1 min-w-0">{rule.title}</h3>
            {rule.author && (
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm text-[#888]">{rule.author.name}</span>
                {rule.author.avatar && isImageUrl(rule.author.avatar) && (
                  <Image
                    src={rule.author.avatar}
                    alt={rule.author.name}
                    width={24}
                    height={24}
                    className="size-6 rounded-full shrink-0"
                  />
                )}
              </div>
            )}
          </div>
        )}

        {/* Tags + Libs — single line, single +N overflow */}
        <div className="flex items-center gap-1.5 overflow-hidden min-w-0 flex-1">
          {(() => {
            const allPills = [
              ...rule.tags.map((t) => ({ label: t, type: "tag" as const })),
              ...(rule.libs || []).map((l) => ({ label: l, type: "lib" as const })),
            ];
            const visibleCount = isPage ? allPills.length : 4;
            const visible = allPills.slice(0, visibleCount);
            const remaining = allPills.length - visibleCount;
            return (
              <>
                {visible.map((pill) => (
                  <span
                    key={`${pill.type}-${pill.label}`}
                    className={cn(
                      "whitespace-nowrap shrink-0",
                      pill.type === "tag"
                        ? "rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-[#888]"
                        : "text-[10px] text-[#666] font-mono"
                    )}
                  >
                    {pill.label}
                  </span>
                ))}
                {remaining > 0 && (
                  <span className="text-[10px] text-[#666] whitespace-nowrap shrink-0">
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
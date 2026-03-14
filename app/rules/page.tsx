"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import RulesSidebar from "@/components/RulesSidebar";
import RulesGrid from "@/components/RulesGrid";

function RulesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const q = searchParams.get("q") || "";
    const selectedTags = q ? q.split(",").filter(Boolean) : [];
    const [selectingMode, setSelectingMode] = useState(false);

    function addTag(tag: string) {
        if (selectedTags.includes(tag) || selectedTags.length >= 5) return;
        const next = [...selectedTags, tag];
        router.push(`${pathname}?q=${next.join(",")}`);
        setSelectingMode(false);
    }

    function removeTag(tag: string) {
        const next = selectedTags.filter((t) => t !== tag);
        router.push(next.length ? `${pathname}?q=${next.join(",")}` : pathname);
    }

    function clearTags() {
        router.push(pathname);
        setSelectingMode(false);
    }

    function toggleSelecting() {
        setSelectingMode((prev) => !prev);
    }

    return (
        <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6 h-full overflow-hidden">
            <RulesSidebar selectedTags={selectedTags} onAddTag={addTag} selectingMode={selectingMode} />
            <div className="flex-1 min-w-0">
                <RulesGrid
                    selectedTags={selectedTags}
                    onRemoveTag={removeTag}
                    onClearTags={clearTags}
                    onAddTag={addTag}
                    selectingMode={selectingMode}
                    onToggleSelecting={toggleSelecting}
                />
            </div>
        </div>
    );
}

export default function RulesPage() {
    return (
        <Suspense>
            <RulesContent />
        </Suspense>
    );
}

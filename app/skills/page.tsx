"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SkillsSidebar from "@/components/SkillsSidebar";
import SkillGrid from "@/components/SkillGrid";

function SkillsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const q = searchParams.get("q") || "";

    function selectCategory(slug: string) {
        if (slug === "all") {
            router.push(pathname);
        } else {
            router.push(`${pathname}?q=${slug}`);
        }
    }

    return (
        <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6 h-full overflow-hidden">
            <SkillsSidebar
                selectedCategory={q}
                onSelectCategory={selectCategory}
            />
            <div className="flex-1 min-w-0">
                <SkillGrid selectedCategory={q} />
            </div>
        </div>
    );
}

export default function SkillsPage() {
    return (
        <Suspense>
            <SkillsContent />
        </Suspense>
    );
}

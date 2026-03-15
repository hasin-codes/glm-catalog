"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0a]">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        <Image
                            src="/logo.svg"
                            alt="GLM Catalog"
                            width={20}
                            height={20}
                            className="rounded"
                        />
                        <span className="font-mono text-sm font-semibold text-[#888] transition-colors hover:text-white">
                            GLM Catalog
                        </span>
                    </Link>
                    <nav className="flex gap-4">
                        {["Rules", "MCPs", "About"].map((link) => (
                            <Link
                                key={link}
                                href={`/${link.toLowerCase()}`}
                                className="text-xs text-[#555] transition-colors hover:text-[#888]"
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

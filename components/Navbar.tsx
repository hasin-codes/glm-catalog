"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
    { href: "/rules", label: "Rules" },
    { href: "/skills", label: "Skills" },
    { href: "/mcp", label: "MCPs" },
    { href: "/projects", label: "Projects" },
    { href: "/generate", label: "Generate" },
    { href: "/events", label: "Events" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={`sticky top-0 z-50 w-full border-b border-white/10 ${
            pathname.startsWith("/rules")
                ? "bg-[#0a0a0a]"
                : "bg-[#0a0a0a]/80 backdrop-blur-xl"
        }`}>
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-mono text-sm font-semibold tracking-tight text-white transition-colors hover:text-[#ffffff]"
                >
                    GLM Catalog
                </Link>

                {/* Nav Links */}
                <div className="hidden items-center gap-1 md:flex">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${pathname.startsWith(link.href)
                                    ? "text-white"
                                    : "text-[#888] hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Z.ai For Startup */}
                <a
                    href="https://startup.z.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/20 bg-transparent px-4 py-1.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                    Z.ai For Startup
                </a>
            </div>
        </nav>
    );
}

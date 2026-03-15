"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
    const [isActive, setIsActive] = useState(false);
    const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const scrollDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isTouching = useRef(false);
    const navRef = useRef<HTMLElement>(null);

    const isHomePage = pathname === "/";

    const resetToIdle = useCallback(() => {
        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
        inactivityTimer.current = setTimeout(() => {
            if (!isTouching.current) setIsActive(false);
        }, 1500);
    }, []);

    // Scroll detection with debounce
    useEffect(() => {
        if (isHomePage) return;

        function handleScroll() {
            if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
            scrollDebounce.current = setTimeout(() => {
                setIsActive(true);
                resetToIdle();
            }, 50);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
        };
    }, [isHomePage, resetToIdle]);

    // Touch detection
    useEffect(() => {
        if (isHomePage) return;

        function handleTouchStart(e: TouchEvent) {
            const insideNav = navRef.current?.contains(e.target as Node);
            // Always hold the active state while finger is down (even on the CTA button),
            // but only *trigger* activation from touches outside the navbar.
            isTouching.current = true;
            if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
            if (!insideNav) setIsActive(true);
        }

        function handleTouchEnd() {
            isTouching.current = false;
            resetToIdle();
        }

        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });
        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isHomePage, resetToIdle]);

    // Reset on route change
    const [prevPathname, setPrevPathname] = useState(pathname);
    if (prevPathname !== pathname) {
        setPrevPathname(pathname);
        setIsActive(false);
    }

    // Cleanup timers on route change
    useEffect(() => {
        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
        if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
    }, [pathname]);

    // Cleanup timers on unmount
    useEffect(() => {
        return () => {
            if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
            if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className={`sticky top-0 z-50 w-full border-b border-white/10 ${
                pathname.startsWith("/rules")
                    ? "bg-[#0a0a0a]"
                    : "bg-[#0a0a0a]/80 backdrop-blur-xl"
            }`}
        >
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-mono text-sm font-semibold tracking-tight text-white transition-colors hover:text-[#ffffff]"
                >
                    GLM Catalog
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden items-center gap-1 md:flex">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                pathname.startsWith(link.href)
                                    ? "text-white"
                                    : "text-[#888] hover:text-white"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/*
                 * Mobile swap container
                 * h-8 + overflow-hidden clips both layers.
                 * Nav links live at translateY(0) normally and exit to translateY(-100%) upward.
                 * CTA starts at translateY(100%) below and rises to translateY(0) when active.
                 * Both transitions run simultaneously — one goes up, the other comes up from below.
                 */}
                <div className="relative h-8 overflow-hidden md:hidden" style={{ minWidth: "max-content" }}>
                    {/* State A — Nav links (idle / home page) */}
                    <div
                        className={`flex items-center gap-0.5 transition-all duration-300 ease-in-out ${
                            isActive
                                ? "-translate-y-full opacity-0"
                                : "translate-y-0 opacity-100"
                        }`}
                    >
                        {mainLinks
                            .filter((link) => link.href !== "/generate" && link.href !== "/events")
                            .map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`rounded-md px-1.5 py-1 text-[11px] font-medium transition-colors ${
                                        pathname.startsWith(link.href)
                                            ? "text-white"
                                            : "text-[#888] hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                    </div>

                    {/* State B — CTA button (active / scrolling / touching) */}
                    <div
                        className={`absolute inset-0 flex items-center justify-end transition-all duration-300 ease-in-out ${
                            isActive
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                        }`}
                    >
                        <a
                            href="https://startup.z.ai?src=ambassador=83539546/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-white/20 bg-transparent px-4 py-1.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
                        >
                            Z.ai For Startup
                        </a>
                    </div>
                </div>

                {/* Desktop CTA */}
                <a
                    href="https://startup.z.ai?src=ambassador=83539546/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-lg border border-white/20 bg-transparent px-4 py-1.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5 md:block"
                >
                    Z.ai For Startup
                </a>
            </div>
        </nav>
    );
}
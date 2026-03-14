"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ data }: { data: Project }) {
  return (
    <Link href={`/projects/${data.slug}`} className="block h-full">
      <div className="group relative flex h-32.5 flex-row rounded-xl border border-white/10 bg-[#111] transition-all hover:border-white/20 hover:bg-[#151515] overflow-hidden">

        {/* LEFT SECTION */}
        <div className="flex flex-col flex-1 p-4 justify-between min-w-0 z-10">
          <div>
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <h3 className="text-sm font-semibold text-white truncate" title={data.name}>
                {data.name}
              </h3>
              {data.category && (
                <span className="shrink-0 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-[#888]">
                  {data.category}
                </span>
              )}
            </div>
            <p className="text-xs text-[#999] line-clamp-2 leading-relaxed mb-3 pr-2">
              {data.description}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 mt-auto">
            {/* Link pills */}
            <div className="flex items-center gap-1.5 overflow-hidden min-w-0">
              {data.githubUrl && (
                <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-[#888] whitespace-nowrap shrink-0">
                  <Github className="w-2.5 h-2.5" />
                  GitHub
                </span>
              )}
              {data.demoUrl && (
                <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-[#888] whitespace-nowrap shrink-0">
                  <ExternalLink className="w-2.5 h-2.5" />
                  Demo
                </span>
              )}
            </div>

            {/* Author */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] text-[#666] truncate max-w-25">
                {data.author.name}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Thumbnail */}
        <div className="relative w-27.5 sm:w-35 shrink-0 p-2.5 flex items-center justify-center isolate overflow-hidden">
          {/* Subtle Background Differentiation */}
          <div className="absolute inset-0 bg-[#080808] border-l border-white/5 opacity-50 z-0" />

          {/* Cyberpunk/Tech Grid */}
          <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-size-[10px_10px]" />

          {/* Image Container with Floating Effect */}
          <div className="relative w-full h-full rounded-md border border-white/10 overflow-hidden shadow-2xl z-10 group-hover:border-[#555] transition-colors duration-500">
            {/* Scanlines Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-overlay bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_4px)]" />

            {/* Colored Glare/Vignette */}
            <div className="absolute inset-0 z-20 bg-linear-to-tr from-black/80 via-transparent to-black/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />

            {/* Image */}
            <Image
              src={data.thumbnail}
              alt={data.name}
              fill
              className="object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>

          {/* Futuristic Corner Accents */}
          <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-[#666] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-[#666] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>

      </div>
    </Link>
  );
}

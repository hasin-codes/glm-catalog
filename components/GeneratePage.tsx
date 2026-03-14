"use client";

import { Upload, Lock } from "lucide-react";

const techCards = [
    {
        name: "React",
        description:
            "React is a JavaScript library for building user interfaces with a component-based architecture and virtual DOM.",
    },
    {
        name: "TypeScript",
        description:
            "TypeScript adds static typing to JavaScript, enabling better tooling, error detection, and code maintainability.",
    },
    {
        name: "Next.js",
        description:
            "Next.js is a React framework that enables server-side rendering, static site generation, and API routes.",
    },
    {
        name: "Python",
        description:
            "Python is a versatile language for AI/ML, data science, web development, and automation.",
    },
    {
        name: "GLM",
        description:
            "GLM models provide powerful language understanding and generation capabilities for AI applications.",
    },
    {
        name: "TailwindCSS",
        description:
            "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
];

export default function GeneratePage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16">
            {/* Title */}
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-white">
                    Generate Z.ai Project Rules
                </h1>
                <p className="mt-3 text-sm text-[#888]">
                    Generate the new .mdc files for your project by uploading your
                    .rules, package.json, requirements.txt, or other project files.
                </p>
            </div>

            {/* Upload Dropzone (gated) */}
            <div className="relative mt-10">
                {/* Blurred overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-[#111]/80 backdrop-blur-sm">
                    <Lock className="mb-2 h-5 w-5 text-[#888]" />
                    <p className="text-sm text-[#888]">
                        Coming soon
                    </p>
                </div>

                {/* Dropzone UI */}
                <div className="rounded-xl border-2 border-dashed border-white/10 bg-[#111] p-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                            <Upload className="h-8 w-8 text-[#555]" />
                        </div>
                        <p className="mt-4 text-sm text-[#888]">
                            Drag & drop your project files here
                        </p>
                        <p className="mt-1 text-xs text-[#555]">
                            Or click to browse files
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Tag Cards */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techCards.map((tech) => (
                    <div
                        key={tech.name}
                        className="rounded-xl border border-white/10 bg-[#111] p-5 transition-all hover:border-white/20"
                    >
                        <p className="text-xs leading-relaxed text-[#666]">
                            {tech.description}
                        </p>
                        <p className="mt-3 text-sm font-semibold text-[#ffffff]">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

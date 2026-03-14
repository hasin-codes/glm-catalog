import Image from "next/image";

export default function AboutSection() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="flex items-center gap-4">
                <Image
                    src="/logo.svg"
                    alt="GLM Catalog"
                    width={40}
                    height={40}
                    className="rounded"
                />
                <h1 className="text-3xl font-semibold text-white">About GLM Catalog</h1>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#888]">
                The community-driven platform for Z.ai and GLM developers.
            </p>

            {/* Why We Built This */}
            <section className="mt-12">
                <h2 className="text-xl font-semibold text-white">Why We Built This</h2>
                <div className="mt-4 rounded-xl border border-white/10 bg-[#111] p-6">
                    <p className="text-sm leading-relaxed text-[#999]">
                        Z.ai and GLM models are transforming how developers build software.
                        But the ecosystem was fragmented — rules scattered across repos,
                        MCP servers hard to discover, and no central place for the community
                        to connect. We built GLM Catalog to change that.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#999]">
                        {"Whether you're looking for the perfect rules file, discovering new "}
                        MCP integrations, or connecting with fellow Z.ai enthusiasts, this
                        is your home base.
                    </p>
                </div>
            </section>

            {/* Credits */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold text-white">Credits & Attributions</h2>
                <p className="mt-2 text-sm text-[#888]">
                    GLM Catalog stands on the shoulders of these amazing open-source projects and their contributors.
                </p>
                <div className="mt-4 space-y-4">
                    {/* Cursor Rules */}
                    <div className="rounded-xl border border-white/10 bg-[#111] p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg">
                                📜
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-sm font-semibold text-white">Cursor Rules</h3>
                                <p className="mt-1 text-xs leading-relaxed text-[#666]">
                                    The rules collection in GLM Catalog was originally sourced from and inspired by the{" "}
                                    <a
                                        href="https://github.com/richardsondx/cursor.directory/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ffffff] underline underline-offset-2 transition-colors hover:text-[#dddddd]"
                                    >
                                        cursor.directory
                                    </a>{" "}
                                    project by{" "}
                                    <a
                                        href="https://github.com/richardsondx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ffffff] underline underline-offset-2 transition-colors hover:text-[#dddddd]"
                                    >
                                        @richardsondx
                                    </a>
                                    . This incredible open-source directory curates Cursor rules across dozens of frameworks, languages, and tools — making it easier for developers to find and use high-quality AI coding rules. We imported, adapted, and expanded upon this collection to work within the GLM Catalog ecosystem.
                                </p>
                                <a
                                    href="https://github.com/richardsondx/cursor.directory/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs text-[#888] transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    View cursor.directory →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="rounded-xl border border-white/10 bg-[#111] p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg">
                                🧠
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-sm font-semibold text-white">Agent Skills</h3>
                                <p className="mt-1 text-xs leading-relaxed text-[#666]">
                                    The skills collection in GLM Catalog was sourced from and inspired by the{" "}
                                    <a
                                        href="https://github.com/jeremylongshore/claude-code-plugins-plus-skills"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ffffff] underline underline-offset-2 transition-colors hover:text-[#dddddd]"
                                    >
                                        claude-code-plugins-plus-skills
                                    </a>{" "}
                                    project by{" "}
                                    <a
                                        href="https://github.com/jeremylongshore"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ffffff] underline underline-offset-2 transition-colors hover:text-[#dddddd]"
                                    >
                                        @jeremylongshore
                                    </a>
                                    . This comprehensive repository provides a rich set of plugins and skills for AI coding assistants, covering areas like ML training, security, DevOps, testing, visual content, and much more. We adapted and integrated these skills into the GLM Catalog to empower Z.ai developers with a wide range of capabilities.
                                </p>
                                <a
                                    href="https://github.com/jeremylongshore/claude-code-plugins-plus-skills"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs text-[#888] transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    View claude-code-plugins-plus-skills →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

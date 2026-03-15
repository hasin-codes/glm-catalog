import { mcps } from "@/data/mcps";
import MCPCard from "./MCPCard";
import Footer from "./Footer";

export default function MCPGrid() {
    return (
        <div>
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 pt-12 pb-4">
                <h1 className="text-2xl font-semibold text-white">MCPs by Z.ai</h1>
                <p className="mt-2 text-sm text-[#888]">
                    Official Model Context Protocol servers built by Z.ai to extend your AI workflow. Install with a single command.
                </p>
            </section>

            {/* All MCPs */}
            <section className="mx-auto max-w-7xl px-6 pb-16">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {mcps.map((mcp) => (
                        <MCPCard key={mcp.id} mcp={mcp} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

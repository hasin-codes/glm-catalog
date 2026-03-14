import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjectsRow() {
    const featured = projects.filter((p) => p.featured);

    return (
        <section className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Featured Projects</h2>
                <Link
                    href="/projects"
                    className="text-sm text-[#888] transition-colors hover:text-white"
                >
                    View all →
                </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {featured.map((project) => (
                    <ProjectCard key={project.id} data={project} />
                ))}
            </div>
        </section>
    );
}

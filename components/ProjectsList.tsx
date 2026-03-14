import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12">
            <h1 className="text-2xl font-semibold text-white">Projects</h1>
            <p className="mt-2 text-sm text-[#888]">
                Explore community-built projects powered by Z.ai and GLM
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} data={project} />
                ))}
            </div>
        </div>
    );
}

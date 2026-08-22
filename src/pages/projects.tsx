import { SectionHeader } from '../components/ui'
import { PROJECTS } from '../data';
import ProjectCard from "../components/ui/ProjectCard";

export default function ProjectPage() {

    const filtered = PROJECTS

    return (
        <div className="min-h-screen">


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filtered.length === 0 && (
                <section>
                    <div className="max-w-7xl mx-auto px-4 py-2">
                        <SectionHeader badge="Our Projects" title="We are coming  soon with our projects !!" />
                    </div>
                </section>
            )}

        </div>
    )
}

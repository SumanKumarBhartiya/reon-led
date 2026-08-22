import type { Project } from '../../types'

interface projectCardProps {
    project: Project
    showEnquiry?: boolean
}

export default function ProjectCard({ project }: projectCardProps) {

    return (
        <div className="bg-white border border-gray-100 shadow-sm transition-all duration-300 flex flex-col"
        >
            <img src={project.image} />
        </div>
    )
}

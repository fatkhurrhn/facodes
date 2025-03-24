import React from "react";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-[#252529] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-[#333337] text-gray-400 px-2 py-1 rounded text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
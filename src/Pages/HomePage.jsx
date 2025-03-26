import React, { useState, useMemo } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Project data structure
const projectsData = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "Full-stack e-commerce dashboard with real-time analytics and comprehensive sales tracking.",
        technologies: ["React", "Node.js", "MongoDB"],
        category: "Web Development",
        thumbnail: "/projects/ecommerce-dashboard.png",
        githubLink: "https://github.com/yourusername/ecommerce-dashboard",
        liveLink: "https://your-ecommerce-dashboard.vercel.app",
        featured: true
    },
    {
        id: 2,
        title: "AI Chatbot",
        description: "Intelligent chatbot with advanced natural language processing capabilities.",
        technologies: ["Python", "TensorFlow", "Flask"],
        category: "Machine Learning",
        thumbnail: "/projects/ai-chatbot.png",
        githubLink: "https://github.com/yourusername/ai-chatbot",
        liveLink: null,
        featured: false
    },
    // Add more projects here
];

// Categories for filtering with icons
const CATEGORIES = [
    { 
        name: "All", 
        icon: "ri-apps-line" 
    },
    { 
        name: "Web Development", 
        icon: "ri-computer-line" 
    },
    { 
        name: "Machine Learning", 
        icon: "ri-brain-line" 
    },
    { 
        name: "Mobile App", 
        icon: "ri-smartphone-line" 
    },
    { 
        name: "Data Science", 
        icon: "ri-database-2-line" 
    },
    { 
        name: "Automation", 
        icon: "ri-robot-line" 
    }
];

export function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState('grid');

    // Filtering and searching logic
    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  project.technologies.some(tech => 
                                      tech.toLowerCase().includes(searchTerm.toLowerCase())
                                  );
            
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="bg-[#141417] min-h-screen text-white transition-colors duration-300 relative">
            <Navbar />
            
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                {/* Hero Section */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        My Digital Playground
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
                        Exploring the boundaries of technology, one project at a time. 
                        A curated collection of innovative solutions that showcase 
                        creativity, problem-solving, and technical expertise.
                    </p>
                </div>

                {/* Search and Filters Container */}
                <div className="mb-12 space-y-6">
                    {/* Search Input */}
                    <div className="relative max-w-2xl mx-auto">
                        <input 
                            type="text" 
                            placeholder="Search projects by name, technology, or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#1E1E24] border border-[#252529] 
                                       text-white placeholder-gray-500 focus:outline-none 
                                       focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        <i className="ri-search-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>

                    {/* Category and View Mode Container */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {CATEGORIES.map(category => (
                                <button
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded-full text-sm 
                                        transition-all duration-300 
                                        ${selectedCategory === category.name 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-[#1E1E24] text-gray-400 hover:bg-[#252529] hover:text-white'}
                                    `}
                                >
                                    <i className={`${category.icon} text-lg`}></i>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex bg-[#1E1E24] rounded-full p-1">
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`
                                    p-2 rounded-full transition-colors 
                                    ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400'}
                                `}
                            >
                                <i className="ri-grid-line text-lg"></i>
                            </button>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`
                                    p-2 rounded-full transition-colors 
                                    ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400'}
                                `}
                            >
                                <i className="ri-list-check text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Grid/List */}
                <div className={`
                    ${viewMode === 'grid' 
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                        : 'space-y-6'
                    }
                `}>
                    {filteredProjects.map(project => (
                        <div 
                            key={project.id} 
                            className={`
                                bg-[#1E1E24] rounded-2xl overflow-hidden 
                                shadow-lg transform transition-all duration-300 
                                hover:scale-[1.02] hover:shadow-xl
                                ${viewMode === 'list' ? 'flex' : ''}
                            `}
                        >
                            {/* Thumbnail */}
                            <div className={`
                                relative overflow-hidden
                                ${viewMode === 'grid' ? 'h-56' : 'w-56 h-48 flex-shrink-0'}
                            `}>
                                <img 
                                    src={project.thumbnail} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover"
                                />
                                {project.featured && (
                                    <span className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Project Details */}
                            <div className={`
                                p-6 flex flex-col justify-between 
                                ${viewMode === 'list' ? 'flex-grow' : ''}
                            `}>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map(tech => (
                                            <span 
                                                key={tech} 
                                                className="bg-[#252529] text-gray-300 px-3 py-1 rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-auto">
                                    {project.githubLink && (
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                        >
                                            <i className="ri-github-fill text-xl"></i> GitHub
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <i className="ri-external-link-line text-xl"></i> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Projects Found */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 space-y-4">
                        <i className="ri-archive-line text-6xl text-gray-500 mb-4"></i>
                        <p className="text-gray-400 text-xl">No projects found matching your search or category.</p>
                        <p className="text-gray-500">Try adjusting your search or exploring other categories.</p>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}

export default ProjectsPage;
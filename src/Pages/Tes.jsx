import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ProjectsPage() {
    // Sample project data - replace with your actual projects
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Weather Dashboard",
            description: "A responsive weather application that shows current weather and forecasts using the OpenWeatherMap API.",
            image: "/images/weather-app.jpg",
            category: "Web App",
            tags: ["React", "API", "Tailwind CSS"],
            demoLink: "https://weather-demo.example.com",
            codeLink: "https://github.com/yourusername/weather-app",
            featured: true,
            date: "2024-02-15"
        },
        {
            id: 2,
            title: "E-commerce Store",
            description: "A fully functional online store with product listings, cart functionality, and payment integration.",
            image: "/images/ecommerce.jpg",
            category: "Web App",
            tags: ["Next.js", "MongoDB", "Stripe"],
            demoLink: "https://store-demo.example.com",
            codeLink: "https://github.com/yourusername/ecommerce-store",
            featured: true,
            date: "2024-01-10"
        },
        {
            id: 3,
            title: "Task Manager CLI",
            description: "A command-line application for managing tasks and deadlines, built with Python.",
            image: "/images/task-cli.jpg",
            category: "CLI Tool",
            tags: ["Python", "CLI"],
            demoLink: null,
            codeLink: "https://github.com/yourusername/task-cli",
            featured: false,
            date: "2023-11-05"
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing my projects and skills.",
            image: "/images/portfolio.jpg",
            category: "Web App",
            tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
            demoLink: "https://yourportfolio.example.com",
            codeLink: "https://github.com/yourusername/portfolio",
            featured: true,
            date: "2023-09-22"
        },
        {
            id: 5,
            title: "Budget Tracker",
            description: "A mobile application to track personal expenses and income with visualization.",
            image: "/images/budget-app.jpg",
            category: "Mobile App",
            tags: ["React Native", "Firebase"],
            demoLink: null,
            codeLink: "https://github.com/yourusername/budget-tracker",
            featured: false,
            date: "2023-08-15"
        },
        {
            id: 6,
            title: "Markdown Editor",
            description: "A web-based markdown editor with real-time preview and export options.",
            image: "/images/markdown-editor.jpg",
            category: "Web App",
            tags: ["Vue.js", "Marked.js"],
            demoLink: "https://markdown.example.com",
            codeLink: "https://github.com/yourusername/markdown-editor",
            featured: false,
            date: "2023-07-08"
        },
    ]);

    // States for filtering and searching
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTag, setSelectedTag] = useState("All");
    const [sortOption, setSortOption] = useState("newest");
    const [displayMode, setDisplayMode] = useState("grid"); // grid or list
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(4);

    // Get all unique categories and tags from projects
    const allCategories = ["All", ...new Set(projects.map(project => project.category))];
    const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];

    // Filter projects based on search, category, and tag
    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
        
        const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag);
        
        return matchesSearch && matchesCategory && matchesTag;
    });

    // Sort projects
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (sortOption === "newest") {
            return new Date(b.date) - new Date(a.date);
        } else if (sortOption === "oldest") {
            return new Date(a.date) - new Date(b.date);
        } else if (sortOption === "alphabetical") {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    // Pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, selectedTag, sortOption]);

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-7xl mx-auto px-5 pt-20">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">My Projects</h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Showcasing my journey as a programmer through various small and meaningful projects. 
                        Explore my work below!
                    </p>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* Search and Filters */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full bg-[#1D1D20] border border-[#252529] rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>

                        {/* Category Filter */}
                        <div className="md:w-48">
                            <select
                                className="w-full bg-[#1D1D20] border border-[#252529] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {allCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {/* Tag Filter */}
                        <div className="md:w-48">
                            <select
                                className="w-full bg-[#1D1D20] border border-[#252529] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                            >
                                {allTags.map(tag => (
                                    <option key={tag} value={tag}>{tag}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Options */}
                        <div className="md:w-48">
                            <select
                                className="w-full bg-[#1D1D20] border border-[#252529] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="alphabetical">A-Z</option>
                            </select>
                        </div>

                        {/* View Toggles */}
                        <div className="flex space-x-2">
                            <button 
                                className={`p-3 rounded-lg ${displayMode === 'grid' ? 'bg-blue-600' : 'bg-[#1D1D20] border border-[#252529]'}`}
                                onClick={() => setDisplayMode('grid')}
                                aria-label="Grid view"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                </svg>
                            </button>
                            <button 
                                className={`p-3 rounded-lg ${displayMode === 'list' ? 'bg-blue-600' : 'bg-[#1D1D20] border border-[#252529]'}`}
                                onClick={() => setDisplayMode('list')}
                                aria-label="List view"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {searchTerm && (
                            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center">
                                Search: {searchTerm}
                                <button className="ml-2" onClick={() => setSearchTerm("")}>×</button>
                            </span>
                        )}
                        {selectedCategory !== "All" && (
                            <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full flex items-center">
                                Category: {selectedCategory}
                                <button className="ml-2" onClick={() => setSelectedCategory("All")}>×</button>
                            </span>
                        )}
                        {selectedTag !== "All" && (
                            <span className="bg-teal-600 text-white text-sm px-3 py-1 rounded-full flex items-center">
                                Tag: {selectedTag}
                                <button className="ml-2" onClick={() => setSelectedTag("All")}>×</button>
                            </span>
                        )}
                    </div>
                </div>

                {/* Project Count */}
                <div className="mb-6 text-sm text-gray-400">
                    Showing {currentProjects.length} of {sortedProjects.length} projects
                </div>

                {/* Projects List */}
                {currentProjects.length === 0 ? (
                    <div className="text-center py-20">
                        <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                        <p className="text-gray-500">Try changing your search or filter criteria</p>
                    </div>
                ) : (
                    <div className={displayMode === 'grid' 
                        ? "grid grid-cols-1 md:grid-cols-2 gap-8" 
                        : "space-y-8"
                    }>
                        {currentProjects.map(project => (
                            <div 
                                key={project.id} 
                                className={`bg-[#1D1D20] border border-[#252529] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/30 ${
                                    displayMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                }`}
                            >
                                <div className={`${displayMode === 'list' ? 'md:w-1/3' : 'w-full'} relative`}>
                                    <div className="aspect-video bg-[#252529] relative overflow-hidden">
                                        {/* Placeholder for project image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gradient-to-br from-[#1D1D20] to-[#252529]">
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    {project.featured && (
                                        <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
                                            Featured
                                        </div>
                                    )}
                                </div>
                                
                                <div className={`p-6 ${displayMode === 'list' ? 'md:w-2/3' : 'w-full'}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <span className="text-xs text-gray-400">{new Date(project.date).toLocaleDateString()}</span>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <span className="inline-block bg-[#252529] text-blue-400 text-xs font-medium px-2.5 py-1 rounded-lg mr-2">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-[#252529] text-gray-300 px-2.5 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex space-x-3">
                                        {project.demoLink && (
                                            <a 
                                                href={project.demoLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm transition"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                        
                                        <a 
                                            href={project.codeLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-[#252529] hover:border-blue-500 rounded-lg text-white text-sm transition"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                            </svg>
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <nav className="flex space-x-2">
                            <button
                                onClick={() => paginate(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg ${currentPage === 1 
                                    ? 'bg-[#1D1D20] text-gray-500 cursor-not-allowed' 
                                    : 'bg-[#1D1D20] hover:bg-[#252529] text-white'}`}
                            >
                                Previous
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => paginate(i + 1)}
                                    className={`w-10 h-10 rounded-lg ${currentPage === i + 1 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-[#1D1D20] hover:bg-[#252529] text-white'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            
                            <button
                                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg ${currentPage === totalPages 
                                    ? 'bg-[#1D1D20] text-gray-500 cursor-not-allowed' 
                                    : 'bg-[#1D1D20] hover:bg-[#252529] text-white'}`}
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                )}

                {/* Statistics */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#1D1D20] border border-[#252529] rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-blue-500">{projects.length}</div>
                        <div className="text-sm text-gray-400">Total Projects</div>
                    </div>
                    <div className="bg-[#1D1D20] border border-[#252529] rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-purple-500">{allCategories.length - 1}</div>
                        <div className="text-sm text-gray-400">Categories</div>
                    </div>
                    <div className="bg-[#1D1D20] border border-[#252529] rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-teal-500">{allTags.length - 1}</div>
                        <div className="text-sm text-gray-400">Technologies</div>
                    </div>
                    <div className="bg-[#1D1D20] border border-[#252529] rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-amber-500">{projects.filter(p => p.featured).length}</div>
                        <div className="text-sm text-gray-400">Featured Projects</div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
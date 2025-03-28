import { useState, useMemo } from 'react';
import YT from './tesfull';

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "Full-stack e-commerce dashboard with real-time analytics and comprehensive sales tracking.",
        technologies: ["React", "Node.js", "MongoDB"],
        category: "Web Development",
        thumbnail: "https://pustakakoding.com/images/project/pustakakoding-aplikasi-pengelolaan-data-member-laravel11.jpg",
        detailpage: "https://github.com/yourusername/ecommerce-dashboard",
        liveLink: null,
        featured: true
    }
];

const CATEGORIES = [
    { name: "All", icon: "ri-apps-line" },
    { name: "Web Development", icon: "ri-computer-line" },
    { name: "Machine Learning", icon: "ri-brain-line" },
    { name: "Mobile App", icon: "ri-smartphone-line" },
    { name: "Data Science", icon: "ri-database-2-line" },
    { name: "Automation", icon: "ri-robot-line" }
];

export function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className={`min-h-screen transition-colors duration-300 relative ${isDarkMode ? 'bg-[#141417] text-white' : 'bg-white text-black'}`}>
            <YT/>
            <button
                onClick={toggleTheme}
                className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                {isDarkMode ? <i className="ri-sun-fill text-xl"></i> : <i className="ri-moon-fill text-xl"></i>}
            </button>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">My Digital Playground</h1>
                    <p className={`max-w-3xl mx-auto text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Exploring the boundaries of technology, one project at a time.
                    </p>
                </div>
                <div className="mb-12 space-y-6">
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search projects by name, technology, or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border ${isDarkMode ? 'bg-[#1E1E24] border-[#252529] text-white placeholder-gray-500' : 'bg-gray-100 border-gray-300 text-black placeholder-gray-700'}`}
                        />
                        <i className="ri-search-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map(category => (
                            <button
                                key={category.name}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category.name ? 'bg-blue-600 text-white' : isDarkMode ? 'bg-[#1E1E24] text-gray-400 hover:bg-[#252529] hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black'}`}
                            >
                                <i className={`${category.icon} text-lg`}></i> {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredProjects.map(project => (
                        <a key={project.id} href={project.detailpage} className={`block rounded-[12px] shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-xl ${isDarkMode ? 'bg-[#1E1E24]' : 'bg-gray-100'}`}>
                            <div className="relative overflow-hidden h-56">
                                <img src={project.thumbnail} alt={project.title} className="rounded-tl-[10px] rounded-tr-[10px] w-full h-full object-cover" />
                                {project.featured && <span className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">Featured</span>}
                            </div>
                            <div className="p-4">
                                <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.title}</h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-4`}>{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-[#252529] text-gray-300' : 'bg-gray-300 text-gray-700'}`}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 space-y-4">
                        <i className="ri-archive-line text-6xl text-gray-500 mb-4"></i>
                        <p className="text-xl text-gray-400">No projects found matching your search or category.</p>
                        <p className="text-gray-500">Try adjusting your search or exploring other categories.</p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default ProjectsPage;

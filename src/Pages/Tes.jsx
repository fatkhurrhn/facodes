import { useState } from 'react';

// Sample Project Data (sama seperti sebelumnya)
const projectsData = [
  {
    id: 1,
    title: "Sistem Pengendalian Persediaan Barang dengan Metode EOQ",
    thumbnail: "/api/placeholder/400/300",
    category: "Manajemen Inventaris",
    date: "15 Maret 2024",
    description: "Sebuah sistem manajemen inventaris menggunakan metode Economic Order Quantity (EOQ) untuk optimasi persediaan barang.",
    technologies: ["React", "Python", "Django"],
    githubLink: "#"
  },
  {
    id: 2,
    title: "Aplikasi Monitoring Kinerja Karyawan",
    thumbnail: "/api/placeholder/400/300",
    category: "Manajemen SDM",
    date: "20 Januari 2024",
    description: "Aplikasi web untuk monitoring dan evaluasi kinerja karyawan secara komprehensif.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "#"
  },
  {
    id: 3,
    title: "Dashboard Analitik Penjualan E-commerce",
    thumbnail: "/api/placeholder/400/300",
    category: "Business Intelligence",
    date: "10 Februari 2024",
    description: "Dashboard interaktif untuk menganalisis performa penjualan dan tren pasar.",
    technologies: ["React", "Chart.js", "Express"],
    githubLink: "#"
  }
];

// Navbar Component
const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 
      ${isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-black'}
      backdrop-blur-md shadow-sm py-4
    `}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a 
          href="/" 
          className="text-2xl font-bold hover:opacity-80 transition-opacity"
        >
          facodes
        </a>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="hover:opacity-80 transition-opacity"
          >
            {isDarkMode ? <i class="ri-skip-right-line"></i> : <i class="ri-skip-right-line"></i>}
          </button>
          
          <div className="flex items-center space-x-4 pl-4 border-l">
            <a 
              href="https://github.com/fatkhurrhn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {/* github */}<i class="ri-skip-right-line"></i>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Project Card Component
const ProjectCard = ({ project = {}, isDarkMode = false }) => {
    return (
      <div className={` 
        rounded-xl overflow-hidden shadow-lg transform transition-all 
        hover:scale-105 cursor-pointer
        ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
      `}>
        <img 
          src={project.thumbnail || "https://via.placeholder.com/300"} 
          alt={project.title || "No Title"} 
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 truncate">
            {project.title || "Untitled Project"}
          </h3>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className={`
              px-2 py-1 rounded-full text-xs 
              ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}
            `}>
              {project.category || "No Category"}
            </span>
            <span className="text-gray-500">{project.date || "Unknown Date"}</span>
          </div>
          <div className="flex space-x-2 mt-2">
            {(project.technologies || []).map((tech, index) => (
              <span 
                key={index} 
                className={`
                  px-2 py-1 rounded-full text-xs 
                  ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}
                `}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

// Main Projects Page
const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Filter Projects
  const filteredProjects = projectsData.filter(project => 
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     project.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === '' || project.category === selectedCategory)
  );

  // Get Unique Categories
  const categories = [...new Set(projectsData.map(project => project.category))];

  return (
    <div className={`
      min-h-screen pt-20 pb-16
      ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}
      transition-colors duration-300
    `}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Cari project..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`
                w-full p-3 rounded-xl border-2 
                ${isDarkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-200'}
                focus:outline-none focus:ring-2 
                ${isDarkMode 
                  ? 'focus:ring-blue-600' 
                  : 'focus:ring-blue-300'}
              `}
            />
          </div>
          
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`
              p-3 rounded-xl border-2 
              ${isDarkMode 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-200'}
              focus:outline-none focus:ring-2 
              ${isDarkMode 
                ? 'focus:ring-blue-600' 
                : 'focus:ring-blue-300'}
            `}
          >
            <option value="">Semua Kategori</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p>Tidak ada project yang ditemukan.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`
        fixed bottom-0 left-0 w-full p-4 
        ${isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-black'}
        backdrop-blur-md shadow-sm
      `}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Fatkhurrhn, All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/fatkhurrhn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <i class="ri-skip-right-line"></i>
            </a>
            <a 
              href="https://www.instagram.com/fatkhurrhn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <i class="ri-skip-right-line"></i>
            </a>
            <a 
              href="https://www.tiktok.com/@fatkhurrhn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <i class="ri-skip-right-line"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;
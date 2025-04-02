import { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/HeroSection";

// import images - thumnail
import thumbail from "/Project/sample.png";

const Projects = () => {
  // Sample data
  const projectsData = [
    {
      id: 'repo-sync',
      title: 'Repo Sync',
      categories: ['#GitHub'],
      thumbnail: thumbail,
      date: '2023-06-22'
    },
    {
      id: 'hex-code-color-generator',
      title: 'Hex Code Color Generator',
      categories: ['#WebTools'],
      thumbnail: thumbail,
      date: '2024-05-20'
    },
    {
      id: 'todo-list-es6',
      title: 'Todo List with ES6',
      categories: ['#TodoApp'],
      thumbnail: thumbail,
      date: '2024-05-09'
    },
    {
      id: 'web-playground',
      title: 'Web Playground',
      categories: ['#CodeEditor'],
      thumbnail: thumbail,
      date: '2024-07-26'
    },
    {
      id: 'simple-crud-nodejs',
      title: 'Simple CRUD Node.js',
      categories: ['#CRUD'],
      thumbnail: thumbail,
      date: '2024-02-21'
    },
    {
      id: 'floral-surprise',
      title: 'Floral Surprise',
      categories: ['#Graphics'],
      thumbnail: thumbail,
      date: '2023-02-23'
    },
    {
      id: 'portfolio-nextjs',
      title: 'Portfolio with Next.js',
      categories: ['#Portfolio'],
      thumbnail: thumbail,
      date: '2023-07-12'
    },
    {
      id: 'dream-lms',
      title: 'Dream LMS',
      categories: ['#LMS'],
      thumbnail: thumbail,
      date: '2024-01-13'
    },
    {
      id: 'quote-generator',
      title: 'Quote Generator',
      categories: ['#Quotes'],
      thumbnail: thumbail,
      date: '2023-08-28'
    },
    {
      id: 'shop-thur',
      title: 'Shop Thur',
      categories: ['#Ecommerce'],
      thumbnail: thumbail,
      date: '2025-01-18'
    },
    {
      id: 'kalkulator-istighfar',
      title: 'Kalkulator Istighfar',
      categories: ['#FunApp'],
      thumbnail: thumbail,
      date: '2023-05-18'
    },
    {
      id: 'multi-image-upload',
      title: 'Multi Image Upload',
      categories: ['#FileUpload'],
      thumbnail: thumbail,
      date: '2024-01-26'
    },
    {
      id: 'id-card-generator',
      title: 'ID Card Generator',
      categories: ['#EventTools'],
      thumbnail: thumbail,
      date: '2023-03-16'
    }
  ];

  const templatesData = [
    {
      id: 'template-01',
      title: 'Portfolio Template',
      categories: ['#NextJS', '#Framer'],
      thumbnail: 'https://startupstudio.id/wp-content/uploads/2022/10/06.-SSI_November-2022_Header.jpg',
      date: '2023-09-10'
    }
  ];

  const componentsData = [
    {
      id: 'component-01',
      title: 'Auth Components',
      categories: ['#React', '#JWT'],
      thumbnail: 'https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp',
      date: '2023-12-05'
    },
    {
      id: 'component-02',
      title: 'Auth Components',
      categories: ['#React', '#JWT'],
      thumbnail: 'https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp',
      date: '2023-12-05'
    },
    {
      id: 'component-03',
      title: 'Auth Components',
      categories: ['#React', '#JWT'],
      thumbnail: 'https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp',
      date: '2023-12-05'
    },
    {
      id: 'component-04',
      title: 'Auth Components',
      categories: ['#React', '#JWT'],
      thumbnail: 'https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp',
      date: '2023-12-05'
    },
    {
      id: 'component-05',
      title: 'Auth Components',
      categories: ['#React', '#JWT'],
      thumbnail: 'https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp',
      date: '2023-12-05'
    },
  ];

  // All unique tags
  const allTags = Array.from(new Set([
    ...projectsData.flatMap(project => project.categories),
    ...templatesData.flatMap(template => template.categories),
    ...componentsData.flatMap(component => component.categories)
  ]));

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOption, setSortOption] = useState('newest');
  const [activeTab, setActiveTab] = useState('projects');
  const [isLoading, setIsLoading] = useState(true);

  // Get current tab data
  const getCurrentData = () => {
    switch (activeTab) {
      case 'templates': return templatesData;
      case 'components': return componentsData;
      default: return projectsData;
    }
  };

  // Filter and sort data
  const filterAndSortData = (data) => {
    let results = [...data];

    // Apply search filter
    if (searchTerm) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categories.some(tag =>
          tag.toLowerCase().includes(searchTerm.toLowerCase().replace('#', ''))
        )
      );
    }

    // Apply tag filter
    if (selectedTags.length > 0) {
      results = results.filter(item =>
        selectedTags.every(tag => item.categories.includes(tag))
      );
    }

    // Apply sorting
    results.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOption === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return results;
  };

  const filteredData = filterAndSortData(getCurrentData());

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setSortOption('newest');
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Tabs and Search/Sort Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          {/* Tabs on the left */}
          <div className="w-full md:w-auto">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'projects'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <i className="ri-stack-line mr-2"></i> Projects
                </button>
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'templates'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <i className="ri-layout-masonry-line mr-2"></i> Templates
                </button>
                <button
                  onClick={() => setActiveTab('components')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'components'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <i className="ri-boxing-line mr-2"></i> Components
                </button>
              </nav>
            </div>
          </div>

          {/* Search and Sort on the right - aligned with tabs */}
          <div className="w-full md:w-auto flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-2 top-2.5 text-gray-500"></i>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            {/* <h2 className="text-lg font-medium text-gray-900">
              {filteredData.length} {filteredData.length === 1 ? 'Item' : 'Items'} Found
            </h2> */}

            {selectedTags.length > 0 && (
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Filters:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                      <button
                        onClick={() => toggleTag(tag)}
                        className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={clearFilters}
                    className="text-xs text-blue-600"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tags Cloud */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${selectedTags.includes(tag)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="flex gap-2">
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Projects Display */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-[8px] shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Categories in top-left corner */}
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {item.categories.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-0 group-hover:text-[#035b71] transition-colors">
                      {item.title}
                    </h3>

                    <div className="mt-2 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <i className="ri-calendar-line mr-1"></i>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>

                      <div className="flex gap-1">
                        <a
                          href="https://github.com/fatkhurrhn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Download
                        </a>
                        <a
                          href="https://github.com/fatkhurrhn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/fatkhurrhn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-search-eye-line text-3xl text-gray-400"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your search or filter criteria to find what you are looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
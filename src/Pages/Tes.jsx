import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Sample data
  const projectsData = [
    {
      id: 'project-01',
      title: 'E-commerce Dashboard',
      categories: ['#React', '#NodeJS', '#MongoDB'],
      thumbnail: 'https://source.unsplash.com/random/600x400/?ecommerce,dashboard',
      date: '2023-10-15'
    },
    {
      id: 'project-02',
      title: 'Weather App',
      categories: ['#React', '#API', '#Tailwind'],
      thumbnail: 'https://source.unsplash.com/random/600x400/?weather,app',
      date: '2023-11-20'
    }
  ];

  const templatesData = [
    {
      id: 'template-01',
      title: 'Portfolio Template',
      categories: ['#NextJS', '#Framer'],
      thumbnail: 'https://source.unsplash.com/random/600x400/?portfolio,design',
      date: '2023-09-10'
    }
  ];

  const componentsData = [
    {
      id: 'component-01',
      title: 'Auth Components',
      categories: ['#React', '#JWT'],
      thumbnail: 'https://source.unsplash.com/random/600x400/?security,code',
      date: '2023-12-05'
    }
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get current tab data
  const getCurrentData = () => {
    switch(activeTab) {
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
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-xl font-semibold text-blue-600">
                <i className="ri-terminal-box-fill mr-2"></i>
                Facodes
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#projects" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Open-source solutions to boost your development workflow
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs and Search/Sort Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          {/* Tabs on the left */}
          <div className="w-full md:w-auto">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'projects'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <i className="ri-stack-line mr-2"></i> Projects
                </button>
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'templates'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <i className="ri-layout-masonry-line mr-2"></i> Templates
                </button>
                <button
                  onClick={() => setActiveTab('components')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'components'
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

        {/* Items Found and Tags */}
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
                    className="text-xs text-blue-600 hover:underline"
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
                  className={`px-3 py-1 text-sm rounded-full transition-all ${
                    selectedTags.includes(tag) 
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <Link
                  to={`/${item.id}`}
                  key={item.id}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium flex items-center">
                        View Details <i className="ri-arrow-right-line ml-1"></i>
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.categories.map(tag => (
                        <span 
                          key={tag} 
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-3 text-sm text-gray-500">
                      <i className="ri-calendar-line mr-1"></i>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </Link>
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
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-terminal-box-fill mr-2 text-blue-600"></i>
                Facodes
              </h3>
              <p className="text-gray-600 mb-4">
                Open-source projects for developers and creators.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <i className="ri-discord-fill text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
                <li><a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Subscribe</h4>
              <p className="text-gray-600 mb-4">
                Get the latest projects and updates.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 rounded-r-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Facodes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
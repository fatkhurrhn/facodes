import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Page Component
function Home() {
  const [activeTab, setActiveTab] = useState('components');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data for components
  const componentsData = [
    { id: 'card-01', title: 'Simple Card Component', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-20', category: 'card' },
    { id: 'modal-01', title: 'Modal Dialog', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-18', category: 'modal' },
    { id: 'navbar-01', title: 'Responsive Navbar', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-15', category: 'navbar' },
    { id: 'button-01', title: 'Button Collection', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-10', category: 'button' },
    { id: 'form-01', title: 'Form Elements', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-05', category: 'form' },
    { id: 'dropdown-01', title: 'Custom Dropdown', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-02-28', category: 'dropdown' },
  ];

  // Sample data for templates
  const templatesData = [
    { id: 'template-01', title: 'Dashboard Template', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-25', category: 'dashboard' },
    { id: 'template-02', title: 'Landing Page Template', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-22', category: 'landing' },
    { id: 'template-03', title: 'Admin Panel Template', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-17', category: 'admin' },
    { id: 'template-04', title: 'eCommerce Template', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-12', category: 'ecommerce' },
    { id: 'template-05', title: 'Blog Template', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-08', category: 'blog' },
    { id: 'template-06', title: 'Portfolio Template', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-01', category: 'portfolio' },
  ];

  // Sample data for blog
  const blogData = [
    { id: 'blog-01', title: 'Getting Started with UI Components', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-24', category: 'tutorial' },
    { id: 'blog-02', title: 'Best Practices for Component Design', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-21', category: 'design' },
    { id: 'blog-03', title: 'Component-Driven Development', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-19', category: 'development' },
    { id: 'blog-04', title: 'Accessibility in UI Components', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-16', category: 'accessibility' },
    { id: 'blog-05', title: 'State Management in React Components', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-11', category: 'react' },
    { id: 'blog-06', title: 'Performance Optimization Tips', thumbnail: 'https://via.placeholder.com/300x200', date: '2025-03-07', category: 'performance' },
  ];

  // Get active data based on selected tab
  const getActiveData = () => {
    switch(activeTab) {
      case 'components':
        return componentsData;
      case 'templates':
        return templatesData;
      case 'blog':
        return blogData;
      default:
        return [];
    }
  };

  // Filter data based on search query and category
  const filteredData = getActiveData().filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for the current active tab
  const categories = ['all', ...new Set(getActiveData().map(item => item.category))];

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <i className="ri-layout-grid-line"></i>
              <span>ChetanVerma/UI</span>
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              <i className="ri-layout-masonry-line"></i>
              <span>Templates</span>
            </Link>
            <Link to="/" className="navbar-link navbar-link-new">
              <span>New</span>
            </Link>
            <Link to="/" className="navbar-link">
              <i className="ri-puzzle-piece-line"></i>
              <span>Components</span>
            </Link>
            <Link to="/" className="navbar-link">
              <i className="ri-github-fill"></i>
              <span>Github</span>
            </Link>
          </div>
          <div className="navbar-profile">
            <button className="profile-button">
              <i className="ri-user-line"></i>
              <span>Chetan Verma</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Open Source Beautiful Crafted UI Blocks, Components & Templates</h1>
          <p>Drop in ready-to-use open-source UI blocks, components, and templates with seamless styles and animations. Just copy, paste, and build.</p>
          <a href="#" className="portfolio-link">
            Check out my portfolio <i className="ri-external-link-line"></i>
          </a>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="tabs-section">
        <div className="tabs-container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'components' ? 'active' : ''}`}
              onClick={() => setActiveTab('components')}
            >
              Components
            </button>
            <button 
              className={`tab ${activeTab === 'templates' ? 'active' : ''}`}
              onClick={() => setActiveTab('templates')}
            >
              Templates
            </button>
            <button 
              className={`tab ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => setActiveTab('blog')}
            >
              Blog
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter">
        <div className="search-container">
          <div className="search-input">
            <i className="ri-search-line"></i>
            <input 
              type="text" 
              placeholder="Search components..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="categories">
            {categories.map(category => (
              <button 
                key={category}
                className={`category ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="categories-pills">
        <div className="pills-container">
          <button className="pill">navbar</button>
          <button className="pill">card</button>
          <button className="pill">form</button>
          <button className="pill">modal</button>
          <button className="pill">table</button>
          <button className="pill">dropdown</button>
          <button className="pill">slider</button>
          <button className="pill">input</button>
          <button className="pill">button</button>
          <button className="pill">media</button>
          <button className="pill">badge</button>
          <button className="pill">avatar</button>
          <button className="pill">tooltip</button>
          <button className="pill">popover</button>
          <button className="pill">accordion</button>
          <button className="pill">tabs</button>
          <button className="pill">image</button>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="cards-grid">
        <div className="grid-container">
          {filteredData.map(item => (
            <Link to={`/detail/${item.id}`} key={item.id} className="card">
              <div className="card-thumbnail">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p className="card-date">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2025 UI Components Library. All rights reserved.</p>
          <div className="social-links">
            <a href="#"><i className="ri-twitter-fill"></i></a>
            <a href="#"><i className="ri-github-fill"></i></a>
            <a href="#"><i className="ri-linkedin-fill"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Detail Page Component
function Detail() {
  return (
    <div className="detail-page">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <i className="ri-layout-grid-line"></i>
              <span>ChetanVerma/UI</span>
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              <i className="ri-layout-masonry-line"></i>
              <span>Templates</span>
            </Link>
            <Link to="/" className="navbar-link navbar-link-new">
              <span>New</span>
            </Link>
            <Link to="/" className="navbar-link">
              <i className="ri-puzzle-piece-line"></i>
              <span>Components</span>
            </Link>
            <Link to="/" className="navbar-link">
              <i className="ri-github-fill"></i>
              <span>Github</span>
            </Link>
          </div>
          <div className="navbar-profile">
            <button className="profile-button">
              <i className="ri-user-line"></i>
              <span>Chetan Verma</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="detail-content">
        <Link to="/" className="back-button">
          <i className="ri-arrow-left-line"></i> Back to Home
        </Link>
        <h1>Component Detail Page</h1>
        <p>This is a placeholder for the component detail page. You'll implement the actual content later.</p>
      </div>
    </div>
  );
}

export default App;
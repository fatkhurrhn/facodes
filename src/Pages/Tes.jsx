import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ProjectDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section with Title and Thumbnail */}
        <section className="mb-8">
          {/* Title Container that respects sidebar boundary */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Title lives in the left column */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 break-words">
                Luther – Free One-Page HTML5 Portfolio Website Template
              </h1>
            </div>
            {/* Empty div to maintain layout */}
            <div className="lg:w-1/3"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Left Side (2/3 width) */}
            <div className="lg:w-2/3">
              {/* Project Thumbnail */}
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-6 h-64 md:h-80 flex items-center justify-center">
                <span className="text-gray-500">[Project Thumbnail]</span>
              </div>
              
              {/* Description Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="mb-4">
                  Luther is a portfolio website template with a dark background, facilitating the dark mode. The free template is user-friendly and enhances user engagement on your website. It is a developer-friendly theme with a well-documented codebase.
                </p>
                <p className="mb-4">
                  The design is page-speed optimized and provides faster loading times. It is also a search engine-optimized theme that helps get your website the desired ranking. Additionally, it is a cross-browser-compatible theme and runs smoothly on all available browsers.
                </p>
              </div>
              
              {/* Screenshots Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Project Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
                      <span className="text-gray-500">Screenshot {item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar - Right Side (1/3 width) - Non-sticky */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                {/* Download Buttons */}
                <div className="mb-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mb-3">
                    Download Project
                  </button>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 py-3 px-4 rounded-lg font-medium">
                    View Code on GitHub
                  </button>
                </div>
                
                {/* Project Meta */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">March 2023</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Version:</span>
                    <span className="font-medium">1.0.0</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">License:</span>
                    <span className="font-medium">MIT</span>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'].map((tech) => (
                      <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div>
                  <h3 className="text-lg font-bold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['portfolio', 'dark-mode', 'responsive', 'free-template'].map((tag) => (
                      <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Popular Projects */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Popular Projects</h3>
                <div className="space-y-4">
                  {/* Project Card 1 */}
                  <div className="p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold mb-1">Sparrow – Simple, Seamless...</h4>
                    <p className="text-gray-600 text-sm mb-2">A clean and minimal portfolio template</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600">$59</span>
                      <span className="text-gray-500 text-sm">1853+ Purchases</span>
                    </div>
                  </div>
                  
                  {/* Project Card 2 */}
                  <div className="p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold mb-1">Bundle – 16 HTML5 Templates</h4>
                    <p className="text-gray-600 text-sm mb-2">Complete collection of templates</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600">$139</span>
                      <span className="text-gray-500 text-sm">424 Purchases</span>
                    </div>
                  </div>
                  
                  {/* Special Offer Card */}
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-700 mb-1">SAVE 80%</h4>
                    <p className="text-yellow-700 text-sm">Get this bundle of HTML5 templates!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
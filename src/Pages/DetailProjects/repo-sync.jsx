// import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

// import images - thumnail
import thumbail from "/Project/thumbnail.png";

const ProjectDetail = () => {
//   const { id } = useParams();

  // Sample project data - in a real app, you'd fetch this based on the ID
  const project = {
    id: 're',
    title: 'E-commerce Dashboard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    categories: ['#React', '#NodeJS', '#MongoDB'],
    thumbnail: thumbail,
    date: '2023-10-15',
    features: [
      'Real-time sales analytics',
      'Inventory management system',
      'Customer behavior tracking',
      'Responsive design for all devices',
      'Secure authentication'
    ],
    technologies: [
      { name: 'React', icon: 'ri-reactjs-line' },
      { name: 'Node.js', icon: 'ri-nodejs-line' },
      { name: 'MongoDB', icon: 'ri-database-2-line' },
      { name: 'Tailwind CSS', icon: 'ri-css3-line' }
    ],
    demoUrl: '#',
    codeUrl: '#'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <i className="ri-arrow-left-line mr-2"></i> Back to Projects
          </Link>
        </div>

        {/* Project header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Project thumbnail */}
          <div className="w-full md:w-1/2 lg:w-2/3">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Project info */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
              
              <div className="flex items-center text-gray-500 mb-4">
                <i className="ri-calendar-line mr-2"></i>
                <span>Published on {new Date(project.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-3 mb-6">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <i className="ri-external-link-line mr-2"></i> Live Demo
                </a>
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center"
                >
                  <i className="ri-github-fill mr-2"></i> View Code
                </a>
              </div>
              
              {/* Technologies used */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Built With</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <div key={tech.name} className="flex items-center px-3 py-2 bg-gray-100 rounded-lg">
                      <i className={`${tech.icon} text-xl mr-2 text-gray-700`}></i>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
            <p className="text-gray-700 mb-6">{project.description}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3 mb-6">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src="https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp" 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src="https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp" 
                  alt="Inventory Management" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get This Project</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <i className="ri-external-link-line mr-2"></i> Live Demo
                </a>
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gray-800 text-white text-center rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center"
                >
                  <i className="ri-github-fill mr-2"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation to other projects */}
        <div className="flex justify-between">
          <Link to="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <i className="ri-arrow-left-line mr-2"></i> Previous Project
          </Link>
          <Link to="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Next Project <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
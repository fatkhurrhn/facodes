import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="px-4 py-2 rounded-r-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Facodes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

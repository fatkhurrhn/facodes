import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar({ isDarkMode, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-[#1E1E24] text-white' : 'bg-white text-black'} shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold">
                        Portfolio
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-[#252529]' : 'hover:bg-gray-100'}`}
                        >
                            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                className={`transition-colors duration-300 ${isDarkMode 
                                    ? 'text-gray-300 hover:text-white' 
                                    : 'text-gray-700 hover:text-black'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className={`md:hidden ${isDarkMode ? 'bg-[#1E1E24]' : 'bg-white'} pb-4`}>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-2 transition-colors duration-300 ${isDarkMode 
                                    ? 'text-gray-300 hover:bg-[#252529] hover:text-white' 
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

export function Footer({ isDarkMode }) {
    const socialLinks = [
        { icon: 'ri-github-fill', url: 'https://github.com/yourusername' },
        { icon: 'ri-linkedin-fill', url: 'https://linkedin.com/in/yourusername' },
        { icon: 'ri-twitter-fill', url: 'https://twitter.com/yourusername' }
    ];

    return (
        <footer className={`py-12 transition-colors duration-300 ${isDarkMode ? 'bg-[#141417] text-white' : 'bg-gray-100 text-black'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">Your Name</h2>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Software Developer | Technology Enthusiast
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.url} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`text-2xl transition-colors duration-300 ${isDarkMode 
                                    ? 'text-gray-300 hover:text-white' 
                                    : 'text-gray-700 hover:text-black'}`}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 border-t pt-6 text-center">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} Your Name. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
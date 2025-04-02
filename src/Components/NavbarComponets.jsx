import PropTypes from 'prop-types';

export default function Navbar({ onMenuClick }) {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-40">
      <div className="mx-auto max-w-[1240px] flex justify-between items-center">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button 
            onClick={onMenuClick}
            className="lg:hidden mr-4 text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">React Docs</h1>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Docs</a></li>
            <li><a href="#" className="hover:underline">Tutorial</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};
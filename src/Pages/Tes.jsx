import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center h-screen 
    bg-gray-100 dark:bg-gray-900 transition-colors duration-300">

      <button className="relative w-20 h-10 flex items-center p-1 
        bg-gray-300 dark:bg-gray-800 rounded-full shadow-lg 
        transition-all duration-300"
        onClick={() => setDarkMode(prevMode => !prevMode)}>
          
        <div className={`w-8 h-8 bg-white dark:bg-gray-900 
          rounded-full flex items-center justify-center transform 
          transition-all duration-300 ${darkMode ? 
          'translate-x-10' : 'translate-x-0'}`}>

          {darkMode ? <i className="ri-moon-fill text-xl"></i> : <i 
          className="ri-sun-fill text-xl"></i>}
        </div>

      </button>
    </div>
  );
};

export default DarkModeToggle;

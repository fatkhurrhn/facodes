
   const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    
<button 
    onClick={toggleTheme} 
    className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
    {isDarkMode ? <i className="ri-sun-fill text-xl"></i> : <i className="ri-moon-fill text-xl"></i>}
</button>

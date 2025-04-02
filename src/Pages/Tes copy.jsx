import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import About from './About';
// import Codepen from './CodepenClone';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      
      <div className="flex flex-1">
        {/* Fixed Sidebar */}
        <div className="fixed h-[calc(100vh-4rem)] top-16 left-0 w-64 overflow-y-auto">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
        </div>
        
        {/* Scrollable Content */}
        <main className="flex-1 ml-64 p-8 max-w-7xl">
          <div className="mx-auto">
            {activePage === 'about' && <About />}
            {/* Add other pages here */}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
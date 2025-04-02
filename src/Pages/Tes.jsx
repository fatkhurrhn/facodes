import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import About from './About';
// import Codepen from './CodepenClone';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      
      {/* Centered container with max-w-7xl */}
      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-[1240px]">
          {/* Fixed Sidebar */}
          <div className="fixed h-[calc(100vh-4rem)] top-16 w-64 overflow-y-auto">
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
          </div>
          
          {/* Scrollable Content with left margin */}
          <main className="flex-1 ml-64 p-8 overflow-y-auto">
          <div className="max-w-[calc(100vw-20rem)]"> {/* Adjust based on sidebar width */}
            {activePage === 'about' && <About />}
          </div>
        </main>
        </div>
      </div>
      
    </div>
  );
}

export default App;
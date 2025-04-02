import { useState } from 'react';
import Navbar from '../Components/NavbarComponets';
import Sidebar from '../Components/Sidebar';
import About from './About';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-blue-600 shadow-md">
        <div className="mx-auto max-w-[1240px]">
          <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </header>
      
      {/* Konten utama */}
      <div className="flex pt-16 flex-1 justify-center">
        <div className="w-full max-w-[1240px] flex">
          {/* Sidebar untuk desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50 border-r border-gray-200">
            <Sidebar 
              activePage={activePage} 
              setActivePage={setActivePage}
            />
          </div>
          
          {/* Mobile Sidebar Overlay */}
                  {sidebarOpen && (
                    <div className="fixed inset-0 z-20 lg:hidden">
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setSidebarOpen(false)}
                      />
                      <div className="absolute left-0 w-64 h-full bg-gray-50 border-r border-gray-200 z-30">
                        <Sidebar 
                          activePage={activePage} 
                          setActivePage={setActivePage}
                          onNavigate={() => setSidebarOpen(false)}
                        />
                      </div>
                    </div>
                  )}
          
          
          {/* Konten utama */}
          <main className="flex-1 min-w-0 p-6 lg:px-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto"> {/* Container dalam konten */}
              {activePage === 'about' && <About />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
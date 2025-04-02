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
        <div className="mx-auto max-w-[1240px] px-4">
          <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex pt-16 min-h-screen">
        {/* Desktop Sidebar - Fixed but within max-w-[1240px] */}
        <div className="hidden lg:block fixed top-16 h-[calc(100vh-4rem)] w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto z-30"
          style={{ left: 'calc(50% - 620px)' }}> {/* 620px = 1240px/2 */}
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

        {/* Scrollable Main Content */}
        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''} lg:ml-64`}>
          <div className="mx-auto max-w-[1240px]">
            <div className="p-6 lg:p-8 lg:pl-12">
              <div className="max-w-4xl mx-auto">
                {activePage === 'button01' && <About />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
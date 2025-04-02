import PropTypes from "prop-types";
import { useState } from "react";

export default function Sidebar({ activePage, setActivePage, onNavigate }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { 
      id: 'button',
      title: 'Button',
      type: 'dropdown',
      items: [
        { id: 'button01', title: 'Button 01' },
        { id: 'button02', title: 'Button 02' },
        { id: 'button03', title: 'Button 03' },
        { id: 'button04', title: 'Button 04' },
        { id: 'button05', title: 'Button 05' },
      ]
    },
    { 
      id: 'navbar',
      title: 'Navbar',
      type: 'dropdown',
      items: [
        { id: 'navbar01', title: 'Navbar 01' },
        { id: 'navbar02', title: 'Navbar 02' },
        { id: 'navbar03', title: 'Navbar 03' },
      ]
    },
    { id: 'carousel', title: 'Carousel' },
    { id: 'footer', title: 'Footer' },
    { id: 'forms', title: 'Forms' },
  ];

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleClick = (id) => {
    setActivePage(id);
    if (onNavigate) onNavigate();
  };

  return (
    <aside className="w-full h-full p-4">
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.type === 'dropdown' ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`w-full text-left p-2 rounded-md hover:bg-gray-200 transition-colors flex justify-between items-center ${
                      item.items.some(i => i.id === activePage) 
                        ? 'bg-blue-100 text-blue-600 font-medium' 
                        : 'text-gray-700'
                    }`}
                  >
                    {item.title}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === item.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.id && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <li key={subItem.id}>
                          <button
                            onClick={() => handleClick(subItem.id)}
                            className={`w-full text-left p-2 rounded-md hover:bg-gray-200 transition-colors ${
                              activePage === subItem.id 
                                ? 'bg-blue-50 text-blue-600 font-medium' 
                                : 'text-gray-600'
                            }`}
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleClick(item.id)}
                  className={`w-full text-left p-2 rounded-md hover:bg-gray-200 transition-colors ${
                    activePage === item.id 
                      ? 'bg-blue-100 text-blue-600 font-medium' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.title}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
};
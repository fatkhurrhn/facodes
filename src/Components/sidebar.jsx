import PropTypes from "prop-types";

export default function Sidebar({ activePage, setActivePage, onNavigate }) {
  const menuItems = [
    { id: 'about', title: 'About' },
    { id: 'codepen-clone', title: 'Codepen Clone' },
    { id: 'components', title: 'Components' },
    { id: 'hooks', title: 'Hooks' },
    { id: 'api-reference', title: 'API Reference' },
  ];

  const handleClick = (id) => {
    setActivePage(id);
    if (onNavigate) onNavigate();
  };

  return (
    <aside className="w-full h-full p-4">
      <nav>
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Documentation</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full text-left p-2 rounded-md hover:bg-gray-200 transition-colors ${
                  activePage === item.id ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                {item.title}
              </button>
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
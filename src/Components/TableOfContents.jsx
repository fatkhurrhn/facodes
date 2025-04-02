export default function TableOfContents() {
    // This would normally be generated from the page content
    const tocItems = [
      { id: 'experience', title: 'Experience' },
      { id: 'my-skills', title: 'My Skills' },
      { id: 'education', title: 'Education' },
      { id: 'projects', title: 'Projects' },
    ];
  
    return (
      <aside className="w-64 p-4 hidden lg:block">
        <div className="sticky top-20">
          <h3 className="font-medium text-gray-500 mb-3">ON THIS PAGE</h3>
          <ul className="space-y-2 border-l border-gray-200 pl-4">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className="block text-gray-600 hover:text-blue-500 hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
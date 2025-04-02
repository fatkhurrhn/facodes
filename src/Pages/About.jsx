import { useState } from 'react';

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('html');
  
  const projectCode = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Button</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="interactiveBtn">Click Me</button>
    <script src="script.js"></script>
</body>
</html>`,
    
    css: `body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
    margin: 0;
}

button {
    position: relative;
    padding: 15px 40px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background: #f0f0f0;
    color: #121212;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    transition: all 0.3s ease;
}`,
    
    js: `const button = document.getElementById("interactiveBtn");
        
function randomColor() {
    return \`rgb(\${Math.floor(Math.random() * 255)}, \${Math.floor(Math.random() * 255)}, \${Math.floor(Math.random() * 255)})\`;
}

button.addEventListener("mouseenter", () => {
    button.style.background = randomColor();
    button.style.color = "white";
});

button.addEventListener("mouseleave", () => {
    button.style.background = "#f0f0f0";
    button.style.color = "#121212";
});

button.addEventListener("click", (e) => {
    let ripple = document.createElement("span");
    ripple.style.width = ripple.style.height = "50px";
    ripple.style.position = "absolute";
    ripple.style.background = "rgba(255, 255, 255, 0.5)";
    ripple.style.borderRadius = "50%";
    ripple.style.left = \`\${e.offsetX - 25}px\`;
    ripple.style.top = \`\${e.offsetY - 25}px\`;
    ripple.style.transform = "scale(0)";
    ripple.style.transition = "transform 0.6s ease-out, opacity 0.6s";
    
    button.appendChild(ripple);
    setTimeout(() => {
        ripple.style.transform = "scale(3)";
        ripple.style.opacity = "0";
    }, 10);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});`
  };

  return (
    <article className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Project Showcase</h1>
      <p className="text-lg text-gray-600 mb-8">
        Here are some of my small projects. Each includes a live preview and the source code.
      </p>
      
      {/* Project Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interactive Button</h2>
        
        {/* Preview Frame */}
        <div className="bg-white border border-gray-200 rounded-t-lg overflow-hidden mb-0">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-medium">Preview</h3>
          </div>
          <div className="p-4 h-64 flex items-center justify-center bg-gray-900">
            <iframe 
              srcDoc={`
                <!DOCTYPE html>
                <html>
                <head>
                  <style>${projectCode.css}</style>
                </head>
                <body>
                  ${projectCode.html}
                  <script>${projectCode.js}</script>
                </body>
                </html>
              `}
              title="Project Preview"
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
        
        {/* Code Tabs */}
        <div className="border border-gray-200 rounded-b-lg overflow-hidden">
          <div className="flex bg-gray-50 border-b border-gray-200">
            {['html', 'css', 'js'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-800 text-gray-100 p-4 overflow-x-auto">
            <pre className="text-sm font-mono">
              <code>{projectCode[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>
      
      {/* Additional projects can be added here */}
    </article>
  );
}
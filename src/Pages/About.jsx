import { useState, useEffect } from 'react';

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('html');
  
  // Default code for each tab
  const defaultCode = {
    html: `<button id="interactiveBtn">Click Me</button>`,
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

  const [editableCode, setEditableCode] = useState(defaultCode);

  const handleCodeChange = (e) => {
    setEditableCode(prev => ({
      ...prev,
      [activeTab]: e.target.value
    }));
  };

  const resetCode = () => {
    setEditableCode(defaultCode);
  };

  return (
    <article className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Interactive Project Showcase</h1>
      <p className="text-lg text-gray-600 mb-8">
        Edit the code below and see live changes in the preview. 
        <button 
          onClick={resetCode}
          className="ml-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
        >
          Reset Code
        </button>
      </p>
      
      {/* Preview Section */}
      <div className="mb-8 bg-gray-900 rounded-lg overflow-hidden shadow-xl">
        <div className="p-4 bg-gray-800">
          <h3 className="font-medium text-gray-200">Live Preview</h3>
        </div>
        <div className="h-96 flex items-center justify-center p-4">
          <iframe 
            srcDoc={`
              <!DOCTYPE html>
              <html>
              <head>
                <style>
                  body { margin: 0; padding: 0; }
                  ${editableCode.css}
                </style>
              </head>
              <body>
                ${editableCode.html}
                <script>${editableCode.js}</script>
              </body>
              </html>
            `}
            title="Project Preview"
            className="w-full h-full border-0 bg-white rounded"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
      
      {/* Code Editor Section */}
      <div className="rounded-lg overflow-hidden shadow-xl">
        <div className="flex bg-gray-800">
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium text-sm ${activeTab === tab ? 'text-white bg-gray-700' : 'text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="bg-gray-800">
          <textarea
            value={editableCode[activeTab]}
            onChange={handleCodeChange}
            className="w-full h-96 p-4 font-mono text-gray-100 bg-gray-900 resize-none outline-none caret-white text-sm"
            spellCheck="false"
          />
        </div>
      </div>
    </article>
  );
}
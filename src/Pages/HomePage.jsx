import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function Page() {
  const [code, setCode] = useState("<h1>Hello, World!</h1>");
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState("html");
  const iframeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      updatePreview();
    }, 1000);
    return () => clearTimeout(timer);
  }, [code]);

  const updatePreview = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.srcdoc = code;
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCode(e.target.result);
      reader.readAsText(file);
      
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension === 'js') setLanguage('javascript');
      else if (extension === 'css') setLanguage('css');
      else setLanguage('html');
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `code.${language === 'javascript' ? 'js' : language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openFullPreview = () => {
    const previewWindow = window.open("", "_blank");
    if (previewWindow) {
      previewWindow.document.write(code);
      previewWindow.document.close();
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-5 pt-10 pb-20">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Web Playground - Code Editor
        </h1>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <label className="file-input-label">
                    <span className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer inline-block">
                      Import File
                    </span>
                    <input 
                      type="file" 
                      accept=".html,.js,.css" 
                      onChange={handleFileUpload} 
                      className="hidden" 
                    />
                  </label>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="html">HTML</option>
                    <option value="javascript">JavaScript</option>
                    <option value="css">CSS</option>
                  </select>
                </div>
                <select 
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="vs-dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
              
              <div className="border border-gray-700 rounded-lg overflow-hidden">
                <Editor
                  height="400px"
                  language={language}
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  theme={theme}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                    padding: { top: 10 }
                  }}
                />
              </div>
              
              <div className="flex gap-3 mt-4">
                <button 
                  onClick={updatePreview} 
                  className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition flex-1"
                >
                  Run Code
                </button>
                <button 
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                >
                  Copy
                </button>
                <button 
                  onClick={handleDownload}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                >
                  Download
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-gray-700 rounded-lg p-2 mb-4 flex justify-between items-center">
                <h2 className="text-center text-gray-300 text-sm font-medium">
                  Output Preview
                </h2>
                <button
                  onClick={openFullPreview}
                  className="px-2 py-1 bg-blue-600 rounded-lg text-xs hover:bg-blue-700 transition"
                >
                  Open Full
                </button>
              </div>
              <div className="border border-gray-700 rounded-lg overflow-hidden bg-white h-96">
                <iframe 
                  ref={iframeRef} 
                  title="preview" 
                  className="w-full h-full" 
                  sandbox="allow-scripts"
                  srcDoc={code}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">Tips</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Import existing HTML, JavaScript, or CSS files using the Import button</li>
            <li>The preview updates automatically after you stop typing</li>
            <li>Change the editor theme or language using the dropdown menus</li>
            <li>Use the Run Code button to manually update the preview</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
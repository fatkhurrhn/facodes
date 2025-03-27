import React, { useState } from 'react';

const CodeEditor = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const handleHtmlChange = (e) => {
    setHtml(e.target.value);
  };

  const handleCssChange = (e) => {
    setCss(e.target.value);
  };

  const handleJsChange = (e) => {
    setJs(e.target.value);
  };

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="flex flex-col h-screen">
      {/* Code Editor Sections */}
      <div className="flex flex-1 overflow-hidden">
        {/* HTML Editor */}
        <div className="w-1/3 border-r border-gray-700">
          <div className="bg-[#1E1E1E] text-white p-2 font-bold">HTML</div>
          <textarea 
            className="w-full h-full bg-[#1E1E1E] text-white p-2 outline-none resize-none"
            value={html}
            onChange={handleHtmlChange}
            spellCheck="false"
          />
        </div>
        
        {/* CSS Editor */}
        <div className="w-1/3 border-r border-gray-700">
          <div className="bg-[#1E1E1E] text-white p-2 font-bold">CSS</div>
          <textarea 
            className="w-full h-full bg-[#1E1E1E] text-white p-2 outline-none resize-none"
            value={css}
            onChange={handleCssChange}
            spellCheck="false"
          />
        </div>
        
        {/* JavaScript Editor */}
        <div className="w-1/3">
          <div className="bg-[#1E1E1E] text-white p-2 font-bold">JS</div>
          <textarea 
            className="w-full h-full bg-[#1E1E1E] text-white p-2 outline-none resize-none"
            value={js}
            onChange={handleJsChange}
            spellCheck="false"
          />
        </div>
      </div>
      
      {/* Live Preview */}
      <div className="h-1/2 bg-white">
        <iframe 
          srcDoc={srcDoc}
          title="live-preview"
          sandbox="allow-scripts"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
import React, { useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const CodePlayground = () => {
  const defaultHtml = `<button id="interactiveBtn">Click Me</button>`;
  const defaultCss = `body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
}
button {
    position: relative;
    padding: 15px 40px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
}`;
  const defaultJs = `const button = document.getElementById("interactiveBtn");

function randomColor() {
    return \`rgb(\${Math.floor(Math.random() * 255)}, \${Math.floor(Math.random() * 255)}, \${Math.floor(Math.random() * 255)})\`;
}

button.addEventListener("mouseenter", () => {
    button.style.background = randomColor();
    button.style.color = "white";
});

button.addEventListener("mouseleave", () => {
    button.style.background = "";
    button.style.color = "black";
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
});`;

  const [htmlContent, setHtmlContent] = useState(defaultHtml);
  const [cssContent, setCssContent] = useState(defaultCss);
  const [jsContent, setJsContent] = useState(defaultJs);
  const [editorHeight, setEditorHeight] = useState(50); // Persentase tinggi editor
  const resizerRef = useRef(null);

  const srcDoc = `
    <html>
      <head>
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
        <script>${jsContent}<\/script>
      </body>
    </html>
  `;

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newHeight = Math.max(20, Math.min(80, (e.clientY / window.innerHeight) * 100));
    setEditorHeight(newHeight);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Buka preview di tab baru
  const openInNewTab = () => {
    const newWindow = window.open();
    newWindow.document.write(srcDoc);
    newWindow.document.close();
  };

  return (
    <div className="flex flex-col h-screen bg-[#1E1E1E]">
      {/* Code Editors */}
      <div className="flex flex-col" style={{ height: `${editorHeight}%` }}>
        <div className="flex flex-1 overflow-hidden">
          {/* HTML Editor */}
          <div className="w-1/3 border-r border-[#252526] flex flex-col">
            <div className="bg-[#252526] text-white p-2 font-bold">HTML</div>
            <div className="flex-1 overflow-auto">
              <CodeMirror
                value={htmlContent}
                height="100%"
                theme={oneDark}
                extensions={[html()]}
                onChange={(value) => setHtmlContent(value)}
              />
            </div>
          </div>

          {/* CSS Editor */}
          <div className="w-1/3 border-r border-[#252526] flex flex-col">
            <div className="bg-[#252526] text-white p-2 font-bold">CSS</div>
            <div className="flex-1 overflow-auto">
              <CodeMirror
                value={cssContent}
                height="100%"
                theme={oneDark}
                extensions={[css()]}
                onChange={(value) => setCssContent(value)}
              />
            </div>
          </div>

          {/* JS Editor */}
          <div className="w-1/3 flex flex-col">
            <div className="bg-[#252526] text-white p-2 font-bold">JS</div>
            <div className="flex-1 overflow-auto">
              <CodeMirror
                value={jsContent}
                height="100%"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setJsContent(value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Resizer Bar */}
      <div
        ref={resizerRef}
        className="h-2 bg-gray-600 cursor-row-resize"
        onMouseDown={handleMouseDown}
      ></div>

      {/* Live Preview */}
      <div className="relative flex-1 bg-black" style={{ height: `${100 - editorHeight}%` }}>
        <iframe
          srcDoc={srcDoc}
          title="live-preview"
          sandbox="allow-scripts"
          className="w-full h-full"
        />
        
        {/* Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-500"
            onClick={openInNewTab}
          >
            Open in New Browser
          </button>
          <a
            href="https://github.com/fatkhurrhn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-500"
          >
            Download Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;

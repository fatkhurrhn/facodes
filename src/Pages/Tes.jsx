import React, { useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula"; // Import tema Dracula yang benar
import { EditorView } from "@codemirror/view";

const CodePlayground = () => {
  const [htmlContent, setHtmlContent] = useState(`<button id="interactiveBtn">Click Me</button>`);
  const [cssContent, setCssContent] = useState(`body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
}
button {
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}`);
  const [jsContent, setJsContent] = useState(`const button = document.getElementById("interactiveBtn");

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
});`);

  const [editorHeight, setEditorHeight] = useState(50);
  const [activeTab, setActiveTab] = useState("HTML");
  const resizerRef = useRef(null);

  const srcDoc = `
    <html>
      <head>
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
        <script>${jsContent}</script>
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

  const openInNewTab = () => {
    const newWindow = window.open();
    newWindow.document.write(srcDoc);
    newWindow.document.close();
  };

  return (
    <div className="flex flex-col h-screen bg-[#1E1E1E]">
      {/* Desktop Mode */}
      <div className="hidden md:flex flex-col" style={{ height: `${editorHeight}%` }}>
        <div className="flex flex-1 overflow-hidden">
          {/* HTML Editor */}
          <div className="w-1/3 border-r border-[#252526] flex flex-col">
            <div className="bg-[#252526] text-white p-2 font-bold">HTML</div>
            <div className="overflow-auto flex-1">
              <CodeMirror
                value={htmlContent}
                height="100%"
                theme={dracula} // Gunakan tema Dracula di sini
                extensions={[html(), EditorView.lineWrapping]}
                onChange={setHtmlContent}
              />
            </div>
          </div>

          {/* CSS Editor */}
          <div className="w-1/3 border-r border-[#252526] flex flex-col">
            <div className="bg-[#252526] text-white p-2 font-bold">CSS</div>
            <div className="overflow-auto flex-1">
              <CodeMirror
                value={cssContent}
                height="100%"
                theme={dracula} // Gunakan tema Dracula di sini
                extensions={[css(), EditorView.lineWrapping]}
                onChange={(value) => setCssContent(value)}
              />
            </div>
          </div>

          {/* JS Editor */}
          <div className="w-1/3 flex flex-col">
            <div className="bg-[#252526] text-white p-2 font-bold">JS</div>
            <div className="overflow-auto flex-1">
              <CodeMirror
                value={jsContent}
                height="100%"
                theme={dracula} // Gunakan tema Dracula di sini
                extensions={[javascript(), EditorView.lineWrapping]}
                onChange={setJsContent}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Mode (Tab Editor) */}
      <div className="md:hidden flex flex-col" style={{ height: `${editorHeight}%` }}>
        <div className="flex">
          {["HTML", "CSS", "JS"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 p-2 text-center font-bold ${activeTab === tab ? "bg-blue-600 text-white" : "bg-[#252526] text-gray-300"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="overflow-auto flex-1">
          {activeTab === "HTML" && <CodeMirror value={htmlContent} theme={dracula} extensions={[html(), EditorView.lineWrapping]} onChange={setHtmlContent} />}
          {activeTab === "CSS" && <CodeMirror value={cssContent} theme={dracula} extensions={[css(), EditorView.lineWrapping]} onChange={setCssContent} />}
          {activeTab === "JS" && <CodeMirror value={jsContent} theme={dracula} extensions={[javascript(), EditorView.lineWrapping]} onChange={setJsContent} />}
        </div>
      </div>

      {/* Resizer Bar */}
      <div ref={resizerRef} className="h-2 bg-gray-600 cursor-row-resize hidden md:block" onMouseDown={handleMouseDown}></div>

      {/* Live Preview */}
      <div className="relative flex-1 bg-black" style={{ height: `${100 - editorHeight}%` }}>
        <iframe srcDoc={srcDoc} title="live-preview" sandbox="allow-scripts" className="w-full h-full" />

        {/* Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-500" onClick={openInNewTab}>
            Open in New Browser
          </button>
          <a href="https://github.com/fatkhurrhn" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-500">
            Download Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
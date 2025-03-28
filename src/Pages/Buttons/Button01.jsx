import React, { useEffect, useState } from "react";
import Editor from "../../Components/Editor";

const App = () => {
    const defaultHtml = `
    <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    `;

    const defaultCss = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #1e1e1e;
    }
    .navbar {
        display: flex;
        background: #333;
        padding: 10px 20px;
        border-radius: 10px;
    }
    .navbar a {
        color: white;
        text-decoration: none;
        padding: 15px 20px;
        position: relative;
        transition: color 0.3s;
    }
    .navbar a:hover {
        color: #ffcc00;
    }
    .navbar a::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 5px;
        width: 0;
        height: 3px;
        background: #ffcc00;
        transition: all 0.3s ease-in-out;
        transform: translateX(-50%);
    }
    .navbar a:hover::after {
        width: 80%;
    }
    `;

    const defaultJs = ``;

    const [html, setHtml] = useState(defaultHtml);
    const [css, setCss] = useState(defaultCss);
    const [js, setJS] = useState(defaultJs);
    const [srcDoc, setSrcDoc] = useState("");
    const [activeTab, setActiveTab] = useState("html");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <style>${css}</style>
                <body>${html}</body>
                <script>${js}</script>
            </html>
            `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="flex flex-col h-screen relative">
            {/* Header Navigasi */}
            <div className="bg-gray-800 text-white p-2">
                <a href="/">home</a> <i class="ri-arrow-right-s-line"></i>
                <a href="/code-collection">code collection</a> <i class="ri-arrow-right-s-line"></i>
                <a href="/code-collection/css">css</a> <i class="ri-arrow-right-s-line"></i>
                <a href="/code-collection/css/buttons">buttons</a> <i class="ri-arrow-right-s-line"></i>
                <span>button01</span>
            </div>
    
            <div className="h-1/2 flex flex-col md:flex-row overflow-auto">
                <div className="hidden md:flex w-1/3 flex-col">
                    <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} className="w-full h-full" />
                </div>
                <div className="hidden md:flex w-1/3 flex-col">
                    <Editor language="css" displayName="CSS" value={css} onChange={setCss} className="w-full h-full" />
                </div>
                <div className="hidden md:flex w-1/3 flex-col">
                    <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJS} className="w-full h-full" />
                </div>
    
                {/* Mobile View */}
                <div className="md:hidden flex flex-col w-full h-full overflow-auto">
                    <div className="flex justify-between bg-gray-900 text-white py-2">
                        <button onClick={() => setActiveTab("html")} className={`flex-1 p-2 ${activeTab === "html" ? "bg-gray-700" : "bg-gray-900"}`}>HTML</button>
                        <button onClick={() => setActiveTab("css")} className={`flex-1 p-2 ${activeTab === "css" ? "bg-gray-700" : "bg-gray-900"}`}>CSS</button>
                        <button onClick={() => setActiveTab("js")} className={`flex-1 p-2 ${activeTab === "js" ? "bg-gray-700" : "bg-gray-900"}`}>JS</button>
                    </div>
                    <div className="h-full border border-gray-700 rounded-b-md overflow-auto flex-1">
                        {activeTab === "html" && <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} className="w-full h-full" />}
                        {activeTab === "css" && <Editor language="css" displayName="CSS" value={css} onChange={setCss} className="w-full h-full" />}
                        {activeTab === "js" && <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJS} className="w-full h-full" />}
                    </div>
                </div>
            </div>
    
            <div className="h-1/2 border-t border-gray-700 flex-1 overflow-hidden">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="bg-white"
                    scrolling="no"
                />
            </div>
    
            {/* Buttons */}
            <div className="absolute bottom-4 right-2 flex gap-1 mr-2">
                <button
                    className="bg-white text-black px-3 py-1 text-xs rounded-[4px] shadow-md hover:bg-gray-200 border border-black"
                    onClick={() => window.open(URL.createObjectURL(new Blob([srcDoc], { type: 'text/html' })), '_blank')}
                >
                    Open in Browser
                </button>
                <a
                    href="https://v3.tailwindcss.com/docs/guides/vite" target="_blank"
                    className="bg-white text-black px-3 py-1 text-xs rounded-[4px] shadow-md hover:bg-gray-200 border border-black"
                >
                    Download Code
                </a>
            </div>
        </div>
    );
};

export default App;
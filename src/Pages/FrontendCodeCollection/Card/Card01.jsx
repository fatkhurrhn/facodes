import React, { useState } from "react";

export default function Navbar01() {
    const [activeTab, setActiveTab] = useState("preview");

    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Navbar</title>
</head>
<body>
    <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
</body>
</html>`;

    const cssCode = `* {
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
}`;

    const openInNewTab = () => {
        const newWindow = window.open();
        newWindow.document.write(`<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Preview</title><style>${cssCode}</style></head><body>${htmlCode}</body></html>`);
        newWindow.document.close();
    };

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative p-5">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl font-bold">Halaman Navbar 01</h1>
                <button onClick={openInNewTab} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Open in Browser</button>
            </div>
            <div className="flex justify-center space-x-3 mb-5">
                <button onClick={() => setActiveTab("preview")} className={`px-4 py-2 rounded-lg shadow ${activeTab === "preview" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-300"}`}>Preview</button>
                <button onClick={() => setActiveTab("html")} className={`px-4 py-2 rounded-lg shadow ${activeTab === "html" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-300"}`}>HTML</button>
                <button onClick={() => setActiveTab("css")} className={`px-4 py-2 rounded-lg shadow ${activeTab === "css" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-300"}`}>CSS</button>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg text-white shadow-lg transition-all">
                {activeTab === "preview" && (
                    <iframe
                        title="preview"
                        srcDoc={`<html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html>`}
                        className="w-full h-[400px] border-none rounded-lg shadow-lg"
                    ></iframe>
                )}
                {activeTab === "html" && (
                    <pre className="whitespace-pre-wrap overflow-auto text-sm bg-black p-3 rounded-lg shadow-lg">{htmlCode}</pre>
                )}
                {activeTab === "css" && (
                    <pre className="whitespace-pre-wrap overflow-auto text-sm bg-black p-3 rounded-lg shadow-lg">{cssCode}</pre>
                )}
            </div>
        </div>
    );
}
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const defaultHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Next-Level JavaScript Button</title>
</head>
<body>
    <button id="interactiveBtn">Click Me</button>
</body>
</html>`;

const defaultCss = `body {
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
    cursor: pointer;
    overflow: hidden;
    outline: none;
}

@media (max-width: 768px) {
    body {
        flex-direction: column;
    }
    button {
        padding: 12px 30px;
        font-size: 16px;
    }
}`;

const defaultJs = `const button = document.getElementById("interactiveBtn");

function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
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

    const rect = button.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left - 25) + "px";
    ripple.style.top = (e.clientY - rect.top - 25) + "px";

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

export default function CodeEditorPage() {
    const [html, setHtml] = useState(defaultHtml);
    const [css, setCss] = useState(defaultCss);
    const [js, setJs] = useState(defaultJs);
    const [srcDoc, setSrcDoc] = useState("");
    const [activeTab, setActiveTab] = useState("html");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>${js}</script>
                </body>
                </html>
            `);
        }, 300);
        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-7xl mx-auto px-5 pt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg">
                    <div className="flex space-x-2 mb-4 border-b border-gray-700 pb-2">
                        {["html", "css", "js"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                                    activeTab === tab
                                        ? "bg-gray-800 text-white border-b-2 border-blue-400"
                                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                }`}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <textarea
                        className="w-full h-72 bg-black text-white p-3 rounded-lg font-mono border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        value={activeTab === "html" ? html : activeTab === "css" ? css : js}
                        onChange={(e) => {
                            if (activeTab === "html") setHtml(e.target.value);
                            if (activeTab === "css") setCss(e.target.value);
                            if (activeTab === "js") setJs(e.target.value);
                        }}
                    />
                </div>
                <div className="relative mt-6 rounded-lg overflow-hidden shadow-lg border border-gray-700">
                    <iframe
                        srcDoc={srcDoc}
                        title="Preview"
                        sandbox="allow-scripts"
                        width="100%"
                        height="400px"
                        className="border-none rounded-lg"
                    ></iframe>
                    <button
                        className="absolute top-3 right-3 px-3 py-2 text-sm bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                        onClick={() => {
                            const newWindow = window.open();
                            newWindow.document.write(srcDoc);
                            newWindow.document.close();
                        }}
                    >
                        Open in Browser
                    </button>
                    
                </div>
                <a
                        href="https://sfl.gl/XlhBPwoq"
                        className="block text-center mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Code
                    </a>
            </section>
            <Footer />
        </div>
    );
}
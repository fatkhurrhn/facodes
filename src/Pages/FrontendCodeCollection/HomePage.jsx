import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Navbar01 from "../Navbar/Navbar01";
import Navbar02 from "../Navbar/Navbar02";
import Card01 from "../Card/Card01";
import Card02 from "../Card/Card02";

const pages = {
    navbar01: <Navbar01 />,
    navbar02: <Navbar02 />,
    card01: <Card01 />,
    card02: <Card02 />,
};

export default function Dashboard() {
    const [activePage, setActivePage] = useState(null);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 p-5 pt-10 text-white min-h-screen">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                <button onClick={() => setNavbarOpen(!navbarOpen)} className="w-full text-left py-2 px-3 bg-gray-800 rounded mb-2">Navbar</button>
                {navbarOpen && (
                    <div className="ml-4">
                        <button onClick={() => setActivePage("navbar01")} className="block w-full text-left py-1 px-2 hover:bg-gray-700">Navbar 01</button>
                        <button onClick={() => setActivePage("navbar02")} className="block w-full text-left py-1 px-2 hover:bg-gray-700">Navbar 02</button>
                    </div>
                )}
                
                <button onClick={() => setCardOpen(!cardOpen)} className="w-full text-left py-2 px-3 bg-gray-800 rounded mb-2">Card</button>
                {cardOpen && (
                    <div className="ml-4">
                        <button onClick={() => setActivePage("card01")} className="block w-full text-left py-1 px-2 hover:bg-gray-700">Card 01</button>
                        <button onClick={() => setActivePage("card02")} className="block w-full text-left py-1 px-2 hover:bg-gray-700">Card 02</button>
                    </div>
                )}
            </aside>
            
            {/* Content Area */}
            <main className="flex-1 p-14    ">
                <Navbar />
                <div className="max-w-4xl mx-auto pt-10">
                    {activePage ? pages[activePage] : <p>Pilih menu di sidebar untuk melihat konten.</p>}
                </div>
            </main>
        </div>
    );
}
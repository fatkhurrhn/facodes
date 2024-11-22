import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/home";

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;

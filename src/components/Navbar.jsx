import { Link } from "react-router-dom";
import '../assets/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

import styles from "../styles/navbar.module.css";
import {Link} from "react-router-dom";


const Navbar= ({darkMode, onClick}) => {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/add-profile">Add Profile</Link></li>
            </ul>
            <button onClick={onClick}>
                {darkMode ? "Dark Mode"  : "Light Mode"}
            </button>
        </nav>
    )
}
export default Navbar;
import styles from "../styles/navbar.module.css";


const Navbar= ({darkMode, onClick}) => {
    return(
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Profiles</a></li>
            </ul>
            <button onClick={onClick}>
                {darkMode ? "Dark Mode"  : "Light Mode"}
            </button>
        </nav>
    )
}
export default Navbar;
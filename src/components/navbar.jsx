import styles from "../styles/navbar.module.css";
import {Link} from "react-router-dom";
import {ModeProvider} from "../contexts/ModeContext";
import {useMode} from "../contexts/ModeContext";
import {useContext} from "react";
import AuthContext from "../contexts/AuthContext";
import {AuthProvider} from "../contexts/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/modeSlice";


const Navbar= () => {
    //const { mode, handleModeChange } = useMode();
    const mode = useSelector((state) => state.mode.mode);
    const dispatch = useDispatch();
    const handleModeChange = () => {
        dispatch(toggle());
    }

    const { isLogin, logout } = useContext(AuthContext);
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                { isLogin ? <li><Link to="/add-profile">Add Profile</Link></li> : ""}
            </ul>
            {
                isLogin ?
                <button onClick={logout}>Logout</button> :
                <ul><li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li></ul>
            }
            <button onClick={handleModeChange}>
                {mode === "dark" ? "Dark Mode"  : "Light Mode"}
            </button>
        </nav>
    )
}
export default Navbar;
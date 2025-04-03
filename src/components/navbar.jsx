import styles from "../styles/navbar.module.css";
import {Link, useNavigate} from "react-router-dom";
import {ModeProvider} from "../contexts/ModeContext";
import {useMode} from "../contexts/ModeContext";
import {useContext, useState} from "react";
import AuthContext from "../contexts/AuthContext";
import {AuthProvider} from "../contexts/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/modeSlice";
import { logout } from "../redux/authSlice";
import BotFwiend from "./botFwiend";


const Navbar= () => {
    const navigate = useNavigate();
    //const { mode, handleModeChange } = useMode();
    const [isChatbotVisible, setChatbotVisible] = useState(false);
    const mode = useSelector((state) => state.mode.mode);
    const dispatch = useDispatch();
    const handleModeChange = () => {
        dispatch(toggle());
    }

    //const { isLogin, logout } = useContext(AuthContext);
    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatchLogout = () => {
        dispatch(logout());
        navigate("/login");
        console.log("rar");
    }

    const handleChatbotClick = () => {
        setChatbotVisible((prev) => !prev);
      };

    return(
    <>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                { isLogin ? <li><Link to="/add-profile">Add Profile</Link></li> : ""}
            </ul>
            {
                isLogin ?
                <button onClick={dispatchLogout}>Logout</button> :
                <ul><li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li></ul>
            }
            <button onClick={handleModeChange}>
                {mode === "dark" ? "Dark Mode"  : "Light Mode"}
            </button>
            <button onClick={handleChatbotClick} className={styles["chatbot-button"]}>
                Chatbot
            </button>
        </nav>
      <BotFwiend isVisible={isChatbotVisible} onClose={() => setChatbotVisible(false)} />
    </>
    )
}
export default Navbar;
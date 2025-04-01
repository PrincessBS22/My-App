import {useContext} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import {useSelector} from "react-redux";

const ProtectedRoute = ({children}) => {
    //const { isLogin } = useContext(AuthContext);
    const isLogin = useSelector((state) => state.auth.isLogin);
    return isLogin ? children : <Navigate to="/login"/>
}
export default ProtectedRoute
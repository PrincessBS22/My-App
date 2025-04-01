import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { use } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const useAuthForm = (isRegister) => {

  const nameRef = useRef(null);
  //const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [submited, setSubmited] = useState(false);
  const [successM, setSuccessM] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmited(true);
    const formData = new FormData();
    formData.append("username", data.username.trim());
    formData.append("password", data.password.trim());
    if (isRegister) formData.append("email", data.email.trim());
    formData.append("action", isRegister ? "register" : "login");
console.log(formData.get("username", "password", "email")); 
    try {
      const response = await fetch(
        "https://web.ics.purdue.edu/~shaverb/auth.php",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setData({
          username: "",
          password: "",
          email: "",
        });
        setSuccessM(data.success);
        setError("");
        //login();
        dispatch(login());
        navigate("/");
      } else {
        setError(data.error);
        setSuccessM("");
      }
    } catch (error) {
      setError(error.message);
      setSuccessM("");
    } finally {
      setSubmited(false);
    }
  };
  return({nameRef, data, error, submited, successM, handleChange, handleSubmit});
};
export default useAuthForm;
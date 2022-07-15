import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="loginLeft">
        <div className="mainTextLogin">
          <p >TRAVEL IS THE ONLY THING</p><p> YOU BUY THAT MAKES YOU </p><p>RICHER</p>
        </div>
        <Link className="link" to="/register">
						<button type="button" className="white_btn">
							Sing up
						</button>
					</Link>
        </div>
        <div className="loginRight">
        <h1 className="loginTitle">Login</h1>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="text"
              className="loginInput"
              placeholder="Enter your username..."
              ref={userRef}
            />
       
            <input
              type="password"
              className="loginInput"
              placeholder="Enter your password..."
              ref={passwordRef}
            />
            
            <button type="submit" className="green_btn">
							Sing in
					  </button> 
          </form>
        </div>
      </div>
    </div>
  );
}

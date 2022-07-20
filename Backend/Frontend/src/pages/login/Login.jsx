import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="loginLeft">
          <div className="mainTextLogin">
            <p >START YOUR JOURNEY BY ONE </p><p> CLICK, EXPLORE BEAUTIFUL</p><p> WORLD!</p>
          </div>
          <Link className="link" to="/register">
						<button type="button" className="loginRegiter_btn">
							Sing up
						</button>
				  </Link>
        </div>
        <div className="loginRight">
        <h1 className="loginTitle">Login</h1>
        <p className="subText">Welcome to Wanderer. please fill your username and password sign in into your account</p>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="text"
              className="loginInput"
              placeholder="Enter your username"
              ref={userRef}
            />
       
            <input
              type="password"
              className="loginInput"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <div className="forgotPassword_container">
              <Link  className="forgotPassword" to="/forgotPassword">
                <p >
                  Forgot Password ?
                </p>
				      </Link> 
            </div>
            {error && <span style={{color:"red", marginTop:"10px"}}>Enter your username or password!</span>}
            <button type="submit" className="login_btn" disabled={isFetching}>
							Sing in
					  </button> 
          </form>
          <div className="loginI">
              <i className="topIcon2 fab fa-facebook-square"></i>
              <i className="topIcon2 fab fa-google-plus-square"></i>
              <i className="topIcon2 fab fa-twitter-square"></i>
              <i className="topIcon2 fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

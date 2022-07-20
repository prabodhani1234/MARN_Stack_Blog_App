import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="signup_container">
			<div className="signup_form_container">
				<div className="left">
          <div className="mainText">
					<p >TRAVEL IS THE ONLY THING</p><p> YOU BUY THAT MAKES YOU </p><p>RICHER</p>
          </div>
					<Link to="/login">
						<button type="button" className="white_btn">
							Sing in
						</button>
					</Link>
          
				</div>
				<div className="right">
        <h1 className="Topic">Create Account</h1>
					<form className="form_container" onSubmit={handleSubmit}>
						
						<input
							type="text"
              className="input"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							type="text"
              className="input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
						<input
							type="password"
              className="input"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
						/>
						
          {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
          
          <button type="submit" className="green_btn">
							Sing Up
					</button>  
					</form>
          <div className="registarI">
              <i className="topIcon1 fab fa-facebook-square"></i>
              <i className="topIcon1 fab fa-google-plus-square"></i>
              <i className="topIcon1 fab fa-twitter-square"></i>
              <i className="topIcon1 fab fa-instagram-square"></i>
          </div>
				</div>
			</div>
		</div>
  );
}

import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
const LoginView = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createuser", {
        emailAddress,
        password
      })
      .then((result) => navigate("/"))

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="bgc">
        <form className="card" onSubmit={handleSubmit}>
          <div className="info">
            <input
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="email"
              className="login-input"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="login-input"
            />
          </div>

          <div className="btn">
            <button onClick={(e) => handleSubmit(e)} className="login-btn">Log In</button>

            <button onClick={() => navigate("/landingpage")} className="login-btn">Cancel</button>
          </div>
          <p className="login-text">
              <Link to="/register" className="login-url">Create an Account</Link>
            </p>
        </form>
      </div>
    </>
  );
};
export default LoginView;

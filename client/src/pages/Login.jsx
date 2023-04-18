import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const [emailAddressError, setEmailAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailAddress === "") {
      setEmailAddressError("Email address is required");
    } else {
      setEmailAddressError("");
    }
    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    axios
      .post("http://localhost:3001/login", {
        emailAddress,
        password
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bgc">
      <div>
        <form onSubmit={handleSubmit} className="card">
          <div className="pd-t">
            <label htmlFor="email" className="info-lgn">
              Email:
            </label>
            <input
              className="login-input"
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            {emailAddressError && <p className="error">{emailAddressError}</p>}
          </div>
          <div className="login-text">
            <label htmlFor="password">Password:</label>
            <input
              className="login-input"
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <Link to="/">
            <button className="login-btn" type="submit">
              Login
            </button>
          </Link>
          <Link to="/landingpage">
            <button className="login-btn ml" type="submit">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

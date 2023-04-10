import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
const LoginView = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        emailAddress,
        password
      });
      if (response.status === 200) {
        setLogin(true);
        navigate("/");
      }
    } catch (error) {
      setLoginError("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <>
      {login ? (
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
              <button onClick={(e) => handleSubmit(e)} className="login-btn">
                Log In
              </button>

              <button
                onClick={() => navigate("/landingpage")}
                className="login-btn"
              >
                Cancel
              </button>
            </div>
            <p className="login-text">
              <Link to="/register" className="login-url">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      ) : (
        <div className="bgc">
          <p>{loginError}</p>
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
              <button onClick={(e) => handleSubmit(e)} className="login-btn">
                Log In
              </button>

              <button
                onClick={() => navigate("/landingpage")}
                className="login-btn"
              >
                Cancel
              </button>
            </div>
            <p className="login-text">
              <Link to="/register" className="login-url">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};
export default LoginView;

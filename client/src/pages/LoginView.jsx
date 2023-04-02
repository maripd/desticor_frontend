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
        <form className="card">
          <div className="info">
            <input
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          <div className="btn">
            <button onClick={(e) => handleSubmit(e)}>Log In</button>

            <button onClick={() => navigate("/landingpage")}>Cancel</button>
            <p>
              <Link to="/register">Create an Account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginView;

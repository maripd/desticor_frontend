import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useState } from "react";
import axios from "axios";


const RegistrationForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createuser", {
        firstName,
        lastName,
        emailAddress,
        password
      })
      .then((result) => navigate("/"))

      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <div className="bgc">
        <form className="registerform-card">
          <div className="info">
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="first name"
              onChange={(e) => setFirstName(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
              className="login-input"
            />

            <input
              type="email"
              name="emailAddress"
              value={emailAddress}
              placeholder="email"
              onChange={(e) => setEmailAddress(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="btn">
            <button type="submit" onClick={(e) => handleSubmit(e)} className="register-btn">
              Submit
            </button>
            <button onClick={() => navigate("/landingpage")} className="register-btn">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegistrationForm;

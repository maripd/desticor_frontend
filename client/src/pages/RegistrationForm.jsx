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

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs before submitting
    if (firstName.trim() === "") {
      setFirstNameError("First name is required");
      return;
    } else {
      setFirstNameError("");
    }
    if (lastName.trim() === "") {
      setLastNameError("Last name is required");
      return;
    } else {
      setLastNameError("");
    }
    if (emailAddress.trim() === "") {
      setEmailAddressError("Email address is required");
      return;
    } else {
      setEmailAddressError("");
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      return;
    } else {
      setPasswordError("");
    }
    axios
      .post("http://localhost:3001/createuser", {
        firstName,
        lastName,
        emailAddress,
        password
      })
      .then((result) => navigate("/"))

      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bgc">
        <form className="registerform-card">
          <div className="info">
            <div>
              <input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
                className="login-input"
              />
              {firstNameError && <p className="error">{firstNameError}</p>}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="last name"
                onChange={(e) => setLastName(e.target.value)}
                className="login-input"
              />
              {lastNameError && <p className="error">{lastNameError}</p>}
            </div>
            <div>
              <input
                type="email"
                name="emailAddress"
                value={emailAddress}
                placeholder="email"
                onChange={(e) => setEmailAddress(e.target.value)}
                className="login-input"
              />
              {emailAddressError && (
                <p className="error">{emailAddressError}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          <div className="btn">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="register-btn"
            >
              Submit
            </button>
            <button
              onClick={() => navigate("/landingpage")}
              className="register-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegistrationForm;

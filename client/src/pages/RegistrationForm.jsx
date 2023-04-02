import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useState } from "react";
import axios from "axios";
const RegistrationForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:3001/createuser",
      data: {
        emailAddress,
        password
      }
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <div className="bgc">
        <form className="card">
          <div className="info">
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              name="emailAddress"
              value={emailAddress}
              placeholder="email"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn">
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>

            <Link to="/landingpage">Cancel</Link>
          </div>
        </form>
      </div>
      {register ? (
        <p className="text-success">You Are Registered Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Registered</p>
      )}
    </>
  );
};
export default RegistrationForm;

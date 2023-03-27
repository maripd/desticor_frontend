import React from "react";
import "../styles/login.css";
const RegistrationForm = () => {
  return (
    <>
      <div className="bgc">
        <form className="card">
          <div className="info">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
            <input type="text" placeholder="username" />
            <input type="text" placeholder="email" />
            <input type="text" name="password" id="pw" placeholder="password" />
          </div>

          <div className="btn">
            <a href="/">Submit</a>
            <a href="/landingpage">Cancel</a>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegistrationForm;

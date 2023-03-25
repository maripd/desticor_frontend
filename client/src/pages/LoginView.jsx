import "../styles/login.css";
import React from "react";
const LoginView = () => {
  return (
    <>
      <div className="bgc">
        <form className="card">
          <div className="info">
            <input type="text" placeholder="username" />
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
export default LoginView;

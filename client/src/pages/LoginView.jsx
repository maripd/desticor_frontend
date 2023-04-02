import "../styles/login.css";
import React from "react";
import { Link } from "react-router-dom";
const LoginView = () => {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <>
      <div className="bgc">
        <form className="card">
          <div className="info">
            <input type="text" placeholder="username" />
            <input type="text" name="password" id="pw" placeholder="password" />
          </div>

          <div className="btn">
            <button>Log In</button>
            <p>or</p>
            <button onClick={googleAuth}>Sign In with Google</button>
            <p>
              <Link to="/register">Create an Account</Link>
            </p>
            <Link to="/">Submit</Link>
            <Link to="/landingpage">Cancel</Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginView;

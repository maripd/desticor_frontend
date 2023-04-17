import "../styles/landingPage.css";
import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <div id="bgc">
        <div className="intro">
          <h1 className="intro-name">Desticor</h1>
          <p className="landing-blurb">Explore the World</p>
          <p className="landing-blurb">Anytime, Anywhere</p>
        </div>

        <div className="over">
          <Link to="/login">
            <button className="logbtn">Login</button>
          </Link>
          <Link to="/register" id="reg">
            create an account
          </Link>
        </div>
      </div>
    </>
  );
};
export default LandingPage;

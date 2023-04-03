import "../styles/landingPage.css";
import React from "react";
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
          <a href="/loginview">
            <button className="logbtn">Login</button>
          </a>
          <a href="/register" id="reg">
            create an account
          </a>
        </div>
      </div>
    </>
  );
};
export default LandingPage;

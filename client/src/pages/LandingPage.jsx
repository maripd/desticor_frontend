import "../styles/landingPage.css";
import React from "react";
const LandingPage = () => {
  return (
    <>
      <div id="bgc">
        <div className="intro">
          <h1>Desticor</h1>
          <p>Explore the World</p>
          <p>Anytime, Anywhere</p>
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

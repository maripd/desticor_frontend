import React from "react";
const logout = (userDetails) => {
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };
  return (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default logout;

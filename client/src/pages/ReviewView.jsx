import React from "react";
import Editor from "../components/ReviewEditor";
import "../styles/revieweditor.css";
const ReviewView = () => {
  return (
    <>
      <div className="reviewimg-container">
        <img src="https://i.imgur.com/nqrqRHi.png" className="review-img" />
      </div>
      <div className="content-container">
        <h4 className="destination-name">Destination Name Here</h4>
        <div className="editor-container">
        <Editor />
      </div>
      </div>
    </>
  );
};
export default ReviewView;

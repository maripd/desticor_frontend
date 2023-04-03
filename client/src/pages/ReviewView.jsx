import React from "react";
import Editor from "../components/ReviewEditor";
import "../styles/revieweditor.css";
const ReviewView = () => {
  return (
    <>
      <div id="bgc">
        review page background image here
        <div>destination name here</div>
        <div className="editor-container">
          <Editor />
        </div>
      </div>
    </>
  );
};
export default ReviewView;

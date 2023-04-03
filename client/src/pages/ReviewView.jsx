import React from "react";
import Editor from "../components/ReviewEditor";
import "../styles/revieweditor.css";
const ReviewView = () => {
  return (
    <>
      <div>review page background image here</div>
      <div>destination name here</div>
      <div className="editor-container">
        <Editor />
      </div>
    </>
  );
};
export default ReviewView;

import Editor from "../components/ReviewEditor";
import "../styles/revieweditor.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ReviewView = () => {
  const [review, setReview] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getbucket/:${id}`)
      .then((res) => setReview(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {review ? (
        <>
          <div>review page background image here</div>
          <div>destination name here</div>
          <div className="editor-container">
            <Editor />
          </div>
        </>
      ) : (
        <p>wrong id</p>
      )}
    </div>
  );
};
export default ReviewView;

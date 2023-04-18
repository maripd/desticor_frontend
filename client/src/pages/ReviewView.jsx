import Editor from "../components/ReviewEditor";
import "../styles/revieweditor.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ReviewView = () => {
  // const [review, setReview] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/review/:${id}`)
      .then((res) => res.data) //.then((res) => setReview(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {/* {review ? ( */}
      <>
        <div className="editor-container">
          <Editor />
        </div>
      </>
      {/* ) : (
        <p>wrong id</p>
      )} */}
    </div>
  );
};
export default ReviewView;

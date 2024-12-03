import Image from "next/image";
import "./reviews.styles.css";

export default function Reviews() {
  return (
    <>
      <div className="review-container">
        <div>Our Core Values</div>
        <div>
          <p>Clarify</p>
          <p>Text for Clarify</p>
        </div>
        <div>
          <p>Summarize</p>
          <p>Summarize text</p>
        </div>
        <div>
          <p>Streamline</p>
          <p>Streamline text</p>
        </div>
      </div>
    </>
  );
}

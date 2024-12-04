import "./reviews.styles.css";

export default function Reviews() {
  return (
    <div className="review-container">
      <h2 className="core-values">Our Core Values</h2>

      {/* Clarify Section (Text on left, Image on right) */}
      <div className="value-section clarify">
        <div className="text-content">
          <h3>Clarify</h3>
          <p>
            Aether helps you understand complex documents by using AI to
            rephrase confusing terms. Aether converts confusing language into
            clear, straightforward language that ensures you fill out your forms
            with confidence.
          </p>
        </div>
        <img src="/clarity.png" alt="Clarify" className="section-image" />
      </div>

      {/* Summarize Section (Image on left, Text on right) */}
      <div className="value-section summarize">
        <div className="text-content">
          <h3>Summarize</h3>
          <p>
            With Aether, you don’t have to sift through pages of dense text. The
            app intelligently summarizes long documents, highlighting key points
            so you can focus on what matters most.
          </p>
        </div>
        <img src="/summary.png" alt="Summarize" className="section-image" />
      </div>

      {/* Streamline Section (Text on left, Image on right) */}
      <div className="value-section streamline">
        <div className="text-content">
          <h3>Streamline</h3>
          <p>
            Aether transforms the form-filling process into a smooth, efficient
            experience. From auto-filling fields to jargon paraphrasing, it
            helps you finish tasks quickly and accurately, making your workflow
            more productive and less stressful.
          </p>
        </div>
        <img src="/streamline.png" alt="Streamline" className="section-image" />
      </div>
    </div>
  );
}

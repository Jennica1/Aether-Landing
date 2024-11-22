import "./cardInfo.css";

export default function CardInfo() {
  return (
    <>
      <div className="info-container">
        <div className="box" style={{ backgroundColor: "black" }}>
          <header>
            <p>Ease of Access:</p>
          </header>
          <p>Everything in one place.  Access everything you need all in one app. </p>
        </div>

        <div className="box" style={{ backgroundColor: "black" }}>
          <header>
            <p>Organization:</p>
          </header>
          <p>Everything in one place.  Access everything you need all in one app. </p>
        </div>

        <div className="box" style={{ backgroundColor: "black" }}>
          <header>
            <p>Autofill Feature:</p>
          </header>
          <p>With our AI auto filling feature, filling out forms have never been easier. </p>
        </div>

        <div className="box" style={{ backgroundColor: "black" }}>
          <header>
            <p>Simplifcation Made Simple:</p>
          </header>
          <p>Difficulty understanding is a thing of the past now that Aether is here to breakdown  document lingo in a easy-to-understand way. </p>
        </div>
      </div>
    </>
  );
}

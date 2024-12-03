import "./cardInfo.css";

export default function CardInfo() {
  return (
    <div className="image-container">
      <div className="image-box">
        <img src="accessibility.png" alt="Ease of Access" />
        <p className="caption">
          Ease of Access: Everything in one place. Access everything you need
          all in one app.
        </p>
      </div>

      <div className="image-box">
        <img src="checklist.png" alt="Organization" />
        <p className="caption">
          Organization: Everything in one place. Access everything you need all
          in one app.
        </p>
      </div>

      <div className="image-box">
        <img src="autofill.png" alt="Autofill Feature" />
        <p className="caption">
          Autofill Feature: With our AI auto-filling feature, filling out forms
          has never been easier.
        </p>
      </div>
    </div>
  );
}

import "./cardInfo.css";

export default function CardInfo() {
  return (
    <div className="image-container">
      <div className="image-box">
        <img src="image1.jpg" alt="Ease of Access" />
        <p className="caption">Ease of Access: Everything in one place. Access everything you need all in one app.</p>
      </div>

      <div className="image-box">
        <img src="image2.jpg" alt="Organization" />
        <p className="caption">Organization: Everything in one place. Access everything you need all in one app.</p>
      </div>

      <div className="image-box">
        <img src="image3.jpg" alt="Autofill Feature" />
        <p className="caption">Autofill Feature: With our AI auto-filling feature, filling out forms has never been easier.</p>
      </div>
    </div>
  );
}

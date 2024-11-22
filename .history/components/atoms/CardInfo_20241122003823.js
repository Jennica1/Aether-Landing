import "./cardInfo.css";

export default function CardInfo({title, content}) {
  return (
    <>
      <div className="box">
        <header>
          <p className="heading">{title}</p>
        </header>
        <p className="info-content">{content}</p>
      </div>
    </>
  );
}

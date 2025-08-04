import "../StylesPage/aboutMe.css";

function InformationCards({ label, data }) {
  return (
    <div>
      <span className="etiqueta">{label}:</span>{" "}
      <span className="contenido">{data.join(", ")}</span>
    </div>
  );
}

export default InformationCards;

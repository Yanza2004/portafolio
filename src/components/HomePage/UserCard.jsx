import { FaSquareGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../../StylesPage/userCard.css";

function UserCard() {
  return (
    <div id="card">
      <span id="profileImg">
        <img src="https://robohash.org/45.164.64.84.png" alt="img" />
      </span>
      <span>Vinicio Yanza</span>
      <span>Estudiante Ingeniería en Ciencias de la Computación</span>
      <div id="socialNetworks">
        <span>
          <FaSquareGithub
            onClick={() => {
              window.open("https://github.com/Yanza2004", "_blank");
            }}
          />
        </span>
        <span>
          <FaWhatsapp
            onClick={() => {
              window.open(
                "https://wa.me/593986430837?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte",
                "_blank"
              );
            }}
          />
        </span>
        <span>
          <FaLinkedin
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/bruno-vinicio-yanza-yanza-189801217/",
                "_blank"
              );
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default UserCard;

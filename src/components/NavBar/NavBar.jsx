import ElementNavBar from "./ElementNavBar";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import "../../StylesPage/navBar.css";

const home = {
  icon: FaHome,
  title: "Home",
  ref: "/",
};

const proyectos = {
  icon: FaScrewdriverWrench,
  title: "Proyectos",
  ref: "projects",
};

const informacion = {
  icon: FaUser,
  title: "Sobre mi",
  ref: "aboutMe",
};

const contactos = {
  icon: FaUserGroup,
  title: "Contacto",
  ref: "contacts",
};

function NavBar() {
  return (
    <div id="navBar">
      <ElementNavBar data={home} />
      <ElementNavBar data={proyectos} />
      <ElementNavBar data={informacion} />
      <ElementNavBar data={contactos} />
    </div>
  );
}

export default NavBar;

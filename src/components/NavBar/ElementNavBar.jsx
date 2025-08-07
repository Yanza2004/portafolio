import "../../StylesPage/navBar.css";
import { Link } from "react-router-dom";

function ElementNavBar({ data }) {
  return (
    <Link to={data.ref} id="elementNav">
      <data.icon />
      <span>{data.title}</span>
    </Link>
  );
}

export default ElementNavBar;

import "../../StylesPage/navBar.css";
import { useNavigate } from "react-router-dom";

function ElementNavBar({ data }) {
  const navigateTo = useNavigate();
  return (
    <div
      id="elementNav"
      onClick={() => {
        navigateTo(data.ref);
      }}
    >
      <data.icon />
      <span>{data.title}</span>
    </div>
  );
}

export default ElementNavBar;

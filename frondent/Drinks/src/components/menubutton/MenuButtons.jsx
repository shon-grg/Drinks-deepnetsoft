import { Link } from "react-scroll";
import "./MenuButtons.css";
function MenuButtons() {
  return (
    <div className="btn">
      <div className="btnRow">
        <Link to="menu1" spy={true} smooth={true} offset={50} duration={500}>
          <button className="menu">DRINKS</button>
        </Link>
        <Link to="menu2" spy={true} smooth={true} offset={50} duration={500}>
          <button className="menu">BRUNCH</button>
        </Link>
        <Link to="menu3" spy={true} smooth={true} offset={50} duration={500}>
          <button className="menu">Food</button>
        </Link>
      </div>
    </div>
  );
}

export default MenuButtons;

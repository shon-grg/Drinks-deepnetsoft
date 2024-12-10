import "./Logo.css";
import logo from "../../../public/Logo1.png";
import { Link } from "react-scroll";
function Logo() {
  return (
    <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
      <div className="Logo">
        <img src={logo} alt="" />
        <h2 className="logoHeader">
          <span>DEEP</span> NET <br /> SOFT
        </h2>
      </div>
    </Link>
  );
}

export default Logo;

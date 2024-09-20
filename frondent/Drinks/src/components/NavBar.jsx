import { useState } from "react";
import logo from "../../public/Logo1.png";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="NavBar">
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={menuOpen ? "open" : ""} style={{ cursor: "pointer" }}>
        <li className="home" onClick={closeMenu}>
          HOME
        </li>
        <li className="menu" onClick={closeMenu}>
          MENU
        </li>
        <li className="reservation" onClick={closeMenu}>
          MAKE A RESERVATION
        </li>
        <li className="contact" onClick={closeMenu}>
          CONTACT US
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

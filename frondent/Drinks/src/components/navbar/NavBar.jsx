import { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import Logo from "../logo/Logo";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navBar">
        <Logo />
        <div className="NavBar">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={menuOpen ? "open" : ""} style={{ cursor: "pointer" }}>
            <li className="home">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li className="menu">
              <Link
                to="mainMenu"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                MENU
              </Link>
            </li>
            <li className="reservation">
              <Link
                to="orderButton"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                MAKE A RESERVATION
              </Link>
            </li>
            <li className="Contact">
              <Link
                to="cont1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;

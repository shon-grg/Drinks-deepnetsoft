import "./Contact.css";
import Logo from "../../../public/Logo.png";

function Contact() {
  return (
    <>
      <div className="row">
        <div className="cont1">
          <h1>CONTACT WITH US</h1>
          <h2>+1 470-788-8255</h2>
          <h2>email@42barandgrill.com</h2>
        </div>
        <div className="cont2">
          <img src={Logo} alt="" />
          <h1>DEEP NET SOFT</h1>
          <h2 className="icon">Icons</h2>
        </div>
        <div className="cont3">
          <h1>FIND US</h1>
          <p>
            327 Memorial Dr SE, Atlanta,
            <br /> GA 30312, USA
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;

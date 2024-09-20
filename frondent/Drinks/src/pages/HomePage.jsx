import menu from "../../public/menu.png";
import "./HomePage.css";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className="mainHeader">
      <NavBar />
      <div className="HomePage">
        <div className="h1">
          <img src={menu} alt="" />
        </div>

        <p className="p">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you`d like to <br />
          place an order, use the <>&quot;Order Online&quot;</>
          button located below the menu.
        </p>
      </div>
    </div>
  );
}

export default HomePage;

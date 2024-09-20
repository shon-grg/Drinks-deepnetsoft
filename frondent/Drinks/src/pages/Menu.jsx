import "./Menu.css";
import MenuButtons from "../components/MenuButtons";
import DrinksMenu from "../components/DrinksMenu";
import CocktailMenu from "../components/CocktailMenu";
import HookaMenu from "../components/HookaMenu";
import OrderButton from "../components/OrderButton";
import Frame1 from "../../public/Frame.png";
import Frame2 from "../../public/Frame2.png";

function Menu() {
  return (
    <>
      <MenuButtons />
      <div className="mainMenu">
        <div style={{ position: "absolute" }}>
          <img src={Frame1} alt="" />
        </div>
        <DrinksMenu />
        <CocktailMenu />
        <HookaMenu />
        <OrderButton />
        <div className="frame2">
          <img src={Frame2} alt="" />
        </div>
      </div>
    </>
  );
}

export default Menu;

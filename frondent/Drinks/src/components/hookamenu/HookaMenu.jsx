import "./HookaMenu.css";
import img5 from "../../../public/image 40.png";
import Head3 from "../../../public/hookah flavors.png";
function HookaMenu() {
  return (
    <div className="menu3">
      <div className="img5">
        <img src={img5} alt="Hookah Flavors Image" />
      </div>
      <div className="head2">
        <img src={Head3} alt="Hookah Flavors Header" />
      </div>
      <div className="HookaItems">
        <ul>
          <li>ORANGE MINT</li>
          <li>BlUE MIST</li>
          <li>MIGHTY FREEZE</li>
          <li>LUV 66</li>
          <li>PEACH</li>
          <li>WATERMELON</li>
        </ul>
      </div>
    </div>
  );
}

export default HookaMenu;

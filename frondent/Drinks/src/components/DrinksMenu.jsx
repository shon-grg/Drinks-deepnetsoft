import "./DrinksMenu.css";
import axios from "axios";
import { useEffect, useState } from "react";
import img1 from "../../public/drink final 1.png";
import img2 from "../../public/cocktail 1.png";
import Head1 from "../../public/DRINKS.png";

function DrinksMenu() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/drinks")
      .then((response) => {
        setDrinks(response.data.data.drinks);
        console.log(response.data.data.drinks);
      })
      .catch((error) => {
        console.error("Error fetching drinks:", error);
      });
  }, []);
  return (
    <div className="menu1">
      <div className="img1">
        <img src={img1} alt="Drink Image 1" />
      </div>
      <div className="img2">
        <img src={img2} alt="Drink Image 2" />
      </div>

      <div className="head1">
        <img src={Head1} alt="Drinks Header" />
      </div>

      <div className="items">
        {drinks.length > 0 ? (
          drinks.map((drink, index) => (
            <div key={index}>
              <h1>
                {drink.name} ...........................................$
                {drink.price}
              </h1>
              <p>{drink.description}</p>
            </div>
          ))
        ) : (
          <p>Loading drinks...</p>
        )}
      </div>
    </div>
  );
}

export default DrinksMenu;

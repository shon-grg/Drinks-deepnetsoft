import "./DrinksMenu.css";
import axios from "axios";
import { useEffect, useState } from "react";
import img1 from "../../../public/drink final 1.png";
import img2 from "../../../public/cocktail 1.png";
import Head1 from "../../../public/DRINKS.png";

const data = [
  {
    name: "LYCHEETINI",
    description: "229 Vodka, vermouth, lychee juice, fresh lime juice",
    price: 14,
  },
  {
    name: "DRAGONFRUIT TINI",
    description:
      "Titos, dragon fruit liqueur, Cointreau, fresh lemon juice, simple",
    price: 14,
  },
  {
    name: "SMOKED PEACH OLD",
    description:
      "Angles Envy, creme de peach, bitters, cedarwood plank chard peaches, orange essence",
    price: 18,
  },
  {
    name: "HIBISCUS RITA",
    description:
      "Casamigos Blanco, orange liqueur, hibiscus liqueur, dried hibiscus, fresh lime juice",
    price: 16,
  },
];

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
        {drinks.length > 0
          ? drinks.map((drink, index) => (
              <div key={index}>
                <h1>
                  {drink.name} ...........................................$
                  {drink.price}
                </h1>
                <p>{drink.description}</p>
              </div>
            ))
          : data.map((data, index) => (
              <div key={index}>
                <h1>
                  {data.name} ...........................................$
                  {data.price}
                </h1>
                <p>{data.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default DrinksMenu;

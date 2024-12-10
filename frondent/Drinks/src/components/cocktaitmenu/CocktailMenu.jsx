import "./CocktailMenu.css";
import img3 from "../../../public/image 39.png";

import img4 from "../../../public/cocktail2.png";
import Head2 from "../../../public/BRUNCH COCKTAILS.png";
import { useEffect, useState } from "react";
import axios from "axios";

const data = [
  {
    name: "CINNAMON TOAST CRUNCH",
    description:
      "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon",
    price: 16,
  },
  {
    name: "BAR 42 MARY",
    description:
      "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
    price: 14,
  },
  {
    name: "BAR 42 MARY",
    description:
      "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
    price: 14,
  },
];

function CocktailMenu() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/cocktails")
      .then((response) => {
        setCocktails(response.data.data.cocktails);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching drinks:", error);
      });
  }, []);

  return (
    <div className="menu2">
      <div className="img3">
        <img src={img3} alt="Brunch Image" />
      </div>
      <div className="head2">
        <img src={Head2} alt="Brunch Cocktails Header" />
      </div>

      <div className="items">
        {cocktails?.length > 0
          ? cocktails.map((cocktail, index) => (
              <div key={index} className="cocktail-item">
                <h1>
                  {cocktail.name} .......................... ${cocktail.price}
                </h1>
                <p>{cocktail.description}</p>
              </div>
            ))
          : data.map((data, index) => (
              <div key={index} className="cocktail-item">
                <h1>
                  {data.name} .......................... ${data.price}
                </h1>
                <p>{data.description}</p>
              </div>
            ))}
      </div>

      <div className="img4">
        <img src={img4} alt="Cocktail Image" />
      </div>
    </div>
  );
}

export default CocktailMenu;

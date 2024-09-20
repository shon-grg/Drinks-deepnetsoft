import "./OrderButton.css";
function OrderButton() {
  return (
    <>
      <button className="order">ORDER ONLINE</button>
      <div className="container">
        <p>
          Food may not be refunded. If your food was made incorrectly we will
          remake it for you.
        </p>
        <br />
        <p>18% service charge will be added to all checks over $100.</p>
        <p>
          Consuming raw or undercooked meats, poultry, seafood, shellfish or
          eggs may increase your risk of food borne illness
        </p>
      </div>
    </>
  );
}

export default OrderButton;

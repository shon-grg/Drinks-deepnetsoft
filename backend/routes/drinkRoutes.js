const express = require("express");
const drinksController = require("../controller/drinksController");

const router = express.Router();

router
  .route("/")
  .get(drinksController.getAllDrinks)
  .post(drinksController.createDrink);

router
  .route("/:id")
  .get(drinksController.getDrink)
  .patch(drinksController.updateDrink)
  .delete(drinksController.deleteDrink);

module.exports = router;

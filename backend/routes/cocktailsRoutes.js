const express = require("express");
const cocktailsController = require("../controller/cocktailsController");

const router = express.Router();

router
  .route("/")
  .get(cocktailsController.getAllCocktails)
  .post(cocktailsController.createCocktails);

router
  .route("/:id")
  .get(cocktailsController.getCocktails)
  .patch(cocktailsController.updateCocktails)
  .delete(cocktailsController.deleteCocktails);

module.exports = router;

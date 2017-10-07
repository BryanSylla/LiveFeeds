const router = require("express").Router();
const ingredientsController = require("../../controllers/ingredientsController");
var request = require('request');

// Matches with "/api/ingredients/:username"
router
  .route("/:username")
  .get(ingredientsController.findShoppingList)
  .put(ingredientsController.update)
  .delete(ingredientsController.remove);

module.exports = router;

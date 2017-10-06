const router = require("express").Router();
const ingredientsController = require("../../controllers/ingredientsController");
var request = require('request');

// Matches with "/api/userinfo/:username"
router
  .route("/:username")
  .get(ingredientsController.findEmail)
  

module.exports = router;
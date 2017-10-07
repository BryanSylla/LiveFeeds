const router = require("express").Router();
const ingredientRoutes = require("./ingredients");
const userinfoRoutes = require("./grabuserinfo");

// Book routes
router.use("/ingredients", ingredientRoutes);
router.use("/userinfo", userinfoRoutes);

module.exports = router;

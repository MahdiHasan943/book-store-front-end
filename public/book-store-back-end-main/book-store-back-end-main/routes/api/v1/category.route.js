const express = require("express");
const router = express.Router();
const categoryC = require("../../../controller/categoryController");
router
  .route("/")
  .post(categoryC.createCategory)
  .get(categoryC.getcateGory);
// router.route("/:id").get(categoryC.getcateGory);

module.exports = router;

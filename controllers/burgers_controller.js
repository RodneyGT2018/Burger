const express = require("express");
const router = express.Router();

// Import burger.js to use its database functions.
const burger = require("../models/burger.js");

// Create all routes and set up logic for each.
router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.insertOne([
    "burger_name", "devoured"
  ], 
  [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");

  });
});

router.put("/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
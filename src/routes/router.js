// Externals
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

// Functions
const shop = require("./renders/shop");
const designs = require("./renders/designs");
const design = require("./renders/design");
const addItem = require("./renders/addItem");
const saveItem = require("./renders/saveItem");
const cart = require("./renders/cart");
const error = require("./renders/error");
const thanks = require("./renders/thanks");
const removeItem = require("./renders/removeItem");

// Routes
router
  .get("/", shop)
  .get("/designs", designs)
  .get("/designs/:id", design)
  .get("/cart", cart)
  .post("/cart", urlencodedParser, addItem)
  .post("/", urlencodedParser, removeItem)
  .post("/designs", urlencodedParser, saveItem)
  .get("/thanks", thanks)
  .get("/*", error);

module.exports = router;

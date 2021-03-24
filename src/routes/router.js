// Externals
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

// Functions
const home = require("./renders/home");
const design = require("./renders/design");
const error = require("./renders/error");

// Routes
router.get("/", home).get("/design/:id", design).get("/*", error);

module.exports = router;

// Externals
const express = require("express");
const router = express.Router();

// Functions
const home = require("./renders/home");
const design = require("./renders/design");
const error = require("./renders/error");

// Routes
router.get("/", home).get("/design", design).get("/*", error);

module.exports = router;

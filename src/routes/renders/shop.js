// Externals
let fs = require("fs");
const key = require("uniqid");

const shop = async (req, res, next) => {
  try {
    // Internals:
    const productWoman = key();
    const productMan = key();

    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Rendering the page:
    res.render("index.ejs", {
      pageTitle: "Shop",
      KEY_1: productMan + "m",
      KEY_2: productWoman + "w",
      KEY_3: productWoman + "u",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = shop;

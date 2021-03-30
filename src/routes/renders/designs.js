// Externals
let fs = require("fs");
const uniqid = require("uniqid");

const designs = async (req, res, next) => {
  try {
    // Create new ID if user want to create shirt:
    const orderNumber = uniqid();

    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Rendering the page:
    res.render("designs.ejs", {
      pageTitle: "Designs",
      shirts: users[0].shirts,
      orderNumber: orderNumber,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = designs;

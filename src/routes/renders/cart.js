// Externals
let fs = require("fs");

const cart = async (req, res, next) => {
  try {
    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Rendering the page:
    res.render("cart.ejs", {
      pageTitle: "Cart",
      shirts: users[0].cart,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = cart;

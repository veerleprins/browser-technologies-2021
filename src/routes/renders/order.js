// Externals
let fs = require("fs");

const order = async (req, res, next) => {
  try {
    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Rendering the page:
    res.render("order.ejs", {
      pageTitle: "order",
      shirts: users[0].orders,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = order;

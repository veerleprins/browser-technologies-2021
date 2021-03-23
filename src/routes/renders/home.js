// Externals
let fs = require("fs");

const home = async (req, res, next) => {
  try {
    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Rendering the page:
    res.render("index.ejs", {
      pageTitle: "Home",
      shirts: users[0].shirts,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = home;

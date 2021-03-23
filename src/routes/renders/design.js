// Externals
let fs = require("fs");

const design = async (req, res, next) => {
  try {
    // Internals:
    const ID = req.params.id;

    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));
    const newShirt = users[0].shirts.filter((shirt) => shirt.key === ID);

    // Rendering the page:
    res.render("design.ejs", {
      pageTitle: "Design",
      shirt: newShirt[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = design;

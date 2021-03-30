// Externals
let fs = require("fs");

const removeItem = async (req, res, next) => {
  try {
    // Get ID from form
    console.log("test");
    const ID = req.body.key;

    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Remove design
    users[0].cart.forEach((shirt, index) => {
      if (shirt.key === ID) {
        users[0].cart.splice(index, 1);
      }
    });
    // Convert data back to JSON and save to file:
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("./static/data/file.json", data, () => {
      console.log(`Removed shirt.`);
    });

    // Rendering the page:
    res.redirect("/");
  } catch (err) {
    next(err);
  }
};

module.exports = removeItem;

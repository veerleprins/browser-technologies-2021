// Externals
let fs = require("fs");

const saveItem = async (req, res, next) => {
  try {
    // Get ID from form
    const ID = req.body.key;
    console.log(req.body);

    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Update the design
    users[0].shirts.forEach((shirt) => {
      if (shirt.key === ID) {
        shirt.size = req.body.shirtSize;
        shirt.color = req.body.shirtColor;
        shirt.text = req.body.textValue;
        shirt.textColor = req.body.textColor;
      }
    });
    // Convert data back to JSON and save to file:
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("./static/data/file.json", data, () => {
      console.log(`New shirt added!`);
    });

    // Rendering the page:
    res.render("designs.ejs", {
      pageTitle: "Designs",
      shirts: users[0].shirts,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = saveItem;

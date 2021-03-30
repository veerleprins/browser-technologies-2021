// Externals
let fs = require("fs");

const addItem = async (req, res, next) => {
  try {
    // Get ID from form
    const ID = req.body.key;

    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Changing the new data from the input
    users[0].shirts.forEach((shirt) => {
      if (shirt.key === ID) {
        shirt.size = req.body.shirtSize;
        shirt.color = req.body.shirtColor;
        shirt.text = req.body.textValue;
        shirt.textColor = req.body.textColor;
      }
    });

    // Getting the shirt
    let shirt = users[0].shirts.filter((shirt) => shirt.key === ID);
    users[0].cart.push(shirt[0]);

    // Removing the shirt from saved shirts
    users[0].shirts.forEach((item, index) => {
      if (item.key === ID) {
        users[0].shirts.splice(index, 1);
      }
    });
    console.log(users);

    // Convert data back to JSON and save to file
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("./static/data/file.json", data, () => {
      console.log(`New shirt added to cart!`);
    });

    // Redirecting to the page:
    res.redirect("/cart");
  } catch (err) {
    next(err);
  }
};

module.exports = addItem;

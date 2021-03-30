// Externals
let fs = require("fs");

const design = async (req, res, next) => {
  try {
    // Internals:
    const ID = req.params.id;
    let newDesign = {
      key: ID,
      price: "",
      fitting: "man",
      size: "",
      color: "#FFFFFF",
      text: "",
    };

    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    // Check if ID exists:
    let shirt = users[0].shirts.filter((shirt) => shirt.key === ID);
    if (shirt.length > 0) {
      shirt = shirt;
    } else {
      // Create new Object
      if (ID.endsWith("m")) {
        newDesign.fitting = "man";
        newDesign.price = "21,95";
      } else if (ID.endsWith("w")) {
        newDesign.fitting = "woman";
        newDesign.price = "19,99";
      } else {
        newDesign.fitting = "unisex";
        newDesign.price = "24,95";
      }

      // Adding object to users array
      users.forEach((user) => {
        user.shirts.push(newDesign);
      });
      // Convert data back to JSON and save to file:
      const data = JSON.stringify(users, null, 2);
      fs.writeFile("./static/data/file.json", data, () => {
        console.log(`New shirt added!`);
      });
      shirt = users[0].shirts.filter((shirt) => shirt.key === ID);
    }

    // Rendering the page:
    res.render("design.ejs", {
      pageTitle: "Design",
      shirt: shirt[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = design;

// Externals
let fs = require("fs");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const create = async (req, res) => {
  try {
    // Reading the file
    const file = fs.readFileSync("./static/data/file.json");
    const users = await Array.from(JSON.parse(file));

    const newKey = getRandomInt(100);
    users[0].shirts.forEach((shirt) => {
      if (shirt.key.includes(newKey)) {
        newKey = getRandomInt(100);
      }
    });

    const newDesign = {
      key: newKey,
      name: "",
      fitting: "",
      size: "",
      color: "",
      text: "",
    };
    users.forEach((user) => {
      user.shirts.push(newDesign);
    });

    // Convert data back to JSON and save to file:
    const data = JSON.stringify(users, null, 2);
    fs.writeFile("./static/data/file.json", data, () => {
      console.log(data);
    });

    // Reading the file
    const read = fs.readFileSync("./static/data/file.json");
    const newUsers = await Array.from(JSON.parse(read));

    const newShirt = newUsers[0].shirts.filter((shirt) => shirt.key === newKey);

    res.redirect(`/design/${newKey}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = create;

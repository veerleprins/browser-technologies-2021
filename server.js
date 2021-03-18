// Externals
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

// Routes
const routes = require("./src/routes/router");

// Internals
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.static("static"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.set("layout", "./layouts/layout");

app.use(routes);

// Server PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

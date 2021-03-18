const error = async (req, res, next) => {
  try {
    // Rendering the page:
    res.render("error.ejs", {
      pageTitle: "Error",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = error;

const design = async (req, res, next) => {
  try {
    // Rendering the page:
    res.render("design.ejs", {
      pageTitle: "Design",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = design;

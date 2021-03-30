const thanks = async (req, res, next) => {
  try {
    // Rendering the page:
    res.render("thanks.ejs", {
      pageTitle: "Thanks",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = thanks;

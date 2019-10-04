const db = require("../data/db");
const Movie = require("../models/Movie");

class IndexController {
  static addMovie(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    db.addMovie(new Movie(title, description));
    res.redirect("/");
  }
  static getMovies(req, res) {
    res.render("index", { movies: db.getMovies() });
  }
}

module.exports = IndexController;

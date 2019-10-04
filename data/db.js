const movies = []

module.exports = {
    addMovie(movie) {
        movies.push(movie)
    },
    getMovies() {
        return movies
    }
}
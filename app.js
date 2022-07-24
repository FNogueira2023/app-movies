const movies = require('./movies');


let moviesDH = {
    listMovies: function (array) {
        return array.map(movie => movie);
    },    
    searchMovie: function (idOrTitle) {
        return movies.array.filter(movie => (movie.id == idOrTitle || movie.title == idOrTitle) ? movie : null);
    },
    searchMoviesByGenre: function (genres) {
        return movies.array.filter(movie => (movie.genre == genres) ? movie : null);
    },
    totalPrice: function () {
        return movies.array.reduce((sum, movie) => sum + movie.price, 0);
    },
    changeMovieGenre: function (id, newGender) {
       const movie = this.searchMovie(id);
       movie.genre = newGender;       
    }
};


// console.log(moviesDH.totalPrice());
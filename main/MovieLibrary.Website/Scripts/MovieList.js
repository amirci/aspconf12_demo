(function() {
  var MovieList,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MovieList = (function() {

    MovieList.name = 'MovieList';

    function MovieList() {
      this.deleteSelectedMovie = __bind(this.deleteSelectedMovie, this);

      this.bindDeleteMovies = __bind(this.bindDeleteMovies, this);
      this.repo = new window.MovieRepository();
      this.bindDeleteMovies();
    }

    MovieList.prototype.bindDeleteMovies = function() {
      return $('.movie a.btn').on('click', this.deleteSelectedMovie);
    };

    MovieList.prototype.deleteSelectedMovie = function(e) {
      var movieId;
      movieId = $(e.target).closest('.movie').attr('data-id');
      return this.repo["delete"](movieId);
    };

    return MovieList;

  })();

  $(function() {
    return new MovieList();
  });

}).call(this);

(function() {

  window.MovieRepository = (function() {

    MovieRepository.name = 'MovieRepository';

    function MovieRepository() {}

    MovieRepository.prototype.newMovie = function(fn) {
      return $.ajax({
        url: '/movies/new',
        success: fn
      });
    };

    return MovieRepository;

  })();

}).call(this);

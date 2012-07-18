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

    MovieRepository.prototype["delete"] = function(id) {
      return $.ajax({
        url: "/movies/" + id,
        type: 'DELETE',
        success: function() {
          return window.location = '/';
        },
        error: function() {
          return alert("I'm sorry something failed!");
        }
      });
    };

    return MovieRepository;

  })();

}).call(this);

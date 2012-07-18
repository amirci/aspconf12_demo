class window.MovieRepository

  newMovie: (fn) ->
    $.ajax
      url: '/movies/new'
      success: fn

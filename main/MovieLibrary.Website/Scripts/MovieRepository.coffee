class window.MovieRepository

  newMovie: (fn) ->
    $.ajax
      url: '/movies/new'
      success: fn

  delete: (id) ->
    $.ajax
      url: "/movies/#{id}" 
      type: 'DELETE'
      success: -> window.location = '/'
      error: -> alert("I'm sorry something failed!")

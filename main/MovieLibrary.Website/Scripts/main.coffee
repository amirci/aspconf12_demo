class MainMenu

  constructor: ->
    @repo = new window.MovieRepository()

    @.bindAddMovies()

  bindAddMovies: =>
    $('#add-movie').on('click', @.newMovieForm)

  newMovieForm: =>
    @repo.newMovie (markup) -> 
      $('#content').append markup

$ ->
  new MainMenu()
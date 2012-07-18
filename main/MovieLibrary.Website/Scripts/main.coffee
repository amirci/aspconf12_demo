class MainMenu

  constructor: ->
    @repo = new window.MovieRepository()
    @.bindConfirmation()
    @.bindAddMovies()

  bindAddMovies: =>
    $('#add-movie').on('click', @.newMovieForm)

  bindConfirmation: ->
    $('*[data-confirmprompt]').click (event) ->
      promptText = $(this).attr('data-confirmprompt')
      event.stopImmediatePropagation() unless confirm(promptText)

  newMovieForm: =>
    @repo.newMovie (markup) -> 
      $('#content').append markup

$ ->
  new MainMenu()
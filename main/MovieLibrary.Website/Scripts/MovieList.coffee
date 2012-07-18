class MovieList

	constructor: ->
		@repo = new window.MovieRepository()
		this.bindDeleteMovies()

	bindDeleteMovies: =>
		$('.movie a.btn').on 'click', @.deleteSelectedMovie

	deleteSelectedMovie: (e) =>
		movieId = $(e.target).closest('.movie').attr('data-id')
		@repo.delete(movieId)

$ ->
	new MovieList()
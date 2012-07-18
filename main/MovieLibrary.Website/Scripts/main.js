(function() {
  var MainMenu,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MainMenu = (function() {

    MainMenu.name = 'MainMenu';

    function MainMenu() {
      this.newMovieForm = __bind(this.newMovieForm, this);

      this.bindAddMovies = __bind(this.bindAddMovies, this);
      this.repo = new window.MovieRepository();
      this.bindConfirmation();
      this.bindAddMovies();
    }

    MainMenu.prototype.bindAddMovies = function() {
      return $('#add-movie').on('click', this.newMovieForm);
    };

    MainMenu.prototype.bindConfirmation = function() {
      return $('*[data-confirmprompt]').click(function(event) {
        var promptText;
        promptText = $(this).attr('data-confirmprompt');
        if (!confirm(promptText)) {
          return event.stopImmediatePropagation();
        }
      });
    };

    MainMenu.prototype.newMovieForm = function() {
      return this.repo.newMovie(function(markup) {
        return $('#content').append(markup);
      });
    };

    return MainMenu;

  })();

  $(function() {
    return new MainMenu();
  });

}).call(this);

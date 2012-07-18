using System.Web.Configuration;
using System.Web.Mvc;
using MovieLibrary.Core;
using MovieLibrary.Storage.NHibernate;

namespace MovieLibrary.Website.Controllers
{
    public class MoviesController : Controller
    {
        private readonly IMovieLibrary _library;

        public MoviesController()
        {
            var dbFile = WebConfigurationManager.AppSettings["MovieDatabaseFile"];

            this._library = new SimpleMovieLibrary(dbFile);
        }

        public MoviesController(IMovieLibrary library)
        {
            _library = library;
        }

        public ActionResult Index()
        {
            return View(this._library.Contents);
        }

    }
}

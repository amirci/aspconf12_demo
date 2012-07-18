using System.Web.Routing;
using RestfulRouting;
using MovieLibrary.Website.Controllers;

[assembly: WebActivator.PreApplicationStartMethod(typeof(MovieLibrary.Website.Routes), "Start")]

namespace MovieLibrary.Website
{
    public class Routes : RouteSet
    {
        public override void Map(IMapper map)
        {
            map.DebugRoute("routedebug");

            map.Root<MoviesController>(r => r.Index());

            map.Resources<MoviesController>(r => r.Except("Show", "Edit", "Update"));
        }

        public static void Start()
        {
            var routes = RouteTable.Routes;
            routes.MapRoutes<Routes>();
        }
    }
}
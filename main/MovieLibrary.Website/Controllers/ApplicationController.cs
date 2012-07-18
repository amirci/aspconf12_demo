using System;
using System.Web.Mvc;
using RestfulRouting.Format;

namespace MovieLibrary.Website.Controllers
{
    public abstract class ApplicationController : Controller
    {
        protected ActionResult RespondTo(Action<FormatCollection> format)
        {
            return new FormatResult(format);
        }
    }
}
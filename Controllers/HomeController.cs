using ChandlersFirstASPNETWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChandlersFirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Calculator")]
        public IActionResult Calculator ()
        {
            return View();
        }


        [HttpPost("Calculator")]
        public IActionResult Calculator (CalculatorModel model)
        {
            return View();
        }
    }
}

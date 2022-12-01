using Dapper;
using lanyuanApi.DbContext;
using Microsoft.AspNetCore.Mvc;
using System.Data.Odbc;

namespace lanyuanApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InformationController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<InformationController> _logger;

        public InformationController(ILogger<InformationController> logger)
        {
            _logger = logger;
        }

        public string Get()
        {
           var data =  new AccessContextcs().InformationData();

            return "";
        }
    }
}
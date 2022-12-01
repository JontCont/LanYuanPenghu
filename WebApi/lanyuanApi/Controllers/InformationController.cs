using Dapper;
using lanyuanApi.DbContext;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data.Odbc;

namespace lanyuanApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InformationController : ControllerBase
    {
        private readonly ILogger<InformationController> _logger;

        public InformationController(ILogger<InformationController> logger)
        {
            _logger = logger;
        }

        public string Get()
        {
            var data = new AccessContextcs().InformationData();
            return JsonConvert.SerializeObject(data);
        }
    }
}
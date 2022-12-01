using Dapper;
using lanyuanApi.DbContext;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data.Odbc;

namespace lanyuanApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BasicUserAccessController : ControllerBase
    {
        private readonly ILogger<BasicUserAccessController> _logger;

        public BasicUserAccessController(ILogger<BasicUserAccessController> logger)
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
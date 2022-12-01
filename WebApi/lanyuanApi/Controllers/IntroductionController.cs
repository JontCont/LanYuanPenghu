using Dapper;
using lanyuanApi.DbContext;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data.Odbc;

namespace lanyuanApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IntroductionController : ControllerBase
    {
        private readonly ILogger<IntroductionController> _logger;

        public IntroductionController(ILogger<IntroductionController> logger)
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
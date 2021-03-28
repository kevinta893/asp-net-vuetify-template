using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PokeyCount.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokeController : ControllerBase
    {
        private static int PokeCount = 0;

        // GET api/Poke
        [HttpGet]
        public ActionResult<int> Get()
        {
            return PokeCount;
        }

        // POST api/Poke
        [HttpPost]
        public void Post()
        {
            PokeCount++;
        }
    }
}

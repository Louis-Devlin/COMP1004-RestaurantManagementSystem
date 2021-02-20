using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using COMP1004SPA.Models;
using COMP1004SPA.Services;
using System;

namespace COMP1004SPA.Controllers{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("ReactPolicy")]
    public class DetailsController : ControllerBase{
       private readonly DetailsService detailsService;
       public DetailsController(DetailsService detailsService){
           this.detailsService = detailsService;
       }
        [HttpGet]
        public Details Get()
        {
            return DetailsService.GetDetails();
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Details details){
            DetailsService.update(details);
            return NoContent();
        }
    }
}
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
    public class BookingController : ControllerBase{
        private readonly BookingService bookingService;
        public BookingController(BookingService bookingService){
            this.bookingService = bookingService;
        }
        [HttpGet]
        public IEnumerable<Booking> Get()
        {
            return BookingService.GetAllBookings();
        }

        [HttpPost]
        public async Task<IActionResult> Post ([FromBody] Booking booking){
            Console.WriteLine("GOT INPUT");
            return CreatedAtAction("Get",new {id = booking.Id},bookingService.CreateBooking(booking));
        }

        [HttpGet("{date}")] 

        public IEnumerable<Booking> GetByDate(DateTime date){
            
            return BookingService.GetByDate(date);
        }
       
      
    
}
}
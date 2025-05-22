using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.BusinessLayer.Abstract;
using SignalR.DtoLayer.BookingDto;
using SignalR.EntityLayer.Entities;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _bookingService;
        public BookingController(IBookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpGet]
        public IActionResult GetAllBookings()
        {
            var bookings = _bookingService.TGetAll();
            return Ok(bookings);
        }

        [HttpPost]
        public IActionResult CreateBooking(CreateBookingDto createBookingDto)
        {
            Booking booking = new Booking()
            {
                Mail = createBookingDto.Mail,
                Name = createBookingDto.Name,
                Date = createBookingDto.Date,
                Phone = createBookingDto.Phone,
                PersonCount = createBookingDto.PersonCount
            };

            _bookingService.TInsert(booking);
            return Ok("Booking created successfully");

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBooking(int id)
        {
            var booking = _bookingService.TGetById(id);
            if (booking == null)
            {
                return NotFound("Booking not found");
            }
            _bookingService.TDelete(booking);
            return Ok("Booking deleted successfully");
        }

        [HttpPut]

        public IActionResult UpdateBooking(UpdateBookingDto updateBookingDto)
        {
            Booking booking = new Booking()
            {
                BookingID = updateBookingDto.BookingID,
                Mail = updateBookingDto.Mail,
                Name = updateBookingDto.Name,
                Date = updateBookingDto.Date,
                Phone = updateBookingDto.Phone,
                PersonCount = updateBookingDto.PersonCount
            };

            _bookingService.TUpdate(booking);
            return Ok("Booking updated successfully");
        }

        [HttpGet("{id}")]

        public IActionResult GetBooking(int id)
        {
            var booking = _bookingService.TGetById(id);
            if (booking == null)
            {
                return NotFound("Booking not found");
            }
            return Ok(booking);
        }

    }
}

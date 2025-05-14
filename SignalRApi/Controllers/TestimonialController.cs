using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalR.BusinessLayer.Abstract;
using SignalR.DtoLayer.TestimonialDto;
using SignalR.EntityLayer.Entities;

namespace SignalRApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestimonialController : ControllerBase
    {
        private readonly ITestimonialService _testimonialService;
        private readonly IMapper _mapper;

        public TestimonialController(ITestimonialService testimonialService, IMapper mapper)
        {
            _testimonialService = testimonialService;
            _mapper = mapper;
        }

        [HttpGet]

        public IActionResult TestimonialList()
        {
            var value = _mapper.Map<List<ResultTestimonialDto>>(_testimonialService.TGetAll());
            return Ok(value);
        }

        [HttpPost]

        public IActionResult CreateTestimonial(CreateTestimonialDto createTestimonialDto)
        {
            _testimonialService.TInsert(new Testimonial()
            {
                Title = createTestimonialDto.Title,
                ImageUrl = createTestimonialDto.ImageUrl,
                Comment = createTestimonialDto.Comment,
                Name = createTestimonialDto.Name,
                Status = createTestimonialDto.Status

            });
            return Ok("Testimonial Added");
        }

        [HttpDelete]

        public IActionResult DeleteTestimonial(int id)
        {
            var value = _testimonialService.TGetById(id);
            _testimonialService.TDelete(value);
            return Ok("Testimonial Deleted");
        }

        [HttpGet("GetTestimonial")]

        public IActionResult GetTestimonial(int id)
        {
            var value = _testimonialService.TGetById(id);
            return Ok(value);
        }

        [HttpPut]

        public IActionResult UpdateTestimonial(UpdateTestimonialDto updateTestimonialDto)
        {
            _testimonialService.TUpdate(new Testimonial()
            {
                Title = updateTestimonialDto.Title,
                ImageUrl = updateTestimonialDto.ImageUrl,
                Comment = updateTestimonialDto.Comment,
                Name = updateTestimonialDto.Name,
                Status = updateTestimonialDto.Status,
                TestimonialID = updateTestimonialDto.TestimonialID


            });
            return Ok("Testimonial Updated");
        }
    }
}

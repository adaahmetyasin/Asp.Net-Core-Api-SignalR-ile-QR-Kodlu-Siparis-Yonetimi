using AutoMapper;

namespace SignalRApi.Mapping
{
    public class TestimonialMapping :Profile
    {
        public TestimonialMapping()
        {
            CreateMap<SignalR.EntityLayer.Entities.Testimonial, SignalR.DtoLayer.TestimonialDto.ResultTestimonialDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Testimonial, SignalR.DtoLayer.TestimonialDto.CreateTestimonialDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Testimonial, SignalR.DtoLayer.TestimonialDto.UpdateTestimonialDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Testimonial, SignalR.DtoLayer.TestimonialDto.GetTestimonialDto>().ReverseMap();
        }
    }
}

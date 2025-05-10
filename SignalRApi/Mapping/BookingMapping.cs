using AutoMapper;

namespace SignalRApi.Mapping
{
    public class BookingMapping :Profile
    {
        public BookingMapping()
        {
            CreateMap<SignalR.EntityLayer.Entities.Booking, SignalR.DtoLayer.BookingDto.ResultBookingDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Booking, SignalR.DtoLayer.BookingDto.CreateBookingDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Booking, SignalR.DtoLayer.BookingDto.UpdateBookingDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Booking, SignalR.DtoLayer.BookingDto.GetBookingDto>().ReverseMap();
        }
    }
}

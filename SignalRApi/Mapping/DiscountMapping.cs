using AutoMapper;

namespace SignalRApi.Mapping
{
    public class DiscountMapping :Profile
    {
        public DiscountMapping()
        {
            CreateMap<SignalR.EntityLayer.Entities.Discount, SignalR.DtoLayer.DiscountDto.ResultDiscountDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Discount, SignalR.DtoLayer.DiscountDto.CreateDiscountDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Discount, SignalR.DtoLayer.DiscountDto.UpdateDiscountDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Discount, SignalR.DtoLayer.DiscountDto.GetDiscountDto>().ReverseMap();
        }
    }
}

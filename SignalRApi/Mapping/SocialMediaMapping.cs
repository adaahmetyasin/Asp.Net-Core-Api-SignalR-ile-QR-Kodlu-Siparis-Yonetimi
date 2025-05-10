using AutoMapper;

namespace SignalRApi.Mapping
{
    public class SocialMediaMapping : Profile
    {
        public SocialMediaMapping() 
        { 
            CreateMap<SignalR.EntityLayer.Entities.SocialMedia, SignalR.DtoLayer.SocialMediaDto.ResultSocialMediaDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.SocialMedia, SignalR.DtoLayer.SocialMediaDto.CreateSocialMediaDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.SocialMedia, SignalR.DtoLayer.SocialMediaDto.UpdateSocialMediaDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.SocialMedia, SignalR.DtoLayer.SocialMediaDto.GetSocialMediaDto>().ReverseMap();
        }
    }
}

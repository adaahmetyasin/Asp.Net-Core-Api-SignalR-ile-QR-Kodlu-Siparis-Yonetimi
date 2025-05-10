using AutoMapper;

namespace SignalRApi.Mapping
{
    public class FeatureMapping :Profile
    {
        public FeatureMapping()
        {
            CreateMap<SignalR.EntityLayer.Entities.Feature, SignalR.DtoLayer.FeatureDto.ResultFeatureDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Feature, SignalR.DtoLayer.FeatureDto.CreateFeatureDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Feature, SignalR.DtoLayer.FeatureDto.UpdateFeatureDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Feature, SignalR.DtoLayer.FeatureDto.GetFeatureDto>().ReverseMap();
        }
    }
}

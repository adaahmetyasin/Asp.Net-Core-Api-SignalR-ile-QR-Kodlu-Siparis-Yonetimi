using AutoMapper;

namespace SignalRApi.Mapping
{
    public class ProductMapping :Profile
    {
        public ProductMapping()
        {
            CreateMap<SignalR.EntityLayer.Entities.Product, SignalR.DtoLayer.ProductDto.ResultProductDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Product, SignalR.DtoLayer.ProductDto.CreateProductDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Product, SignalR.DtoLayer.ProductDto.UpdateProductDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Product, SignalR.DtoLayer.ProductDto.GetProductDto>().ReverseMap();
        }
    }
}

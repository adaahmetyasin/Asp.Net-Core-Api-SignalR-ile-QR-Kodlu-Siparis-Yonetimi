using AutoMapper;

namespace SignalRApi.Mapping
{
    public class ContactMapping : Profile
    {
        public ContactMapping()
        {
            CreateMap<SignalR.EntityLayer.Entities.Contact, SignalR.DtoLayer.ContactDto.ResultContactDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Contact, SignalR.DtoLayer.ContactDto.CreateContactDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Contact, SignalR.DtoLayer.ContactDto.UpdateContactDto>().ReverseMap();
            CreateMap<SignalR.EntityLayer.Entities.Contact, SignalR.DtoLayer.ContactDto.GetContactDto>().ReverseMap();
        }
    }
}

using AutoMapper;
using TouchMars.Api.Models;
using TouchMars.Domain.Models;
using TouchMars.Services.Interfaces;
namespace TouchMars.Api.Mappers
{
    public class EventDetailsProfile : Profile
    {
        private IGeoService _geoService;
        private IEventDetailsService _eventDetailsService;
        public EventDetailsProfile()
        {

        }
        public EventDetailsProfile(IGeoService geoService, IEventDetailsService eventDetailsService)
        {
            _geoService = geoService;
            _eventDetailsService = eventDetailsService;
            CreateMap<EventDetails, EventDetailsDto>()
            .ForMember(dest => dest.EventCoHost, o => o.Ignore())
            .ForMember(dest => dest.Associates, o => o.Ignore())
            .ForPath(dest => dest.EventMaster.EventStatus, o => o.MapFrom(src => src.EventStatus))
            .ForPath(dest => dest.EventMaster.EventTitle, o => o.MapFrom(src => src.EventTitle))
            .ForPath(dest => dest.EventMaster.Email, o => o.MapFrom(src => src.Email))
            .ForPath(dest => dest.EventMaster.CreatedDate, o => o.MapFrom(src => src.CreatedDate))
            .ForPath(dest => dest.EventMaster.Phone, o => o.MapFrom(src => src.Phone))
            //.ForPath(dest => dest.EventMaster.RequestedBy, o => o.MapFrom(src => _eventDetailsService.getRequestedbyId(src.RequestedBy).Result))
            //.ForPath(dest => dest.EventMaster.CountryID, o => o.MapFrom(src => _geoService.GetCountryId(src.CountryName)))
            //.ForPath(dest => dest.EventMaster.StateID, o => o.MapFrom(src => _geoService.GetCountryId(src.StateName)))
            //.ForPath(dest => dest.EventMaster.CityID, o => o.MapFrom(src => _geoService.GetCountryId(src.CityName)))
            ;

            CreateMap<EventDetailsDto, EventDetails>()
            .ForMember(dest => dest.EventCoHost, o => o.Ignore())
            .ForMember(dest => dest.Associates, o => o.Ignore())
            .ForPath(dest => dest.EventStatus, o => o.MapFrom(src => src.EventMaster.EventStatus))
            .ForPath(dest => dest.EventTitle, o => o.MapFrom(src => src.EventMaster.EventTitle))
            .ForPath(dest => dest.Email, o => o.MapFrom(src => src.EventMaster.Email))
            .ForPath(dest => dest.CreatedDate, o => o.MapFrom(src => src.EventMaster.CreatedDate))
            .ForPath(dest => dest.Phone, o => o.MapFrom(src => src.EventMaster.Phone))
            ;


        }
     
    }
}

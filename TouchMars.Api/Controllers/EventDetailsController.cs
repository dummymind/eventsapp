using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TouchMars.Domain;
using TouchMars.Api.Models;
using TouchMars.Domain.Models;
using TouchMars.Services.Interfaces;
using EnumExtensions = TouchMars.Domain.EnumExtensions;
using TouchMars.Services;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace TouchMars.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventDetailsController : ControllerBase
    {
        private IEventDetailsService _eventDetailsService;
        private IGeoService _geoService;
        private readonly IMapper _mapper;
        public EventDetailsController(IEventDetailsService eventDetailsService, IMapper mapper, IGeoService geoService)
        {
            _eventDetailsService = eventDetailsService;
            _mapper = mapper;
            _geoService = geoService;
        }



        // GET: api/<EventDetails>
        [HttpGet("{id}")]
        public EventDetails Get(int id)
        {
            var eventDetails = _eventDetailsService.GetEventDetails(id);
            return _mapper.Map<EventDetails>(eventDetails.Result);
        }

        // GET: api/<EventDetails>
        [HttpGet]
        public List<EventDetails> GetAll()
        {
            List<EventDetails> eventDetails = new List<EventDetails>();
            var eventList = _eventDetailsService.GetAllEventDetails();
            foreach (var eve in eventList.Result)
            {
                var res = _mapper.Map<EventDetails>(eve);
                //var eve = eventList.Result[0];
                var loc = _geoService.GetLocation(eve.EventMaster.CountryID, eve.EventMaster.StateID, eve.EventMaster.CityID ?? 0);
                res.CountryName = loc.Result.Item1;
                res.StateName = loc.Result.Item2;
                res.CityName = loc.Result.Item3;
                res.RequestedBy = _eventDetailsService.getRequestedBy(eve.EventMaster.RequestedBy).Result;
                eventDetails.Add(res);

            }


            return eventDetails;
        }

        // POST api/<EventDetails>
        [HttpPost]
        public long Post([FromBody] EventDetails eventDetails)
        {
            try
            {
                var eventInfo = _mapper.Map<EventDetailsDto>(eventDetails);
                eventInfo.EventCoHost = (long)_eventDetailsService.getRequestedbyId(eventDetails.EventCoHost).Result;
                eventInfo.EventMaster.RequestedBy = (long)_eventDetailsService.getRequestedbyId(eventDetails.RequestedBy).Result;
                eventInfo.EventMaster.CountryID = (short)_geoService.GetCountryId(eventDetails.CountryName);
                eventInfo.EventMaster.StateID = (short)_geoService.GetStateId(eventDetails.StateName);
                eventInfo.EventMaster.CityID = (int)_geoService.GetCityId(eventDetails.CityName);
                if (eventDetails.Associates != null)
                {
                    eventInfo.Associates = "";
                    foreach (var a in eventDetails.Associates)
                    {
                        string del = "";
                        if (!eventInfo.Associates.Equals(""))
                        {
                            del = " , ";
                        }
                        eventInfo.Associates = eventInfo.Associates + del + a;
                    }
                }
                eventInfo.MaxFamilyNum = true;
                eventInfo.SpecificFamilyMem = true;
                eventInfo.EventMaster.CreatedDate = DateTime.Now;
                eventInfo.OtherFormat = "";
                eventInfo.OtherSiteCode = "";
                eventInfo.Privacy = "";
                eventInfo.EventMaster.EventStatus = "Draft";
                string strJson = JsonSerializer.Serialize<EventDetailsDto>(eventInfo);
                if (eventDetails.Id == 0)
                {
                    var res = _eventDetailsService.SaveEventDetails(eventInfo);
                    return res.Result;
                }
                else
                {
                    var res = _eventDetailsService.EditEventDetails(eventInfo);
                    return res.Result;
                }
                

            }
            catch (Exception ex)
            {
                var e = ex;
                return 0;
            }
        }

        [HttpGet]
        [Route("EventType")]
        public List<String> getEventType()
        {
            return EnumExtensions.GetEventType();
        }

        [HttpGet]
        [Route("EventFormat")]
        public List<String> getEventFormat()
        {
            return EnumExtensions.GetEventFormat();
        }

        [HttpGet]
        [Route("IntervalBetweenLastVisit")]
        public List<string> getIntervalBetweenLastVisit()
        {
            return EnumExtensions.GetTimeIntervalDisplay();
        }

        [HttpGet]
        [Route("AssociateAtEvent")]
        public List<String> getAssociateAtEvent()
        {
            return EnumExtensions.GetAssociateAtEvent();
        }

        [HttpGet]
        [Route("EventStatus")]
        public List<string> getEventStatus()
        {
            List<string> eventStatus = _eventDetailsService.GetEventStatus();
            return eventStatus;
        }


    }
}

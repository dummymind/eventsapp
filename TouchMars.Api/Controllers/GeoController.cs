using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TouchMars.Domain.Models;
using TouchMars.Services.Interfaces;

namespace TouchMars.Api.Controllers
{
    public class GeoController : Controller
    {
        private IGeoService _geoService;
        private readonly IMapper _mapper;
        public GeoController(IGeoService geoService, IMapper mapper)
        {
            _geoService = geoService;
            _mapper = mapper;
        }
        // GET: GeoController/CountryCode/
        [HttpGet]
        [Route("CountryCode")]
        public List<string?> getCountryCode()
        {
            List<CountryDto> country = _geoService.GetCountries().Result;
            return country.Select(x => x.PhoneCode.ToString()).ToList();
        }
        [HttpGet]
        [Route("Country")]
        public List<string> getCountry()
        {
            List<CountryDto> country = _geoService.GetCountries().Result;
            return country.Select(x => x.CountryName).ToList();
        }

        [HttpGet("State/{countryName}")]
       // [Route("State/{name}")]
        public List<string> getState(string countryName)
        {
            List<StateDto> state = _geoService.GetStates(countryName).Result;
            return state.Select(x => x.StateName).ToList();
        }

        [HttpGet("City/{stateName}")]
       // [Route("City")]
        public List<string> getCity(string stateName)
        {
            List<CityDto> cities = _geoService.GetCities(stateName).Result;
            return cities.Select(x => x.CityName).ToList();


        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TouchMars.Domain.Models;
using TouchMars.Infrastructure;
using TouchMars.Services.Interfaces;

namespace TouchMars.Services
{
    
    public class GeoService : IGeoService
    {
        private readonly TouchMarsDbContext _touchMarsDbContext;
        public GeoService(TouchMarsDbContext touchMarsDbContext)
        {
            _touchMarsDbContext = touchMarsDbContext;

        }

        public async Task<(string,string,string)> GetLocation(short country, short state, int city)
        {
            var countryname = await _touchMarsDbContext.Country.Where(x => x.CountryID == country).Select(x => x).FirstOrDefaultAsync();
            var statename = await _touchMarsDbContext.State.Where(x => x.StateID == state).Select(x => x).FirstOrDefaultAsync();
            var cityname = await _touchMarsDbContext.City.Where(x => x.CityID == city).Select(x => x).FirstOrDefaultAsync();
            return (countryname.CountryName, statename.StateName, cityname.CityName);
        }
        public async Task<List<CountryDto>> GetCountries()
        {
            var countries = await _touchMarsDbContext.Country.Select(x=>x).ToListAsync();
            //.Include(x => x.StateIDs).ThenInclude(x => x.CityIDs)
            return countries;
        }
        public async Task<List<StateDto>> GetStates(string countryName)
        {
            var countries = _touchMarsDbContext.Country.Where(x => x.CountryName == countryName).Select(x => x).FirstOrDefault();
            var states = await _touchMarsDbContext.State.Where(x => x.CountryID == countries.CountryID).Select(x => x).ToListAsync();
            return states;
        }

        public async Task<List<CityDto>> GetCities(string stateName)
        {
            var state = _touchMarsDbContext.State.Where(x => x.StateName == stateName).Select(x => x).FirstOrDefault();
            var cities = await _touchMarsDbContext.City.Where(x => x.StateID == state.StateID).Select(x => x).ToListAsync();
            return cities;
        }

        public short GetCountryId(string name)
        {
            var countries =  _touchMarsDbContext.Country.Where(x => x.CountryName == name).Select(x=>x).FirstOrDefault();
            return countries.CountryID;
        }

        public short GetStateId(string name)
        {
            var state = _touchMarsDbContext.State.Where(x => x.StateName == name).Select(x => x).FirstOrDefault();
            return state.StateID;
        }

        public int GetCityId(string name)
        {
            var city = _touchMarsDbContext.City.Where(x => x.CityName == name).Select(x => x).FirstOrDefault();
            return city.CityID;
        }
    }
}

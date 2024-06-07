using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TouchMars.Domain.Models;

namespace TouchMars.Services.Interfaces
{
    public interface IGeoService
    {
        Task<List<CountryDto>> GetCountries();
        Task<List<StateDto>> GetStates(string countryName);
        Task<List<CityDto>> GetCities(string stateName);
        Int16 GetCountryId(string name);
        Int16 GetStateId(string name);
        int GetCityId(string name);
        Task<(string, string, string)> GetLocation(short country, short state, int city);
    }
}

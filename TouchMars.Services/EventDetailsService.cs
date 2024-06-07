using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
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
    public class EventDetailsService : IEventDetailsService
    {
        private readonly TouchMarsDbContext _touchMarsDbContext;
        public EventDetailsService(TouchMarsDbContext touchMarsDbContext)
        {
            _touchMarsDbContext = touchMarsDbContext;


        }
        public async Task<EventDetailsDto> GetEventDetails(int id)
        {
            var eventDetails = await _touchMarsDbContext.EventDetail.Include(x => x.EventMaster)
                .Where(x => x.EventID == id).FirstOrDefaultAsync();
            return eventDetails;
        }

        public async Task<List<EventDetailsDto>> GetAllEventDetails()
        {
            var eventDetails = await _touchMarsDbContext.EventDetail.Include(x => x.EventMaster).Select(y => y).ToListAsync();
            return eventDetails;
        }

        public async Task<long> SaveEventDetails(EventDetailsDto eventDetails)
        {
            //_touchMarsDbContext.EventMaster.Add(eventDetails.EventMaster);

            //var r = await _touchMarsDbContext.SaveChangesAsync();

            _touchMarsDbContext.EventDetail.Add(eventDetails);
            var res = await _touchMarsDbContext.SaveChangesAsync();
            //var log = _touchMarsDbContext.Database.CommitTransactionAsync();
            return eventDetails.ID;
        }


        public async Task<long> EditEventDetails(EventDetailsDto eventDetails)
        {
            _touchMarsDbContext.EventDetail.Update(eventDetails);
            var res = await _touchMarsDbContext.SaveChangesAsync();
            //var log = _touchMarsDbContext.Database.CommitTransactionAsync();
            return eventDetails.ID;
        }

        public async Task<long> getRequestedbyId(string? name)
        {
            if (name == null)
                return 0;
            var username = name.Split(' ');
            var user = await _touchMarsDbContext.Users.Where(x => x.FirstName == username[0] && x.LastName == username[1]).Select(x => x.ID).FirstOrDefaultAsync();
            return user;
        }
        public async Task<string> getRequestedBy(long id)
        {

            var user = await _touchMarsDbContext.Users.Where(x => x.ID == id).Select(x => x).FirstOrDefaultAsync();
            return user.FirstName + " " + user.LastName;
        }

        public List<string> GetEventStatus()
        {
            var eventStatus =  _touchMarsDbContext.EventStatus.Select(x => x.Status).ToList();
            return eventStatus;
        }
    }
}

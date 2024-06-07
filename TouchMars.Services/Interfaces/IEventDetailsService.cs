using TouchMars.Domain.Models;

namespace TouchMars.Services.Interfaces
{
    public interface IEventDetailsService
    {
        Task<EventDetailsDto> GetEventDetails(int id);
        Task<List<EventDetailsDto>> GetAllEventDetails();
        Task<long> SaveEventDetails(EventDetailsDto eventDetails);
        Task<long> EditEventDetails(EventDetailsDto eventDetails);
        Task<long> getRequestedbyId(string? name);
        Task<string> getRequestedBy(long id);
        List<string> GetEventStatus();
    }
}

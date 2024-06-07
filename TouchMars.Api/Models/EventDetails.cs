using System.ComponentModel.DataAnnotations;

namespace TouchMars.Api.Models
{
    public class EventDetails
    {
        public long Id { get; set; }
        public long EventId { get; set; }
        [Required]
        public string EventTitle { get; set; }

        public string AssociateSegment {  get; set; }

        public string CountryName { get; set; }
        public string CityName { get; set; }

        public string StateName { get; set; }

        public string EventStatus { get; set; }

        public string RequestedBy { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }

        public DateTime CreatedDate { get; set; }

        [Required]
        public string? SiteCode { get; set; }
        public string? OtherSiteCode { get; set; }

        [Required]
        public string? LastVisit { get; set; }

        [Required]
        public DateTime EventDate { get; set; }

        [Required]
        public bool IsDateFlexible { get; set; }

        [Required]
        public string EventVenueName { get; set; }

        [Required]
        public string EventAddress { get; set; }

        public Int16 EventDuration { get; set; }

        [Required]
        public string EventType { get; set; }

        [Required]
        public string EventFormat { get; set; }

        public string? OtherFormat { get; set; }
        public string? EventCoHost { get; set; }
        public string? CoHostEmail { get; set; }

        [Required]
        public bool MaxFamilyNum { get; set; }
        public Int16 FamilyNum { get; set; }

       
        public bool SpecificFamilyMem { get; set; }
        public string NameOfMem { get; set; }

        [Required]
        public Int16 TotalAttendees { get; set; }
        public List<string>? Associates { get; set; }
        public string? Privacy { get; set; }
    }
}

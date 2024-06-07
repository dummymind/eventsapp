using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace TouchMars.Domain.Models
{
    public class EventDetailsDto
    {
        [Key]
       
        public long ID { get; set; }

        [ForeignKey("EventMaster")]
        public long EventID { get; set; }

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
        public long? EventCoHost { get; set; }
        public string? CoHostEmail { get; set; }

        [Required]
        public bool MaxFamilyNum { get; set; }
        public Int16 FamilyNum { get; set; }

        [Required]
        public bool SpecificFamilyMem { get; set; }
        public string NameOfMem { get; set; }

        [Required]
        public Int16 TotalAttendees { get; set; }
        public string? Associates { get; set; }
        public string? Privacy { get; set; }

        [IgnoreDataMember]
        public virtual EventMasterDto EventMaster { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;

namespace TouchMars.Domain.Models
{
    public class EventStatusDto
    {
        [Key]
        public Int16 ID { get; set; }

        [Required]
        public string Status { get; set; }        
    }
}

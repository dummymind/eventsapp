using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchMars.Domain.Models
{
    public class EventMasterDto
    {
        [Key]
        
        public long ID { get; set; }

        [Required]
        public string EventTitle { get; set; }
        [Required]
        public Int16 CountryID { get; set; }
        [Required]
        public Int16 StateID { get; set; }
        public int? CityID { get; set; }
        
        public string EventStatus { get; set; }
        [Required]
        public long RequestedBy { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
    }
}

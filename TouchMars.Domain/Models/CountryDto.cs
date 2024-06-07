using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace TouchMars.Domain.Models
{
    public class CountryDto
    {
        [Key]
        public Int16 CountryID { get; set; }

        [Required]
        public string CountryName { get; set; }
        [Required]
        public string CountryCode { get; set; }
       
        public int? PhoneCode { get; set; }

        [IgnoreDataMember]
        public List<StateDto> StateIDs { get; set; }
    }
}

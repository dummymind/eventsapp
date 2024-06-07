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
    public class StateDto
    {
        [Key]
        public Int16 StateID { get; set; }

        [Required]
        public string StateName { get; set; }
        [Required]
        [ForeignKey("CountryMap")]
        public Int16 CountryID { get; set; }

        [IgnoreDataMember]
        public CountryDto CountryMap { get; set; }

        [IgnoreDataMember]
        public List<CityDto> CityIDs { get; set; }
    }
}

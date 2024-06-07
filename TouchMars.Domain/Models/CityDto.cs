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
    public class CityDto
    {
        [Key]
        public int CityID { get; set; }

        [Required]
        public string CityName { get; set; }
        [Required]
        [ForeignKey("StateMap")]
        public Int16 StateID { get; set; }

        [IgnoreDataMember]
        public StateDto StateMap { get; set; }
    }
}

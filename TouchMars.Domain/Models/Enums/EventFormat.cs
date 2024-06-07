using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchMars.Domain.Models.Enums
{
    public enum EventFormat
    {
        [Display(Name = "In-person only")]
        InPerson,
        [Display(Name = "Virtual participation (live)")]
        VirtualLive,
        [Display(Name = "Virtual (pre-recorded message)")]
        VirtualRecorded,
        [Display(Name = "Other")]
        Other

    }
}

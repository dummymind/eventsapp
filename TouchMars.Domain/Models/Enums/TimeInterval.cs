using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchMars.Domain.Models.Enums
{
    public enum TimeInterval
    {
        
        [Display(Name = "Within 0 - 5 years")]
        ZeroToFiveYears,
        [Display(Name = "Within 6 - 10 years")]
        SixToTenYears,
        [Display(Name = "More than 10 years")]
        MoreThanTenYears,
        [Display(Name = "This site has not hosted a Mars Family member")]
        NotHosted,
        [Display(Name = "I’m not sure")]
        NotSure
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchMars.Domain.Models.Enums
{
    public enum AssociateAtEvent
    {

        [Display(Name = "Mars Corporate")]
        Corporate,
        [Display(Name = "Mars Food & Nutrition")]
        FoodAndNutrition,
        [Display(Name = "Mars Global Services")]
        GlobalServices,
        [Display(Name = "Mars Multisales")]
        Multisales,
        [Display(Name = "Mars Snacking")]
        Snacking,
        [Display(Name = "Mars Petcare")]
        Petcare,
        [Display(Name = "Mars Veterinary Health")]
        VeterinaryHealth
    }
}

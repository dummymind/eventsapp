using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchMars.Domain.Models.Enums
{
    public enum EventType
    {
        [Display(Name = "Site anniversary")]
        SiteAnniversary,
        [Display(Name = "Leadership/Summit meeting")]
        LeadershipOrSummit,
        [Display(Name = "Segment/Division meeting")]
        SegmentOrDivision,
        [Display(Name = "Site opening")]
        SiteOpening,
        [Display(Name = "Site visit")]
        SiteVisit,
        [Display(Name = "Tie & Scarf")]
        TieAndScarf,
        [Display(Name = "Brand event")]
        BrandEvent,
        [Display(Name = "Factory review")]
        FactoryReview,
        [Display(Name = "Board visit")]
        BoardVisit,
        [Display(Name = "Market review")]
        MarketReview,
        [Display(Name = "Other")]
        Other

    }
}

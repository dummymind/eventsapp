using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using TouchMars.Domain.Models.Enums;

namespace TouchMars.Domain
{
    public static class EnumExtensions
    {
        private static TAttribute? GetAttribute<TAttribute>(this Enum enumValue)
           where TAttribute : Attribute
        {
            return enumValue.GetType()
                            .GetMember(enumValue.ToString())
                            .First()
                            .GetCustomAttribute<TAttribute>();
        }

        public static List<string> GetTimeIntervalDisplay()
        {
            List<string> result = new List<string>();
            var intervals = Enum.GetValues(typeof(TimeInterval))
                            .Cast<Enum>().ToList();
            foreach (var interval in intervals)
            {
                var attribute = EnumExtensions.GetAttribute<DisplayAttribute>(interval);
                var data = attribute != null ? attribute.Name : interval.ToString();
                result.Add(data);
            }
            return result;
        }
        public static List<string> GetAssociateAtEvent()
        {
            List<string> result = new List<string>();
            var associates = Enum.GetValues(typeof(AssociateAtEvent))
                            .Cast<Enum>().ToList();
            foreach (var associate in associates)
            {
                var attribute = EnumExtensions.GetAttribute<DisplayAttribute>(associate);
                var data = attribute != null ? attribute.Name : associate.ToString();
                result.Add(data);
            }
            return result;
        }
        public static List<string> GetEventType()
        {
            List<string> result = new List<string>();
            var events = Enum.GetValues(typeof(EventType))
                            .Cast<Enum>().ToList();
            foreach (var evnt in events)
            {
                var attribute = EnumExtensions.GetAttribute<DisplayAttribute>(evnt);
                var data = attribute != null ? attribute.Name : evnt.ToString();
                result.Add(data);
            }
            return result;
        }

        public static List<string> GetEventFormat()
        {
            List<string> result = new List<string>();
            var formats = Enum.GetValues(typeof(EventFormat))
                            .Cast<Enum>().ToList();
            foreach (var format in formats)
            {
                var attribute = EnumExtensions.GetAttribute<DisplayAttribute>(format);
                var data = attribute != null ? attribute.Name : format.ToString();
                result.Add(data);
            }
            return result;
        }
    }
}

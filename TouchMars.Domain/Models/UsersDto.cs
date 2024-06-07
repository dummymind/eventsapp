using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TouchMars.Domain.Models
{
    public class UsersDto
    {
        public long ID { get; set; }

     
        public Int16? UserType { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string? UserName { get; set; }

        public string? Email { get; set; }
        
        public string? Phone { get; set; }
       
        public string? Location { get; set; }
       
        public string? Address { get; set; }
    }
}

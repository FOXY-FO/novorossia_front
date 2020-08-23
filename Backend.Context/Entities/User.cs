using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Backend.Context.Types;

namespace Backend.Context.Entities
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Nickname { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string Phone { get; set; }

        public byte[] Large { get; set; }

        public byte[] Small { get; set; }

        [Required]
        public RoleType Role { get; set; } = RoleType.RegularUser;

        public DateTime RegistrationDate { get; set; } = DateTime.Now;
    }
}
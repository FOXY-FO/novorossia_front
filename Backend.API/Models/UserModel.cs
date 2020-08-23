using AutoMapper;
using Backend.Context.Entities;

namespace Backend.API.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string Nickname { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Role { get; set; }

        public string RegistrationDate { get; set; }

    }
}
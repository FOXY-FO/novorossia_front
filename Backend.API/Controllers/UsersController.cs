using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Backend.API.Models;
using Backend.Context.Entities;
using Backend.Data.Repos;
using Microsoft.AspNetCore.Mvc;
//using Backend.API.Models;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepo usersRepo;
        private readonly Mapper mapper;

        public UsersController(IUsersRepo usersRepo)
        {
            this.usersRepo = usersRepo;
            var conf = new MapperConfiguration(x =>
            {
                x.CreateMap<UserModel, UserModel>();
            });

            mapper = new Mapper(conf);
        }

        // GET api/users
        [HttpGet("")]
        public ActionResult<IEnumerable<string>> Getstrings()
        {
            return new List<string> { };
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public ActionResult<UserModel> GetstringById(int id)
        {
            var userRaw = usersRepo.GetUser(id);
            return Ok(mapper.Map<UserModel>(userRaw));
        }

        // POST api/users
        [HttpPost("")]
        public void Poststring(string value)
        {
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public void Putstring(int id, string value)
        {
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public void DeletestringById(int id)
        {
        }
    }
}
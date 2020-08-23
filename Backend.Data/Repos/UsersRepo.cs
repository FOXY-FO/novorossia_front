using System;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Context.Entities;

namespace Backend.Data.Repos
{
    public interface IUsersRepo : IDisposable
    {
        Task<User[]> GetUsers(int pageSize, int pageNumber);

        void CreateUser(User user);

        void DeleteUser(int id);

        void ChangeUser(int id, User user);

        Task<User> GetUser(int id);
    }
    public class UsersRepo : IUsersRepo
    {
        private readonly DataContext context;
        public UsersRepo(DataContext context)
        {
            this.context = context;
        }
        public void ChangeUser(int id, User user)
        {
            throw new System.NotImplementedException();
        }

        public void CreateUser(User user)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteUser(int id)
        {
            throw new System.NotImplementedException();
        }

        public void Dispose()
        {
            context.SaveChangesAsync();
        }

        public async Task<User> GetUser(int id)
        {
            var user = await context.Users.FindAsync(id);
            return user;
        }

        public Task<User[]> GetUsers(int pageSize, int pageNumber)
        {
            throw new System.NotImplementedException();
        }
    }
}
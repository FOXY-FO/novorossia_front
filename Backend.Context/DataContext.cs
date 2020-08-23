using Backend.Context.Entities;
using Backend.Context.Types;
using Microsoft.EntityFrameworkCore;

namespace Backend.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasData(new User
                {
                    Id = 1,
                    Nickname = "TheVenYear",
                    FirstName = "Ivan",
                    Email = "TheVenYear@gmail.com",
                    Password = "23012301",
                    Salt = "salt",
                    Phone = "89117962310",
                    Role = RoleType.Admin,
                });
            builder.Entity<User>()
                .HasIndex(x => new { x.Email, x.Nickname, x.Phone })
                .IsUnique();
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Message> Messages { get; set; }
    }
}
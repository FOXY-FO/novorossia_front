using Backend.Context.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<Message> Messages { get; set; }
    }
}
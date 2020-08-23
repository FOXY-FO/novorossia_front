namespace Backend.Context.Entities
{
    public class Appeal
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int MyProperty { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }

    }
}
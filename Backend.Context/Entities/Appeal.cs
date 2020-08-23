using Backend.Context.Types;

namespace Backend.Context.Entities
{
    public class Appeal
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }

        public AppealCategory Category { get; set; }

        public int CategoryId { get; set; }

        public string Content { get; set; }

        public string Phone { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public string Housing { get; set; }

        public string ApartmentNumber { get; set; }

        public string AtachmentFile { get; set; }

        public StatusType Status { get; set; }

        public string District { get; set; }


    }
}